export const metadata = {
  title: "Terms of Service - All Skating Rinks",
  description: "Terms of service for All Skating Rinks directory.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
        </div>
      </section>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
          <p style={{ color: "#666", fontStyle: "italic" }}>
            Last updated: April 2024
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Agreement to Terms
          </h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding
            agreement made between you ("user," "you," or "your") and All Skating
            Rinks ("Company," "we," "us," or "our"), concerning your access to
            and use of the https://allskatingrinks.com website as well as any
            other related applications, sales, marketing or events.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise indicated, the site is our proprietary property and
            all source code, databases, functionality, software, website designs,
            audio, video, text, photographs, and graphics on the site (collectively,
            the "Content") and the trademarks, service marks, and logos contained
            therein (the "Marks") are owned or controlled by us or licensed to us,
            and are protected by copyright and trademark laws.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            User Responsibilities
          </h2>
          <p>
            In these Terms of Service, "User" or "Users" shall mean any third
            party that accesses, uses, and/or participates in any way on the
            website. You agree not to:
          </p>
          <ul style={{ color: "#555" }}>
            <li>Harass or cause distress or unnecessary alarm to any person</li>
            <li>
              Transmit abusive, profane, threatening, offensive, or illegal
              material
            </li>
            <li>Disrupt the normal flow of dialogue within the website</li>
            <li>
              Attempt to gain unauthorized access to computer systems or networks
              connected to the website
            </li>
            <li>Modify, copy, or distribute content without permission</li>
          </ul>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Limitation of Liability
          </h2>
          <p>
            In no event shall the Company or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on the website, even if we or an
            authorized representative has been notified orally or in writing of
            the possibility of such damage.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Disclaimer
          </h2>
          <p>
            The information on the website is provided on an "as-is" basis. We
            make no representations or warranties of any kind, express or implied,
            as to the operation of the website or the information, content,
            materials, or products included on the website. To the fullest extent
            permissible by applicable law, we disclaim all warranties, express or
            implied.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Indemnification
          </h2>
          <p>
            You agree to defend, indemnify, and hold harmless the Company and its
            licensee and licensors, and their employees, contractors, agents,
            officers and directors, from and against any and all claims, damages,
            obligations, losses, liabilities, and expense (including attorneys'
            fees) arising from your use of and access to the website or violation
            of any term of these Terms.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Modifications and Interruptions
          </h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the
            website at any time or for any reason at our sole discretion without
            notice. However, we have no obligation to update any information on
            the website. We also reserve the right to modify or discontinue all or
            part of the website without notice at any time.
          </p>

          <h2 style={{ fontSize: "1.3rem", color: "#003d99", marginTop: "1.5rem", fontWeight: "bold" }}>
            Contact Information
          </h2>
          <p>
            If you have any questions about these Terms of Service, please contact
            us at:
          </p>
          <p>
            <strong>All Skating Rinks</strong>
            <br />
            Email: support@allskatingrinks.com
          </p>
        </div>
      </section>
    </main>
  );
}
