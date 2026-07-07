export const metadata = {
  title: "Contact All Skating Rinks - Get in Touch",
  description: "Contact All Skating Rinks with questions, suggestions, or feedback.",
};

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p style={{ fontSize: "1.1rem", marginTop: 0 }}>
            Have questions? We'd love to hear from you
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginBottom: "1rem", fontWeight: "bold" }}>
              Get in Touch
            </h2>
            <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: 1.6 }}>
              Have questions about a skating rink? Want to suggest a venue? Need more information? Contact us directly via email.
            </p>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                border: "2px solid #003d99",
                borderRadius: "8px",
                padding: "1.5rem 2rem",
              }}
            >
              <p style={{ margin: "0 0 0.5rem 0", color: "#333", fontSize: "0.9rem", fontWeight: "600" }}>
                Email Us
              </p>
              <a
                href="mailto:contact@allskatingrinks.com"
                style={{ color: "#003d99", textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}
              >
                contact@allskatingrinks.com
              </a>
            </div>
            <p style={{ color: "#999", fontSize: "0.9rem", marginTop: "1rem" }}>
              We typically respond to inquiries within 1-2 business days.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginBottom: "1rem", fontWeight: "bold" }}>
              Prefer to Browse?
            </h2>
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              Check out our directory to find skating rinks near you.
            </p>
            <a
              href="/"
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
              Browse Skating Rinks
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
