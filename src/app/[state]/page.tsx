import locations from "@/data/locations.json";

export const revalidate = 86400;

const states = Array.from(new Set(locations.map((loc) => loc.stateSlug)));

export async function generateStaticParams() {
  return states.map((state) => ({
    state,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateName = state
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Skating Rinks in ${stateName} - All Skating Rinks`,
    description: `Find family-friendly roller skating and ice skating rinks in ${stateName}. Browse locations, hours, amenities, and birthday party options.`,
    canonical: `https://allskatingrinks.com/${state}`,
    openGraph: {
      title: `Skating Rinks in ${stateName}`,
      description: `Find skating rinks in ${stateName} - locations, hours, and amenities.`,
      url: `https://allskatingrinks.com/${state}`,
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateName = state
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const rinks = locations.filter((loc) => loc.stateSlug === state);

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section
        style={{
          backgroundColor: "#003d99",
          color: "#ffffff",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Skating Rinks in {stateName}
          </h1>
          <p style={{ fontSize: "1.1rem", marginTop: 0 }}>
            Discover {rinks.length} skating rink{rinks.length !== 1 ? "s" : ""} in{" "}
            {stateName}
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {rinks.map((rink) => (
              <a
                key={rink.id}
                href={`/${rink.stateSlug}/${rink.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor:
                        rink.type === "ice" ? "#e6f2ff" : "#fff5e6",
                      color: rink.type === "ice" ? "#003d99" : "#ff6600",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "4px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {rink.type === "ice" ? "Ice Skating" : "Roller Skating"}
                  </div>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "0.3rem",
                      marginTop: "0.5rem",
                      color: "#003d99",
                      fontWeight: "bold",
                    }}
                  >
                    {rink.name}
                  </h2>
                  <p style={{ color: "#666", marginBottom: "1rem", margin: "0.3rem 0" }}>
                    {rink.city}, {rink.state}
                  </p>
                  <p style={{ color: "#888", fontSize: "0.95rem", margin: 0 }}>
                    {rink.description.substring(0, 100)}...
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

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
            ],
          }),
        }}
      />
    </main>
  );
}
