const EnvelopeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 512 512"
    fill="#ff6600"
    style={{ marginRight: 8, verticalAlign: "middle" }}
  >
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 512 512"
    fill="#ff6600"
    style={{ marginRight: 8, verticalAlign: "middle" }}
  >
    <path d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z" />
  </svg>
);

export default function PrivacyContent() {
  const h2Style: React.CSSProperties = {
    fontSize: "1.5rem",
    color: "#ff6600",
    borderBottom: "1px solid #eee",
    paddingBottom: 10,
    fontWeight: 700,
    marginTop: 35,
    marginBottom: 15,
  };

  const h3Style: React.CSSProperties = {
    fontSize: "1.2rem",
    color: "#111",
    fontWeight: 700,
    marginBottom: 10,
    marginTop: 25,
  };

  const pStyle: React.CSSProperties = {
    fontSize: "1rem",
    marginBottom: 15,
    color: "#333",
    lineHeight: 1.7,
  };

  const ulStyle: React.CSSProperties = {
    paddingLeft: 20,
    marginBottom: 20,
    listStyle: "disc",
  };

  const liStyle: React.CSSProperties = {
    marginBottom: 15,
    color: "#333",
    lineHeight: 1.7,
    fontSize: "1rem",
  };

  return (
    <section style={{ padding: "60px 0" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 20px",
          lineHeight: 1.7,
          color: "#333",
        }}
      >
        <p style={pStyle}>
          Swift Pickup and Logistics (&quot;Swift&quot;, &quot;we&quot;,
          &quot;our&quot;) is committed to protecting the privacy of its visitors
          and users. This Privacy Policy provides an overview of the measures we
          have taken and our commitment to this policy. It describes how Swift
          collects, uses, stores, shares, and protects your information whenever
          you use our site, app, and other services.
        </p>

        <h2 style={h2Style}>Scope of Privacy Policy</h2>
        <p style={pStyle}>
          This Privacy Policy applies to your use of our services, regardless of
          the device you use to access them (e.g., desktop, laptop, mobile
          phone, tablet). It does not apply to services not owned or controlled
          by Swift, including third-party websites and services.
        </p>

        <h2 style={h2Style}>Information We Collect</h2>
        <h3 style={h3Style}>Personal Data:</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Full name, phone number, email address</li>
          <li style={liStyle}>Location data (for rides/deliveries)</li>
          <li style={liStyle}>Payment information and transaction logs</li>
        </ul>

        <h3 style={h3Style}>Usage Data:</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Device type, IP address, OS, and mobile activity
          </li>
          <li style={liStyle}>Ride and delivery history</li>
          <li style={liStyle}>Bill payment records</li>
          <li style={liStyle}>Wallet transactions (deposits, withdrawals)</li>
        </ul>

        <h2 style={h2Style}>How We Use Your Data</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>Process ride and delivery requests</li>
          <li style={liStyle}>Facilitate wallet and bill payments</li>
          <li style={liStyle}>
            Track location in real-time (for riders/deliveries)
          </li>
          <li style={liStyle}>
            Communicate updates, promotions, or alerts
          </li>
          <li style={liStyle}>
            Improve app functionality and detect fraud
          </li>
        </ul>

        <h2 style={h2Style}>Data Sharing</h2>
        <p style={pStyle}>We only share data when necessary:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>With riders/drivers to complete services</li>
          <li style={liStyle}>With payment and bill vendors</li>
          <li style={liStyle}>With law enforcement when legally required</li>
        </ul>
        <p style={pStyle}>We never sell your personal data.</p>

        <h2 style={h2Style}>Wallet &amp; Financial Data</h2>
        <p style={pStyle}>
          All wallet deposits, payments, and withdrawals are processed securely
          through encrypted channels. We don&apos;t store card or bank
          credentials on our servers.
        </p>

        <h2 style={h2Style}>Data Security</h2>
        <p style={pStyle}>
          We apply SSL encryption, secure login, and role-based access control.
          However, no system is 100% safe. Users are responsible for keeping
          passwords secure.
        </p>

        <h2 style={h2Style}>User Rights</h2>
        <p style={pStyle}>You can:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Update or delete your data</li>
          <li style={liStyle}>Withdraw consent to use services</li>
          <li style={liStyle}>Request account closure at any time</li>
        </ul>

        <h2 style={h2Style}>Children&apos;s Privacy</h2>
        <p style={pStyle}>
          Our services are not intended for individuals under 15 years. If we
          discover such accounts, they will be removed.
        </p>

        <h2 style={h2Style}>Third-Party Services</h2>
        <p style={pStyle}>
          We are not responsible for privacy policies of external services (e.g.,
          DStv, Paystack, etc.). Review their policies before proceeding.
        </p>

        <h2 style={h2Style}>Policy Changes</h2>
        <p style={pStyle}>
          We may modify this Privacy Policy periodically. Major changes will be
          notified in-app or via email.
        </p>

        <h2 style={h2Style}>Contact</h2>
        <p style={pStyle}>
          <EnvelopeIcon />
          Email: support@swiftpickup.ng
        </p>
        <p style={pStyle}>
          <PhoneIcon />
          Phone: +234 567 9101 112
        </p>
      </div>
    </section>
  );
}
