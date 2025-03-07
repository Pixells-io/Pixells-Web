import { ScrollArea } from "@/components/ui/scroll-area";
import { IonIcon } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import React, { useRef, useState } from "react";

function DeliveryGood() {
  const section = [
    {
      index: 1,
      title: "Entrega de mercancías",
      ref: "article1",
      subsections: [
        { title: "Confirmar una entrega de mercancía", ref: "article1.1" },
      ],
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
        className="w-full h-full col-span-8 px-2 md:px-6 py-2"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          INVENTARIOS
        </span>

        <div id="article1" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Entrega de mercancías
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Las entregas de mercancías son las órdenes de venta que se deben
              entregar a los clientes. Cuando se realiza una orden de venta,
              automáticamente se genera una salida pendiente del almacén, en
              este caso una entrega de mercancía.
            </p>
            <br />
            <p>En la tabla principal podemos visualizar tres partes:</p>
            <br />
            <p>
              Pendientes: son las entregas que no se han realizado o que se han
              hecho parcialmente. Por lo tanto no se ha descontado el inventario
              del almacén o se ha descontado parcialmente.
            </p>
            <br />
            <p>
              Entregas: son las entregas que se han confirmado y finalizado
              exitosamente. Puede ser la entrega completa o alguna parcialidad.
              Sin embargo, cada movimiento que se registra en la tabla es por la
              cantidad realizada. Si una entrega se hace en dos movimientos, se
              registrarán dos movimientos diferentes en esta tabla.
            </p>
            <br />
            <p>
              Canceladas: Son las entregas que se cancelaron antes de ser
              enviadas al cliente.
            </p>
            <br />
          </article>
        </div>

        <div id="article1.1" className="mt-6">
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Confirmar una entrega de mercancía</p>
            <br />
            <p>
              En la parte de Pendientes en la tabla principal, en el movimiento
              deseado, da click en el botón{" "}
              <IonIcon icon={ellipsisVertical} className="text-center px-2" />,
              lo siguiente será "Realizar entrega".
            </p>
            <br />
            <p>
              En caso de que alguno de los artículos tenga un método de
              valoración de “Lote/serie” el sistema pedirá que gestiones el lote
              a entregar, dando click en gestionar y eligiendo el lote
              correspondiente.
            </p><br />
            <p>Para finalizar, presiona el botón “Guardar” y la entrega será confirmada.
            </p><br />
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

export default DeliveryGood;
