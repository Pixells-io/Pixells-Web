import React, { useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function GeneralPurchansing() {
  const section = [
    {
      index: 1,
      title: "Compras General",
      subsections: [
        { title: "Crear una nueva compra", ref: "article1" },
        { title: "Agregar Items al documento de compra", ref: "article2" },
        { title: "¿Cómo ver las compras creadas?", ref: "article3" },
        { title: "¿Puedo eliminar o cancelar una compra?", ref: "article4" },
      ],
    },
  ];

  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
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
        <div id="article1" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            COMPRAS GENERALES
          </span>
          <article className="mt-4 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este submódulo es muy importante ya que nos ayudará a abastecer de
              inventarios la compañía y a registrar cualquier tipo de gasto. Al
              realizar una compra, tendremos dos se detonarán dos acciones muy
              importantes dentro del flujo operativo del sistema:
            </p>
            <br />
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Entrada de mercancía pendiente{" "}
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Cuenta por pagar al proveedor
              </li>
            </ol>
            <br />
            <p>
              Por ello, es importante solo generar este movimiento cuando se ha
              confirmado la compra al proveedor.
            </p>
          </article>
        </div>

        {/*ARTICLE 1 */}
        <div  className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Crear una nueva compra</p>
            <br />
            <p>El documento nuevo de compra se divide en dos secciones:</p>
            <br />
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Información general de la compra, contiene los siguientes campos
              </li>
              <ol class="px-8">
                <li class="before:content-['a.'] before:mr-2">
                  Folio de compra (código consecutivo no editable)
                </li>
                <li class="before:content-['b.'] before:mr-2">
                  Proveedor, seleccionar el proveedor al que se le hará la
                  compra
                </li>
                <li class="before:content-['c.'] before:mr-2">
                  Almacén, al que se planea llegará el inventario de la compra
                </li>
                <li class="before:content-['d.'] before:mr-2">
                  Fecha de documento, cuando se pretende quede hecho el registro
                </li>
                <li class="before:content-['e.'] before:mr-2">
                  Fecha de entrega esperada
                </li>
                <li class="before:content-['f.'] before:mr-2">Tipo de pago</li>
                <ol className="px-8">
                  <li class="before:content-['I.'] before:mr-2">Contado</li>
                  <li class="before:content-['II.'] before:mr-2">
                    Crédito, seleccionar la recurrencia en cómo se cobrará el
                    monto y la fecha de vencimiento de la venta
                  </li>
                </ol>
              </ol>
              <br />
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Seleccionar Producto, Servicio o Combo.
              </li>
            </ol>
            <br />
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
              El combo es un conjunto de servicios que se agregan de forma
              simultánea, sin embargo, se pueden eliminar o modificar sus
              precios de forma individual, dentro del documento de venta.
            </p>
          </article>
        </div>

        {/*ARTICLE 2 */}
        <div  className="mt-6">
          <article id="article2" className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">
              Agregar Items al documento de compra
            </p>
            <br />
            <p>
              Para agregar items dentro de la venta, es necesario presionar el
              boton “+”.
            </p>
            <br />
            {/*INSERTAR IMAGEN */}

            <p>
              Se pueden agregar productos, servicios y combos en el mismo
              documento de compra.
            </p>
            <br />
            <p>
              Se colocará de forma automática la información que contenga cada
              producto o servicio con relación a los siguientes datos maestros:
            </p>
            <br />
            <ul className="list-disc px-12">
              <li>Código</li>
              <li>Precio por unidad</li>
              <li>Impuesto</li>
            </ul>
            <br />
            <p>
              Por último, es de suma importancia indicar la cantidad a comprar
              de cada ítem y si alguna fecha de entrega cambiará de forma
              particular.
            </p>
            <br />
            <p>
              Una vez llenada esta información, se pueden agregar observaciones
              adicionales que el proveedor podrá visualizar en el documento que
              se le entregará.
            </p>
            <br />
            <p>Para finalizar, presionamos el botón “Guardar”.</p>
            <br />
          </article>
        </div>

        {/*ARTICLE 3 */}
        <div id="article3" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">¿Cómo ver las compras creadas?</p>
            <br />
            <p>La tabla muestra:</p>
            <br />
            <ol className="list-disc px-12">
              <li>El número de documento o folio de cada compra.</li>
              <li>
                Factura del proveedor (En caso de que se haya registrado en
                facturas de proveedor).
              </li>
              <li>Código de proveedor.</li>
              <li>Nombre de proveedor.</li>
              <li>Importe Total.</li>
              <li>Impuesto.</li>
              <li>Fecha del documento.</li>
              <li>Usuario que creó el movimiento.</li>
              <li>Estatus.</li>
              <li>Acciones.</li>
            </ol>
            <br />
            <p>
              Al presionar el ícono de acciones “tres puntos”, mostrará tres
              opciones:
            </p>
            <br />
            <ol className="list-disc px-12">
              <li>Detalles del pedido</li>
              <li>Imprimir</li>
              <li>Cancelar</li>
            </ol>
            <br />
            <p>
              Al presionar el botón de “impresora”, se visualizará el PDF del
              documento para poder descargarlo, imprimirlo o compartirlo por
              correo electrónico o a algún usuario interno a través del chat.
            </p>
            <br />
          </article>
        </div>

        {/*ARTICLE 4 */}
        <div id="article4" className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">¿Puedo eliminar o cancelar una compra?
            </p>
            <br />
            <p>Las compras, solo se pueden cancelar.</p>
            <br />
            <p>
            Es necesario ingresar al documento y en la parte inferior derecha de la pantalla encontrarás el botón para “cancelar documento”.
            </p>
          </article>
        </div>
      </ScrollArea>
      <section className="hidden md:block col-span-4 w-full max-h-[90vh] px-8 py-6">
        <ScrollArea className="h-full">
          <div className="flex flex-col space-y-4">
            {section.map((item) => (
              <div key={item.index} className="flex flex-col">
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

                {showMenu === item.index && (
                  <div className="flex flex-col px-8 items-start space-y-5">
                    {item.subsections.map((subsection, idx) => (
                      <button
                        key={subsection.ref}
                        onClick={() => scrollToArticle(subsection.ref, idx)}
                        className={`px-3 py-2 font-roboto font-normal text-[14px] 
                                  ${activeButton === idx ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}`}
                      >
                        {subsection.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>
    </div>
  );
}

export default GeneralPurchansing;
