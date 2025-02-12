import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
const section = [
  { title: "Leads Dashboard", ref: "article1", index: 1 },
  { title: "Perfil de Lead", ref: "article2", index: 2 },
  { title: "Process Dashboard", ref: "article3", index: 3 },
  { title: "Perfil de cliente", ref: "article4", index: 4 },
  { title: "Agreements Console", ref: "article5", index: 5 },
  { title: "Administración de Servicios", ref: "article6", index: 6 },
];
function CrmLeadsDashboard() {
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
          CRM
        </span>
        <h2
          id="article1"
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
        <div id="article2" className="mt-6">
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
        <div id="article3" className="mt-6">
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
        <div id="article4" className="mt-6">
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
        <div id="article5" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Agreements Console
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <span>1. Creación de plantillas de contratos</span>
            <ol className="px-8 mt-4 mb-4">
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
                Selecciona los tres puntos en la esquina superior derecha del
                template y da click en crear.
              </li>
              <ol className="px-8 mt-4 mb-4">
                <li className="before:content-['I.'] before:mr-2">
                  Selecciona el cliente.
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Si deseas modificar algo, hazlo antes de guardar.
                </li>
                <li className="before:content-['III.'] before:mr-2">
                  Coloca el nombre del contrato.
                </li>
                <li className="before:content-['IV.'] before:mr-2">Guarda.</li>
              </ol>

              <br />
              <li className="before:content-['b.'] before:mr-2">
                Si deseas editar el contrato, da click en los tres puntos en la
                esquina superior derecha, después en show, cambia y guarda.
              </li>
              <br />
              <li className="before:content-['c.'] before:mr-2">
                Si deseas imprimir, da click en print y se abrirá en una nueva
                pestaña para mandar a imprimir.
              </li>
              <br />
            </ol>
          </article>
        </div>
        {/*ARTICLE 6 */}
        <div id="article6" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Administración de Servicios
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>1. Servicios </p>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Alta de servicio, selecciona el “+”, después servicio y llena el
                formulario.
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Para visualizar, editar o eliminar el servicio, da click en el
                botón de “i”.
              </li>
              <ol className="px-8 mt-4 mb-4">
                <li className="before:content-['I.'] before:mr-2">
                  Selecciona el cliente.
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Si deseas modificar algo, hazlo antes de guardar.
                </li>
                <li className="before:content-['III.'] before:mr-2">
                  Coloca el nombre del contrato.
                </li>
                <li className="before:content-['IV.'] before:mr-2">Guarda.</li>
              </ol>
              <li className="before:content-['c.'] before:mr-2">
                Crear una entrevista dentro del servicio
              </li>
              <ol className="px-8 mt-4 mb-4">
                <li className="before:content-['a.'] before:mr-2">
                  Da click en el botón de “+” en la tarjeta de interview.
                </li>
                <li className="before:content-['b.'] before:mr-2">
                  Dale un nombre a la entrevista.
                </li>
                <li className="before:content-['c.'] before:mr-2">
                  Después agrega las preguntas.
                </li>
                <li className="before:content-['d.'] before:mr-2">Guarda.</li>
                <li className="before:content-['e.'] before:mr-2">
                  Para consultarla, da click en el botón “show”.
                </li>
              </ol>
            </ol>

            <p>2. Categorías</p>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Alta de categoría, selecciona el “+”, después categoría y llena
                el formulario.
              </li>
              <br />
              <li className="before:content-['b.'] before:mr-2">
                Para visualizar, editar o eliminar la categoría, da click en el
                botón de “i”.
              </li>

              <ol className="px-8 mt-4 mb-4">
                <li className="before:content-['I.'] before:mr-2">
                  Para editar la información, da click en los 3 puntos a un
                  costado de "category information" y modifica la información,
                  después guarda.
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Para eliminar el servicio, da click en el botón rojo “Delete
                  service”.
                </li>
                <li className="before:content-['III.'] before:mr-2">
                  Para agregar un servicio nuevo a la categoría, da click en el
                  botón “+”, selecciona el servicio y guarda.
                </li>
                <li className="before:content-['IV.'] before:mr-2">
                  Para eliminar un servicio por individual, da click en el botón
                  de “basurero”.
                </li>
              </ol>
            </ol>

            <p>3. Membresías</p>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Alta de membresía, selecciona el “+”, después membresía y llena
                el formulario
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Para visualizar o editar la membresía, da click en el botón de
                “i”.
              </li>
              <ol className="mt-4 mb-4 px-8">
                <li className="before:content-['I.'] before:mr-2">
                  Para editar la información, da click en los 3 puntos a un
                  costado de "membership information" y modifica la información,
                  después guarda.
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Para agregar un servicio nuevo a la membresía, da click en el
                  botón “+”, selecciona el servicio y guarda.
                </li>
                <li className="before:content-['III.'] before:mr-2">
                  Para eliminar un servicio por individual, da click en el botón
                  de “basurero”.
                </li>
              </ol>
            </ol>
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

export default CrmLeadsDashboard;
