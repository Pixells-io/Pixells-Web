import React, { useRef, useState } from "react";
function CrmOpotunity() {
  const article1Ref = useRef(null);
  const containerRef = useRef(null);

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
          CRM
        </span>
        <h2
          ref={article1Ref}
          className="pt-5 font-poppins text-[16px] text-grisHeading"
        >
          Alta nueva Oportunidad
        </h2>
        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En el submenú toca “Nuevo Oportunidad”, llena la siguiente
              información:
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Indica el nombre de la oportunidad.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Agrega el monto aproximado que consideras representa esta
                oportunidad, e indica su tipo de moneda.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Selecciona el prospecto que quieres asociar.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Indica en qué proceso de venta quieres colocar a la oportunidad.
              </li>
            </ol>
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[90vh] overflow-auto px-8 py-6">
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
            Alta nueva Oportunidad
          </button>
        </div>
      </section>
    </div>
  );
}

export default CrmOpotunity;
