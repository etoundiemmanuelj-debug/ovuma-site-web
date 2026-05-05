import { RouterProvider } from "react-router";
import { router } from "./routes";
import { BetaSignupPopup } from "./components/beta-signup-popup";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <BetaSignupPopup />
    </>
  );
}
