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
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* Contact Form Section */}
            <div>
              <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginBottom: "1.5rem", fontWeight: "bold" }}>
                Send Us a Message
              </h2>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                      resize: "vertical",
                    }}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#003d99",
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    border: "none",
                    borderRadius: "4px",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  Send Message
                </button>
              </form>
              <p
                style={{
                  color: "#999",
                  fontSize: "0.9rem",
                  marginTop: "1rem",
                }}
              >
                Please note: This is a static form. To submit messages, you may
                email us directly at the address below.
              </p>
            </div>

            {/* Contact Information Section */}
            <div>
              <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginBottom: "1.5rem", fontWeight: "bold" }}>
                Contact Information
              </h2>

              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", color: "#003d99", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Email
                </h3>
                <p style={{ margin: 0, color: "#333" }}>
                  <a
                    href="mailto:contact@allskatingrinks.com"
                    style={{ color: "#003d99", textDecoration: "none" }}
                  >
                    contact@allskatingrinks.com
                  </a>
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", color: "#003d99", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Response Time
                </h3>
                <p style={{ margin: 0, color: "#555" }}>
                  We typically respond to inquiries within 1-2 business days.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", color: "#003d99", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  How Can We Help?
                </h3>
                <p style={{ color: "#555" }}>
                  Have questions about a specific skating rink? Want to suggest
                  a venue? Need more information? Feel free to reach out using
                  any of the methods above.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "2rem",
              textAlign: "center",
              marginTop: "2rem",
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
