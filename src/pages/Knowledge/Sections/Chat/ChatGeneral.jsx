import React, { useRef, useState } from "react";

function ChatGeneral() {
  const article1Ref = useRef(null);
  const containerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

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
        className="w-full max-h-[90vh] overflow-auto col-span-8 px-6 py-10"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CHAT
        </span>
        <h2
          ref={article1Ref}
          className="pt-5 font-poppins text-[16px] text-grisHeading"
        >
          Descripción
        </h2>

        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para generar una nueva conversación con un usuario interno de la
              compañía, debes seleccionar el selector de usuarios en la columna
              izquierda de la vista, en la parte superior y escoger el usuario
              al que le deseas mandar un mensaje.
            </p>
            <br />
            <p>
              Una vez elegido, solo debes empezar a escribir y mandar mensajes.
              Dentro del chat encontrarás las funcionalidades de reenviar y
              responder mensaje, además de enviar un documento o imágen.
            </p>
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Para reenviar un mensaje da click en los 3 puntos que se
                encuentran a un costado del mensaje y selecciona reenviar.
                Selecciona al usuario que le deseas mandar el mensaje y da click
                en guardar.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Para responder un mensaje, da click en los mismos 3 puntos que
                se encuentran al costado del mensaje y selecciona responder. A
                continuación escribe el mensaje que quieres responder al mensaje
                anterior seleccionado.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Para enviar un documento PDF o una imagen, da click en el botón
                de “+” que se encuentra a un costado de la barra para escribir
                el mensaje. Adjunta el documento y da click en el botón enviar.
              </li>
              <br />
            </ol>
          </article>
        </div>
      </div>
      <section
        className="col-span-4 max
        -h-[90vh] overflow-auto px-8 py-6"
      >
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <button
            onClick={() => {
              setShowMenu(1);
            }}
            className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                ${
                  showMenu === 1
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
           Chat
          </button>
          {showMenu === 1 ? (
            <div className="flex flex-col px-8 items-start space-y-5">
              <button
                onClick={() => scrollToArticle(article1Ref, 0)}
                className={`px-3 py-2 font-roboto font-normal text-[14px] ${activeButton === 0 ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}`}
              >
                Descripción{" "}
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
export default ChatGeneral;
