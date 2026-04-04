import locations from "@/data/locations.json";

export const revalidate = 86400;

const allSlugs = locations.flatMap((loc) => ({
  state: loc.stateSlug,
  slug: loc.slug,
}));

export async function generateStaticParams() {
  return allSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;
  const rink = locations.find((loc) => loc.slug === slug && loc.stateSlug === state);

  if (!rink) {
    return { title: "Skating Rink Not Found" };
  }

  return {
    title: `${rink.name} - Skating Rink in ${rink.city}, ${rink.state}`,
    description: `${rink.name} - ${rink.amenities.includes("Ice skating") ? "Ice" : "Roller"} skating rink in ${rink.city}, ${rink.state}. ${rink.description}`,
    alternates: { canonical: `https://allskatingrinks.com/${state}/${slug}` },
    openGraph: {
      title: `${rink.name} - ${rink.state}`,
      description: rink.description,
      url: `https://allskatingrinks.com/${state}/${slug}`,
    },
  };
}

export default async function RinkDetailPage({
  params,
}: {
  params: Promise<{ state: string; slug: string }>;
}) {
  const { state, slug } = await params;
  const rink = locations.find((loc) => loc.slug === slug && loc.stateSlug === state);

  if (!rink) {
    return (
      <main style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <h1>Skating Rink Not Found</h1>
        <p>The skating rink you're looking for could not be found.</p>
      </main>
    );
  }

  const stateName = state
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section
        style={{
          backgroundColor: "#003d99",
          color: "#ffffff",
          padding: "2rem 1rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ margin: 0, marginBottom: "0.5rem" }}>
            <a href="/" style={{ color: "#ffcccc", textDecoration: "none" }}>
              Home
            </a>
            {" > "}
            <a href={`/${state}`} style={{ color: "#ffcccc", textDecoration: "none" }}>
              {stateName}
            </a>
            {" > "}
            <span style={{ color: "#ffffff" }}>{rink.name}</span>
          </p>
          <h1 style={{ fontSize: "2rem", marginTop: "0.5rem", marginBottom: "0.5rem", fontWeight: "bold" }}>
            {rink.name}
          </h1>
          <p style={{ fontSize: "1.1rem", margin: 0 }}>
            {rink.city}, {rink.state}
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "2rem",
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginBottom: "1rem", fontWeight: "bold" }}>
                About This Rink
              </h2>
              <p style={{ lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
                {rink.description}
              </p>

              <h3 style={{ fontSize: "1.2rem", color: "#003d99", marginBottom: "1rem", fontWeight: "bold" }}>
                Type
              </h3>
              <p style={{ color: "#555" }}>
                {rink.amenities.includes("Ice skating") ? "Ice Skating" : "Roller Skating"}
              </p>

              <h3 style={{ fontSize: "1.2rem", color: "#003d99", marginBottom: "1rem", marginTop: "1.5rem", fontWeight: "bold" }}>
                Location
              </h3>
              <p style={{ color: "#555" }}>
                {rink.city}, {rink.state}
                <br />
                <small style={{ color: "#999" }}>
                  Coordinates: {rink.lat}, {rink.lng}
                </small>
              </p>

              <h3 style={{ fontSize: "1.2rem", color: "#003d99", marginBottom: "1rem", marginTop: "1.5rem", fontWeight: "bold" }}>
                Amenities & Services
              </h3>
              <ul
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.5rem",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {rink.amenities.map((amenity, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: "0.5rem 0",
                      color: "#555",
                    }}
                  >
                    ✓ {amenity}
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: "1.2rem", color: "#003d99", marginBottom: "1rem", marginTop: "1.5rem", fontWeight: "bold" }}>
                General Information
              </h3>
              <p style={{ color: "#666", lineHeight: "1.8" }}>
                <strong>Hours of Operation:</strong> Please contact the rink
                directly for current hours, as they vary by season.
                <br />
                <strong>Admission:</strong> Typical admission ranges from $8-$20
                per person. Skate rentals usually add $3-$8.
                <br />
                <strong>Birthday Parties:</strong> Most skating rinks offer
                birthday party packages with reserved seating, party rooms, and
                catering options.
                <br />
                <strong>Lessons:</strong> Professional skating lessons are
                available for beginners and advanced skaters.
              </p>
            </div>

            <aside>
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", color: "#003d99", marginBottom: "1rem", fontWeight: "bold" }}>
                  Quick Facts
                </h3>
                <div style={{ fontSize: "0.95rem" }}>
                  <div style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #ddd" }}>
                    <p style={{ color: "#666", margin: "0 0 0.25rem 0" }}>
                      <strong>Type:</strong>
                    </p>
                    <p style={{ margin: 0, color: "#333" }}>
                      {rink.amenities.includes("Ice skating") ? "Ice Skating" : "Roller Skating"}
                    </p>
                  </div>
                  <div style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #ddd" }}>
                    <p style={{ color: "#666", margin: "0 0 0.25rem 0" }}>
                      <strong>City:</strong>
                    </p>
                    <p style={{ margin: 0, color: "#333" }}>{rink.city}</p>
                  </div>
                  <div style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #ddd" }}>
                    <p style={{ color: "#666", margin: "0 0 0.25rem 0" }}>
                      <strong>State:</strong>
                    </p>
                    <p style={{ margin: 0, color: "#333" }}>{rink.state}</p>
                  </div>
                  <div>
                    <p style={{ color: "#666", margin: "0 0 0.25rem 0" }}>
                      <strong>Amenities:</strong>
                    </p>
                    <p style={{ margin: 0, color: "#333" }}>
                      {rink.amenities.length} services available
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#e6f2ff",
                  border: "2px solid #003d99",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 1rem 0" }}>
                  For the most up-to-date information about hours, pricing, and
                  programs, please contact the rink directly.
                </p>
                <a
                  href={`/${state}`}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#003d99",
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Back to {stateName}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: rink.name,
            description: rink.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: rink.city,
              addressRegion: rink.state,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: rink.lat,
              longitude: rink.lng,
            },
            sportsActivityLocation: {
              "@type": "SportsActivityLocation",
              sportsActivity: rink.amenities.includes("Ice skating") ? "Ice Skating" : "Roller Skating",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://allskatingrinks.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: stateName,
                item: `https://allskatingrinks.com/${state}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: rink.name,
                item: `https://allskatingrinks.com/${state}/${slug}`,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
