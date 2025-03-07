import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";

function BranchPOS() {
  const sections = [
    {
      index: 1,
      title: "Sucursales punto de venta",
      ref: "article1",
      subsections: [
        { title: "Principal", ref: "article1.1" },
        { title: "General", ref: "article1.2" },
        { title: "Cajas", ref: "article1.3" },
        { title: "Usuarios", ref: "article1.4" },
        { title: "Pago", ref: "article1.5" },
        { title: "Facturas y recibos", ref: "article1.6" },

      ],
    },
  ];

  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(0);
  const scrollAreaRef = useRef(null);

  return (
    <div className="w-full h-full max-h-[90vh] grid grid-cols-8 md:grid-cols-12 md:gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <ScrollArea
        ref={scrollAreaRef}
        className="w-full h-full col-span-8 px-2 md:px-6 py-2"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          INVENTARIOS
        </span>

        <div id="article1" className="mt-6">
          <span className="font-poppins text-[16px] text-grisHeading">
            Sucursales punto de venta
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El sistema permite la creación y gestión de múltiples sucursales
              de punto de venta, lo que facilita la administración centralizada
              de operaciones en distintos establecimientos. Cada sucursal puede
              configurarse con su propia lista de precios, inventario, usuarios
              y reportes de ventas, permitiendo una gestión independiente pero
              integrada dentro del mismo sistema. Esto garantiza un mejor
              control sobre el stock, la facturación y la atención al cliente en
              cada ubicación, optimizando la operatividad del negocio.
            </p>
            <br />
            <p>
              Para crear una nueva sucursal, presiona el botón “nuevo” en la
              parte superior derecha de la pantalla.
            </p>
            <br />
            <p>
              A continuación es necesario llenar los campos obligatorios de la
              primer sección:
            </p>
            <br />
          </article>
        </div>

        <div id="article1.1" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Principal</p>
            <br />
            <ol>
                <li className="before:content-['1.'] before:mr-2">Nombre de la sucursal</li>
                <li className="before:content-['2.'] before:mr-2">Almacén al que estará integrada</li>
                <li className="before:content-['3.'] before:mr-2">Centro de costos al que representará</li>
                <li className="before:content-['4.'] before:mr-2">Listas de precios: selecciona las listas de precios que estarán disponibles en el punto de venta</li>
            </ol>
          </article>
        </div>
        <div id="article1.2" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">General</p>
            <br />
            <p>Se puede agregar el domicilio de la sucursal</p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">Calle</li>
              <li className="before:content-['2.'] before:mr-2">
                No. exterior
              </li>
              <li className="before:content-['3.'] before:mr-2">
                No. interior
              </li>
              <li className="before:content-['4.'] before:mr-2">Colonia</li>
              <li className="before:content-['5.'] before:mr-2">Ciudad</li>
              <li className="before:content-['6.'] before:mr-2">Estado</li>
              <li className="before:content-['7.'] before:mr-2">
                Código Postal
              </li>
              <li className="before:content-['8.'] before:mr-2">País</li>
            </ol>
          </article>
        </div>
        <div id="article1.3" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Cajas</p>
            <br />
            <p>
              El sistema permite tener varias cajas dentro de una sucursal, para
              ello solo es necesario presionar el botón agregar dentro de esta
              sucursal y posteriormente llena los siguientes datos:
            </p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Nombre de la caja
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Número de serie
              </li>
              <li className="before:content-['3.'] before:mr-2">
                La posición que será encargada de la caja
              </li>
            </ol>
          </article>
        </div>
        <div id="article1.4" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Usuarios</p>
            <br />
            <p>
              En esta sección se agregan los usuarios que podrán ingresar a la
              sucursal
            </p>
            <br />
            <p>
              Da click en el botón “Agregar” y elige los usuarios necesarios,
              después toca el botón aceptar. Más tarde, se pueden agregar más
              usuarios, si fuera necesario.
            </p>
            <br />
            <p>
              Al agregar el usuario, el sistema nos proporciona el nombre, la
              posición o el puesto y debemos agregar:
            </p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                PIN de 4 dígitos para ingresar a la caja
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Selecciona la caja a la que el usuario tendrá acceso
              </li>
            </ol>
            <br />

            <p>Al finalizar con estos ajustes, presiona “Guardar”</p>
            <br />
          </article>
        </div>
        <div id="article1.5" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Pago</p>
            <br />
            <p>
              Habilita las formas de pago que estarán disponibles dentro de
              dicha sucursal. Para agregar una sucursal, toca el botón
              “agregar”. A continuación selecciona el método de pago que será
              incorporado al sistema de la sucursal.
            </p>
            <br />
            <p>
              En los casos de tarjeta de crédito, transferencia y depósito, será
              necesario escoger la cuenta a la que ingresarán los pagos.
            </p>
            <br />
            <p>
              Por último, agrega un porcentaje de comisión bancaria, en caso de
              que sea necesario.
            </p>
            <br />
          </article>
        </div>
        <div id="article1.6" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Facturas y recibos</p>
            <br />
            <p>
              Podemos configurar algunos aspectos para la impresión del ticket
              de venta, con los siguientes valores:
            </p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Encabezado y pie de página para el ticket. Se redactan por
                separado, al momento de escribir el texto deseado, se mostrará
                un previsualizador.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Marque esta casilla para incluir un código QR en el ticket de
                impresión.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Habilite la casilla para activar la impresión automática del
                ticket.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Marque esta casilla para activar el código de autofacturación y
                permitir que el cliente genere su factura en la plataforma.
              </li>
            </ol><br />
            <p>
            Al finalizar la configuración de todas las secciones, presiona el botón “Guardar” para registrar todos los cambios realizados.
            </p>
          </article>
        </div>
      </ScrollArea>

      <SectionNavigation
        sections={sections}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        scrollAreaRef={scrollAreaRef}
      />
    </div>
  );
}

export default BranchPOS;
