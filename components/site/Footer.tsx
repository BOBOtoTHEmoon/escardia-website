import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Logo from "./Logo";
import { InstagramIcon, WhatsAppIcon, XIcon } from "./BrandIcons";

const COLUMNS = [
  {
    title: "Escardia",
    links: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#security", label: "Security" },
      { href: "/#vendors", label: "For vendors" },
      { href: "/support", label: "Help and support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of use" },
      { href: "/vendor-agreement", label: "Vendor agreement" },
      { href: "/delete-account", label: "Delete account" },
    ],
  },
];

const SOCIALS = [
  { href: CONTACT.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: CONTACT.x, label: "X", Icon: XIcon },
  { href: CONTACT.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0B1530] text-white">
      <div className="mx-auto max-w-[75rem] px-5 pb-6 pt-10 sm:px-8 sm:pt-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center justify-between md:block">
              <Logo />
              <div className="flex gap-2 md:mt-5">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-white/12 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F5FED] hover:bg-[#2F5FED] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-3 max-w-[18rem] text-[0.8125rem] leading-relaxed text-white/55">
              Luxury cars with professional drivers, from vetted vendors across Lagos.
            </p>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.title}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/40">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.875rem] text-white/75 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact: two buttons, then email across the full width on phones; a list on desktop */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/40">Contact</p>
            <div className="mt-3 grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-2.5">
              {[
                { href: CONTACT.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon, external: true },
                { href: `tel:${CONTACT.phone}`, label: CONTACT.phoneDisplay, Icon: Phone },
                { href: `mailto:${CONTACT.email}`, label: CONTACT.email, Icon: Mail },
              ].map(({ href, label, Icon, external }, i) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-[0.8125rem] ${i === 2 ? "col-span-2" : ""} text-white/75 transition-colors hover:border-white/25 hover:text-white md:justify-start md:border-0 md:p-0 md:text-[0.875rem]`}
                >
                  <Icon className="h-4 w-4 shrink-0" /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-[0.75rem] text-white/40">
          <p>© {year} Escardia</p>
          <p>Made in {CONTACT.city}</p>
        </div>
      </div>
    </footer>
  );
}
