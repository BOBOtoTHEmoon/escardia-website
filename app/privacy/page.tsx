import type { Metadata } from "next";
import { LegalBody, PageHeader, type LegalSection } from "@/components/site/PageShell";
import { CONTACT, LEGAL_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Escardia collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

// Have this reviewed by a lawyer before launch. It describes only what the app and website do today.
const SECTIONS: LegalSection[] = [
  {
    title: "1. Who we are",
    body: `Escardia is a marketplace in ${CONTACT.city} that connects customers with vetted vendors who rent out luxury cars with professional drivers. This policy explains what personal information we collect through the Escardia app and escardia.app, how we use it, and the choices you have. It applies to customers, vendors and anyone who joins our waitlist.`,
  },
  {
    title: "2. What we collect",
    body: [
      "• Account details: your name, email address and phone number\n• Booking details: the car, dates, pick-up or delivery address, any security you add, and your trip history\n• Payment records: amounts, references and refunds. Card details are handled by Paystack and never reach Escardia’s servers\n• Wallet activity: top-ups, payments and refunds in your Escardia wallet\n• Messages and reports: anything you send to support or report about a trip\n• Device details: a push notification token if you allow notifications, and basic technical data needed to keep the app working",
      "Vendors also give us business details, a government ID, business documents, bank details for payouts, and details of their cars and drivers.",
      "If you join our waitlist or register as a vendor on this website, we collect the email address and any other details you enter in the form.",
    ],
  },
  {
    title: "3. Location",
    body: "If you allow it, the app uses your location to suggest nearby areas and fill in addresses. We do not track your location in the background. You can turn location access off at any time in your phone’s settings.",
  },
  {
    title: "4. How we use it",
    body: "• To create and run your account\n• To process bookings, payments, refunds and vendor payouts\n• To let your driver and vendor reach you about your trip\n• To check vendors, cars and documents before they go live\n• To handle problems you report and keep the platform safe\n• To send you messages about your bookings and, if you joined the waitlist, to tell you when Escardia launches\n• To meet our legal and tax obligations",
  },
  {
    title: "5. Who we share it with",
    body: [
      "Escardia never sells personal data. We share information only when it is needed:",
      "• With your vendor and driver: your name, phone number and trip details, so they can complete your trip\n• With customers (for vendors): your business name, phone number, cars, and the name and phone number of the driver on the trip. Customers never see a vendor’s ID, documents or bank details\n• With service providers who help us run Escardia, such as Paystack for payments and our secure cloud hosting provider\n• With authorities, when the law requires it. We check that a request is valid before responding",
    ],
  },
  {
    title: "6. How we protect it",
    body: "Your data is encrypted in transit and at rest. Vendor IDs and documents are stored privately and only authorised Escardia staff can view them. Payments go through Paystack, a PCI-DSS compliant processor.",
  },
  {
    title: "7. How long we keep it",
    body: "We keep your account information while your account is open. When you delete your account we remove your personal details, but we keep booking, payment and payout records for as long as Nigerian tax and accounting law requires. Waitlist details are kept until you ask us to remove them or we no longer need them to contact you about launch.",
  },
  {
    title: "8. Your rights",
    body: [
      "Under the Nigeria Data Protection Act 2023 you can ask to see the personal information we hold about you, correct it, move it, object to how we use it, or have it deleted. You can also withdraw any consent you have given, such as for notifications or location.",
      `To make a request, email ${CONTACT.email} or use our account deletion page. If you are not happy with how we handle your request, you can complain to the Nigeria Data Protection Commission.`,
    ],
  },
  {
    title: "9. Children",
    body: "Escardia is for people aged 18 and over. We do not knowingly collect information from anyone under 18.",
  },
  {
    title: "10. Changes to this policy",
    body: "If we make important changes, we will tell you in the app or by email before they take effect. The date at the top shows when this policy was last updated.",
  },
  {
    title: "11. Contact us",
    body: `Questions about your privacy? Email ${CONTACT.email} or message us on WhatsApp at ${CONTACT.phoneDisplay}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" intro={<>Last updated {LEGAL_UPDATED}</>} />
      <LegalBody sections={SECTIONS} />
    </>
  );
}
