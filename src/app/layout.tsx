import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "All Skating Rinks - Find Roller & Ice Skating Rinks Near You",
  description:
    "Discover family-friendly roller skating and ice skating rinks near you. Find hours, amenities, birthday parties, and lessons at skating rinks across the USA.",
  keywords:
    "skating rinks, roller skating, ice skating, family activities, kids skating, skating lessons, birthday parties",
  alternates: { canonical: "https://allskatingrinks.com" },
  openGraph: {
    title: "All Skating Rinks - Find Roller & Ice Skating Rinks Near You",
    description:
      "Discover family-friendly roller skating and ice skating rinks near you. Find hours, amenities, birthday parties, and lessons.",
    url: "https://allskatingrinks.com",
    siteName: "All Skating Rinks",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Skating Rinks - Find Roller & Ice Skating Rinks Near You",
    description:
      "Discover family-friendly roller skating and ice skating rinks near you.",
  },
};

const HeaderNav = () => (
  <header
    style={{
      backgroundColor: "#003d99",
      color: "#ffffff",
      padding: "0",
      position: "sticky",
      top: "0",
      zIndex: 100,
      boxShadow: "0 2px 8px rgba(0, 61, 153, 0.1)",
    }}
  >
    <nav
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a
        href="/"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#ffffff",
        }}
      >
        All Skating Rinks
      </a>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a
          href="/"
          style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.95rem" }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.95rem" }}
        >
          About
        </a>
        <a
          href="/contact"
          style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.95rem" }}
        >
          Contact
        </a>
      </div>
    </nav>
  </header>
);

const FooterLinks = () => (
  <footer
    style={{
      backgroundColor: "#f5f5f5",
      borderTop: "3px solid #003d99",
      padding: "2rem 1rem",
      marginTop: "3rem",
    }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
      }}
    >
      <div>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#003d99" }}>
          Directory Sites
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://publicboatramps.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Public Boat Ramps
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://findswimspots.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Find Swim Spots
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://craftdistilleryfinder.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Craft Distillery Finder
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://driveintonight.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Drive-In Tonight
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://allskateparks.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              All Skate Parks
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://rockhoundingfinder.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Rockhounding Finder
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://nearbyescaperooms.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Nearby Escape Rooms
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://soakusa.net"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Soak USA
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#003d99" }}>
          Tool Sites
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://fibertools.app"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Fiber Tools
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://mindchecktools.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Mind Check Tools
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://flipmycase.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Flip My Case
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://creatorrevenuecalculator.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Creator Revenue Calculator
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://contractextract.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Contract Extract
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://medicalbillreader.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Medical Bill Reader
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://taxbreaktools.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              Tax Break Tools
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <a
              href="https://524tracker.com"
              style={{ color: "#003d99", textDecoration: "none" }}
            >
              524 Tracker
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      style={{
        maxWidth: "1200px",
        margin: "2rem auto 0",
        paddingTop: "2rem",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        color: "#666",
        fontSize: "0.9rem",
      }}
    >
      <p>
        <a
          href="/privacy"
          style={{ color: "#003d99", textDecoration: "none", marginRight: "1.5rem" }}
        >
          Privacy
        </a>
        <a
          href="/terms"
          style={{ color: "#003d99", textDecoration: "none" }}
        >
          Terms
        </a>
      </p>
      <p style={{ marginTop: "0.5rem" }}>
        © 2024 All Skating Rinks. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="C4C9B6256BDEDED169E4DE01CA953390" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <HeaderNav />
        <main style={{ minHeight: "calc(100vh - 300px)" }}>{children}</main>
        <FooterLinks />
      </body>
    </html>
  );
}
