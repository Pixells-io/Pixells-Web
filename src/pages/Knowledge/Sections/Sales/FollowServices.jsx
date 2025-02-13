import { ellipsisHorizontal, settingsOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import React, { useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function FollowServices() {
  const section = [
    { title: "Seguimiento de Servicios", ref: "article1", index: 1 },
    {
      title: "¿Cómo puedo usar el dashboard de seguimiento de servicios?",
      ref: "article2",
      index: 2,
    },
    {
      title: "Agregar comentarios, anotaciones e imágenes",
      ref: "article2",
      index: 3,
    },
    { title: "Ver información del cliente", ref: "article2", index: 4 },
  ];
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
     <div className="w-full h-full max-h-[90vh] grid grid-cols-8 md:grid-cols-12 md:gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
         <ScrollArea
           ref={scrollAreaRef}
           className="w-full h-full col-span-8 px-2 md:px-6 py-2"
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
            SEGUIMIENTO DE SERVICIOS
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este submódulo te ayudará a darle seguimiento al proceso de los
              servicios vendidos que están activos.
            </p>
            <br />

            <p>Para dar seguimiento, sigue los siguientes pasos:</p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                En la parte superior de la pantalla, encontrarás un botón de “+”
                donde puedes agregar a tu perfil los servicios que tengas
                registrados en el sistema para darles seguimiento.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Una vez ingresando a uno de los servicios que aparecen en la
                pantalla, puedes empezar a crear pasos o etapas en el proceso
                del servicio, dando click en el botón de “+” que aparece al
                costado derecho de la etapa inicio.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Para agregar la etapa, solo debes llenar la información
                solicitada.
              </li>
              <ol className="px-8">
                <li className="before:content-['a.'] before:mr-2">
                  Nombre de la etapa
                </li>
                <li className="before:content-['b.'] before:mr-2">
                  Descripción de la etapa
                </li>
                <li className="before:content-['c.'] before:mr-2">
                  Color de la etapa
                </li>
              </ol>
            </ol>
            <br />

            <p>Listo, puedes repetir esto las veces que sea necesario</p>
            <br />
            <p>
              Cuando creas etapas de un servicio, se colocarán de forma
              automática en la información del servicio en el módulo de
              inventarios.
            </p>
            <br />
            <p>
              Así mismo, si creas las etapas del servicio en el módulo de
              inventarios, aparecerán de forma automática en el dashboard de
              seguimiento de servicios.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span
            id="article2"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            ¿Cómo puedo usar el dashboard de seguimiento de servicios?
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En el dashboard podemos mover al cliente hacia las etapas de
              adelante o las de atrás, dependiendo en qué parte del proceso se
              encuentra, solo es necesario arrastrar la caja y colocarla sobre
              el nombre de la etapa a la que deseamos moverlo.
            </p>
            <br />
            <p>
              Cuando lo coloco en alguna etapa, nos indica que estamos en cierta
              etapa del proceso, pero podemos hacer algunas acciones, sin
              importar en qué etapa se encuentra colocado el cliente.
            </p>
            <br />
            <p>
              Un cliente dentro del dashboard se visualiza de la siguiente
              forma:
            </p>
            <br />
            {/*INSERT IMAGE */}
            <p>
              siguiente botón{" "}
              <IonIcon icon={settingsOutline} className="text-center" /> al
              presionar el engrane, podremos asignar el lead a otro usuario y
              editar el cliente. Al presionar los tres puntos, las acciones que
              podemos realizar son:
            </p>
            <br />
            <ul class="list-disc pl-4 px-8">
              <li>Agenda de actividades</li>
              <li>Envío de correo</li>
              <li>Programar un correo</li>
              <li>Iniciar una conversación</li>
              <li>Solicitud de documento</li>
              <li>Envío de documento</li>
            </ul>
            <p>
              Al momento de posicionar el cursor sobre una etapa, encontraremos
              el botón{" "}
              <IonIcon icon={ellipsisHorizontal} className="text-center px-2" />{" "}
              el cual nos dará la opción de editar la etapa o eliminar la etapa.
            </p>
            <br />
            <p>
              En caso de que se quiera eliminar una etapa, pero haya clientes
              dentro de la misma, los clientes irán a la primera etapa de inicio
              de forma automática.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 3 */}
        <div className="mt-6">
          <span
            id="article3"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            Agregar comentarios, anotaciones e imágenes
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Presiona el boton de comentario y agrega cualauier comentario de
              interés. Puedes agregar también hasta 5 imagenes o documentos por
              cada comentario.
            </p>
            <br />
            <p>
              Para editar o eliminar cada comentario o sus archivos agregados,
              presiona el botón{" "}
              <IonIcon icon={ellipsisHorizontal} className="text-center px-2" />
              dentro de cada comentario y escoge la opción deseada.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 4 */}
        <div className="mt-6">
          <span
            id="article4"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            Ver información del cliente
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Puedes dar clic sobre el nombre del cliente y te redireccionará a
              la secciones de información del cliente, mencionadas
              anteriormente.
            </p>
            <br />
          </article>
        </div>
      </ScrollArea>
      <section className="hidden md:block col-span-4 w-full max-h-[90vh] px-8 py-6">
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

export default FollowServices;
