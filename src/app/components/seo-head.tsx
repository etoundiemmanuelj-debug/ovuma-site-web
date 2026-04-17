import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = "https://ovuma.org";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export function SEOHead({ title, description, keywords, canonical, ogImage }: SEOHeadProps) {
  const fullTitle = `${title} | Ovúmá`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const image = ogImage ?? DEFAULT_IMAGE;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = selector.includes("property")
          ? ["property", selector.match(/property="([^"]+)"/)?.[1] ?? ""]
          : ["name", selector.match(/name="([^"]+)"/)?.[1] ?? ""];
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [fullTitle, description, keywords, canonicalUrl, image]);

  return null;
}
