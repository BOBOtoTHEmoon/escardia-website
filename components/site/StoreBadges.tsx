import { STORES } from "@/lib/site";
import { AppleIcon, PlayIcon } from "./BrandIcons";

const BADGES = [
  { key: "appStore", top: "App Store", Icon: AppleIcon, href: STORES.appStore },
  { key: "googlePlay", top: "Google Play", Icon: PlayIcon, href: STORES.googlePlay },
] as const;

/** App Store and Google Play buttons. They read "Coming soon" until the links in lib/site.ts are filled in. */
export default function StoreBadges({ tone = "dark", center }: { tone?: "dark" | "light"; center?: boolean }) {
  const base =
    tone === "dark"
      ? "border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1]"
      : "border-line bg-surface text-ink hover:border-primary/40";
  return (
    <div className={`flex flex-wrap gap-2.5 sm:gap-3 ${center ? "justify-center sm:justify-start" : ""}`}>
      {BADGES.map(({ key, top, Icon, href }) => {
        const live = !!href;
        const inner = (
          <>
            <Icon className="h-5 w-5 shrink-0" />
            <span className="flex flex-col leading-tight">
              <span className={`text-[0.625rem] ${tone === "dark" ? "text-white/60" : "text-muted"}`}>
                {live ? (key === "appStore" ? "Download on the" : "Get it on") : "Coming soon to"}
              </span>
              <span className="text-[0.875rem] font-semibold">{top}</span>
            </span>
          </>
        );
        const cls = `flex h-12 items-center gap-2.5 rounded-xl border px-3.5 transition-all duration-300 hover:-translate-y-0.5 sm:px-4 ${base}`;
        return live ? (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
            {inner}
          </a>
        ) : (
          <div key={key} className={`${cls} cursor-default`} aria-label={`${top}, coming soon`}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
