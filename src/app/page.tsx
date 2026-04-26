/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

function getMapboxImage(lat: number, lng: number, width = 800, height = 500): string {
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/${lng},${lat},16,0/${width}x${height}?access_token=${MAPBOX_TOKEN}`;
}

function getSkatingRinkPreview(d: { name: string; state: string; city: string; amenities: string[]; description: string }): string {
  const amenityCount = d.amenities.length;
  const location = d.city ? `${d.city}, ${d.state}` : d.state;
  if (amenityCount >= 2) {
    return `Skating rink in ${location} with ${d.amenities.slice(0, 2).join(' and ').toLowerCase()}.`;
  }
  return `Skating rink in ${location}. Open for public skating sessions.`;
}

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'All Skating Rinks — Find Roller & Ice Skating Rinks Across America',
  description: 'Find roller skating and ice skating rinks near you. Family fun, lessons, birthday parties, and open skate across all 50 states.',
};

const ALL_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

export default function Home() {
  const featured = locations.slice(0, 6);
  const statesWithData = Array.from(new Set(locations.map((l) => l.state))).length;

  return (
    <>
      <div style={{ background: '#1e1b4b', borderBottom: '3px solid #f59e0b', padding: '0.875rem 1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
        <strong style={{ color: '#f59e0b' }}>This directory is paused for editorial enrichment.</strong>{' '}
        Visit our active sites:{' '}
        <a href="https://soakusa.net" style={{ color: '#93c5fd', textDecoration: 'underline' }}>soakusa.net</a>
        {' | '}
        <a href="https://publicboatramps.com" style={{ color: '#93c5fd', textDecoration: 'underline' }}>publicboatramps.com</a>
        {' | '}
        <a href="https://fibertools.app" style={{ color: '#93c5fd', textDecoration: 'underline' }}>fibertools.app</a>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebSite',url:'https://allskatingrinks.com',
        name:'All Skating Rinks',
        dateModified:new Date().toISOString().substring(0,10),
        potentialAction:{'@type':'SearchAction',target:{'@type':'EntryPoint',urlTemplate:'https://allskatingrinks.com/search?q={search_term_string}'},'query-input':'required name=search_term_string'},
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Organization',
        name:'All Skating Rinks',
        url:'https://allskatingrinks.com',
        description:'Directory of ice skating and roller skating rinks across the United States',
        dateModified:new Date().toISOString().substring(0,10),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'LocalBusiness',
        name:'All Skating Rinks Directory',
        url:'https://allskatingrinks.com',
        description:'Find ice rinks and roller skating rinks near you across the United States',
        areaServed:'United States',
        dateModified:new Date().toISOString().substring(0,10),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          { '@type':'Question', name:'How do I find a skating rink near me?', acceptedAnswer:{ '@type':'Answer', text:'Use the All Skating Rinks directory to search by city or state. Each listing specifies whether the rink is an ice skating or roller skating facility, includes hours of operation, admission prices, skate rental availability, and special session types like public skating, hockey, and figure skating.' } },
          { '@type':'Question', name:'How much does it cost to go ice skating?', acceptedAnswer:{ '@type':'Answer', text:'Public ice skating sessions typically cost $8 to $15 per person for admission, plus $4 to $8 for skate rentals if needed. Prices vary by venue and session type — holiday and weekend sessions often cost more. Check individual listings for current pricing.' } },
          { '@type':'Question', name:'Do skating rinks rent skates?', acceptedAnswer:{ '@type':'Answer', text:'Most public skating rinks offer skate rentals for both ice and roller skating. Rental skates are typically available in all sizes including children\'s sizes. Bringing your own skates can save $4 to $8 per visit and ensures a better fit for regular skaters.' } },
          { '@type':'Question', name:'What should beginners know before visiting a skating rink?', acceptedAnswer:{ '@type':'Answer', text:'Beginners should dress in layers, wear gloves to protect hands during falls, and start near the wall or barrier for support. Most rinks offer beginner lessons separately from public skating sessions. Arrive during less busy weekday sessions for more space to practice.' } },
          { '@type':'Question', name:'Are skating rinks open year-round?', acceptedAnswer:{ '@type':'Answer', text:'Indoor ice rinks and roller skating rinks are typically open year-round, though session hours vary by season. Outdoor ice rinks are seasonal — most open in November or December and close in February or March depending on climate. Check individual listings for current seasonal hours.' } },
        ],
      }) }} />

      {/* Hero */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, var(--dark) 0%, #1a0030 40%, #001a3a 100%)', overflow: 'hidden', padding: '7rem 1.5rem 8rem' }}>
        {/* Disco light orbs */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle 300px at 15% 40%, rgba(255,31,142,0.12) 0%, transparent 70%), radial-gradient(circle 250px at 85% 60%, rgba(31,110,255,0.12) 0%, transparent 70%), radial-gradient(circle 200px at 50% 20%, rgba(123,31,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Rink floor lines */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 48px, rgba(255,255,255,0.02) 48px, rgba(255,255,255,0.02) 50px)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="anim-fade-up" style={{ display: 'inline-block', background: 'linear-gradient(90deg, rgba(255,31,142,0.15), rgba(31,110,255,0.15))', color: 'var(--pink-lt)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '1.25rem', fontFamily: 'var(--font-body)', padding: '0.4rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(255,31,142,0.3)' }}>
            ⛸️ Skating Rink Directory
          </p>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,6vw,4.5rem)', fontWeight: 400, marginBottom: '0.25rem', lineHeight: 1.0 }}>
            <span style={{ color: 'var(--pink)', textShadow: '0 0 40px rgba(255,31,142,0.5)' }}>SKATE</span>
            <span style={{ color: 'var(--white)' }}> EVERY</span>
          </h1>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,6vw,4.5rem)', fontWeight: 400, marginBottom: '1.25rem', lineHeight: 1.0 }}>
            <span style={{ color: 'var(--blue-lt)', textShadow: '0 0 40px rgba(31,110,255,0.5)' }}>WEEKEND</span>
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.75rem', maxWidth: '480px', margin: '0 auto 2.75rem', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
            Roller &amp; ice skating rinks — {locations.length}+ venues with open skate, lessons &amp; birthday parties.
          </p>
          <div className="anim-fade-up anim-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="/illinois" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', background: 'var(--pink)', color: 'white', textDecoration: 'none', transition: 'background 0.2s' }}>Find Skating Rinks →</a>
            <a href="/california" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', background: 'transparent', color: 'white', border: '2px solid rgba(255,31,142,0.4)', textDecoration: 'none', transition: 'background 0.2s' }}>Browse by State</a>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill="var(--ivory)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid rgba(255,31,142,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { n:`${locations.length}+`, l:'Skating Rinks' },
            { n:`${statesWithData}`, l:'States Covered' },
            { n:'Roller', l:'& Ice Skating' },
            { n:'Fun', l:'For All Ages' },
          ].map(({n,l}) => (
            <div key={l} className="stat-item">
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '5rem 1.5rem 4rem' }}>
        <div className="container">
          <p className="section-label">⛸️ Top Rinks</p>
          <h2 className="section-title">Featured Skating Rinks</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>Popular roller and ice skating destinations for families, date nights, and parties.</p>
          <div className="grid-3">
            {featured.map((loc, i) => (
              <Link key={loc.slug} href={`/${loc.stateSlug}/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <img src={getMapboxImage(loc.lat ?? 0, loc.lng ?? 0)} alt={loc.name} className="card-img" loading="lazy" width={800} height={500} />
                  <div className="card-body">
                    <div className="card-meta"><span>📍</span><span>{loc.city ? `${loc.city}, ` : ''}{loc.state}</span></div>
                    <h3 className="card-title">{loc.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{getSkatingRinkPreview(loc)}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {loc.amenities.slice(0,3).map((a) => <span key={a} className="chip">{a}</span>)}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'linear-gradient(135deg, var(--dark) 0%, #1a0030 100%)', padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--pink-lt)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--white)' }}>LACE UP & ROLL OUT</h2>
          </div>
          <div className="grid-3">
            {[
              { icon:'🗺️', title:'Find Your Rink', desc:'Browse by state to see every skating rink nearby — roller, ice, indoor, outdoor — with hours and amenities.' },
              { icon:'⛸️', title:'Check The Details', desc:'Review open skate times, lesson schedules, birthday party packages, and admission prices.' },
              { icon:'🕺', title:'Hit The Floor', desc:"Lace up your skates and glide. Whether it's your first time or you're a seasoned skater, the rink is calling." },
            ].map(({icon,title,desc}) => (
              <div key={title} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius)', border: '2px solid rgba(255,31,142,0.15)' }}>
                <div className="step-icon">{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--pink-lt)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--dark)', marginBottom: '1.25rem' }}>THE JOY OF SKATING</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Skating rinks have been a cornerstone of American family fun for decades. From the disco-era roller rinks of the 1970s and '80s to modern facilities with laser lights, arcade rooms, and snack bars, the skating rink experience has evolved while keeping its timeless appeal.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '1.25rem' }}>Roller skating provides a full-body workout that's easy on the joints, while ice skating is a gateway to sports like hockey and figure skating. Both disciplines develop balance, coordination, and core strength — all while being genuinely fun for participants of any age.</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--dark)', marginTop: '2rem', marginBottom: '0.75rem' }}>TIPS FOR FIRST-TIMERS</h3>
          <p style={{ lineHeight: 1.85 }}>Arrive early to get skates fitted properly — ill-fitting skates are the leading cause of ankle soreness. Stay near the wall at first and focus on gliding rather than stepping. Most rinks have instructors available for on-the-spot tips. Falling is part of learning; knee pads and wrist guards make it much less intimidating.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid rgba(255,31,142,0.08)', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          {[
            { q:'What\'s the difference between roller skating and inline skating?', a:'Traditional roller skates (quads) have four wheels in a 2×2 arrangement and are generally more stable, making them better for beginners and dancing/rhythm skating. Inline skates (rollerblades) have wheels in a single line and are better for speed and outdoor skating. Most rinks rent quad skates.' },
            { q:'Do I need to bring my own skates?', a:'Most rinks rent skates at the door, so you don\'t need to bring your own. Rental skates are sanitized between uses. If you plan to skate regularly, investing in your own skates will provide a better fit and more support.' },
            { q:'What should I wear to a skating rink?', a:'Comfortable, flexible clothing you can move in freely. Long pants are recommended to protect your knees if you fall. Avoid sandals or open-toed shoes. Socks are required to wear rental skates, so always bring a pair.' },
            { q:'Are skating rinks suitable for young children?', a:'Most rinks welcome children of all ages. Many have "tot" skates with a frame that helps young children balance. Check if the rink has family skate sessions, which are typically less crowded and slower-paced.' },
            { q:'Can I host a birthday party at a skating rink?', a:'Yes — birthday parties are one of the most popular offerings at skating rinks. Most venues have dedicated party packages that include rink time, a party room, food, and invitations. Book well in advance for weekend dates.' },
          ].map(({q,a}) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Browse States */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label">All 50 States</p>
            <h2 className="section-title">Browse Rinks by State</h2>
          </div>
          <div className="grid-states">
            {ALL_STATES.map((s) => (
              <Link key={s} href={`/${s.toLowerCase().replace(/\s+/g,'-')}`} className="state-link">{s}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Content */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--cream)', borderTop: '1px solid rgba(255,31,142,0.08)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--dark)', marginBottom: '0.75rem' }}>How to find the right skating rink for your visit</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.85rem' }}>Search by city and filter by rink type — ice or roller. Check session schedules to find public skating times that match your availability, and verify skate rental availability if you do not own your own skates.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.85rem' }}>Matching the right session type to your visit makes a big difference. Public skating is the go-to for casual outings, while learn-to-skate programs are structured specifically for newcomers building fundamental skills. Hockey practice ice and figure skating sessions are separate session types with sport-specific rules, equipment requirements, and pricing.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '3rem' }}>There are approximately 1,800 indoor ice rinks and over 1,500 roller skating rinks operating across the United States, spread across every region and climate — so finding a nearby option is rarely difficult regardless of where you live.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--dark)', marginBottom: '0.75rem' }}>What is the difference between public skating and other rink sessions?</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.85rem' }}>Public skating sessions are open to all skill levels and focus on recreational skating. Hockey sessions, figure skating practice ice, and learn-to-skate lessons are separate session types with different rules and admission structures.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.85rem' }}>Rinks manage different user groups by scheduling dedicated sessions throughout the day. Public sessions typically have slower speed rules and are family-oriented, while hockey and figure skating times require appropriate equipment and may restrict general access to keep the surface clear for sport-specific use.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '3rem' }}>Public sessions can fill quickly on weekend afternoons and during school holidays. Weekday morning and early afternoon sessions are generally quieter and better suited to beginners who want more space and a less crowded environment for learning. Ice skating is one of the most popular winter recreational activities in the U.S., with over 10 million Americans skating annually according to the Ice Skating Institute.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--dark)', marginBottom: '0.75rem' }}>What should I wear to a skating rink?</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.85rem' }}>For ice skating, wear warm layers, gloves, and thick socks. For roller skating, comfortable athletic clothing works well. Avoid loose clothing that could catch on skates, and always wear socks — bare feet are not permitted in rental skates.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.85rem' }}>Safety gear is strongly recommended for children and beginners at both ice and roller rinks. Helmets protect against head injuries during falls, and wrist guards significantly reduce the risk of wrist fractures, which are among the most common skating injuries for new skaters. Many rinks sell or rent basic protective gear at the facility.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '3rem' }}>Long pants provide an additional layer of protection for the knees and shins during falls. Avoid jeans if possible — they restrict movement and take longer to dry. Athletic pants or leggings give you the flexibility needed to skate comfortably and safely.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--dark)', marginBottom: '0.75rem' }}>Are skating rinks good for birthday parties and group events?</h2>
          <p style={{ fontWeight: 700, lineHeight: 1.75, marginBottom: '0.85rem' }}>Yes — most skating rinks offer private party packages including reserved seating, skate rentals, and food service. Birthday party packages typically range from $150 to $400 for groups of 10 to 20.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '0.85rem' }}>Group events at skating rinks work well for corporate outings, school field trips, and team celebrations in addition to birthday parties. Many rinks can accommodate larger groups with reserved rink time or private session rentals, which allow exclusive access to the skating surface for a set window.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2rem' }}>Booking well in advance is essential for weekend party rooms, particularly from October through March when demand is highest. The roller skating industry serves over 26 million participants annually in the United States, according to the Roller Skating Association International, making popular rinks especially busy during peak seasons.</p>

          <p style={{ fontSize: '0.875rem', color: '#667', lineHeight: 1.75 }}>
            <strong>Further reading:</strong>{' '}
            <a href="https://www.skateisi.org" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pink)' }}>Ice Skating Institute</a>
            {' · '}
            <a href="https://www.rollerskating.com" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pink)' }}>Roller Skating Association International</a>
            {' · '}
            <a href="https://www.usfigureskating.org/skate/learn-to-skate" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--pink)' }}>US Figure Skating — Learn to Skate</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--dark) 0%, #1a0030 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--pink)' }}>ROLL</span>
            <span style={{ color: 'var(--white)' }}> WITH IT</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem', lineHeight: 1.7 }}>{locations.length}+ skating rinks across {statesWithData} states. Find one near you.</p>
          <Link href="/browse-states" className="btn btn-pink" style={{ padding: '0.9rem 2.25rem' }}>Find Rinks →</Link>
        </div>
      </section>
    </>
  );
}
