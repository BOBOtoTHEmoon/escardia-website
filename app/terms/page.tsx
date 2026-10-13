import type { Metadata } from "next";
import Link from "next/link";
import { LegalBody, PageHeader, type LegalSection } from "@/components/site/PageShell";
import { CONTACT, LEGAL_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms that apply when you book a car through Escardia.",
  alternates: { canonical: "/terms" },
};

// Have this reviewed by a lawyer before launch. It describes only what the app does today.
const SECTIONS: LegalSection[] = [
  {
    title: "1. About these terms",
    body: "These terms apply when you use the Escardia app or escardia.app. By creating an account or making a booking, you agree to them. If you do not agree, please do not use Escardia.",
  },
  {
    title: "2. What Escardia does",
    body: "Escardia is a marketplace. Independent vendors list their cars on Escardia and supply a professional driver for every trip. Escardia checks vendors and cars, takes payment, and supports you before, during and after your trip.",
  },
  {
    title: "3. Who can use Escardia",
    body: "You must be at least 18 years old and able to enter a binding agreement. Give accurate information when you sign up and keep your login details safe. You are responsible for everything done with your account.",
  },
  {
    title: "4. Bookings and payments",
    body: "• Every booking depends on the car being available\n• Every trip includes a driver supplied by the vendor\n• You pay in full before the trip starts, by card, bank transfer or USSD through Paystack, or from your Escardia wallet\n• The price on the Review and pay screen includes the car, any delivery, security and Hilux fees, and Escardia’s service fee. It does not change after you pay",
  },
  {
    title: "5. Security personnel",
    body: "You can add LEGION or PRIVATE security personnel to a trip. They are priced per person, per day. Teams of three or more need a Hilux backup vehicle, which is added to your booking automatically.",
  },
  {
    title: "6. Cancellations and refunds",
    body: [
      "If you cancel, your refund depends on how long is left before pick-up:",
      "• 24 hours or more: full refund\n• 12 to 24 hours: 50% refund\n• 2 to 12 hours: 25% refund\n• Less than 2 hours: no refund",
      "If the vendor or Escardia cancels your trip, you get a full refund. Refunds are added to your Escardia wallet straight away. Paid trips cannot be edited; cancel and book again, or contact support and we will help.",
    ],
  },
  {
    title: "7. During your trip",
    body: "• Follow Nigerian law and the driver’s reasonable safety instructions\n• No smoking, pets or illegal activity in any vehicle\n• You are responsible for damage you or your passengers cause during the trip\n• Treat drivers and security personnel with respect\n• Trips that run past the booked time may cost extra",
  },
  {
    title: "8. If something goes wrong",
    body: "Report a problem from the trip screen during your trip or within 24 hours after it ends. Escardia holds the vendor’s payment while we review it, may refund you all or part of what you paid, and tells both you and the vendor the outcome.",
  },
  {
    title: "9. Our responsibility",
    body: "Vendors are responsible for their cars, drivers and security personnel. Escardia checks vendors and cars before they go live and handles reports fairly, but we are not liable for losses that a vendor causes, or for indirect losses, except where the law does not allow us to limit our liability.",
  },
  {
    title: "10. Suspending accounts",
    body: "We may pause or close an account for false information, unsafe or abusive behaviour, fraud, or repeated breaches of these terms.",
  },
  {
    title: "11. Changes and governing law",
    body: "We may update these terms and will tell you in the app or by email before important changes take effect. These terms are governed by the laws of the Federal Republic of Nigeria.",
  },
  {
    title: "12. Contact us",
    body: `Questions about these terms? Email ${CONTACT.email} or message us on WhatsApp at ${CONTACT.phoneDisplay}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of use" intro={<>Last updated {LEGAL_UPDATED}</>} />
      <LegalBody sections={SECTIONS}>
        <p className="mt-12 rounded-2xl border border-line bg-surface p-5 text-[0.9375rem] text-muted">
          Listing cars on Escardia? Vendors also agree to the{" "}
          <Link href="/vendor-agreement" className="font-semibold text-primary hover:underline">
            vendor agreement
          </Link>
          .
        </p>
      </LegalBody>
    </>
  );
}
