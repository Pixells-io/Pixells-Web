import { IonIcon } from "@ionic/react";
import { cogOutline, settingsSharp } from "ionicons/icons";
import React, { useRef, useState } from "react";

function Sales() {
  const sections = [
    {
      id: 1,
      title: "¿Cómo crear un cliente?",
      subsections: [{ title: "Descripción", ref: useRef(null) }],
    },
    {
      id: 2,
      title: "Sección Información",
      subsections: [
        { title: "Principal", ref: useRef(null) },
        { title: "Información de Facturación", ref: useRef(null) },
        { title: "Condiciones de Pago", ref: useRef(null) },
      ],
    },
    {
      id: 3,
      title: "Sección Resumen",
      subsections: [
        { title: "Ventas Realizadas", ref: useRef(null) },
        { title: "Cobros Realizados", ref: useRef(null) },
        { title: "Devoluciones", ref: useRef(null) },
        { title: "Saldos Generales", ref: useRef(null) },
        { title: "Rewards", ref: useRef(null) },
      ],
    },
    {
      id: 4,
      title: "Sección Actividad",
      subsections: [
        { title: "Servicios Activos", ref: useRef(null) },
        { title: "Documentos", ref: useRef(null) },
        { title: "Seguimientos", ref: useRef(null) },
        { title: "Comentarios", ref: useRef(null) },
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
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Clientes
          </span>
          {/*ARTICLE 1 */}
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El módulo de ventas te permitirá gestionar clientes y aplicarles
              ventas, pedidos de venta y cotizaciones de venta para poder crecer
              los ingresos de tu empresa.{" "}
            </p>
            <br />
            <p>
              También podrán crearse contratos, dar seguimiento a los servicios
              activos en clientes y más funciones.
            </p>
            <br />

            <span
              ref={sections[0].subsections[0].ref}
              className="font-semibold"
            >
              ¿Como crear un cliente?
            </span>
            <br />
            <p>
              Un cliente, es un socio de negocios al cual le podremos ejecutar
              ventas de productos y servicios, asociarle contratos, tener
              comunicación a traves de Whatsapp API y correos electrónicos y
              demás actividades.
            </p>
            <br />
            <p>
              Para agregar un cliente, da click en el botón “nuevo” en la parte
              superior derecha.
            </p>
            <br />
            {/*INSERT IMAGE */}
            <p>
              A continuación selecciona, algunas de las dos formas de dar de
              alta un cliente:
            </p>
            <ul className="mt-4 mb-4 list-disc list-inside">
              <li>Nuevo Cliente</li>
              <li>Proveedor Existente</li>
            </ul>
            <p>
              Al seleccionar un nuevo cliente, entrarás a la vista del perfil de
              un cliente.
            </p>
            <br />
            <p>
              Al seleccionar proveedor existente, en caso de que un socio de
              negocios se haya dado de alta primero como proveedor, será
              necesario seleccionar el nombre, dar clic en guardar y ahora
              estará guardado con la información que previamente tenía en
              existencia, dentro de la lista de clientes.
            </p>
            <br />
            <p>La vista de un cliente se divide en 3 secciones principales</p>
            <br />
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span
            ref={sections[1].subsections[0].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Sección Información
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para guardar un cliente nuevo, será necesario llenar la siguiente
              información:
            </p>
            <br />
            <p className="font-semibold">Principal</p>
            <ul className="mt-4 mb-4 px-8 list-disc list-inside">
              <li>Código se genera de forma automática *</li>
              <li>Nombre del cliente *</li>
              <li>Tipo de Cliente</li>
              <li>No de identificación (RFC) *</li>
              <li>Moneda (preferencia de moneda para generar transacciones)</li>
              <li>
                Grupo de Proveedor (en caso de haber creado grupos de
                proveedores)
              </li>
            </ul>

            <p className="font-semibold">General</p>
            <ul className="mt-4 mb-4 px-8 list-disc list-inside">
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

            <p className="font-semibold">Contactos</p>
            <br />
            <p>
              Puedes agregar los contactos necesarios relacionados al mismo
              cliente presionando el botón “Agregar”.
            </p>
            <br />
            <p>Llena los siguientes campos:</p>
            <br />
            <ul className="mb-4 px-8 list-disc list-inside">
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
        {/*ARTICLE 3 */}
        <div className="mt-6">
          <span
            ref={sections[1].subsections[1].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Información de Facturación
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Puedes agregar los contactos necesarios relacionados al mismo
              cliente presionando el botón “Agregar”.
            </p>
            <br />
            <p>Llena los siguientes campos:</p>
            <br />
            <ul className="px-8 mb-4 list-disc list-inside">
              <li>Nombre</li>
              <li>Apellido Paterno</li>
              <li>Apellido Materno</li>
              <li>Correo Electrónico</li>
              <li>Teléfono</li>
              <li>Posición</li>
            </ul>
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
          <span
            ref={sections[1].subsections[2].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Condiciones de Pago
          </span>
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <ul className="mt-4 mb-4 list-disc list-inside">
              <li>
                Condiciones: Crédito o Contado (Esto aparecerá por default en
                las ventas, pedidos y cotizaciones) *
              </li>
              <li>Porcentaje de intereses por retraso: Colocar porcentaje *</li>
            </ul>

            <p>En caso de seleccionar Crédito en las condiciones:</p>
            <ul className="mt-4 mb-4 list-disc list-inside">
              <li>Días de crédito *</li>
              <li>Límite de crédito *</li>
            </ul>
          </article>
        </div>
        {/*ARTICLE 5 */}
        <div className="mt-6">
          <span className="font-roboto font-semibold text-[14px] text-grisHeading">
            Sección Resumen
          </span>
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En esta sección podremos encontrar 5 apartados de visualización de
              información de los movimientos generados con un cliente:
            </p>
            <br />
            <span
              ref={sections[2].subsections[0].ref}
              className="font-semibold"
            >
              Ventas Realizadas
            </span>
            <p>
              Encontramos todo el resumen de ventas que hemos hecho a un
              cliente. La tabla nos proporciona información como:
            </p>
            <ul className="mt-4 mb-4 list-disc list-inside">
              <li>Número de documento de la operación</li>
              <li>La cantidad de SKUs vendidos</li>
              <li>Cantidad de productos vendidos</li>
              <li>Monto de la operación</li>
              <li>Estatus de la venta</li>
              <li>Usuario que generó la venta</li>
              <li>Fecha en que se realizó la venta</li>
              <li>Por último, podemos acceder al documento de la venta</li>
            </ul>
          </article>
        </div>
        {/*ARTICLE 6 */}
        <div className="mt-6">
          <span
            ref={sections[2].subsections[1].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Cobros Realizados
          </span>
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Encontramos todo el resumen de cobros que hemos hecho a un cliente
              relacionados a diferentes ventas. La tabla nos proporciona
              información como:
            </p>
            <ul className="mt-4 mb-4 list-disc list-inside">
              <li>Número de documento de la operación</li>
              <li>Monto del documento</li>
              <li>Monto cobrado</li>
              <li>Saldo pendiente por cobrar</li>
              <li>Estatus general del documento</li>
              <li>Fecha de cobro del movimiento</li>
              <li>
                Por último, podemos acceder al documento del movimiento de cobro
              </li>
            </ul>
          </article>
        </div>
        {/*ARTICLE 7 */}
        <div className="mt-6">
          <span
            ref={sections[2].subsections[2].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Devoluciones
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Aquí encontraremos el listado de las devoluciones que nos ha hecho
              un cliente. La tabla nos proporciona información como:
            </p>
            <ul className="mt-4 mb-4 list-disc list-inside">
              <li>Número de documento de la operación</li>
              <li>Cantidad de productos devueltos</li>
              <li>Monto de la devolución</li>
              <li>Tipo de devolución: Parcial o completa</li>
              <li>Fecha del movimiento</li>
              <li>
                Por último, podemos acceder al documento del movimiento de
                devolución
              </li>
            </ul>
          </article>
        </div>
        {/*ARTICLE 8 */}
        <div className="mt-6">
          <span
            ref={sections[2].subsections[3].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Saldos Generales
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En este apartado podemos visualizar los saldos que ha generado un
              socio de negocio, ya sea como cliente o proveedor a su vez. La
              tabla nos proporciona información como:
            </p>
            <br />
            <span>1. Ventas</span>
            <ol>
              <li className="before:content-['a.'] before:mr-2">
                Ventas realizadas (socio de negocio como cliente)
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Número de ventas realizadas
                </li>
                <li className="before:content-['II.'] before:mr-2">Monto</li>
              </ol>

              <li className="before:content-['b.'] before:mr-2">
                Cobros realizados
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Número de cobros efectuados
                </li>
                <li className="before:content-['II.'] before:mr-2">Monto</li>
              </ol>

              <li className="before:content-['c.'] before:mr-2">
                Balance de ambos conceptos
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Monto Total
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Estatus: Por cobrar o a favor del cliente
                </li>
              </ol>
            </ol>
            <span>2. Compras</span>
            <ol>
              <li className="before:content-['a.'] before:mr-2">
                Compras realizadas (socio de negocio como proveedor)
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Número de compras realizadas
                </li>
                <li className="before:content-['II.'] before:mr-2">Monto</li>
              </ol>

              <li className="before:content-['b.'] before:mr-2">
                Pagos realizados
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Número de pagos efectuados
                </li>
                <li className="before:content-['II.'] before:mr-2">Monto</li>
              </ol>

              <li className="before:content-['c.'] before:mr-2">
                Balance de ambos conceptos
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Monto Total
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Estatus: Por pagar o a favor mío
                </li>
              </ol>
            </ol>
            <span>3. Saldos Generales</span>
            <ol>
              <li className="before:content-['a.'] before:mr-2">
                En las ventas
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Saldo general
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Estatus: Por cobrar o A favor del cliente
                </li>
              </ol>

              <li className="before:content-['b.'] before:mr-2">
                En las compras
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Saldo general
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Estatus: Por pagar o A favor mío
                </li>
              </ol>

              <li className="before:content-['c.'] before:mr-2">
                Balance General
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Monto total de Balance
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Estatus: A favor mío o A favor del socio de negocio
                </li>
              </ol>
            </ol>
            {/*ARTICLE 9 */}
            <div className="mt-6">
              <span
                ref={sections[2].subsections[4].ref}
                className="font-roboto font-semibold text-[14px] text-grisHeading"
              >
                Rewards
              </span>
              <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
                <p>
                  En este apartado podemos encontrar el resumen de las compras
                  realizadas por clientes terceros usando el código reward del
                  cliente seleccionado. La tabla nos proporciona información
                  como:
                </p>
                <br />
                <ul className="mt-4 mb-4 list-disc list-inside">
                  <li>Número de documento de la operación</li>
                  <li>Cantidad de productos devueltos</li>
                </ul>
              </article>
            </div>
          </article>
        </div>

        <div className="mt-6">
          <span className="font-roboto font-semibold text-[14px] text-grisHeading">
            Sección Actividad
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Esta sección te podrá ayudar a visualizar de forma rápida flujo de
              información entre el sistema y el cliente, en 4 áreas diferentes:
            </p>
            <br />
            <p ref={sections[3].subsections[0].ref} className="font-semibold">
              Servicios Activos
            </p>
            <br />
            <p>
              Son los servicios que están activos actualmente, servicios que se
              vendieron al cliente y se está haciendo un seguimiento de avances.
            </p>
            <br />
            <p ref={sections[3].subsections[1].ref} className="font-semibold">Documentos</p>
            <br />
            <p>
              Son los documentos que se han solicitado y enviado a través de la
              plataforma donde el cliente puede ingresar y ver el avance de los
              servicios contratados y activos.
            </p>
            <br />
            <p>
              Enviados, son los documentos que se han enviado en el sistema y el
              cliente los ve reflejados en su plataforma de cliente.
            </p>
            <br />
            <p>
              Solicitados, que nosotros solicitamos a través del sistema, el
              cliente recibe la solicitud y envía los documentos a través de la
              plataforma de cliente. Nosotros los recibimos en el sistema.
            </p>
            <br />
            <p ref={sections[3].subsections[2].ref} className="font-semibold">Seguimiento</p>
            <br />
            <p>
              Aquí se verá reflejado todo el historial de acciones que se han
              realizado con relación al cliente como agenda de actividades,
              envío de correo, programar un correo, iniciar una conversación,
              solicitud de documento y envío de documento.
            </p>
            <br />
            <p ref={sections[3].subsections[3].ref} className="font-semibold">Comentarios</p>
            <br />
            <p>
              En este apartado, se pueden hacer anotaciones de comentarios,
              imágenes y documentos PDF, para llevar un control de cualquier
              detalle a considerar durante el proceso con el cliente{" "}
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

export default Sales;
