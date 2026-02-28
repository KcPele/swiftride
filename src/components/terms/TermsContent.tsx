import { Mail, Phone } from "lucide-react";

export default function TermsContent() {
  return (
    <section className="py-15">
      <div className="max-w-4xl mx-auto px-5 leading-relaxed text-text">
        <p className="text-base mb-4 leading-relaxed">
          Welcome to Swift Pickup &amp; Logistics (&quot;Swift&quot;,
          &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or
          using our mobile application and services, you agree to the terms set
          forth below.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Overview of Services
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">
            On-demand ride-hailing and package delivery services.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Bill payments (e.g., airtime, data, subscriptions, utilities).
          </li>
          <li className="mb-4 leading-relaxed text-base">
            An in-app wallet system that allows deposits, withdrawals, and
            seamless payment for all services.
          </li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Eligibility
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          You must be at least 15 years old and legally capable to enter into a
          binding agreement to use our services.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          User Accounts
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">
            Users must create an account to access services.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Users are responsible for safeguarding their login credentials.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Providing false or misleading information may result in account
            suspension.
          </li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Wallet &amp; Payments
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">
            Users can deposit money into their Swift wallet using supported
            payment methods.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Wallet funds can be used to pay for rides, deliveries, and bill
            services.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Withdrawals can be made to the user&apos;s linked bank account,
            subject to verification.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Swift may charge small transaction or service fees.
          </li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Ride and Delivery Services
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">
            Users may book rides or deliveries through the app.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Prices are calculated based on distance, service type, time, and
            other factors.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Riders and drivers are expected to behave respectfully and complete
            all services responsibly.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Package deliveries must not contain illegal or restricted items.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            For package deliveries valued above &#8358;50,000, users are
            required to notify Swift before dispatch. In the event of loss or
            damage, compensation will be limited to a maximum of &#8358;50,000,
            regardless of the item&apos;s declared value.
          </li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Bill Payment Services
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Airtime and Data</li>
          <li className="mb-4 leading-relaxed text-base">TV subscriptions (e.g., DStv, GOtv)</li>
          <li className="mb-4 leading-relaxed text-base">Electricity bills</li>
          <li className="mb-4 leading-relaxed text-base">Internet or other digital services</li>
        </ul>
        <p className="text-base mb-4 leading-relaxed">
          All bill transactions are processed through trusted third-party
          providers.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Cancellation and Refunds
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">
            Rides or deliveries may be cancelled before assignment. Some
            cancellations may attract a fee.
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Refunds for wallet deposits or failed bill payments will be
            processed after verification, typically within 5–7 business days.
          </li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Prohibited Uses
        </h2>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Use the app for illegal activity</li>
          <li className="mb-4 leading-relaxed text-base">
            Send or transport prohibited items (e.g., weapons, drugs, hazardous
            materials)
          </li>
          <li className="mb-4 leading-relaxed text-base">
            Attempt to hack, reverse engineer, or interfere with app systems
          </li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Account Suspension
        </h2>
        <p className="text-base mb-4 leading-relaxed">Swift may suspend or terminate accounts for:</p>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Fraudulent activities</li>
          <li className="mb-4 leading-relaxed text-base">Repeated cancellations or abuse</li>
          <li className="mb-4 leading-relaxed text-base">
            Violation of these Terms or any applicable laws
          </li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Liability
        </h2>
        <p className="text-base mb-4 leading-relaxed">Swift is not liable for:</p>
        <ul className="pl-5 mb-5 list-disc">
          <li className="mb-4 leading-relaxed text-base">Losses from incorrect bill payment details</li>
          <li className="mb-4 leading-relaxed text-base">
            Delays or disruptions due to third-party services
          </li>
          <li className="mb-4 leading-relaxed text-base">Package damage due to poor packaging</li>
          <li className="mb-4 leading-relaxed text-base">Unauthorized access due to negligence</li>
        </ul>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Modifications
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          We may update these Terms at any time. Continued use means acceptance
          of the latest version.
        </p>

        <h2 className="text-2xl text-primary border-b border-divider pb-2.5 font-bold mt-9 mb-4">
          Governing Law
        </h2>
        <p className="text-base mb-4 leading-relaxed">
          These Terms are governed by the laws of the Federal Republic of
          Nigeria, and disputes shall be settled under Nigerian jurisdiction.
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
