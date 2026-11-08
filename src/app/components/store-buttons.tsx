import { useTranslation } from "react-i18next";

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.etoundi.ovuma";
export const APP_STORE_URL = "https://apps.apple.com/fr/app/ov%C3%BAm%C3%A1/id6818912260";

interface StoreButtonsProps {
  /** "dark" : boutons canopée sur fond clair · "light" : boutons clairs sur fond sombre */
  tone?: "dark" | "light";
  className?: string;
}

function PlayIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.62c-.02-2.3 1.88-3.41 1.97-3.46-1.07-1.57-2.74-1.78-3.33-1.8-1.42-.14-2.77.83-3.49.83-.72 0-1.83-.81-3.01-.79-1.55.02-2.98.9-3.78 2.29-1.61 2.8-.41 6.94 1.16 9.21.77 1.11 1.68 2.36 2.88 2.31 1.16-.05 1.59-.75 2.99-.75 1.4 0 1.79.75 3.01.72 1.24-.02 2.03-1.13 2.79-2.25.88-1.29 1.24-2.54 1.26-2.6-.03-.01-2.42-.93-2.45-3.71zM14.08 5.87c.64-.77 1.07-1.85.95-2.92-.92.04-2.03.61-2.69 1.38-.59.68-1.11 1.78-.97 2.83 1.02.08 2.07-.52 2.71-1.29z" />
    </svg>
  );
}

export function StoreButtons({ tone = "dark", className = "" }: StoreButtonsProps) {
  const { t } = useTranslation();
  const base =
    "inline-flex items-center gap-3 pl-4 pr-5 py-2.5 rounded-xl transition-colors focus-visible:outline-2";
  const style =
    tone === "dark"
      ? "bg-foreground text-background hover:bg-primary"
      : "bg-background text-foreground hover:bg-secondary";

  const stores = [
    { href: PLAY_STORE_URL, icon: <PlayIcon />, top: t("hero.available_on"), name: "Google Play" },
    { href: APP_STORE_URL, icon: <AppleIcon />, top: t("hero.available_on"), name: "App Store" },
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {stores.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={`${base} ${style}`}>
          {s.icon}
          <span className="text-left leading-tight">
            <span className="block text-[11px] opacity-80">{s.top}</span>
            <span className="block text-sm font-semibold">{s.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
