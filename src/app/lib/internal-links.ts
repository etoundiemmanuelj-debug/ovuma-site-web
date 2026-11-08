import { useNavigate } from "react-router";

/**
 * Les contenus HTML injectés (mentions légales, CGU, articles…) contiennent des liens
 * comme <a href="/contact">. On les fait passer par le routeur au lieu de recharger la page.
 */
export function useInternalLinks() {
  const navigate = useNavigate();
  return (e: React.MouseEvent<HTMLElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as HTMLElement).closest("a");
    const href = a?.getAttribute("href");
    if (!a || !href || !href.startsWith("/") || href.startsWith("//") || a.target === "_blank") return;
    e.preventDefault();
    navigate(href);
  };
}
