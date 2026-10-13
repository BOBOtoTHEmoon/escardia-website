import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Ban,
  CalendarDays,
  Check,
  CreditCard,
  Headset,
  Plus,
  ReceiptText,
  Search,
  ShieldCheck,
  Truck,
  UserRound,
} from "lucide-react";
import Reveal from "@/components/site/Reveal";
import WaitlistForm from "@/components/site/WaitlistForm";
import StoreBadges from "@/components/site/StoreBadges";
import { WhatsAppIcon } from "@/components/site/BrandIcons";
import { CONTACT, VENDOR_TERMS } from "@/lib/site";
import VendorForm from "./VendorForm";
import SecurityMock from "./SecurityMock";

function Heading({ eyebrow, title, body, center }: { eyebrow: string; title: string; body?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-[40rem] text-center" : "max-w-[40rem]"}>
      <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-[1.875rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.5rem]">{title}</h2>
      {body && <p className="mt-4 text-[1rem] leading-relaxed text-muted sm:text-[1.0625rem]">{body}</p>}
    </div>
  );
}

const wrap = "mx-auto max-w-[75rem] px-5 sm:px-8";

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

const STEPS = [
  { Icon: Search, title: "Pick a car", body: "Browse premium cars from vetted vendors, with real photos and clear daily or hourly prices." },
  { Icon: CalendarDays, title: "Choose when and where", body: "Set your dates, then collect the car from the vendor or have it delivered to your door." },
  { Icon: ShieldCheck, title: "Add security if you need it", body: "Add security personnel to your trip in one step. Larger teams come with a backup vehicle." },
  { Icon: CreditCard, title: "Pay and ride", body: "Pay by card, transfer or USSD. You can see and call your driver in the app before pick-up." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-28">
      <div className={wrap}>
        <Reveal>
          <Heading eyebrow="How it works" title="From booking to pick-up in four steps" body="No phone calls back and forth, no haggling. Everything happens in the Escardia app." />
        </Reveal>
        <ol className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {STEPS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <li className="lift group h-full rounded-2xl border border-line bg-surface p-4 sm:rounded-3xl sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                    <Icon className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
                  </span>
                  <span className="text-[0.75rem] font-semibold text-muted sm:text-[0.8125rem]">0{i + 1}</span>
                </div>
                <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink sm:mt-6 sm:text-[1.125rem]">{title}</h3>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted sm:mt-2 sm:text-[0.9375rem]">{body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Escardia, with security as the feature card                     */
/* ------------------------------------------------------------------ */

const FEATURES = [
  { Icon: UserRound, title: "A professional driver, every trip", body: "Every booking includes a driver supplied by the vendor, so you can sit back and arrive ready." },
  { Icon: Truck, title: "Delivered to you", body: "Have the car brought to your home, hotel or office. The delivery fee is shown before you pay." },
  { Icon: ReceiptText, title: "One price, fixed before you pay", body: "Your total covers the car, delivery, security and service fee, and it does not change after you pay." },
  { Icon: Ban, title: "Fair cancellations", body: "Cancel 24 hours or more before pick-up for a full refund, straight to your Escardia wallet." },
];

export function WhyEscardia() {
  return (
    <section className="bg-sunken py-14 sm:py-28">
      <div className={wrap}>
        <Reveal>
          <Heading eyebrow="Why Escardia" title="Premium travel, without the stress" />
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {/* Security */}
          <Reveal className="col-span-2 lg:col-span-1 lg:row-span-2">
            <div id="security" className="group relative h-full overflow-hidden rounded-2xl bg-[#0B1530] p-5 text-white ring-white/10 dark:ring-1 sm:rounded-3xl sm:p-8">
              <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2F5FED] opacity-35 blur-[90px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-60" />
              <div className="relative">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-[#9DB4FF]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-[1.5rem] font-semibold leading-tight">Security on request</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/70">
                  Add LEGION or PRIVATE security personnel to any trip, priced per person, per day. Teams of three or more get a Hilux backup vehicle, added for you.
                </p>
                <SecurityMock />
              </div>
            </div>
          </Reveal>

          {FEATURES.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.08}>
              <div className="lift group h-full rounded-2xl border border-line bg-surface p-4 sm:rounded-3xl sm:p-7">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                  <Icon className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
                </span>
                <h3 className="mt-3 text-[0.9375rem] font-semibold leading-snug text-ink sm:mt-5 sm:text-[1.125rem]">{title}</h3>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted sm:mt-2 sm:text-[0.9375rem]">{body}</p>
              </div>
            </Reveal>
          ))}

          {/* Wide card */}
          <Reveal className="col-span-2 lg:col-span-3">
            <div className="lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:rounded-3xl sm:p-7">
              <div className="relative z-10 sm:max-w-[55%] lg:max-w-[50%]">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-soft text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                  <Headset className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
                </span>
                <h3 className="mt-3 text-[0.9375rem] font-semibold text-ink sm:mt-5 sm:text-[1.125rem]">We have your back after the trip too</h3>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted sm:mt-2 sm:text-[0.9375rem]">
                  Report a problem during your trip or within 24 hours after it. The vendor is not paid until Escardia has looked into it, and we can refund you to your wallet.
                </p>
              </div>
              <Image
                src="/images/suv.png"
                alt="Black luxury SUV"
                width={445}
                height={316}
                sizes="(min-width: 640px) 45vw, 90vw"
                className="hidden h-auto w-full max-w-[22.5rem] self-end sm:block transition-transform duration-700 ease-out group-hover:-translate-x-3 group-hover:scale-[1.04] sm:absolute sm:-bottom-4 sm:-right-6 sm:mb-0 sm:mt-0 sm:w-[40%] lg:w-[32%]"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Vendors                                                             */
/* ------------------------------------------------------------------ */

const VENDOR_POINTS = [
  "Customers pay in full when they book, so there is no chasing payments",
  "You set your daily and hourly prices and take cars offline when you need to",
  "Bookings arrive on your phone. Assign a driver and track every trip",
  `Your share is released ${VENDOR_TERMS.payoutHoldHours} hours after each trip, then you withdraw to your bank`,
];

export function Vendors() {
  return (
    <section id="vendors" className="py-14 sm:py-28">
      <div className={wrap}>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0B1530] px-5 py-12 text-white ring-white/10 dark:ring-1 sm:rounded-[2rem] sm:px-10 lg:px-14 lg:py-16">
          <div aria-hidden className="navy-grid absolute inset-0" />
          <div aria-hidden className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#2F5FED] opacity-30 blur-[110px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_minmax(0,28.75rem)] lg:items-center">
            <Reveal>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-[#9DB4FF]">For vendors</p>
              <h2 className="mt-3 text-[1.875rem] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem]">Earn from your luxury cars</h2>
              <p className="mt-4 max-w-[30rem] text-[1rem] leading-relaxed text-white/70">
                List your fleet on Escardia and get bookings from customers across Lagos who want premium cars and professional drivers.
              </p>
              <ul className="mt-8 space-y-4">
                {VENDOR_POINTS.map((p) => (
                  <li key={p} className="group flex gap-3 text-[0.9375rem] leading-relaxed text-white/85 transition-transform duration-300 hover:translate-x-1">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#2F5FED] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(47,95,237,0.9)]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[0.875rem] text-white/55">
                Escardia keeps a {VENDOR_TERMS.commission} commission on the rental. Read the full{" "}
                <Link href="/vendor-agreement" className="text-white underline underline-offset-4 hover:text-[#9DB4FF]">
                  vendor agreement
                </Link>
                .
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-surface p-5 text-text shadow-2xl sm:p-8">
                <h3 className="text-[1.25rem] font-semibold text-ink">Register your interest</h3>
                <p className="mb-6 mt-1 text-[0.875rem] text-muted">We will call you to get your cars listed before launch.</p>
                <VendorForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "When does Escardia launch?",
    a: "Very soon, starting in Lagos. Join the waitlist and we will email you the day the app is live on the App Store and Google Play.",
  },
  {
    q: "Does every car come with a driver?",
    a: "Yes. Every Escardia trip includes a professional driver supplied by the vendor. Self-drive may come later.",
  },
  {
    q: "Can the car come to me?",
    a: "Yes. Choose delivery when you book and enter your address. The delivery fee is added and shown before you pay.",
  },
  {
    q: "Can I add security?",
    a: "Yes. On the security step you can add LEGION or PRIVATE personnel. Teams of three or more need a Hilux backup vehicle, which the app adds for you. Security is priced per person, per day.",
  },
  {
    q: "How do I pay?",
    a: "By card, bank transfer or USSD through Paystack, or from your Escardia wallet. Escardia never sees or stores your card details.",
  },
  {
    q: "What happens if I cancel?",
    a: "Cancel 24 hours or more before pick-up for a full refund. From 12 to 24 hours before you get 50% back, from 2 to 12 hours before you get 25%, and nothing in the last 2 hours. If the vendor cancels, you get a full refund.",
  },
  {
    q: "Something went wrong on my trip. What do I do?",
    a: "Open the trip in the app and tap Report a problem, during the trip or up to 24 hours after it ends. The vendor is not paid until Escardia has looked into it.",
  },
  {
    q: "How are vendors and cars checked?",
    a: "Escardia checks every vendor’s ID and business documents, and approves every car and its photos before customers can see it.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-sunken py-14 sm:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[0.8fr_1.2fr]`}>
        <Reveal>
          <Heading eyebrow="FAQ" title="Questions, answered" body="Cannot find what you are looking for? Our team replies fastest on WhatsApp." />
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="lift mt-8 inline-flex h-12 items-center gap-2.5 rounded-xl border border-line bg-surface px-5 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-primary/50"
          >
            <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] text-[#25D366]" /> Chat with us
          </a>
        </Reveal>
        <Reveal delay={0.08}>
          <FaqList items={FAQS} />
        </Reveal>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-sunken text-[1rem] font-medium text-ink transition-colors hover:text-primary">
            {f.q}
            <Plus className="faq-icon h-5 w-5 shrink-0 text-muted transition-transform duration-200" />
          </summary>
          <p className="-mt-1 px-6 pb-5 text-[0.9375rem] leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Final call to action                                                */
/* ------------------------------------------------------------------ */

export function FinalCta() {
  return (
    <section id="join" className="pb-14 pt-14 sm:pb-20 sm:pt-28">
      <div className={wrap}>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0B1530] px-5 py-12 text-white ring-white/10 dark:ring-1 sm:rounded-[2rem] sm:px-12 sm:py-14 lg:py-20">
            <div aria-hidden className="absolute -right-32 -top-32 h-[26.25rem] w-[26.25rem] rounded-full bg-[#2F5FED] opacity-35 blur-[120px]" />
            <div className="relative max-w-[35rem]">
              <h2 className="text-[1.875rem] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[2.75rem]">Be first in line when Escardia launches</h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-white/70">
                Join the waitlist for early access and launch offers. We will email you the day the app goes live.
              </p>
              <div className="mt-8">
                <WaitlistForm source="footer-cta" />
              </div>
              <div className="mt-4">
                <StoreBadges center />
              </div>
            </div>
            <Image
              src="/images/hero-car.png"
              alt=""
              width={674}
              height={553}
              sizes="40vw"
              className="float-y pointer-events-none absolute -right-10 bottom-0 hidden h-auto w-[36%] max-w-[26rem] opacity-90 lg:block"
            />
          </div>
        </Reveal>
        <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-[0.875rem] text-muted">
          Own luxury cars?{" "}
          <Link href="#vendors" className="group inline-flex items-center gap-1 font-semibold text-primary">
            Become a vendor <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </p>
      </div>
    </section>
  );
}
