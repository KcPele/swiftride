import { Mail, Phone } from "lucide-react";

export default function PrivacyContent() {
  return (
    <section className="py-15">
      <div className="max-w-4xl mx-auto px-5 leading-relaxed text-text">
        <p className="text-base mb-4 leading-relaxed">
          Swift Pickup and Logistics (&quot;Swift&quot;, &quot;we&quot;,
          &quot;our&quot;) is committed to protecting the privacy of its visitors
          and users. This Privacy Policy provides an overview of the measures we
          have taken and our commitment to this policy. It describes how Swift
          collects, uses, stores, shares, and protects your information whenever
          you use our site, app, and other services.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Scope of Privacy Policy
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          This Privacy Policy applies to your use of our services, regardless of
          the device you use to access them (e.g., desktop, laptop, mobile
          phone, tablet). It does not apply to services not owned or controlled
          by Swift, including third-party websites and services.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Information We Collect
        </h2>
        <h3 className="text-xl text-dark font-bold mb-2.5 mt-6">Personal Data:</h3>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Full name, phone number, email address</li>
          <li className="mb-4 leading-relaxed text-base">Location data (for rides/deliveries)</li>
          <li className="mb-4 leading-relaxed text-base">Payment information and transaction logs</li>
        </ul>

        <h3 className="text-xl text-dark font-bold mb-2.5 mt-6">Usage Data:</h3>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Device type, IP address, OS, and mobile activity</li>
          <li className="mb-4 leading-relaxed text-base">Ride and delivery history</li>
          <li className="mb-4 leading-relaxed text-base">Bill payment records</li>
          <li className="mb-4 leading-relaxed text-base">Wallet transactions (deposits, withdrawals)</li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          How We Use Your Data
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Process ride and delivery requests</li>
          <li className="mb-4 leading-relaxed text-base">Facilitate wallet and bill payments</li>
          <li className="mb-4 leading-relaxed text-base">Track location in real-time (for riders/deliveries)</li>
          <li className="mb-4 leading-relaxed text-base">Communicate updates, promotions, or alerts</li>
          <li className="mb-4 leading-relaxed text-base">Improve app functionality and detect fraud</li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Data Sharing
        </h2>
        <p className="text-base mb-4 leading-relaxed">We only share data when necessary:</p>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">With riders/drivers to complete services</li>
          <li className="mb-4 leading-relaxed text-base">With payment and bill vendors</li>
          <li className="mb-4 leading-relaxed text-base">With law enforcement when legally required</li>
        </ul>
        <p className="text-base mb-4 leading-relaxed">We never sell your personal data.</p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Wallet &amp; Financial Data
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          All wallet deposits, payments, and withdrawals are processed securely
          through encrypted channels. We don&apos;t store card or bank
          credentials on our servers.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Data Security
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          We apply SSL encryption, secure login, and role-based access control.
          However, no system is 100% safe. Users are responsible for keeping
          passwords secure.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          User Rights
        </h2>
        <p className="text-base mb-4 leading-relaxed">You can:</p>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Update or delete your data</li>
          <li className="mb-4 leading-relaxed text-base">Withdraw consent to use services</li>
          <li className="mb-4 leading-relaxed text-base">Request account closure at any time</li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Children&apos;s Privacy
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          Our services are not intended for individuals under 15 years. If we
          discover such accounts, they will be removed.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Third-Party Services
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          We are not responsible for privacy policies of external services (e.g.,
          DStv, Paystack, etc.). Review their policies before proceeding.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Policy Changes
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          We may modify this Privacy Policy periodically. Major changes will be
          notified in-app or via email.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Contact
        </h2>
        <p className="text-base mb-4 leading-relaxed flex items-center">
          <Mail size={16} className="mr-2 text-primary shrink-0" />
          Email: support@swiftpickup.ng
        </p>
        <p className="text-base mb-4 leading-relaxed flex items-center">
          <Phone size={16} className="mr-2 text-primary shrink-0" />
          Phone: +234 567 9101 112
        </p>
      </div>
    </section>
  );
}
