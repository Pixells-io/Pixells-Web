import React, { useRef, useState } from "react";
function CrmHome() {
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
          
          className="pt-5 font-poppins text-[16px] text-grisHeading"
        >
          CRM General
        </h2>
        {/*ARTICLE 1 */}
        <div ref={article1Ref}>
        <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Leads
            </span>
  
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>La información de la tabla nos muestra:</p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                El nombre de la compañía.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                El nombre del contacto
              </li>
              <li className="before:content-['3.'] before:mr-2">
                El teléfono del contacto
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Proceso de venta donde se encuentra colocado
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Un icono “i” para ver la información completa del lead en la
                vista “Información de Prospecto”
              </li>
            </ol>

            <p>Ver la información completa de Prospecto:</p>
            <br />

            <p>Acerca de la empresa:</p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Tipo de persona, física o moral.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Nombre de la empresa.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Nombre del contacto.
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                Teléfono del contacto.
              </li>
              <br />
              <li className="before:content-['5.'] before:mr-2">
                Correo del contacto.
              </li>
              <br />
            </ol>

            <p>
              Para editar la información del prospecto, da click en el botón
              “editar”, modifica la información correspondiente, toca “guardar”
              para finalizar.
            </p>
            <br />

            <p>Historial de proceso de Lead.</p>
            <br />

            <p>
              El historial del proceso de lead, muestra todas las acciones que
              se han generado con el lead y es una vista para poder rastrear
              cualquier intervención generada con el lead, dentro de Lead
              Dashboard.
            </p>
            <br />
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
            Leads
          </button>
        </div>
      </section>
    </div>
  );
}

export default CrmHome;
