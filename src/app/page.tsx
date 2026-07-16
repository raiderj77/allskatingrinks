/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/${lng},${lat},16,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'All Skating Rinks - Legacy Rink Directory Rebuild',
  description: 'Browse legacy skating-rink location records and learn what to verify with a venue before visiting.',
};

const REGIONS = [
  ['Alabama','alabama'],['Alaska','alaska'],['Arizona','arizona'],['Arkansas','arkansas'],
  ['California','california'],['Colorado','colorado'],['Connecticut','connecticut'],['Delaware','delaware'],
  ['District of Columbia','district-of-columbia'],['Florida','florida'],['Georgia','georgia'],['Hawaii','hawaii'],
  ['Idaho','idaho'],['Illinois','illinois'],['Indiana','indiana'],['Iowa','iowa'],['Kansas','kansas'],
  ['Kentucky','kentucky'],['Louisiana','louisiana'],['Maine','maine'],['Maryland','maryland'],
  ['Massachusetts','massachusetts'],['Michigan','michigan'],['Minnesota','minnesota'],['Mississippi','mississippi'],
  ['Missouri','missouri'],['Montana','montana'],['Nebraska','nebraska'],['Nevada','nevada'],
  ['New Hampshire','new-hampshire'],['New Jersey','new-jersey'],['New Mexico','new-mexico'],['New York','new-york'],
  ['North Carolina','north-carolina'],['North Dakota','north-dakota'],['Ohio','ohio'],['Oklahoma','oklahoma'],
  ['Oregon','oregon'],['Pennsylvania','pennsylvania'],['Puerto Rico','pr'],['Rhode Island','rhode-island'],
  ['South Carolina','south-carolina'],['South Dakota','south-dakota'],['Tennessee','tennessee'],['Texas','texas'],
  ['Utah','utah'],['Vermont','vermont'],['Virginia','virginia'],['Washington','washington'],
  ['West Virginia','west-virginia'],['Wisconsin','wisconsin'],['Wyoming','wyoming'],
] as const;

export default function Home() {
  const featured = locations.filter((location) => location.city).slice(0, 6);
  const recordsWithCity = locations.filter((location) => location.city).length;

  return (
    <>
      <div className="notice-bar">
        <strong>Editorial rebuild:</strong> these are legacy map records, not live-verified venue profiles.
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'WebSite', url:'https://allskatingrinks.com', name:'All Skating Rinks',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org', '@type':'Organization', name:'All Skating Rinks', url:'https://allskatingrinks.com',
        description:'A skating-rink directory undergoing source and editorial review',
      }) }} />

      <section className="home-hero">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: 'var(--pink-lt)' }}>Skating rink directory</p>
          <h1 className="hero-title"><span>FIND A RINK RECORD.</span><br />VERIFY THE VISIT.</h1>
          <p className="hero-copy">
            Browse {locations.length.toLocaleString()} legacy rink-name and map-coordinate records. Confirm the venue, public-session schedule, admission, rentals, accessibility, and operating status with the venue before you go.
          </p>
          <a href="#browse-regions" className="btn btn-pink">Browse by region</a>
        </div>
      </section>

      <section aria-label="Directory inventory" style={{ background: 'var(--white)', borderBottom: '1px solid rgba(255,31,142,0.08)' }}>
        <div className="container stats-grid">
          <div className="stat-item"><div className="stat-number">{locations.length.toLocaleString()}</div><div className="stat-label">Legacy records</div></div>
          <div className="stat-item"><div className="stat-number">{recordsWithCity.toLocaleString()}</div><div className="stat-label">With a city field</div></div>
          <div className="stat-item"><div className="stat-number">{locations.length - recordsWithCity}</div><div className="stat-label">Missing a city field</div></div>
          <div className="stat-item"><div className="stat-number">0</div><div className="stat-label">Live-verified profiles</div></div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">Sample records</p>
          <h2 className="section-title">What the legacy directory contains</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>These examples have a name, city, state, and map coordinates. The dataset does not establish current hours, prices, programs, or public access.</p>
          <div className="grid-3">
            {featured.map((loc) => (
              <Link key={`${loc.stateSlug}-${loc.slug}`} href={`/${loc.stateSlug}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={getMapboxImage(loc.lat, loc.lng)} alt={`Map imagery near the recorded coordinates for ${loc.name}`} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span aria-hidden>Map</span><span>{loc.city}, {loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65 }}>Legacy location record. Verify the venue and all visit details directly.</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ color: 'var(--pink-lt)' }}>Before visiting</p>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>CHECK THE CURRENT VENUE DETAILS</h2>
          </div>
          <div className="grid-3">
            {[
              ['Confirm the venue', 'Use the recorded name and coordinates as a starting point. Confirm that the business or facility still exists at that location.'],
              ['Check the session', 'Ask the venue which sessions are open to the public and whether reservations, waivers, or specific equipment are required.'],
              ['Confirm practical details', 'Check current admission, rental availability, age rules, accessibility, parking, and cancellation or seasonal-closure information.'],
            ].map(([title, description]) => (
              <article key={title} className="check-card"><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="browse-regions" style={{ padding: '5rem 1.5rem', scrollMarginTop: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">Legacy directory</p>
            <h2 className="section-title">Browse by state or territory</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>State and record pages remain out of search indexing while the directory is rebuilt with traceable sources and current venue facts.</p>
          </div>
          <div className="grid-states">
            {REGIONS.map(([name, slug]) => <Link key={slug} href={`/${slug}`} className="state-link">{name}</Link>)}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem', background: 'var(--cream)', borderTop: '1px solid rgba(255,31,142,0.08)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 className="section-title">How this directory will become publishable</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>The current repository does not record the origin or collection date of its legacy location dataset. That means a record cannot be presented as a verified venue profile.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>A future indexable profile must cite a current primary source, identify what was checked and when, and separate venue-published facts from editorial guidance. Hours, pricing, rentals, programs, accessibility, and operating status will stay absent unless a source supports them.</p>
          <p style={{ lineHeight: 1.85 }}>Corrections can be sent through the <Link href="/contact">contact page</Link>. A correction is reviewed before it changes a profile.</p>
        </div>
      </section>
    </>
  );
}
