import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface BetaSignupModalProps {
  children: React.ReactNode;
}

export function BetaSignupModal({ children }: BetaSignupModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [system, setSystem] = useState<"android" | "ios">("android");
  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);

  const handleClose = (val: boolean) => {
    setOpen(val);
    if (!val) setTimeout(() => setSubmitted(false), 300);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
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
    <>
      <div onClick={handleOpen} className="cursor-pointer contents">
        {children}
      </div>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          {!submitted ? (
            <>
              <DialogHeader className="text-center sm:text-left">
                <DialogTitle
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t("beta.title")}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-1">
                  {t("beta.subtitle")}
                </DialogDescription>
              </DialogHeader>

              <form
                name="beta-signup"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-2"
              >
                <input type="hidden" name="form-name" value="beta-signup" />
                <input type="hidden" name="bot-field" />

                {/* Prénom */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstname" className="text-sm font-medium">
                    {t("beta.firstname")}
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    placeholder={t("beta.firstname_placeholder")}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("beta.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("beta.email_placeholder")}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                </div>

                {/* Système */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">{t("beta.system")}</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSystem("android")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        system === "android"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-input hover:border-primary/50"
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Android
                    </button>
                    <button
                      type="button"
                      onClick={() => setSystem("ios")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        system === "ios"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-input hover:border-primary/50"
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      iOS
                    </button>
                    <input type="hidden" name="system" value={system} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : null}
                  {t("beta.submit")}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  {t("beta.privacy_note")}
                </p>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
              <CheckCircle2 size={52} className="text-primary" />
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("beta.success_title")}
              </h2>
              <p className="text-muted-foreground text-sm max-w-xs">
                {t("beta.success_message")}
              </p>
              <button
                onClick={() => handleClose(false)}
                className="mt-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
              >
                {t("beta.success_close")}
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
