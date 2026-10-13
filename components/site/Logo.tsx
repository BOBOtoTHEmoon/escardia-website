import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 46 28" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M0 15.6326H9.1936L12.1593 21.5639H3.26224L0 15.6326Z" />
      <path d="M45.0781 15.6326H35.8845L32.9188 21.5639H41.8159L45.0781 15.6326Z" />
      <path d="M11.3718 1.50661C11.5626 1.07933 11.9869 0.804199 12.4549 0.804199H32.3416C32.7975 0.804199 33.213 1.0654 33.4106 1.47618L36.5496 8.00067C36.9285 8.78824 36.3545 9.70123 35.4806 9.70123H9.54015C8.68072 9.70123 8.1065 8.81579 8.45704 8.0311L11.3718 1.50661Z" />
      <path d="M14.5417 26.8004C14.7343 27.2237 15.1565 27.4954 15.6215 27.4954H29.2728C29.7256 27.4954 30.1388 27.2376 30.3381 26.8311L32.9189 21.564H12.1592L14.5417 26.8004Z" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Escardia home" className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white">
        <LogoMark className="w-[1.375rem] text-[#0D1A3F]" />
      </span>
      <span className="text-[1.0625rem] font-semibold tracking-[0.18em]">ESCARDIA</span>
    </Link>
  );
}
