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
      {
        path: "/ayuda",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Knowledge"
          );
          return {
            Component,
          };
        },
    
      }
    ],
  },
  {
    path: "/checkout",
    lazy: async () => {
      const { default: Component } = await import(
        "./pages/Checkout/CheckoutPage"
      );
      return {
        Component,
      };
    },
  },
  {
    path: "/gracias",
    lazy: async () => {
      const { default: Component } = await import(
        "./pages/Checkout/ThankYouPage"
      );
      return {
        Component,
      };
    },
  },
  {
    path: "/primeros-pasos",
    lazy: async () => {
      const { default: Component } = await import(
        "./pages/FirstInformation/MainInformation"
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
