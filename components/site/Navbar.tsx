"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#security", label: "Security" },
  { href: "/#vendors", label: "For vendors" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-white/10 bg-[#0B1530]/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-[75rem] items-center justify-between px-5 text-white sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group relative rounded-lg px-3.5 py-2 text-[0.875rem] font-medium text-white/75 transition-colors hover:text-white">
                {l.label}
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-[#9DB4FF] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/#join"
            className="shine hidden h-10 items-center rounded-xl bg-white px-4 text-[0.875rem] font-semibold text-[#0D1A3F] transition-colors hover:bg-[#E8EEFE] sm:flex"
          >
            Join the waitlist
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="h-[calc(100dvh-4.5rem)] bg-[#0B1530] px-5 pb-8 pt-2 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 text-[1.125rem] font-medium text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#join"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-12 items-center justify-center rounded-xl bg-white text-[0.9375rem] font-semibold text-[#0D1A3F]"
          >
            Join the waitlist
          </Link>
        </div>
      )}
    </header>
  );
}
