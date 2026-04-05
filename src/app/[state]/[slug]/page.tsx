/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import locations from '@/data/locations.json';

export const revalidate = 86400;

export async function generateStaticParams() {
  return locations.map((l) => ({ state: l.stateSlug, slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.name} — Skating Rink in ${loc.state}`,
    description: `${loc.description.slice(0, 155)}`,
    alternates: { canonical: `https://allskatingrinks.com/${loc.stateSlug}/${loc.slug}` },
  };
}

const AMENITY_ICONS: Record<string, string> = {
  'Skate rental': '⛸️', 'Roller skating': '🛼', 'Ice skating': '🧊',
  'Lessons available': '🎓', 'Birthday parties': '🎂', 'Snack bar': '🍕',
  'Arcade': '🎮', 'Locker rooms': '🔒', 'Parking': '🅿️',
  'Wheelchair accessible': '♿', 'Pro shop': '🛍️', 'Hockey': '🏒',
  'Figure skating': '⭐', 'Laser skating': '🔦', 'Family friendly': '👨‍👩‍👧',
};

const HERO_KEYWORDS = ['roller+skating','ice+skating+rink','roller+rink','skating+rink','disco+skating','figure+skating','roller+derby','inline+skating'];

export default async function RinkPage({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state, slug } = await params;
  const loc = locations.find((l) => l.slug === slug && l.stateSlug === state);
  if (!loc) notFound();

  const related = locations.filter((l) => l.stateSlug === state && l.slug !== slug).slice(0, 3);
  const heroKw = HERO_KEYWORDS[Math.abs(slug.charCodeAt(0) - 97) % HERO_KEYWORDS.length];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'SportsActivityLocation',
        name: loc.name,
        description: loc.description,
        address: { '@type':'PostalAddress', addressLocality: loc.city || '', addressRegion: loc.state, addressCountry:'US' },
        ...(loc.lat && loc.lng ? { geo: { '@type':'GeoCoordinates', latitude: loc.lat, longitude: loc.lng } } : {}),
        url: `https://allskatingrinks.com/${loc.stateSlug}/${loc.slug}`,
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', height: '440px', overflow: 'hidden' }}>
        <img src={`https://picsum.photos/seed/${slug}/1400/600`} alt={loc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} width={1400} height={600} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,26,0.92) 0%, rgba(13,13,26,0.55) 50%, rgba(13,13,26,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle 300px at 80% 30%, rgba(255,31,142,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
          <Link href={`/${state}`} style={{ color: 'var(--pink-lt)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', fontWeight: 700, fontFamily: 'var(--font-body)', textDecoration: 'none' }}>← {loc.state}</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,3rem)', color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.1 }}>{loc.name}</h1>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="chip chip-white">📍 {loc.city ? `${loc.city}, ` : ''}{loc.state}</span>
            {loc.amenities.slice(0,2).map((a) => <span key={a} className="chip chip-white">{a}</span>)}
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--dark)', marginBottom: '1rem' }}>About This Rink</h2>
              <p style={{ lineHeight: 1.85, marginBottom: '1.5rem', color: '#445' }}>{loc.description}</p>

              {loc.amenities.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--dark)', marginBottom: '0.9rem' }}>Features & Amenities</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.6rem' }}>
                    {loc.amenities.map((a) => (
                      <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 1rem', background: 'var(--white)', borderRadius: 'var(--radius-sm)', border: '2px solid rgba(255,31,142,0.1)', borderLeft: '3px solid var(--pink)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', color: 'var(--dark)', fontWeight: 700 }}>
                        <span>{AMENITY_ICONS[a] ?? '⛸️'}</span><span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Map */}
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '2px solid rgba(255,31,142,0.12)', marginBottom: '1.5rem' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--dark) 0%, #1a0030 100%)', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🗺️</span>
                  <p style={{ color: 'var(--pink-lt)', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>Location</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>{loc.city ? `${loc.city}, ` : ''}{loc.state}</p>
                </div>
                {loc.lat && loc.lng && (
                  <a href={`https://www.google.com/maps?q=${loc.lat},${loc.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem', background: 'var(--pink)', color: 'var(--white)', fontWeight: 700, fontSize: '0.875rem', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>
                    Get Directions →
                  </a>
                )}
              </div>

              {/* Tips */}
              <div style={{ background: 'var(--blue-pale)', border: '2px solid rgba(31,110,255,0.15)', borderRadius: 'var(--radius)', padding: '1.25rem 1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', color: 'var(--blue)', fontSize: '1rem', marginBottom: '0.5rem' }}>⛸️ Skater Tips</p>
                <p style={{ fontSize: '0.875rem', color: '#445', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>Arrive early to get rental skates fitted. Wear comfortable, flexible clothing and bring socks. Beginners should stay near the wall until you find your balance. Most rinks offer wrist guards and knee pads — use them!</p>
              </div>
            </div>

            {/* Right — sticky panel */}
            <aside style={{ position: 'sticky', top: '5.5rem' }}>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', border: '2px solid rgba(255,31,142,0.12)' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--dark), #1a0030)', padding: '1.25rem 1.5rem', borderBottom: '3px solid var(--pink)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--pink-lt)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Rink Info</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>{loc.name}</p>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  {[
                    { label: 'Location', value: `${loc.city ? `${loc.city}, ` : ''}${loc.state}` },
                    { label: 'Type', value: loc.amenities.find((a) => a.toLowerCase().includes('roller') || a.toLowerCase().includes('ice')) ?? 'Skating Rink' },
                    { label: 'Parties', value: loc.amenities.find((a) => a.toLowerCase().includes('birthday') || a.toLowerCase().includes('party')) ?? 'Check website' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,31,142,0.07)' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--mid)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-body)', fontWeight: 800, flexShrink: 0 }}>{label}</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--dark)', fontFamily: 'var(--font-body)', textAlign: 'right' }}>{value}</span>
                    </div>
                  ))}
                  <Link href={`/${state}`} className="btn btn-pink" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem', fontSize: '0.875rem', padding: '0.75rem 1.5rem' }}>More Rinks in {loc.state}</Link>
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', background: 'var(--cream)', borderRadius: 'var(--radius-sm)', border: '2px solid rgba(255,31,142,0.08)' }}>
                <p style={{ fontSize: '0.775rem', color: 'var(--mid)', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>Hours, pricing, and availability change seasonally. Always verify with the rink directly before visiting.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: 'var(--cream)', borderTop: '2px solid rgba(255,31,142,0.08)', padding: '4rem 1.5rem' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--dark)', marginBottom: '2rem' }}>More Rinks in {loc.state}</h2>
            <div className="grid-3">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/${r.stateSlug}/${r.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="card">
                    <img src={`https://picsum.photos/seed/${r.slug}/800/500`} alt={r.name} className="card-img" loading="lazy" width={800} height={500} />
                    <div className="card-body">
                      <div className="card-meta"><span>📍</span><span>{r.city ? `${r.city}, ` : ''}{r.state}</span></div>
                      <h3 className="card-title">{r.name}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '0.75rem' }}>{r.description.slice(0,90)}…</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
