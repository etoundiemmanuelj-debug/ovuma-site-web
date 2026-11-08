import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CookieBanner } from "./components/cookie-banner";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieBanner />
    </>
  );
}
