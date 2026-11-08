import { marked } from "marked";
import DOMPurify from "dompurify";
import type { TFunction, i18n as I18n } from "i18next";

// Articles générés par Decap CMS (src/content/blog/*.json)
const contentFiles = import.meta.glob("../../content/blog/*.json", { eager: true });
export const rawPosts: any[] = Object.values(contentFiles).map((file: any) => file.default || file);

/** Traduction si elle existe, sinon la valeur saisie dans le CMS. */
export function tr(t: TFunction, i18n: I18n, key: string, fallback: string) {
  return i18n.exists(key) ? (t(key) as string) : fallback;
}

/** Le CMS enregistre du Markdown ; les traductions contiennent du HTML. marked gère les deux. */
export function renderBody(body: string) {
  return DOMPurify.sanitize(marked.parse(body ?? "", { async: false }) as string);
}

export function capitalize(s?: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}

/** Plus récent d'abord : l'id est incrémenté à chaque nouvel article. */
export function byNewest(a: any, b: any) {
  return Number(b.id) - Number(a.id);
}
