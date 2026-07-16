import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the homepage and trust pages may be indexed', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /robots:\s*{[\s\S]*?index:\s*true,[\s\S]*?googleBot:\s*{\s*index:\s*true/);
});

test('thin state and listing routes remain noindex,follow', () => {
  for (const path of ['src/app/[state]/page.tsx', 'src/app/[state]/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    assert.match(source, /googleBot:\s*{\s*index:\s*false,\s*follow:\s*true/);
  }
});

test('directory-only browse hubs remain noindex when present', () => {
  for (const path of ['src/app/browse/page.tsx', 'src/app/browse-states/page.tsx']) {
    const url = new URL(`../${path}`, import.meta.url);
    if (existsSync(url)) {
      assert.match(read(path), /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    }
  }
});

test('the sitemap contains only an explicit allowlist', () => {
  const sitemap = read('src/app/sitemap.ts');
  assert.match(sitemap, /INDEXABLE_PATHS/);
  assert.doesNotMatch(sitemap, /data\/locations|locations\.map|statePages|locationPages|parkPages/);
  assert.match(sitemap, /'\/about'/);
  assert.match(sitemap, /'\/contact'/);
});

test('Googlebot can crawl pages to observe route-level noindex rules', () => {
  const robots = read('public/robots.txt');
  assert.match(robots, /User-agent:\s*Googlebot[\s\S]*?Allow:\s*\//i);
});

test('legacy records are not presented as verified venue profiles', () => {
  const home = read('src/app/page.tsx');
  const state = read('src/app/[state]/page.tsx');
  const detail = read('src/app/[state]/[slug]/page.tsx');
  const llms = read('public/llms.txt');

  assert.match(home, /legacy map records, not live-verified venue profiles/i);
  assert.match(home, /0[\s\S]*Live-verified profiles/);
  assert.match(state, /original source or collection date/i);
  assert.match(detail, /does not record the original source or collection date/i);
  assert.doesNotMatch(detail, /SportsActivityLocation/);
  assert.match(llms, /Bulk legacy pages are not monetization-ready/);
});

test('unsupported price, program, and availability claims stay retired', () => {
  const home = read('src/app/page.tsx');
  const about = read('src/app/about/page.tsx');
  const contact = read('src/app/contact/page.tsx');

  for (const source of [home, about]) {
    assert.doesNotMatch(source, /\$8 to \$15|\$150 to \$400|10 million|26 million|1,800 indoor ice rinks/i);
    assert.doesNotMatch(source, /Most (?:public )?(?:skating )?rinks (?:offer|rent|welcome)/i);
  }
  assert.doesNotMatch(contact, /respond.+1-2 business days/i);
});

test('navigation points to a real browse target and supports keyboard users', () => {
  const layout = read('src/app/layout.tsx');
  const home = read('src/app/page.tsx');
  const css = read('src/app/globals.css');

  assert.match(layout, /href="\/#browse-regions"/);
  assert.match(home, /id="browse-regions"/);
  assert.match(layout, /Skip to main content/);
  assert.match(css, /:focus-visible/);
  assert.doesNotMatch(layout, /href="\/browse-states"/);
});
