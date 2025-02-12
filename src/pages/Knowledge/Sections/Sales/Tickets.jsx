import { IonIcon } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

function TicketsGeneral() {
  const sections = [
    {
      id: 1,
      title: "¿Cómo puedo crear una nueva venta?",
      subsections: [
        { title: "Información general", ref: useRef(null) },
        { title: "Seleccionar Producto, Servicio o Combo.", ref: useRef(null) }
    ],
    },
    {
      id: 2,
      title: "Agregar Items al documento de venta",
      subsections: [
        { title: "Descripcion", ref: useRef(null) },
        
      ],
    },
    {
      id: 3,
      title: "¿Como ver las ventas creadas?",
      subsections: [
        { title: "Descripcion", ref: useRef(null) },
        
      ],
    },
    {
        id: 4,
        title: "¿Puedo eliminar o cancelar una venta?",
        subsections: [
          { title: "Descripcion", ref: useRef(null) },
          
        ],
      },
  ];

  const containerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  const scrollToArticle = (articleRef, buttonIndex) => {
    const container = containerRef.current;
    const article = articleRef.current;

    if (container && article) {
      const scrollPosition = article.offsetTop - container.offsetTop;
      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      setActiveButton(buttonIndex);
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <div
        ref={containerRef}
        className="w-full max-h-[90vh] overflow-auto col-span-8 px-6 py-10"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          VENTAS
        </span>
        {/*ARTICLE 1 */}
        <div className="mt-6">
        <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            TICKETS
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este submódulo es de suma importancia para generar ventas a
              clientes. Al generar un documento a través de este submódulo, a
              diferencia de los pedidos y cotizaciones, se detonarán dos
              acciones muy importantes dentro del flujo operativo del sistema:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Entrega de mercancía pendiente a un cliente
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Cuenta por cobrar a un cliente
              </li>
            </ol>
            <br />
            <p>
              Por ello, es importante solo generar este movimiento cuando un
              cliente ha confirmado una venta.
            </p>
            <br />
          </article>
        </div>

        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            ¿Cómo puedo crear una nueva venta?
          </span>
          <article ref={sections[0].subsections[0].ref} className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para crear una nueva venta, da click en el botón “nuevo” en la
              parte superior derecha.
            </p>
            <br />
            <p>El documento nuevo de venta se divide en dos secciones:</p>
            <br />
            <span>
              1. Información general de la venta, contiene los siguientes campos
            </span>
            <ol className="px-8 mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Folio de venta (código consecutivo no editable)
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Cliente, seleccionar el cliente al que se le aplicará la venta
              </li>
              <li className="before:content-['c.'] before:mr-2">
                Vendedor, por default el usuario del cual se está generando el
                documento
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Condiciones de pago
              </li>
              <ol className="px-8 mt-4 mb-4">
                <li className="before:content-['I.'] before:mr-2">Contado</li>
                <li className="before:content-['II.'] before:mr-2">
                  Crédito, seleccionar la recurrencia en cómo se cobrará el
                  monto y la fecha de vencimiento de la venta
                </li>
              </ol>
              <li className="before:content-['g.'] before:mr-2">
                Lista de precios, en caso de que se desee usar una lista de
                precios previamente elaborada
              </li>
              <li className="before:content-['h.'] before:mr-2">
                Entrega programada de la venta
              </li>
              <li className="before:content-['i.'] before:mr-2">
                Descuento, modificará automáticamente los descuentos de cada uno
                de los ítems que se agreguen. Se pueden modificar a su vez de
                forma individual
              </li>
            </ol>
            <span ref={sections[0].subsections[1].ref}>2. Seleccionar Producto, Servicio o Combo.</span>
            <p>
              Al seleccionar producto o servicio, será lo que el sistema va a
              mostrar cada vez que se quiera agregar un item.
            </p>
            <br />
            <p>
              Por ejemplo, si tengo seleccionado producto, cada vez que agregue
              un item, solo voy a ver productos. En caso de querer agregar
              servicios, debo seleccionar Servicio en la parte superior.
            </p>
            <br />
            <p>
              Al seleccionar Combo, se abrirá una nueva opción para seleccionar
              el combo deseado.
            </p>
            <br />
            <p>
              (El combo, es un conjunto de servicios que se agregan de forma
              simultánea, sin embargo se pueden eliminar o modificar sus precios
              de forma individual, dentro del documento de venta)
            </p>
            <br />
          </article>
        </div>

        {/*ARTICLE 3 */}
        <div className="mt-6">
          <span ref={sections[1].subsections[0].ref} className="font-poppins font-semibold text-[18px] text-grisHeading">
            Agregar Items al documento de venta
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para agregar items dentro de la venta, es necesario presionar el
              boton “+”.
            </p>
            <br />
            <p>
              Se pueden agregar productos, servicios y combos en el mismo
              documento de venta.
            </p>
            <br />
            <p>
              Se colocará de forma automática la información que contenga cada
              producto o servicio con relación a los siguientes datos maestros:
            </p>
            <br />
            <ul className="list-disc ml-4 px-8">
              <li>Código</li>
              <li>Precio por unidad</li>
              <li>Impuesto</li>
            </ul>
            <p>
              Para agregar descuento, se puede agregar de forma general, en la
              parte superior del documento o item por item.
            </p>
            <br />
            <p>
              Por último, es de suma importancia indicar la cantidad a vender de
              cada ítem y si alguna fecha de entrega cambiará de forma
              particular.
            </p>
            <br />
            <p>
              Una vez llenado esta información, se pueden agregar observaciones
              adicionales que el cliente podrá visualizar en el documento que se
              le entregará.
            </p>
            <br />
            <p>Para finalizar, presionamos el botón “Guardar”.</p>
            <br />
          </article>
        </div>
        {/*ARTICLE 4 */}
        <div className="mt-6">
          <span ref={sections[2].subsections[0].ref} className="font-poppins font-semibold text-[18px] text-grisHeading">
            ¿Como ver las ventas creadas?
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Al crear la venta, el sistema te redirigirá a la tabla principal
              de ventas, donde podrás encontrar todas las ventas creadas.
            </p>
            <br />
            <p>La tabla muestra:</p>
            <br />
            <ul className="list-disc px-8 ml-4">
              <li>El número de documento o folio de cada venta</li>
              <li>Fecha de la operación</li>
              <li>El cliente al que se vendió</li>
              <li>Total de la venta</li>
              <li>Estatus</li>
              <li>Usuario que creó la venta</li>
              <li>
                Icono de información para visualizar el documento de venta
              </li>
            </ul>
            <br />

            <p className="inline-flex items-center">
              Al presionar el ícono de información
              <IonIcon
                icon={informationCircleOutline}
                className="text-[18px] text-grisHeading px-2"
              />
              se podrá visualizar el documento creado.
            </p>
            <br />
            <p>
              Una vez ingresando al documento, podrás editar cualquier campo
              presionando el botón editar en la parte superior derecha.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 5 */}
        <div className="mt-6">
          <span ref={sections[3].subsections[0].ref} className="font-poppins font-semibold text-[18px] text-grisHeading">
            ¿Puedo eliminar o cancelar una venta?
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>Las ventas, solo se pueden cancelar.</p>
            <br />
            <p>
              Es necesario ingresar al documento y en la parte inferior derecha
              de la pantalla encontrarás el botón para “cancelar documento”.
            </p>
            <br />
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[90vh] overflow-auto px-8 py-6">
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => setShowMenu(section.id)}
                className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    showMenu === section.id
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
              >
                {section.title}
              </button>

              {showMenu === section.id && (
                <div className="flex flex-col px-8 items-start space-y-5">
                  {section.subsections.map((subsection, index) => {
                    const buttonIndex =
                      sections
                        .slice(0, section.id - 1)
                        .reduce((acc, s) => acc + s.subsections.length, 0) +
                      index;

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          scrollToArticle(subsection.ref, buttonIndex)
                        }
                        className={`px-3 py-2 font-roboto font-normal text-[14px] 
                          ${
                            activeButton === buttonIndex
                              ? "font-medium text-grisHeading"
                              : "text-[#8F8F8F]"
                          }`}
                      >
                        {subsection.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TicketsGeneral;
