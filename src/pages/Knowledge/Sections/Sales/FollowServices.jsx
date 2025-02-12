import React, { useRef, useState } from "react";

function FollowServices() {
  const containerRef = useRef(null);
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);
  const article3Ref = useRef(null);

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
          <span
            ref={article1Ref}
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
              </li><br />
                <li className="before:content-['2.'] before:mr-2">
                  Una vez ingresando a uno de los servicios que aparecen en la
                  pantalla, puedes empezar a crear pasos o etapas en el proceso
                  del servicio, dando click en el botón de “+” que aparece al
                  costado derecho de la etapa inicio.
                </li><br />
                <li className="before:content-['3.'] before:mr-2">
                  Para agregar la etapa, solo debes llenar la información
                  solicitada.
                </li>
                <ol className="px-8">
  <li className="before:content-['a.'] before:mr-2">Nombre de la etapa</li>
  <li className="before:content-['b.'] before:mr-2">Descripción de la etapa</li>
  <li className="before:content-['c.'] before:mr-2">Color de la etapa</li>
</ol>

            </ol>
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
              Cotización de Venta
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
              Funcion Convertir en Pedido
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
              Función Convertir en venta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FollowServices;
