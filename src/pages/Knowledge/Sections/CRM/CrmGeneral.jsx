import React, { useRef, useState } from "react";

function CrmGeneral() {
  const article1Ref = useRef(null);
  const containerRef = useRef(null);

  const [activeButton, setActiveButton] = useState(null);

  const scrollToArticle = (articleRef, buttonIndex) => {
    const container = containerRef.current;
    const article = articleRef.current;

    if (container && article) {
      // Obtener la posición del artículo relativa al contenedor
      const containerRect = container.getBoundingClientRect();
      const articleRect = article.getBoundingClientRect();

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
    <div className="w-full grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <div ref={containerRef} className="w-full max-h-[90vh] overflow-auto col-span-8 px-6 py-10">
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CRM
        </span>
        <h2 className="pt-5 font-poppins text-[16px] text-grisHeading">
          Descripción
        </h2>

        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El CRM es una herramienta diseñada para facilitar el seguimiento
              de oportunidades con prospectos y clientes. Permite monitorear de
              manera continua el progreso de cada oportunidad y proporciona
              trazabilidad en todas las etapas del proceso de venta. Esto
              incluye desde la identificación de una oportunidad de negocio
              hasta la negociación y el cierre de una venta.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div ref={article1Ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Alta nuevo Prospecto
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para dar de alta un proceso de venta, ve al módulo de CRM y toca
              “Nuevo”, en la parte superior derecha de la pantalla.
            </p>
            <br />

            <p>
              Agrega el nombre del proceso de venta, una pequeña descripción y
              da click en Guardar.
            </p>
            <br />
            <p>
              A continuación, en el submenú toca “Nuevo Prospecto”, llena la
              siguiente información:
            </p>
            <br />

            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Indica si el Lead es una compañía o una persona física.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Agrega el nombre de la compañía o persona física y su teléfono
                para contactar.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Llena la información de contacto de la oportunidades
                <ol className="pl-6">
                  <li className="before:content-['a.'] before:mr-2">Nombre</li>
                  <li className="before:content-['b.'] before:mr-2">
                    Apellido
                  </li>
                  <li className="before:content-['c.'] before:mr-2">
                    Télefono
                  </li>
                  <li className="before:content-['d.'] before:mr-2">Correo</li>
                </ol>
              </li>
            </ol>
            <p>
              Una vez generados los prospectos, será posible crear oportunidades
              vinculadas, las cuales podrán ser gestionadas y monitoreadas de
              manera eficiente. A estas oportunidades se les podrán asociar
              productos y servicios, y serán el enfoque principal del trabajo en
              el CRM, con el objetivo de concretar nuevas oportunidades de
              negocio. Los prospectos pueden tener más de una oportunidad, no
              existen limitaciones.
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
            Alta nueva Prospecto
          </button>
        </div>
      </section>
    </div>
  );
}
export default CrmGeneral;
