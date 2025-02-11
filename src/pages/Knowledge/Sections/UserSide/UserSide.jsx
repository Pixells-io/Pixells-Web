import React, { useRef, useState } from "react";

function UserSide() {
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);
  const article3Ref = useRef(null);
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
          PLATAFORMA DEL CLIENTE
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
              El cliente contará con un acceso al portal de Plataforma del
              Cliente el cual tendrá como función principal: recibir solicitudes
              y/o requerimientos por parte de la empresa, enviar documentos,
              contestar entrevistas; entre otras funciones de acuerdo a los
              requerimientos de la empresa.
            </p>
            <br />
            <p>
              La empresa le proporcionará el usuario y contraseña al cliente
              para poder ingresar al portal y la liga de acceso.
            </p>
            <p>
              En la parte superior, encontrará los servicios activos, con el
              porcentaje de avance de cada servicio.
            </p>
            <br />

            <span  ref={article2Ref} className="font-semibold">Servicios</span>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Contestar una entrevista: Selecciona la sección de “entrevista”,
                da click en el botón “+”. A continuación contesta las preguntas
                solicitadas y guarda.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Enviar un documento requerido por la empresa: selecciona la
                sección de “collect documents”. Encontrarás las líneas donde
                debes agregar los documentos solicitados. Da click en el botón
                “+”, agrega el documento y guarda.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Descargar los documentos finalizados por la empresa: ve a la
                sección de “documents ready”. Encontrarás las líneas con los
                documentos listos para descargar. Da click en el botón
                “descargar”.
              </li>
              <br />
            </ol>
            <span  ref={article3Ref} className="font-semibold">Información Personal</span>
            <br />
            <p>
              Para consultar la información personal, da click en el botón
              “personal information”, después guarda.
            </p>
            <br />
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
              <button
                onClick={() => scrollToArticle(article2Ref, 1)}
                className={`px-3 py-2 font-roboto font-normal text-[14px] ${activeButton === 1 ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}`}
              >
               Servicios
              </button>
              <button
                onClick={() => scrollToArticle(article3Ref, 2)}
                className={`px-3 py-2 font-roboto font-normal text-[14px] ${activeButton === 2 ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}`}
              >
               Información Personal
              </button>
            </div>
            
          ) : null}
        </div>
      </section>
    </div>
  );
}
export default UserSide;
