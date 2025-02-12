import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";

function QuoteGeneral() {
  const section = [
    { title: "Cotización de Venta", ref: "article1", index: 1 },
    { title: "Funcion Convertir en Pedido", ref: "article2", index: 2 },
    { title: "Funcion Convertir en Venta", ref: "article2", index: 3 },
  ];
  const [activeButton, setActiveButton] = useState(0);
  const scrollAreaRef = useRef(null);

  const scrollToArticle = (articleId, buttonIndex) => {
    const article = document.getElementById(articleId);

    if (scrollAreaRef.current && article) {
      // Get the viewport element from the ScrollArea component
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
    <div className="w-full h-full max-h-[90vh] grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <ScrollArea
        ref={scrollAreaRef}
        className="w-full h-full col-span-8 px-6 py-2"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          VENTAS
        </span>
        {/*ARTICLE 1 */}
        <div className="mt-6">
          <span
            id="article1"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            COTIZACIÓN DE VENTA
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Las cotizaciones de venta son una forma de generar una referencia
              de una posible venta a un cliente o un prospecto. Esto no afecta
              los inventarios ni las cuentas de cobro de un cliente.
            </p>
            <br />

            <p>
              Se construyen, visualizan y editan de la misma forma que una
              venta. ver referencia (ventas)
            </p>
            <br />
            <p>
              Sin embargo, cuentan con dos funciones adicionales para convertir
              la cotización en un pedido o directamente en una venta.
            </p>
            <br />
          </article>
        </div>

        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Funcion Convertir en Pedido{" "}
          </span>
          <article
            id="article2"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <p>
              Al presionar el botón “Aceptar cotización”, se generará una copia
              de la cotización pero como un nuevo pedido, que automatiza todo el
              proceso de creación de un pedido nuevo y toma como referencia la
              cotización previamente creada.
            </p>
            <br />
            <p>
              El sistema pedirá una confirmación de si se desea convertir la
              cotización en un pedido, al confirmar se creará el pedido con base
              en la cotización.
            </p>
            <br />
            <p>
              Si se desea confirmar la venta, presiona el botón “Guardar” para
              generar una venta nueva, tomando como referencia el pedido.
            </p>
            <br />
            <p>El estatus de la cotización cambiará a “aceptada”.</p>
            <br />
          </article>
        </div>

        {/*ARTICLE 3 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Función Convertir en venta
          </span>
          <article
            id="article3"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <p>
              Al presionar el botón “Convertir en Venta”, se generará una copia
              del pedido pero como una nueva creación de venta, que automatiza
              todo el proceso de creación de una venta nueva y toma como
              referencia el pedido previamente creado.
            </p>
            <br />
            <p>
              Es necesario seleccionar el cliente y las condiciones de pago para
              continuar.
            </p>
            <br />
            <p>
              Si se desea confirmar la venta, presiona el botón “Guardar” para
              generar una venta nueva, tomando como referencia el pedido.
            </p>
            <br />
            <p>El estatus del pedido cambiará a “venta creada”.</p>
            <br />
          </article>
        </div>
      </ScrollArea>
      <section className="col-span-4 w-full max-h-[90vh] px-8 py-6">
        <ScrollArea className="h-full">
          <div className="flex flex-col space-y-4">
            {section.map((section) => {
              return (
                <button
                  key={section.index}
                  onClick={() => scrollToArticle(section.ref, section.index)}
                  className={`px-3 py-2 font-roboto font-normal text-[14px] text-left
                                  ${
                                    activeButton === section.index
                                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </section>
    </div>
  );
}

export default QuoteGeneral;
