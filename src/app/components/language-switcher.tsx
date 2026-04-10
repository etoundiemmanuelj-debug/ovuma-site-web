import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center gap-1">
      <Globe size={18} className="text-foreground/70" />
      <select
        value={i18n.language}
        onChange={changeLanguage}
        className="bg-transparent text-sm border-none focus:ring-0 cursor-pointer text-foreground outline-none"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}
