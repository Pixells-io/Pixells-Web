import React, { useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

function QuoteGeneral() {
  const section = [
    {
      index: 1,
      title: "Pedidos de compra",
      ref: "article1",
      subsections: [],
    },
    {
      index: 2,
      title: "Función Convertir en Pedido",
      ref: "article2",
      subsections: [],
    },
    {
        index: 3,
        title: "Función Convertir en Compra",
        ref: "article3",
        subsections: [],
      },
  ];

  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(0);
  const scrollAreaRef = useRef(null);

  const scrollToArticle = (articleId, buttonIndex) => {
    const article = document.getElementById(articleId);

    if (scrollAreaRef.current && article) {
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );

      if (viewport) {
        const scrollPosition = article.offsetTop;

        viewport.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });

        setActiveButton(buttonIndex);
      }
    }
  };
  return (
    <div className="w-full h-full max-h-[90vh] grid grid-cols-8 md:grid-cols-12 md:gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <ScrollArea
        ref={scrollAreaRef}
        className="w-full h-full col-span-8 px-6 py-2"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          COMPRAS
        </span>
        {/*ARTICLE 1 */}
        <div id="article1" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Cotización de Compra
          </span>
          <article className="mt-4 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Las cotizaciones de compra son una forma de generar una referencia
              de una posible compra a un proveedor. Esto no afecta los
              inventarios ni las cuentas de pago de un proveedor.{" "}
            </p>
            <br />
            <p>
              Se construyen, visualizan y editan de la misma forma que una
              compra.
              <Link
                to="/ayuda/compras-general"
                className="hover:text-[#008EF9]"
              >
                ver referencia (compras)
              </Link>
            </p>
            <br />
            <p>
              Sin embargo, cuentan con dos funciones adicionales para convertir
              la cotización en un pedido o directamente en una compra.
            </p>
            <br />
          </article>
        </div>
        <div id="article2" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
          Función Convertir en Pedido
          </span>
          <article className="mt-4 font-roboto font-light text-[14px] text-grisHeading">
           <p>
           Al presionar el botón “Convertir en pedido”, se generará una copia de la cotización pero como un nuevo pedido, que automatiza todo el proceso de creación de un pedido nuevo y toma como referencia la cotización previamente creada.

           </p><br />
           <p>El sistema pedirá una confirmación de si se desea convertir la cotización en un pedido, al confirmar se creará el pedido con base en la cotización.
           </p><br />
           <p>
           El estatus de la cotización cambiará  a “aceptada”.

           </p><br />
          </article>
        </div>
        <div id="article3" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Función Convertir en compra
          </span>
          <article className="mt-4 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Al presionar el botón “Convertir en Compra”, se generará una copia
              del pedido pero como una nueva creación de venta, que automatiza
              todo el proceso de creación de una compra nueva y toma como
              referencia el pedido previamente creado.
            </p>
            <br />
            <p>
              Es necesario seleccionar el proveedor y las condiciones de pago
              para continuar.
            </p>
            <br />
            <p>
              Si se desea confirmar la compra, presiona el botón “Guardar” para
              generar una compra nueva, tomando como referencia el pedido.
            </p>
            <br />
            <p>El estatus del pedido cambiará a “compra creada”.</p>
            <br />
          </article>
        </div>
      </ScrollArea>
      <section className="hidden md:block col-span-4 w-full max-h-[90vh] px-8 py-6">
        <ScrollArea className="h-full">
          <div className="flex flex-col space-y-4">
            {section.map((item, idx) => (
              <div key={item.index} className="flex flex-col">
                {/* Botón para la sección principal */}
                <button
                  onClick={() => setShowMenu(item.index)}
                  className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
              ${
                showMenu === item.index
                  ? "border-l border-[#000000] text-grisHeading font-semibold"
                  : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
              }`}
                >
                  {item.title}
                </button>

                {/* Sub-secciones, si existen */}
                {showMenu === item.index && item.subsections && (
                  <div className="flex flex-col px-8 items-start space-y-5">
                    {item.subsections.map((subsection, subIdx) => (
                      <button
                        key={subsection.ref}
                        onClick={() => scrollToArticle(subsection.ref, subIdx)}
                        className={`px-3 py-2 font-roboto font-normal text-[14px] 
                    ${activeButton === subIdx ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}
                  `}
                      >
                        {subsection.title}
                      </button>
                    ))}
                  </div>
                )}

                {/* Botón único de la sección si no tiene subsecciones */}
                {!item.subsections && (
                  <button
                    onClick={() => scrollToArticle(item.ref, idx)}
                    className={`px-3 py-2 font-roboto font-normal text-[14px] text-left
                ${
                  activeButton === idx
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
                  >
                    {item.title}
                  </button>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>
    </div>
  );
}

export default QuoteGeneral;
