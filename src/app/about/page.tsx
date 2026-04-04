export const metadata = {
  title: "About All Skating Rinks - Find Skating Rinks Near You",
  description:
    "About All Skating Rinks - your comprehensive directory for finding family-friendly roller skating and ice skating rinks across the USA.",
};

export default function AboutPage() {
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
            About All Skating Rinks
          </h1>
          <p style={{ fontSize: "1.1rem", marginTop: 0 }}>
            Your guide to family-friendly skating venues across America
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 1rem" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginBottom: "1rem", fontWeight: "bold" }}>
            Our Mission
          </h2>
          <p>
            All Skating Rinks is dedicated to helping families discover and enjoy
            the best roller skating and ice skating rinks across the United States.
            We believe that skating is a wonderful activity for kids and families,
            combining fun, fitness, and quality time together. Our mission is to
            make it easy for you to find family-friendly skating venues in your
            area.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginTop: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            What We Do
          </h2>
          <p>
            We maintain a comprehensive directory of roller skating and ice skating
            rinks across all 50 states. Each listing includes essential information
            such as:
          </p>
          <ul style={{ color: "#555" }}>
            <li>Location and contact information</li>
            <li>Type of skating (roller or ice)</li>
            <li>Available amenities and services</li>
            <li>Information about lessons and programs</li>
            <li>Details about birthday parties and group bookings</li>
            <li>General pricing and hours information</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginTop: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            Why Skating Rinks Matter
          </h2>
          <p>
            Skating rinks serve as vital community gathering places where families
            can spend quality time together. Whether it's roller skating with its
            vibrant music and arcade games, or ice skating with its graceful
            elegance, skating rinks provide:
          </p>
          <ul style={{ color: "#555" }}>
            <li>
              <strong>Physical Activity:</strong> Skating improves balance, strength,
              coordination, and cardiovascular health.
            </li>
            <li>
              <strong>Social Development:</strong> Children build confidence, make
              friends, and develop social skills.
            </li>
            <li>
              <strong>Family Bonding:</strong> Parents and children create lasting
              memories together in a fun, supervised environment.
            </li>
            <li>
              <strong>Skill Development:</strong> Skating lessons and programs help
              skaters of all levels improve their abilities.
            </li>
            <li>
              <strong>Entertainment:</strong> Skating rinks offer games, food, and
              entertainment options for the whole family.
            </li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginTop: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            Our Coverage
          </h2>
          <p>
            All Skating Rinks includes featured skating venues across the United
            States, with coverage in all 50 states. Our directory helps you find:
          </p>
          <ul style={{ color: "#555" }}>
            <li>Roller skating rinks for arcade games and DJ nights</li>
            <li>Ice skating arenas for figure skating and recreational skating</li>
            <li>Family-friendly venues perfect for birthday celebrations</li>
            <li>Locations offering professional lessons and coaching</li>
            <li>Rinks with special programs and themed skating nights</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginTop: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            How to Use All Skating Rinks
          </h2>
          <p>
            Getting started is simple:
          </p>
          <ul style={{ color: "#555" }}>
            <li>
              Browse by state to find skating rinks in your area or where you're
              traveling
            </li>
            <li>
              Read detailed information about each rink, including type, amenities,
              and services
            </li>
            <li>
              Learn about skating, its benefits, and what to expect at a skating
              rink
            </li>
            <li>
              Find information about birthday parties, group bookings, and lessons
            </li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginTop: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            Disclaimer
          </h2>
          <p>
            The information on All Skating Rinks is provided for informational
            purposes only. We make every effort to keep our directory accurate and
            up-to-date, but we recommend contacting skating rinks directly to
            confirm current hours, pricing, and availability of services before
            visiting. Information about skating facilities, hours, prices, and
            programs is subject to change.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "#003d99", marginTop: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
            Get in Touch
          </h2>
          <p>
            Have questions or suggestions? We'd love to hear from you! Please visit
            our{" "}
            <a
              href="/contact"
              style={{ color: "#003d99", textDecoration: "none", fontWeight: "bold" }}
            >
              contact page
            </a>{" "}
            to reach out.
          </p>
        </div>
      </section>
    </main>
  );
}
