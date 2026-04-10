import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { AboutPage } from "./pages/about-page";
import { BlogPage } from "./pages/blog-page";
import { BoutiquePage } from "./pages/boutique-page";
import { FAQPage } from "./pages/faq-page";
import { ContactPage } from "./pages/contact-page";
import { CGUPage } from "./pages/cgu-page";
import { PolitiqueConfidentialitePage } from "./pages/politique-confidentialite-page";
import { ArticlePage } from "./pages/article-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/a-propos",
    Component: AboutPage,
  },
  {
    path: "/blog",
    Component: BlogPage,
  },
  {
    path: "/blog/:id",
    Component: ArticlePage,
  },
  {
    path: "/boutique",
    Component: BoutiquePage,
  },
  {
    path: "/faq",
    Component: FAQPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/cgu",
    Component: CGUPage,
  },
  {
    path: "/politique-de-confidentialite",
    Component: PolitiqueConfidentialitePage,
  },
]);
