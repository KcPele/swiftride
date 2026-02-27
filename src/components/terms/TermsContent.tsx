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

export default function TermsContent() {
  const h2Style: React.CSSProperties = {
    fontSize: "1.5rem",
    marginTop: 35,
    marginBottom: 15,
    color: "#ff6600",
    borderBottom: "1px solid #eee",
    paddingBottom: 10,
    fontWeight: 700,
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
          Welcome to Swift Pickup &amp; Logistics (&quot;Swift&quot;,
          &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or
          using our mobile application and services, you agree to the terms set
          forth below.
        </p>

        <h2 style={h2Style}>Overview of Services</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>
            On-demand ride-hailing and package delivery services.
          </li>
          <li style={liStyle}>
            Bill payments (e.g., airtime, data, subscriptions, utilities).
          </li>
          <li style={liStyle}>
            An in-app wallet system that allows deposits, withdrawals, and
            seamless payment for all services.
          </li>
        </ul>

        <h2 style={h2Style}>Eligibility</h2>
        <p style={pStyle}>
          You must be at least 15 years old and legally capable to enter into a
          binding agreement to use our services.
        </p>

        <h2 style={h2Style}>User Accounts</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Users must create an account to access services.
          </li>
          <li style={liStyle}>
            Users are responsible for safeguarding their login credentials.
          </li>
          <li style={liStyle}>
            Providing false or misleading information may result in account
            suspension.
          </li>
        </ul>

        <h2 style={h2Style}>Wallet &amp; Payments</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Users can deposit money into their Swift wallet using supported
            payment methods.
          </li>
          <li style={liStyle}>
            Wallet funds can be used to pay for rides, deliveries, and bill
            services.
          </li>
          <li style={liStyle}>
            Withdrawals can be made to the user&apos;s linked bank account,
            subject to verification.
          </li>
          <li style={liStyle}>
            Swift may charge small transaction or service fees.
          </li>
        </ul>

        <h2 style={h2Style}>Ride and Delivery Services</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Users may book rides or deliveries through the app.
          </li>
          <li style={liStyle}>
            Prices are calculated based on distance, service type, time, and
            other factors.
          </li>
          <li style={liStyle}>
            Riders and drivers are expected to behave respectfully and complete
            all services responsibly.
          </li>
          <li style={liStyle}>
            Package deliveries must not contain illegal or restricted items.
          </li>
          <li style={liStyle}>
            For package deliveries valued above &#8358;50,000, users are
            required to notify Swift before dispatch. In the event of loss or
            damage, compensation will be limited to a maximum of &#8358;50,000,
            regardless of the item&apos;s declared value.
          </li>
        </ul>

        <h2 style={h2Style}>Bill Payment Services</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>Airtime and Data</li>
          <li style={liStyle}>TV subscriptions (e.g., DStv, GOtv)</li>
          <li style={liStyle}>Electricity bills</li>
          <li style={liStyle}>Internet or other digital services</li>
        </ul>
        <p style={pStyle}>
          All bill transactions are processed through trusted third-party
          providers.
        </p>

        <h2 style={h2Style}>Cancellation and Refunds</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Rides or deliveries may be cancelled before assignment. Some
            cancellations may attract a fee.
          </li>
          <li style={liStyle}>
            Refunds for wallet deposits or failed bill payments will be
            processed after verification, typically within 5–7 business days.
          </li>
        </ul>

        <h2 style={h2Style}>Prohibited Uses</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>Use the app for illegal activity</li>
          <li style={liStyle}>
            Send or transport prohibited items (e.g., weapons, drugs, hazardous
            materials)
          </li>
          <li style={liStyle}>
            Attempt to hack, reverse engineer, or interfere with app systems
          </li>
        </ul>

        <h2 style={h2Style}>Account Suspension</h2>
        <p style={pStyle}>Swift may suspend or terminate accounts for:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Fraudulent activities</li>
          <li style={liStyle}>Repeated cancellations or abuse</li>
          <li style={liStyle}>
            Violation of these Terms or any applicable laws
          </li>
        </ul>

        <h2 style={h2Style}>Liability</h2>
        <p style={pStyle}>Swift is not liable for:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Losses from incorrect bill payment details
          </li>
          <li style={liStyle}>
            Delays or disruptions due to third-party services
          </li>
          <li style={liStyle}>Package damage due to poor packaging</li>
          <li style={liStyle}>Unauthorized access due to negligence</li>
        </ul>

        <h2 style={h2Style}>Modifications</h2>
        <p style={pStyle}>
          We may update these Terms at any time. Continued use means acceptance
          of the latest version.
        </p>

        <h2 style={h2Style}>Governing Law</h2>
        <p style={pStyle}>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria, and disputes shall be settled under Nigerian jurisdiction.
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
