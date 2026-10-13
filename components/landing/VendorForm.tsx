"use client";
import { FormEvent, useState } from "react";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { registerVendor } from "@/lib/supabase";

const FLEET = ["1 car", "2 to 4", "5 to 9", "10 or more"];
const EMAIL = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;

type Fields = { firstName: string; lastName: string; phone: string; email: string; businessName: string; fleetSize: string };
const EMPTY: Fields = { firstName: "", lastName: "", phone: "", email: "", businessName: "", fleetSize: "" };

export default function VendorForm() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields | "form", string>>>({});
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const set = (k: keyof Fields) => (v: string) => {
    setF((p) => ({ ...p, [k]: v }));
    if (errors[k] || errors.form) setErrors((e) => ({ ...e, [k]: undefined, form: undefined }));
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!f.firstName.trim()) next.firstName = "Enter your first name.";
    if (f.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a phone number we can call.";
    if (!EMAIL.test(f.email.trim())) next.email = "Enter a valid email address.";
    if (!f.fleetSize) next.fleetSize = "Choose how many cars you have.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setState("loading");
    const r = await registerVendor({ ...f, email: f.email.trim() });
    if (!r.ok) {
      setState("idle");
      return setErrors({ form: r.error || "Something went wrong. Please try again." });
    }
    setState("done");
  }

  if (state === "done") {
    return (
      <div role="status" className="flex flex-col items-center px-4 py-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[#DCFCE7] text-[#15803D]">
          <CircleCheck className="h-7 w-7" />
        </span>
        <p className="mt-4 text-[1.25rem] font-semibold text-ink">Thanks, {f.firstName.trim()}.</p>
        <p className="mt-2 max-w-[20rem] text-[0.9375rem] text-muted">
          Our vendor team will call you on {f.phone.trim()} before launch to get your cars listed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" value={f.firstName} onChange={set("firstName")} error={errors.firstName} autoComplete="given-name" />
        <Field label="Last name" value={f.lastName} onChange={set("lastName")} autoComplete="family-name" optional />
      </div>
      <Field label="Phone number" type="tel" value={f.phone} onChange={set("phone")} error={errors.phone} autoComplete="tel" placeholder="0803 000 0000" />
      <Field label="Email" type="email" value={f.email} onChange={set("email")} error={errors.email} autoComplete="email" />
      <Field label="Business name" value={f.businessName} onChange={set("businessName")} autoComplete="organization" optional />

      <fieldset>
        <legend className="mb-2 text-[0.875rem] font-medium text-ink">How many cars do you have?</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {FLEET.map((o) => {
            const on = f.fleetSize === o;
            return (
              <button
                key={o}
                type="button"
                onClick={() => set("fleetSize")(o)}
                aria-pressed={on}
                className={`h-11 rounded-xl border text-[0.875rem] font-medium transition-colors ${
                  on ? "border-primary bg-primary-soft text-primary" : "border-line bg-surface text-text hover:border-primary/50"
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
        {errors.fleetSize && <p className="mt-1.5 text-[0.8125rem] text-[#DC2626]">{errors.fleetSize}</p>}
      </fieldset>

      {errors.form && <p className="rounded-xl bg-[#FEF2F2] px-3 py-2.5 text-[0.875rem] text-[#B91C1C]">{errors.form}</p>}

      <button
        type="submit"
        disabled={state === "loading"}
        className="shine group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2F5FED] text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[#2350d6] disabled:opacity-70"
      >
        {state === "loading" ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <>Register interest <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></>}
      </button>
      <p className="text-center text-[0.8125rem] text-muted">We only use these details to contact you about listing on Escardia.</p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  optional,
  type = "text",
  autoComplete,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  optional?: boolean;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-[0.875rem] font-medium text-ink">
        {label}
        {optional && <span className="text-[0.75rem] font-normal text-muted">Optional</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`h-12 w-full rounded-xl border bg-surface px-3.5 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-primary ${
          error ? "border-[#DC2626]" : "border-line"
        }`}
      />
      {error && <span className="mt-1.5 block text-[0.8125rem] text-[#DC2626]">{error}</span>}
    </label>
  );
}
