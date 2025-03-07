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
        path: "/modulos",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Landing/Modules"
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
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Organization/UserManagement"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/control",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Organization/ControlUsers"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/project-manager",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/ProjectManager/WorkSpace"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/crm",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/CRM/CrmGeneral"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/crm-oportunity",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/CRM/CrmOportunity"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/crm-general",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/CRM/CrmHome"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/crm-leads",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/CRM/CrmLeadsDashboard"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/induction",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Induction/Induction"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/capacitation",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Induction/Capacitation"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/tickets-general",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Ticket/Tickets"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/chat-general",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Chat/ChatGeneral"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/ventas",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Sales/Sales"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/tickets",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Sales/Tickets"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/orden",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Sales/Request"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/cotizacion",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Sales/Quote"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/seguimiento",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Sales/FollowServices"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/proveedor",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Shopping/Supplier"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/compras-general",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Shopping/GeneralPurchasing"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/pedidos-de-compra",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Shopping/PrepurchasedOrder"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/cotizacion-de-compra",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Shopping/QuoteGeneral"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/inventario",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Inventory/InventoryGeneral"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/servicios",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Inventory/ServiceGeneral"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/almacenes",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Inventory/Warehouse"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/movimientos",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Inventory/Movements"
          );
          return {
            Component,
          };
        },
      },
      {
        path: "/ayuda/entrega-de-mercancias",
        lazy: async () => {
          const { default: Component } = await import(
            "./pages/Knowledge/Sections/Inventory/DeliveryGood"
          );
          return {
            Component,
          };
        },
      },
    ]

  }

 
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
