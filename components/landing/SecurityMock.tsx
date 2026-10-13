"use client";
import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

/** Same rule the app and server use: 3 to 7 people need 1 Hilux, 8 or more need 1 per 4 people. */
const hiluxFor = (people: number) => (people <= 2 ? 0 : people <= 7 ? 1 : Math.ceil(people / 4));

/** A working copy of the app's security step. Visitors can tap + and - to try it. */
export default function SecurityMock() {
  const [legion, setLegion] = useState(2);
  const [priv, setPriv] = useState(1);
  const people = legion + priv;
  const hilux = hiluxFor(people);

  const rows = [
    { label: "LEGION personnel", value: legion, set: setLegion },
    { label: "PRIVATE personnel", value: priv, set: setPriv },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between border-b border-white/10 py-3 first:pt-1">
          <span className="text-[0.875rem] font-medium">{r.label}</span>
          <span className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => r.set(Math.max(0, r.value - 1))}
              disabled={r.value === 0}
              aria-label={`Remove one ${r.label}`}
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 text-white/70 transition-all hover:border-white/40 hover:text-white active:scale-90 disabled:opacity-30"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="relative w-4 overflow-hidden text-center text-[0.9375rem] font-semibold" aria-live="polite">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={r.value}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  {r.value}
                </motion.span>
              </AnimatePresence>
            </span>
            <button
              type="button"
              onClick={() => r.set(Math.min(12, r.value + 1))}
              aria-label={`Add one ${r.label}`}
              className="grid h-8 w-8 place-items-center rounded-lg bg-[#2F5FED] transition-all hover:bg-[#4B72F2] hover:shadow-[0_0_16px_rgba(47,95,237,0.8)] active:scale-90"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </span>
        </div>
      ))}
      <div className="flex items-center justify-between pb-1 pt-3">
        <span className="text-[0.875rem] font-medium">Hilux backup</span>
        <span className="flex items-center gap-1.5 text-[0.8125rem] text-[#9DB4FF]">
          {hilux > 0 ? (
            <>
              <Check className="h-4 w-4" /> {hilux} added for {people} people
            </>
          ) : (
            <span className="text-white/50">Not needed</span>
          )}
        </span>
      </div>
      <p className="mt-3 text-[0.75rem] text-white/45">Try it. This is how the security step works in the app.</p>
    </div>
  );
}
