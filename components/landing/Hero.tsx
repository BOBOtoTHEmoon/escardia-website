"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, CalendarDays, Car, CircleCheck, CreditCard, MapPin, ShieldCheck, UserRound } from "lucide-react";
import WaitlistForm from "@/components/site/WaitlistForm";
import StoreBadges from "@/components/site/StoreBadges";

const TRUST = [
  { Icon: BadgeCheck, title: "ID-checked vendors", body: "Every vendor’s identity and business documents are checked." },
  { Icon: Car, title: "Approved cars", body: "Every car and its photos are reviewed before it goes live." },
  { Icon: CreditCard, title: "Protected payments", body: "Pay through Paystack. Vendors are paid after your trip." },
];

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1530] text-white">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-[75rem] px-5 pt-[7rem] sm:px-8 lg:pt-[9.5rem]">
        <div className="lg:grid lg:min-h-[32rem] lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative z-10 max-w-[37.5rem]">
            <motion.h1 {...up(0)} className="text-[2.375rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[3.25rem] lg:text-[3.625rem]">
              Luxury cars with a{" "}
              <span className="bg-gradient-to-r from-[#9DB4FF] via-[#C7D4FF] to-[#7C9BFF] bg-clip-text text-transparent">professional driver</span>, booked in minutes.
            </motion.h1>
            <motion.p {...up(0.08)} className="mt-5 max-w-[32.5rem] text-[1rem] leading-relaxed text-white/70 sm:text-[1.0625rem]">
              Choose from premium cars listed by vetted vendors. Every trip comes with a driver, add security when you need it, and pay safely in the app.
            </motion.p>
            <motion.div {...up(0.16)} className="mt-8 max-w-[32.5rem]">
              <WaitlistForm source="hero" />
            </motion.div>
            <motion.div {...up(0.22)} className="mt-4">
              <StoreBadges center />
            </motion.div>
          </div>

          {/* Car, flush to the right edge of the screen */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative -mr-5 mt-12 sm:-mr-8 lg:absolute lg:right-[min(0rem,calc(37.5rem-50vw))] lg:top-[11rem] lg:mr-0 lg:mt-0 lg:w-[38rem] 2xl:w-[42rem]"
          >
            <div className="float-y relative ml-auto w-[92%] sm:w-[80%] lg:w-full">
              {/* Soft glow and a floor shadow so the car sits on something */}
              <div aria-hidden className="absolute inset-x-[10%] bottom-[6%] h-[18%] rounded-[50%] bg-black/70 blur-2xl" />
              <div aria-hidden className="absolute left-[15%] top-[25%] h-1/2 w-1/2 rounded-full bg-[#2F5FED]/40 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <Image
                src="/images/hero-car.png"
                alt="White luxury SUV"
                width={674}
                height={553}
                priority
                quality={95}
                sizes="(min-width: 1024px) 680px, 90vw"
                className="relative h-auto w-full contrast-[1.06] saturate-[1.05] transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:scale-[1.02]"
              />
            </div>
            <TripCard />
          </motion.div>
        </div>

        {/* Trust row: three across, even on phones */}
        <div className="relative z-10 mt-14 grid grid-cols-3 gap-3 border-t border-white/10 py-8 sm:gap-6 sm:py-10 lg:mt-20">
          {TRUST.map(({ Icon, title, body }) => (
            <div key={title} className="group flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3.5 sm:text-left">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-[#9DB4FF] transition-all duration-300 group-hover:bg-[#2F5FED] group-hover:text-white group-hover:shadow-[0_0_24px_rgba(47,95,237,0.6)]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.8125rem] font-semibold leading-snug sm:text-[0.9375rem]">{title}</p>
                <p className="mt-0.5 hidden text-[0.875rem] leading-relaxed text-white/60 sm:block">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Moving light behind the hero: drifting glows, a rolling road grid, passing light streaks and a spotlight that follows the cursor. */
function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
        el.style.setProperty("--spot", "1");
      });
    };
    const leave = () => el.style.setProperty("--spot", "0");
    const host = el.parentElement!;
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  const streaks = [
    { top: "22%", dur: "7s", delay: "0s" },
    { top: "38%", dur: "9s", delay: "2.5s" },
    { top: "57%", dur: "6.5s", delay: "4s" },
    { top: "71%", dur: "8s", delay: "1.2s" },
    { top: "84%", dur: "10s", delay: "5.5s" },
  ];

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Drifting glows */}
      <div className="blob-a absolute -right-[10%] -top-[30%] h-[44rem] w-[44rem] rounded-full bg-[#2F5FED] opacity-40 blur-[140px]" />
      <div className="blob-b absolute -bottom-[35%] -left-[15%] h-[36rem] w-[36rem] rounded-full bg-[#4338CA] opacity-35 blur-[130px]" />
      <div className="blob-c absolute left-[35%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-[#0EA5E9] blur-[120px]" />

      {/* Static grid near the top, rolling road grid at the bottom */}
      <div className="navy-grid absolute inset-0" />
      <div className="road absolute -left-1/2 bottom-[-10%] h-[50%] w-[200%] opacity-30" />

      {/* Passing light streaks */}
      {streaks.map((s) => (
        <span key={s.top} className="streak hidden opacity-70 md:block" style={{ top: s.top, animationDuration: s.dur, animationDelay: s.delay }} />
      ))}

      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: "var(--spot, 0)",
          background: "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(120,150,255,0.14), transparent 60%)",
        }}
      />

      {/* Fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0B1530]" />
    </div>
  );
}

/** A booking as it looks in the app, floating over the car. */
function TripCard() {
  const rows = [
    { Icon: CalendarDays, label: "Sat, 10:00 · 2 days" },
    { Icon: MapPin, label: "Delivered to Lekki Phase 1" },
    { Icon: UserRound, label: "Driver assigned" },
    { Icon: ShieldCheck, label: "2 security personnel" },
  ];
  return (
    <div className="absolute bottom-[-1.5rem] left-0 w-[14.5rem] rounded-2xl bg-white p-3.5 text-[#0B1530] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:rotate-[-1deg] sm:w-[15.5rem] lg:bottom-[3rem] lg:left-[-2rem]">
      <p className="text-[0.875rem] font-semibold">Range Rover Evoque</p>
      <p className="text-[0.75rem] text-[#64748B]">With driver</p>
      <ul className="mt-2.5 hidden space-y-1.5 border-t border-[#E2E8F0] pt-2.5 sm:block">
        {rows.map(({ Icon, label }) => (
          <li key={label} className="flex items-center gap-2 text-[0.75rem] text-[#334155]">
            <Icon className="h-3.5 w-3.5 text-[#2F5FED]" /> {label}
          </li>
        ))}
      </ul>
      <div className="mt-2.5 flex items-center justify-between rounded-xl bg-[#F5F7FB] px-2.5 py-2">
        <span className="flex items-center gap-1.5 whitespace-nowrap text-[0.75rem] font-medium text-[#15803D]">
          <CircleCheck className="h-3.5 w-3.5" /> Confirmed
        </span>
        <span className="whitespace-nowrap text-[0.75rem] font-semibold">Paid in app</span>
      </div>
    </div>
  );
}
