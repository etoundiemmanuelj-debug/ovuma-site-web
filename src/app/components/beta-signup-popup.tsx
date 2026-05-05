import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BetaSignupPopup() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [system, setSystem] = useState<"android" | "ios">("android");
  const { t } = useTranslation();

  useEffect(() => {
    if (sessionStorage.getItem("beta-popup-dismissed")) return;
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("beta-popup-dismissed", "1");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 w-80 rounded-2xl shadow-2xl border border-border bg-background overflow-hidden"
        >
          {/* Header toujours visible */}
          <div
            className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground cursor-pointer select-none"
            onClick={() => !submitted && setExpanded((v) => !v)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">📱</span>
              <span className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                {t("beta.popup_teaser")}
              </span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); dismiss(); }}
              className="rounded-full p-0.5 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Fermer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Corps expansible */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 py-4">
                  {!submitted ? (
                    <form
                      name="beta-signup"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-3"
                    >
                      <input type="hidden" name="form-name" value="beta-signup" />
                      <input type="hidden" name="bot-field" />

                      <input
                        name="firstname"
                        type="text"
                        required
                        placeholder={t("beta.firstname_placeholder")}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      />

                      <input
                        name="email"
                        type="email"
                        required
                        placeholder={t("beta.email_placeholder")}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      />

                      {/* Sélecteur Android / iOS */}
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setSystem("android")}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs font-medium transition-all ${
                            system === "android"
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-input hover:border-primary/50"
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                          Android
                        </button>
                        <button
                          type="button"
                          onClick={() => setSystem("ios")}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs font-medium transition-all ${
                            system === "ios"
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-input hover:border-primary/50"
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          iOS
                        </button>
                        <input type="hidden" name="system" value={system} />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all disabled:opacity-60"
                      >
                        {loading && <Loader2 size={15} className="animate-spin" />}
                        {t("beta.submit")}
                      </button>

                      <p className="text-center text-xs text-muted-foreground">
                        {t("beta.privacy_note")}
                      </p>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center gap-3 py-4 text-center">
                      <CheckCircle2 size={40} className="text-primary" />
                      <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                        {t("beta.success_title")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("beta.success_message")}
                      </p>
                      <button
                        onClick={dismiss}
                        className="mt-1 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all"
                      >
                        {t("beta.success_close")}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
