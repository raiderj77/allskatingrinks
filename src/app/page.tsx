import locations from "@/data/locations.json";

export const dynamic = "force-static";

export default function Home() {
  const states = Array.from(
    new Set(locations.map((loc) => loc.stateSlug))
  ).sort();

  const featured = locations.slice(0, 6);

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#003d99",
          color: "#ffffff",
          padding: "3rem 1rem",
          textAlign: "center",
          backgroundImage:
            "linear-gradient(135deg, #003d99 0%, #0052cc 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Find Skating Rinks Near You
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Discover family-friendly roller skating and ice skating rinks
            across the USA. Find hours, amenities, birthday parties, and
            lessons.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {states.map((state) => (
              <a
                key={state}
                href={`/${state}`}
                style={{
                  backgroundColor: "#ff6600",
                  color: "#ffffff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  transition: "background-color 0.2s",
                }}
              >
                {state
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rinks */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "2rem",
              color: "#003d99",
              fontWeight: "bold",
            }}
          >
            Featured Skating Rinks
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {featured.map((rink) => (
              <a
                key={rink.slug}
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
                        rink.amenities.includes("Ice skating") ? "#e6f2ff" : "#fff5e6",
                      color: rink.amenities.includes("Ice skating") ? "#003d99" : "#ff6600",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "4px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {rink.amenities.includes("Ice skating") ? "Ice Skating" : "Roller Skating"}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "0.5rem",
                      color: "#003d99",
                      fontWeight: "bold",
                    }}
                  >
                    {rink.name}
                  </h3>
                  <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                    {rink.city}, {rink.state}
                  </p>
                  <p style={{ color: "#888", fontSize: "0.95rem", marginTop: "1rem" }}>
                    {rink.description.substring(0, 120)}...
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          backgroundColor: "#f9f9f9",
          padding: "2rem 1rem",
          borderTop: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1.5rem",
              color: "#003d99",
              fontWeight: "bold",
            }}
          >
            Everything You Need to Know About Skating Rinks
          </h2>

          <h3 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Types of Skating: Roller Skating vs Ice Skating
          </h3>
          <p>
            Skating rinks offer two distinct experiences: roller skating and
            ice skating. Roller skating is performed on smooth indoor floors
            with wheeled skates, making it accessible for beginners and
            families. It's often associated with music, arcade games, and
            vibrant social atmospheres. Ice skating, on the other hand,
            requires specialized ice skates and takes place on frozen surfaces.
            It offers a more graceful, technical experience suitable for both
            recreational skaters and those pursuing figure skating or hockey.
            Each type has its unique appeal and benefits for different age
            groups and skill levels.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Benefits for Kids and Families
          </h3>
          <p>
            Skating is an excellent activity for children and families,
            combining fun with physical fitness. It improves balance, strength,
            coordination, and cardiovascular health while keeping kids active
            and engaged. Skating rinks provide safe, supervised environments
            where families can spend quality time together. The social aspect
            encourages children to make friends, build confidence, and develop
            teamwork skills if they participate in group lessons or programs.
            Regular skating also enhances core strength and leg muscle
            development, making it beneficial for children's overall growth and
            development.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            What to Expect at a Skating Rink
          </h3>
          <p>
            Most modern skating rinks offer a welcoming atmosphere designed for
            families. Upon arrival, you'll typically find comfortable seating
            areas for spectators, skate rental counters, and professional staff
            ready to assist. Many rinks feature exciting ambiance with music,
            light shows, and colorful decorations. Rink rules ensure safety for
            all skaters, with designated areas for different skill levels.
            Whether you're a beginner taking your first steps on skates or an
            experienced skater looking for an exciting outing, skating rinks
            provide equipment, guidance, and a supportive environment for
            everyone to enjoy.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Skating Rink Amenities and Programs
          </h3>
          <p>
            Today's skating rinks go beyond just skating surfaces. Most offer
            skate rentals, so you don't need to own your own equipment. Many
            feature arcade game rooms, snack bars with pizza and refreshments,
            and lounge areas where family and friends can relax. Popular
            programs include beginner lessons for all ages, group skating
            sessions, themed skating nights, and seasonal events. Advanced
            skaters can explore figure skating programs or hockey leagues. Many
            rinks maintain modern facilities with comfortable viewing areas,
            heating systems, and accessible parking, making them ideal
            destinations for families seeking entertainment and recreation.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Birthday Parties and Group Bookings
          </h3>
          <p>
            Skating rinks are perfect venues for birthday celebrations and group
            events. Most offer comprehensive birthday party packages that
            include skating time, skate rentals, reserved seating areas, and
            catering options like pizza and cake. Dedicated party coordinators
            help plan every detail, ensuring a memorable experience for the
            birthday child and guests. Group bookings for school outings,
            company events, and team celebrations are commonly available with
            special rates and arrangements. These packages make organizing an
            event simple and stress-free, allowing hosts to focus on creating
            lasting memories with their guests while professional staff manages
            the logistics.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              marginTop: "2rem",
              marginBottom: "1.5rem",
              color: "#003d99",
              fontWeight: "bold",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.1rem", color: "#003d99", fontWeight: "bold" }}>
              Q: What's the minimum age to start skating?
            </h4>
            <p>
              A: Most skating rinks accept children as young as 3-4 years old.
              Many offer beginner programs specifically designed for toddlers
              and young children. Always check with your local rink for their
              specific age recommendations and available programs.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.1rem", color: "#003d99", fontWeight: "bold" }}>
              Q: Do I need to bring my own skates?
            </h4>
            <p>
              A: No, most skating rinks offer high-quality skate rentals at
              reasonable prices. Rental skates are available in various sizes
              for children and adults. If you prefer your own skates, you can
              bring them, but rentals are convenient and well-maintained.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.1rem", color: "#003d99", fontWeight: "bold" }}>
              Q: How much does it cost to go skating?
            </h4>
            <p>
              A: Admission costs vary by location and type of rink, typically
              ranging from $8-$20 per person. Skate rentals usually cost $3-$8
              extra. Many rinks offer discounts for groups, birthday parties,
              and memberships. Check your local rink's website for current
              pricing and specials.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.1rem", color: "#003d99", fontWeight: "bold" }}>
              Q: How long are typical skating sessions?
            </h4>
            <p>
              A: Most skating sessions are 2-3 hours long. Many rinks have
              different session times throughout the day and evening. Some offer
              open skating where you can come and go freely, while others have
              scheduled sessions. Check your local rink's schedule in advance.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.1rem", color: "#003d99", fontWeight: "bold" }}>
              Q: Are skating lessons available for beginners?
            </h4>
            <p>
              A: Yes, virtually all skating rinks offer professional lessons for
              beginners. Instructors teach proper techniques, safety, and
              balance. Lessons are available for both children and adults,
              individually or in group settings. Contact your local rink for
              availability and pricing.
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What's the minimum age to start skating?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Most skating rinks accept children as young as 3-4 years old. Many offer beginner programs specifically designed for toddlers and young children.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to bring my own skates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No, most skating rinks offer high-quality skate rentals at reasonable prices.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to go skating?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Admission costs vary by location and type of rink, typically ranging from $8-$20 per person.",
                },
              },
              {
                "@type": "Question",
                name: "How long are typical skating sessions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Most skating sessions are 2-3 hours long with different times throughout the day.",
                },
              },
              {
                "@type": "Question",
                name: "Are skating lessons available for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, virtually all skating rinks offer professional lessons for beginners.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "All Skating Rinks",
            url: "https://allskatingrinks.com",
            logo: "https://allskatingrinks.com/logo.png",
            description:
              "Find family-friendly roller skating and ice skating rinks near you across the USA.",
            sameAs: [],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "All Skating Rinks",
            url: "https://allskatingrinks.com",
            description:
              "Find family-friendly roller skating and ice skating rinks near you across the USA.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://allskatingrinks.com/search?q={search_term_string}",
              },
              query_input: "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}
