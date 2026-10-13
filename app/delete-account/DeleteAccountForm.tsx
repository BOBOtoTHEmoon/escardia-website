"use client";
import { FormEvent, useState } from "react";
import { CircleCheck, LoaderCircle } from "lucide-react";
import { requestAccountDeletion } from "@/lib/supabase";

const EMAIL = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;
const input =
  "w-full rounded-xl border border-line bg-surface px-3.5 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-primary";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) return setError("Enter the email address on your Escardia account.");
    if (!confirm) return setError("Tick the box to confirm you want your account deleted.");
    setError("");
    setState("loading");
    const r = await requestAccountDeletion(email.trim(), phone.trim(), reason.trim());
    if (!r.ok) {
      setState("idle");
      return setError(r.error || "Something went wrong. Please try again.");
    }
    setState("done");
  }

  if (state === "done") {
    return (
      <div role="status" className="py-6 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#DCFCE7] text-[#15803D]">
          <CircleCheck className="h-6 w-6" />
        </span>
        <p className="mt-4 font-semibold text-ink">Request received</p>
        <p className="mt-1 text-[0.875rem] text-muted">We will email {email.trim()} to confirm it is you before we delete anything.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-[0.875rem] font-medium text-ink">Email address</span>
        <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${input} h-12`} />
      </label>
      <label className="block">
        <span className="mb-1.5 flex justify-between text-[0.875rem] font-medium text-ink">
          Phone number <span className="text-[0.75rem] font-normal text-muted">Optional</span>
        </span>
        <input type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={`${input} h-12`} />
      </label>
      <label className="block">
        <span className="mb-1.5 flex justify-between text-[0.875rem] font-medium text-ink">
          Why are you leaving? <span className="text-[0.75rem] font-normal text-muted">Optional</span>
        </span>
        <textarea rows={3} value={reason} onChange={(e) => setReason(e.target.value)} className={`${input} resize-none py-3`} />
      </label>
      <label className="flex cursor-pointer gap-3 text-[0.875rem] text-text">
        <input type="checkbox" checked={confirm} onChange={(e) => setConfirm(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#2F5FED]" />
        I understand my account and personal data will be permanently deleted.
      </label>
      {error && <p className="text-[0.8125rem] text-[#DC2626]">{error}</p>}
      <button
        type="submit"
        disabled={state === "loading"}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-[#DC2626] text-[0.9375rem] font-semibold text-white transition-colors hover:bg-[#B91C1C] disabled:opacity-70"
      >
        {state === "loading" ? <LoaderCircle className="h-5 w-5 animate-spin" /> : "Request account deletion"}
      </button>
    </form>
  );
}
