import { ScrollArea } from "@/components/ui/scroll-area";
import { IonIcon } from "@ionic/react";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import React, { useRef, useState } from "react";
function MovementsGeneral() {

  const section = [
    {
      index: 1,
      title: "Entradas",
      ref: "article1",
      subsections: [
        { title: "Entradas de mercancias", ref: "article1.1" },
        { title: "Recibir artículos", ref: "article1.2" },
      ],
    },
    {
      index: 2,
      title: "Traspasos de almacén",
      ref: "article2",
      subsections: [
        { title: "Nueva solicitud de traspaso", ref: "article2.1" },
        { title: "Confirmar una solicitud recibida", ref: "article2.2" },
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
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este submódulo es de suma importancia para gestionar todas las
              transacciones que se dividen en tres secciones entradas, salidas y
              traspasos de mercancías.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 1 */}
        <div id="article1.1" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Entradas
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Las entradas por lo general son ingresos de compras o adquisición
              de mercancías al almacén, para después poder a su vez fabricar y
              vender artículos. También podemos generar entradas de mercancías
              por traspasos de mercancías de algún almacén interno o por alguna
              orden de producción.
            </p>
            <br />

            <p> La tabla de entradas se divide en dos partes:</p>
            <br />

            <p>
              Pendientes: son las entradas pendientes, donde se puede visualizar
              todos los ingresos de mercancía que faltan por realizar.
            </p>
            <br />
            <p>
              Entradas: son las entradas realizadas y se puede consultar el
              movimiento dando click al icono “ver”.
            </p>
            <br />
            <p>
              Para agregar una nueva entrada de mercancías provenientes de una
              compra, presiona el botón Nuevo{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />{" "}
              Entradas.
            </p>
            <br />
            <p>
              A continuación, es necesario seleccionar las siguientes opciones:
            </p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">Categoría.</li>
              <li className="before:content-['2.'] before:mr-2">
                Número de pedido.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Almacén donde se ingresará la mercancía.
              </li>
            </ol>
            <p>
              Para el número de pedido, también es posible presionar el botón de
              “QR” para escanear el código QR de la compra y dar ingreso a la
              compra.
            </p>
            <br />
            <p>
              Al momento de ingresar el número del pedido o escanear el código
              QR, el sistema mostrará todos los artículos que incluye la orden.
            </p>
            <br />
            <p>
              Cada fila de la tabla nos arroja información como código del
              articulo, la descripción, check para gestionar por lotes, cantidad
              esperada, cantidad a recibir, lotes y ubicación del almacén.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div id="article1.2" className="mt-6">
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Recibir artículos</p>
            <br />
            <p>
              Para recibir artículos, solo es necesario colocar la cantidad de
              artículos que estamos ingresando en el espacio en blanco en la
              columna “A Recibir”. A continuación presionamos el botón “Guadar”.
            </p>
            <br />
            <p>Podemos tener 3 casos distintos:</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Recibimos tal cual lo que pedimos: la orden se recibirá completa
                y ya no estará activa en la tabla de Entradas Pendientes.
                Tampoco aparecerá el folio disponible de la orden al momento de
                hacer una entrada nueva. El inventario del artículo se
                actualizará de forma inmediata.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Recibimos menos de lo que pedimos: la orden se recibirá
                incompleta y quedará activa en la tabla de Entradas Pendientes,
                para poder recibir los artículos faltantes. El inventario del
                artículo se actualizará de forma inmediata.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Recibimos más de lo que pedimos: la orden se recibirá con
                excedente y ya no estará activa en la tabla de Entradas
                Pendientes. El sistema pedirá confirmación de si...
              </li>
            </ol>
          </article>
        </div>
        {/*ARTICLE 3 */}
        <div id="article2" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Traspasos de almacén
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Los traspasos de almacén son movimientos de mercancías que se
              hacen de un almacén o una bodega a otra, pueden ser por exceso de
              mercancía de un almacén o por faltante de alguno otro.
            </p>
            <br />
            <p>La tabla de traspasos se divide en dos partes:</p>
            <br />
            <p>
              Solicitudes: son los traspasos que tu haz solicitado a otros
              almacenes o que han solicitado a tu almacén.
            </p>
            <br />
            <p>
              Traspasos: son los traspasos realizados y se puede consultar el
              movimiento dando click al icono “ver”.
            </p>
            <br />
          </article>
        </div>

        <div id="article2.1" className="mt-6">
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Nueva solicitud de traspaso</p>
            <br />
            <p>
              Para agregar una nueva solicitud de traspaso, presiona el botón
              Nuevo{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />{" "}
              Traspaso.
            </p>
            <br />
            <p>
              A continuación, es necesario seleccionar las siguientes opciones:
            </p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Fecha de la solicitud
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Almacén saliente
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Almacén entrante
              </li>
            </ol>
            <br />
            <p>
              Posteriormente, agrega los artículos deseados presionando el botón
              “+” del lado izquierdo de la tabla. Selecciona el artículo e
              ingresa las cantidades deseadas del artículo.
            </p>
            <br />
            <p>Repítelo para la cantidad de productos necesarios.</p>
            <br />
            <p>
              Para cancelar el envío de una solicitud, ingresa a la solicitud
              enviada, posteriormente presiona el botón cancelar solicitud. O
              bien, en la tabla de solicitudes, presiona el botón{" "}
              <IonIcon icon={ellipsisVertical} className="text-center px-2" />,
              y seleccionar "Cancelar".
            </p>
          </article>
        </div>

        <div id="article2.2" className="mt-6">
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Confirmar una solicitud recibida</p>
            <br />
            <p>
              {" "}
              En la tabla Solicitudes da click en el botón{" "}
              <IonIcon icon={ellipsisVertical} className="text-center px-2" /> y
              selecciona confirmar, a continuación ingresa las cantidades que se
              están recibiendo de cada artículo. Después presiona “Aceptar”.
            </p>
            <br />
            <p>
              Para rechazar una solicitud recibida, puedes presionar el botón{" "}
              <IonIcon icon={ellipsisVertical} className="text-center px-2" />,
              posteriormente el botón “rechazar” en la parte inferior derecha. O
              bien, en la tabla de solicitudes, presiona el botón{" "}
              <IonIcon icon={ellipsisVertical} className="text-center px-1" />,
              después "Rechazar".
            </p>
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

export default MovementsGeneral;
