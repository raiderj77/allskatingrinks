import type { Metadata } from 'next';
import Script from 'next/script';
import { Righteous, Nunito } from 'next/font/google';
import './globals.css';

const righteous = Righteous({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: '400' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400','600','700','800'] });

export const metadata: Metadata = {
  title: { template: '%s | All Skating Rinks', default: 'All Skating Rinks — Find Roller & Ice Skating Rinks Across America' },
  description: 'Discover roller skating and ice skating rinks near you. Family fun, lessons, birthday parties, and open skate sessions across all 50 states.',
  keywords: 'skating rinks, roller skating, ice skating, family activities, kids skating, skating lessons, birthday parties',
  metadataBase: new URL('https://allskatingrinks.com'),
  alternates: { canonical: 'https://allskatingrinks.com' },
  robots: 'index, follow, max-snippet:-1',
  verification: { google: '_93cBsMuBuh6NqZcFEj8v1kA6VhbwZXwqruIcDqebPs' },
};

const toolSites = [
  { name: 'Fiber Tools', href: 'https://fibertools.app' }, { name: 'Mind Check Tools', href: 'https://mindchecktools.com' },
  { name: 'Flip My Case', href: 'https://flipmycase.com' }, { name: 'Creator Revenue Calculator', href: 'https://creatorrevenuecalculator.com' },
  { name: 'Contract Extract', href: 'https://contractextract.com' }, { name: 'Medical Bill Reader', href: 'https://medicalbillreader.com' },
  { name: 'Tax Break Tools', href: 'https://taxbreaktools.com' }, { name: '524 Tracker', href: 'https://524tracker.com' },
];
const directorySites = [
  { name: 'Public Boat Ramps', href: 'https://publicboatramps.com' }, { name: 'Find Swim Spots', href: 'https://findswimspots.com' },
  { name: 'Craft Distillery Finder', href: 'https://craftdistilleryfinder.com' }, { name: 'Drive-In Tonight', href: 'https://driveintonight.com' },
  { name: 'All Skate Parks', href: 'https://allskateparks.com' }, { name: 'Nearby Escape Rooms', href: 'https://nearbyescaperooms.com' },
  { name: 'Rockhounding Finder', href: 'https://rockhoundingfinder.com' }, { name: 'Soak USA', href: 'https://soakusa.net' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${righteous.variable} ${nunito.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',wait_for_update:500});` }} />
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932" strategy="afterInteractive" />
        <Script id="clarity-script" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vsqobt7va0");`}</Script>
      </head>
      <body>
        <header style={{ background: 'linear-gradient(90deg, var(--dark) 0%, var(--mid-dark) 100%)', borderBottom: '3px solid var(--pink)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 20px rgba(255,31,142,0.3)' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>⛸️</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.3rem', background: 'linear-gradient(90deg, var(--pink), var(--blue-lt))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>All Skating Rinks</span>
            </a>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Home</a>
              <a href="/browse-states" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Browse</a>
              <a href="/about" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>About</a>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: 'calc(100vh - 340px)' }}>{children}</main>

        <footer style={{ background: 'var(--dark)', borderTop: '3px solid var(--pink)', marginTop: '5rem', padding: '3rem 0 2rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(90deg, var(--pink), var(--blue-lt))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '1.1rem', marginBottom: '0.75rem' }}>⛸️ All Skating Rinks</p>
                <p style={{ color: 'var(--mid)', fontSize: '0.875rem', lineHeight: 1.7 }}>Free directory of roller skating and ice skating rinks across the United States.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--pink)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 800 }}>Directory Sites</h4>
                <ul style={{ listStyle: 'none' }}>
                  {directorySites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mid)', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--pink)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 800 }}>Tools</h4>
                <ul style={{ listStyle: 'none' }}>
                  {toolSites.map((s) => <li key={s.href} style={{ marginBottom: '0.4rem' }}><a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mid)', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</a></li>)}
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: 'var(--charcoal)', fontSize: '0.85rem' }}>© 2026 All Skating Rinks. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Contact', '/contact'], ['About', '/about']].map(([l, h]) => (
                  <a key={h} href={h} style={{ color: 'var(--charcoal)', fontSize: '0.85rem', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
