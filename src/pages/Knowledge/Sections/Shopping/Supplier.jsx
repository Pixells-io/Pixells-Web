import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
function Supplier() {
  const section = [
    {
      index: 1,
      title: "Proveedores",
      subsections: [{ title: "¿Cómo crear un proveedor?", ref: "article1" }],
    },
    {
      index: 2,
      title: "Sección Información",
      subsections: [
        { title: "Principal", ref: "article2" },
        { title: "Información de Facturación", ref: "article3" },
        { title: "Condiciones de Pago", ref: "article4" },
      ],
    },
  ];

  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
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
          COMPRAS
        </span>
        {/*ARTICLE 1 */}
        <div className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El módulo de compras te permitirá gestionar proveedores y
              aplicarles compras, pedidos de compra y cotizaciones de compra
              para poder crecer los ingresos de tu empresa. También podrán
              crearse contratos, dar seguimiento a los servicios activos en
              clientes y más funciones.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span
            id="article1"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            Proveedores
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">¿Como crear un proveedor?</p>
            <br />
            <p>
              Un proveedor, es un socio de negocios al cual le podremos ejecutar
              compras de productos, gastos y servicios, tener comunicación a
              traves de Whatsapp API y correos electrónicos y demás actividades.
            </p>
            <br />
            <p>
              Para agregar un proveedor, da click en el botón “nuevo” en la
              parte superior derecha.
            </p>
            <br />
            <p>
              A continuación selecciona, algunas de las dos formas de dar de
              alta un proveedor:
            </p>
            <br />
            <ul class="list-disc px-8">
              <li>Nuevo Proveedor</li>
              <li>Cliente Existente</li>
            </ul>
            <br />
            <p>
              Al seleccionar un nuevo proveedor, entrarás a la vista del perfil
              de un proveedor.
            </p>
            <br />

            <p>
              Al seleccionar cliente existente, en caso de que un socio de
              negocios se haya dado de alta primero como proveedor, será
              necesario seleccionar el nombre, dar clic en guardar y ahora
              estará guardado con la información que previamente tenía en
              existencia, dentro de la lista de proveedores.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 3 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Sección Información
          </span>
          <article
            id="article2"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <p>
              Para guardar un proveedor nuevo, será necesario llenar la
              siguiente información:
            </p>
            <br />
            <span className="font-semibold">Principal</span>
            <br />
            <br />
            <ul class="list-disc px-8">
              <li>Código se genera de forma automática *</li>
              <li>Nombre del cliente *</li>
              <li>No de identificación (RFC) *</li>
              <li>Tipo de Cliente</li>
              <li>Moneda (preferencia de moneda para generar transacciones)</li>
              <li>
                Grupo de Proveedor (en caso de haber creado grupos de
                proveedores)
              </li>
            </ul>
            <br />

            <span className="font-semibold">General</span>
            <br />
            <br />
            <ul class="list-disc px-8">
              <li>Calle *</li>
              <li>Número Interior *</li>
              <li>Número Exterior *</li>
              <li>Colonia *</li>
              <li>Estado *</li>
              <li>Código Postal *</li>
              <li>País *</li>
              <li>Encargado de Compras *</li>
              <li>Comentarios</li>
            </ul>
            <br />
            <span className="font-semibold">Contactos</span>
            <br />
            <p>
              Puedes agregar los contactos necesarios relacionados al mismo
              cliente presionando el botón “Agregar”.
            </p>
            <br />
            <p>Llena los siguientes campos:</p>
            <br />
            <ul class="list-disc px-8">
              <li>Nombre</li>
              <li>Apellido Paterno</li>
              <li>Apellido Materno</li>
              <li>Correo Electrónico</li>
              <li>Teléfono</li>
              <li>Posición</li>
            </ul>
            <br />
            <p>
              Cuando hayas agregado más de un contacto, selecciona cuál será el
              contacto principal de preferencia.
            </p>
            <br />
            <p>
              Si desea eliminar un contacto, presione el botón eliminar al
              costado inferior derecho del contacto y confirme.
            </p>
            <br />

            <span
            id="article3"
              className="font-semibold"
            >
              Información de Facturación
            </span>
            <br />
            <p>
              Puedes agregar los contactos necesarios relacionados al mismo
              cliente presionando el botón “Agregar”.
            </p>
            <br />
            <p>Llena los siguientes campos:</p>
            <br />
            <ul class="list-disc px-8">
              <li>Nombre</li>
              <li>Apellido Paterno</li>
              <li>Apellido Materno</li>
              <li>Correo Electrónico</li>
              <li>Teléfono</li>
              <li>Posición</li>
            </ul>
            <br />
            <p>
              Cuando hayas agregado más de un contacto, selecciona cuál será el
              contacto principal de preferencia.
            </p>
            <br />
            <p>
              Si desea eliminar un contacto, presione el botón eliminar al
              costado inferior derecho del contacto y confirme.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 4 */}
        <div className="mt-6">
          <article
            id="article4"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <p className="font-semibold">Condiciones de Pago</p>
            <p>
              <br />
              <ul class="list-disc px-8">
                <li>
                  Condiciones: Crédito o Contado (Esto aparecerá por default en
                  las ventas, pedidos y cotizaciones) *
                </li>
                <li>
                  Porcentaje de intereses por retraso: Colocar porcentaje *
                </li>
              </ul>
              <br />
              En caso de seleccionar Crédito en las condiciones:
            </p>
            <br />
            <ul class="list-disc px-8">
              <li>Días de crédito *</li>
              <li>Límite de crédito *</li>
            </ul>
          </article>
        </div>
      </ScrollArea>
      <section className="col-span-4 w-full max-h-[90vh] px-8 py-6">
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

export default Supplier;
