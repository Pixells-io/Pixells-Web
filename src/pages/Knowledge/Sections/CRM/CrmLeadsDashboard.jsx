import React, { useRef, useState } from "react";
function CrmLeadsDashboard() {
  const article1Ref = useRef(null);
  const containerRef = useRef(null);

  const [activeButton, setActiveButton] = useState(null);

  const scrollToArticle = (articleRef, buttonIndex) => {
    const container = containerRef.current;
    const article = articleRef.current;

    if (container && article) {
      // Calcular la posición de scroll
      const scrollPosition = article.offsetTop - container.offsetTop;

      // Hacer el scroll
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
        className="w-full max-h-[70vh] overflow-auto col-span-8 px-6 py-10"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CRM
        </span>
        <h2
          ref={article1Ref}
          className="pt-5 font-poppins text-[16px] text-grisHeading"
        >
          Leads Dashboard
        </h2>
        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>Control y Monitoreo de Leads</p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Nuevo Lead: La tarjeta que encontramos en esta etapa es generada
                por la acción de agregar una nueva oportunidad o puede provenir
                del proveedor de generación de leads de forma automatizada.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Cierre: En esta etapa, podrás adjuntar y enviar contratos al
                prospecto y confirmar los servicios que está contratando.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Pago: Una vez que el cliente haya aceptado los contratos, se
                podrá programar el pago para el prospecto y confirmar el inicio
                de los servicios.
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                On Boarding: En esta etapa, confirmamos la información para
                registrar al nuevo cliente y preparar el inicio de los
                servicios. Se mantiene en esta etapa por 5 días para saber que
                tenemos leads confirmados y debemos empezar a gestionar sus
                servicios.
              </li>
              <br />
            </ol>
            <p>
              {" "}
              La información que encontramos dentro de la tarjeta, es la que se
              llena en el formulario cuando mueves la tarjeta del lead de un
              paso a otro. Existe información básica que siempre contendrá la
              tarjeta.{" "}
            </p>
            <br />

            <p>
              En la parte posterior encontrarás información como el nombre del
              lead, el tipo de lead “Individual” o “Business” y el estatus
              “Activo”, “Suspendido”, “Cancelado”, “Finalizado”.
            </p>
            <br />
            <p>
              En la parte inferior, encontraremos un círculo rojo que nos indica
              hace cuantos días se creo el lead, un circulo amarillo que nos
              indica hace cuantos días fue la ultima actualización (si es 0,
              quiere decir que hoy ha sido la ultima actualización, 1 día ayer,
              2 días antier y asi sucesivamente), un icono para generar
              comentarios o notas, la imagen del usuario que aparece en el
              icono, se refiere al ultimo usuario que generó un comentario. El
              comentario incluye fecha y hora.
            </p>
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Perfil de Lead
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Editar un lead: da click en el botón de editar, en la columna
                izquierda, después modifica la información deseada y guarda.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Cambiar el Status: da click en el botón del estatus y selecciona
                el estatus deseado.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Trackea lo que ha sucedido con el lead, paso a paso.
              </li>
              <br />
            </ol>
          </article>
        </div>
        {/*ARTICLE 3 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Process Dashboard
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para agregar un servicio nuevo al dashboard, da click en el botón
              de “+” hasta arriba del dashboard. Una vez que hayas agregado un
              servicio, encontrarás las etapas que previamente generaste en el
              sub módulo de servicios.
            </p>
            <br />
            <span>1. Editar y eliminar una etapa</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Si deseas cambiar un nombre lo puedes hacer dando click en los
                tres puntos dentro del nombre de la etapa de servicios.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Si deseas eliminar una etapa, lo puedes hacer dando click en los
                tres puntos, después eliminar. Siempre y cuando no haya tarjetas
                dentro de la columna.{" "}
              </li>
              <br />
            </ol>
            <p>
              2. Si deseas remover un servicio del dashboard, da click en los
              tres puntos que se encuentran a un costado del nombre del
              servicio. Te preguntará si deseas remover el servicio. Después lo
              puedes volver a agregar al dashboard.
            </p>
            <br />

            <p>
              La información que encontramos dentro de la tarjeta, es la que se
              llena en el formulario cuando mueves la tarjeta del cliente de un
              paso a otro. Existe información básica que siempre contendrá la
              tarjeta.{" "}
            </p>
            <br />

            <p>
              En la parte posterior encontrarás información como el nombre del
              lead, el tipo de cliente “Individual” o “Business” y el estatus
              “Activo” o “Inactivo”
            </p>
            <br />

            <p>
              En la parte inferior, encontraremos un círculo rojo que nos indica
              hace cuantos días se creo el cliente, un circulo amarillo que nos
              indica hace cuantos días fue la ultima actualización (si es 0,
              quiere decir que hoy ha sido la ultima actualización, 1 día ayer,
              2 días antier y asi sucesivamente), un icono para generar
              comentarios o notas, la imagen del usuario que aparece en el
              icono, se refiere al ultimo usuario que generó un comentario. El
              comentario incluye fecha y hora.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 4 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Perfil de cliente
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Editar un cliente: da click en el botón de editar, en la esquina
                superior derecha, después modifica la información deseada y
                guarda.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Para habilitar la plataforma del cliente, selecciona el botón de
                “llave”, después agrega el correo y contraseña y guarda. La
                plataforma del cliente quedará creada. Si deseas editar, vuelve
                a tocar el mismo botón, modifica la información y guarda.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Agrega una dirección adicional: da click en el botón “+” en
                dirección, llena la información y guarda. Da click en el botón
                del basurero para eliminar.
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                Agrega un contacto adicional: da click en el botón “+” en
                contacto, llena la información y guarda. Da click en el botón
                del basurero para eliminar.
              </li>
              <br />
              <li className="before:content-['5.'] before:mr-2">
                Agrega una entrevista, dando click en el botón de “+” en
                entrevista, después selecciona la entrevista y guarda.
              </li>
              <br />
              <li className="before:content-['6.'] before:mr-2">
                Para enviar un documento a la plataforma del cliente, da click
                en el “+” en documentos, después añade el documento y guarda.
              </li>
              <br />
              <li className="before:content-['7.'] before:mr-2">
                Los documentos recolectados, se mostrarán en la tarjeta “Collect
                Documents” y podrás descargarlos presionando el botón de
                “download”.
              </li>
              <br />
              <li className="before:content-['8.'] before:mr-2">
                Para cambiar el estatus, da click en el botón donde aparece el
                estatus, selecciona el nuevo estatus deseado. Para visualizar
                los comentarios y añadir más, presiona el icono de comentario
                dentro de la tabla principal.
              </li>
            </ol>
          </article>
        </div>
        {/*ARTICLE 5 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Agreements Console
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <span>1. Creación de plantillas de contratos</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Da click en el botón “+” a un costado de templates y contratos.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Selecciona el servicio donde deseas guardar el template.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Escribe toda la información dentro del área de trabajo.
              </li>
              <br />
              <li className="before:content-['d.'] before:mr-2">
                Usa las funciones de apoyo para texto y diseño.
              </li>
              <br />
              <li className="before:content-['e.'] before:mr-2">
                Agrega un nombre.
              </li>
              <br />
              <li className="before:content-['f.'] before:mr-2">
                Agrega un comentario.
              </li>
              <br />
              <li className="before:content-['g.'] before:mr-2">
                Guarda el template.
              </li>
            </ol>
            <span>2. Crear contrato a partir de plantilla</span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Da click en el botón “+” a un costado de templates y contratos.
              </li>
            </ol>
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[60vh] overflow-auto px-8 py-6">
        <div className="flex max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <button
            onClick={() => scrollToArticle(article1Ref, 0)}
            className={`px-3 py-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 0
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            {" "}
            Leads Dashboard
          </button>
        </div>
      </section>
    </div>
  );
}

export default CrmLeadsDashboard;
