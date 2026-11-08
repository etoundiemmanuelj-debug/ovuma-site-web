import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { router } from "../routes";

const KEY = "ovuma-consent";
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

/** Ouvre à nouveau le bandeau (lien « Gérer les cookies » du pied de page). */
export function openCookieSettings() {
  window.dispatchEvent(new Event("ovuma:cookies"));
}

export function CookieBanner() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!readChoice()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener("ovuma:cookies", reopen);
    return () => window.removeEventListener("ovuma:cookies", reopen);
  }, []);

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* stockage indisponible : le choix vaut pour cette visite */
    }
    window.gtag?.("consent", "update", { analytics_storage: value });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookies.manage")}
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60] bg-card text-card-foreground border border-border rounded-2xl p-5 shadow-[0_20px_50px_rgba(18,61,43,0.18)]"
    >
      <p className="text-sm leading-relaxed text-foreground">
        {t("cookies.text")}{" "}
        <a
          href="/mentions-legales"
          onClick={(e) => {
            e.preventDefault();
            router.navigate("/mentions-legales");
          }}
          className="text-primary underline underline-offset-2"
        >
          {t("cookies.more")}
        </a>
      </p>
      <div className="flex gap-3 mt-4">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {t("cookies.accept")}
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="px-5 py-2 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors"
        >
          {t("cookies.refuse")}
        </button>
      </div>
    </div>
  );
}
