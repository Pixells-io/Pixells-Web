import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./layouts/Menu";

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
        path: "/contacto",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Landing/Contact"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/soporte",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Landing/Support"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/terminos-y-condiciones",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Landing/TermsConditions"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/aviso-de-privacidad",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Landing/PrivacyNotice"
          );
          return {
            Component,
          };
        },
      },
    ],
  },
  {
    path: "/checkout",
    lazy: async () => {
      const { default: Component } = await import(
        "./pages/Checkout/CheckoutForm"
      );
      return {
        Component,
      };
    },
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
