"use client";
import { FormEvent, useState } from "react";
import { ArrowRight, CircleCheck, LoaderCircle, Mail } from "lucide-react";
import { joinWaitlist } from "@/lib/supabase";

const EMAIL = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;

/** Email waitlist form. Saves to Supabase and shows the result in place. */
export default function WaitlistForm({ tone = "dark", source }: { tone?: "dark" | "light"; source: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "already">("idle");
  const [error, setError] = useState("");
  const dark = tone === "dark";

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) return setError("Please enter a valid email address.");
    setError("");
    setState("loading");
    const r = await joinWaitlist(email.trim(), source);
    if (!r.ok) {
      setState("idle");
      return setError(r.error || "Something went wrong. Please try again.");
    }
    setState(r.already ? "already" : "done");
  }

  if (state === "done" || state === "already") {
    return (
      <div
        role="status"
        className={`flex items-start gap-3 rounded-2xl border p-4 ${dark ? "border-white/15 bg-white/[0.06] text-white" : "border-line bg-surface text-ink"}`}
      >
        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#4ADE80]" />
        <div>
          <p className="font-semibold">{state === "done" ? "You are on the list." : "You are already on the list."}</p>
          <p className={`text-sm ${dark ? "text-white/70" : "text-muted"}`}>
            We will email {email.trim()} the moment Escardia is live in Lagos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="w-full">
      <div
        className={`flex flex-col gap-2 rounded-2xl border p-1.5 sm:flex-row sm:items-center ${
          dark ? "border-white/15 bg-white/[0.06] focus-within:border-white/40" : "border-line bg-surface focus-within:border-primary"
        } transition-colors`}
      >
        <label className="flex flex-1 items-center gap-2.5 px-3">
          <Mail className={`h-[1.125rem] w-[1.125rem] shrink-0 ${dark ? "text-white/50" : "text-muted"}`} />
          <span className="sr-only">Email address</span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="Your email address"
            className={`h-12 w-full bg-transparent text-[0.9375rem] outline-none ${dark ? "text-white placeholder:text-white/45" : "text-ink placeholder:text-muted"}`}
          />
        </label>
        <button
          type="submit"
          disabled={state === "loading"}
          className="shine group flex h-12 items-center justify-center gap-2 rounded-xl bg-[#2F5FED] px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[#2350d6] disabled:opacity-70"
        >
          {state === "loading" ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <>Join the waitlist <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></>}
        </button>
      </div>
      <p aria-live="polite" className={`mt-2 min-h-5 text-center text-sm sm:text-left ${error ? "text-[#F87171]" : dark ? "text-white/55" : "text-muted"}`}>
        {error || "No spam. One email when we launch, and early access offers."}
      </p>
    </form>
  );
}
