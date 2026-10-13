import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageShell";
import { InstagramIcon, WhatsAppIcon, XIcon } from "@/components/site/BrandIcons";
import { FAQS, FaqList } from "@/components/landing/Sections";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help and support",
  description: "Get help with a booking, a payment or your Escardia account.",
  alternates: { canonical: "/support" },
};

const CHANNELS = [
  { Icon: WhatsAppIcon, title: "WhatsApp", value: "Fastest reply", href: CONTACT.whatsapp, external: true },
  { Icon: Phone, title: "Call us", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
  { Icon: Mail, title: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="How can we help?"
        intro="For anything about a trip you have booked, the quickest way is to open the trip in the Escardia app. You can call your driver and vendor, or tap Report a problem."
      />

      <div className="mx-auto max-w-[53.75rem] px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="text-[1.375rem] font-semibold text-ink">Contact the Escardia team</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {CHANNELS.map(({ Icon, title, value, href, external }) => (
            <a
              key={title}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="lift group rounded-2xl border border-line bg-surface p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-[1.125rem] w-[1.125rem]" />
              </span>
              <p className="mt-4 font-semibold text-ink">{title}</p>
              <p className="mt-0.5 break-words text-[0.875rem] text-muted">{value}</p>
            </a>
          ))}
        </div>
        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.875rem] text-muted">
          Also on
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
            <InstagramIcon className="h-4 w-4" /> {CONTACT.instagramHandle}
          </a>
          <a href={CONTACT.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
            <XIcon className="h-4 w-4" /> {CONTACT.xHandle}
          </a>
        </p>

        <h2 className="mb-5 mt-16 text-[1.375rem] font-semibold text-ink">Common questions</h2>
        <FaqList items={FAQS} />

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <Link href="/delete-account" className="flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-primary/50">
            <span>
              <span className="block font-semibold text-ink">Delete your account</span>
              <span className="text-[0.875rem] text-muted">Remove your account and personal data</span>
            </span>
            <ArrowRight className="h-5 w-5 text-muted" />
          </Link>
          <Link href="/privacy" className="flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-primary/50">
            <span>
              <span className="block font-semibold text-ink">Privacy and terms</span>
              <span className="text-[0.875rem] text-muted">How we handle your data</span>
            </span>
            <ArrowRight className="h-5 w-5 text-muted" />
          </Link>
        </div>
      </div>
    </>
  );
}
