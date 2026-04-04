export const metadata = {
  title: "Privacy Policy - All Skating Rinks",
  description: "Privacy policy for All Skating Rinks directory.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
          <p style={{ color: "#666", fontStyle: "italic" }}>
            Last updated: April 2024
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Introduction
          </h2>
          <p>
            All Skating Rinks ("we," "our," or "us") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Information We Collect
          </h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the site includes:
          </p>
          <ul style={{ color: "#555" }}>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information,
              such as your name, shipping address, email address, and telephone
              number, and demographic information, such as age, gender, hometown,
              and interests, that you voluntarily give to us when you register with
              the site or when you choose to participate in various activities
              related to the site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the site, such as your IP
              address, your access times, your browser type and language, and the
              pages you have viewed.
            </li>
            <li>
              <strong>Financial Data:</strong> Financial information, such as
              data related to your payment method (such as a valid credit card
              number, card brand, expiration date) that we may collect when you
              purchase products or services from the site.
            </li>
          </ul>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Use of Your Information
          </h2>
          <p>
            Having accurate information about you permits us to provide you with a
            smooth, efficient, and customized experience. Specifically, we may use
            information collected about you via the site to:
          </p>
          <ul style={{ color: "#555" }}>
            <li>Generate a personal profile about you</li>
            <li>Increase the efficiency and operation of the site</li>
            <li>Monitor and analyze usage and trends to improve your experience</li>
            <li>Notify you of updates to the site</li>
            <li>Process your transactions and send related information</li>
          </ul>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Disclosure of Your Information
          </h2>
          <p>
            We may share information we have collected about you in certain
            situations:
          </p>
          <ul style={{ color: "#555" }}>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information is necessary to comply with the law.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with third parties that perform services for us,
              including payment processing, data analysis, email delivery, and
              customer service.
            </li>
          </ul>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Security of Your Information
          </h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken reasonable
            steps to secure the personal information you provide to us, please be
            aware that no security measures are perfect or impenetrable.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Contact Us
          </h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <p>
            <strong>All Skating Rinks</strong>
            <br />
            Email: privacy@allskatingrinks.com
          </p>
        </div>
      </section>
    </main>
  );
}
