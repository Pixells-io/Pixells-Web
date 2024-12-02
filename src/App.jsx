import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./layouts/Menu";
import TermsConditions from "./pages/Landing/TermsConditions";
import PrivacyNotice from "./pages/Landing/PrivacyNotice";
import CheckoutForm from "./pages/Checkout/CheckoutForm";

//Layouts

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Landing/HomePage"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/terminos-y-condiciones",
        element: <TermsConditions />,
      },
      {
        path: "/aviso-de-privacidad",
        element: <PrivacyNotice />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutForm />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
