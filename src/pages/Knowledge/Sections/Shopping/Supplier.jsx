import { ellipsisHorizontal, settingsOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import React, { useRef, useState } from "react";

function Supplier() {
  const containerRef = useRef(null);
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);
  const article3Ref = useRef(null);
  const article4Ref = useRef(null);

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
          COMPRAS
        </span>
        {/*ARTICLE 1 */}
        <div  ref={article1Ref} className="mt-6">
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
            ref={article2Ref}
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
            ref={article3Ref}
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
            ref={article4Ref}
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
      </div>
      <section className="col-span-4 max-h-[90vh] overflow-auto px-8 py-6">
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <div className="flex flex-col space-y-5">
            <button
              onClick={() => scrollToArticle(article1Ref, 0)}
              className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    activeButton === 0
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              Seguimientos de Servicios
            </button>
            <button
              onClick={() => scrollToArticle(article2Ref, 1)}
              className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    activeButton === 1
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              ¿Cómo puedo usar el dashboard de seguimiento de servicios?
            </button>
            <button
              onClick={() => scrollToArticle(article3Ref, 2)}
              className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    activeButton === 2
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              Agregar comentarios, anotaciones e imágenes
            </button>
            <button
              onClick={() => scrollToArticle(article3Ref, 3)}
              className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    activeButton === 3
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              Ver información del cliente
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Supplier;
