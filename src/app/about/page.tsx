import Link from 'next/link';

export const metadata = {
  title: 'About the All Skating Rinks Rebuild',
  description: 'How All Skating Rinks handles legacy records, source verification, corrections, and publication decisions.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="home-hero" style={{ padding: '4.5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: 'var(--pink-lt)' }}>About the directory</p>
          <h1 style={{ color: 'var(--white)', fontSize: 'clamp(2rem,5vw,3.5rem)', marginBottom: '1rem' }}>A LEGACY DATASET UNDER REVIEW</h1>
          <p className="hero-copy" style={{ margin: 0 }}>All Skating Rinks is being rebuilt as a source-transparent venue directory. Current legacy records remain useful as discovery leads, but they are not presented as live-verified venue profiles.</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 className="section-title">What the current data contains</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>The repository contains 1,263 records with a name, state label, latitude, and longitude. Of those, 576 contain a city field and 687 do not. Every record has only the generic amenity value <em>Skating</em>.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>The repository does not document the dataset's original source or collection date. It also does not contain current hours, prices, rink type, rentals, lessons, parties, accessibility, contact information, or operating status.</p>

          <h2 className="section-title">What that means for visitors</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>Use a record only as a starting point. Before traveling, confirm the venue and its current details through an official venue, operator, municipal, or other primary source. State and record pages are excluded from search indexing while this evidence is missing.</p>

          <h2 className="section-title">Publication standard</h2>
          <p style={{ lineHeight: 1.85, marginBottom: '1rem' }}>A future indexable venue profile must identify a current primary source, record what was checked and when, and clearly separate sourced facts from editorial guidance. We will not infer amenities or programs from a venue name.</p>
          <p style={{ lineHeight: 1.85, marginBottom: '2.5rem' }}>Advertising or affiliate links will not be added to bulk legacy pages. Monetization can be reconsidered only after manually reviewed pages provide original visitor utility and current first-party demand supports a test.</p>

          <h2 className="section-title">Corrections</h2>
          <p style={{ lineHeight: 1.85 }}>To report a closed venue, incorrect location, or other record problem, use the <Link href="/contact">contact page</Link>. Include the record URL and a current source when possible. Submissions are reviewed before publication.</p>
        </div>
      </section>
    </div>
  );
}
