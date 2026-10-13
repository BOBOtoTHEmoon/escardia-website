import type { Metadata } from "next";
import { PageHeader, LegalSections, type LegalSection } from "@/components/site/PageShell";
import { CONTACT } from "@/lib/site";
import DeleteAccountForm from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "Ask Escardia to delete your account and personal data.",
  alternates: { canonical: "/delete-account" },
};

const SECTIONS: LegalSection[] = [
  {
    title: "What we delete",
    body: "Your name, email address, phone number, saved addresses, profile photo and notification settings. For vendors, also your ID, business documents, bank details, cars and drivers.",
  },
  {
    title: "What we keep, and for how long",
    body: "Records of bookings, payments, refunds and payouts are kept, without your contact details, for as long as Nigerian tax and accounting law requires. Any open trip, refund or payout must be settled before an account can be deleted.",
  },
  {
    title: "Wallet balance",
    body: `If you have money in your Escardia wallet, contact us on WhatsApp at ${CONTACT.phoneDisplay} before deleting so we can help you use it or arrange a refund.`,
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <PageHeader
        eyebrow="Your data"
        title="Delete your Escardia account"
        intro="Use this form to ask us to delete your account and the personal data linked to it. We confirm with you by email before deleting anything, and finish within 30 days."
      />
      <div className="mx-auto grid max-w-[62.5rem] gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_25rem]">
        <LegalSections sections={SECTIONS} />
        <div className="h-fit rounded-3xl border border-line bg-surface p-6 sm:p-7 lg:sticky lg:top-24">
          <h2 className="text-[1.25rem] font-semibold text-ink">Request deletion</h2>
          <p className="mb-6 mt-1 text-[0.875rem] text-muted">Use the email address on your Escardia account.</p>
          <DeleteAccountForm />
        </div>
      </div>
    </>
  );
}
