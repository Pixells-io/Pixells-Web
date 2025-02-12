import React, { useRef, useState } from "react";
function WarehouseGeneral() {
  const sections = [
    {
      id: 1,
      title: "Almacenes General",
      subsections: [{ title: "Principal", ref: useRef(null) }],
    },
  ];

  const containerRef = useRef(null);
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
          INVENTARIOS
        </span>
        {/*ARTICLE 1 */}
        <div ref={sections[0].subsections[0].ref} className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Almacenes General
          </span>

          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para agregar un nuevo almacén presiona el botón “Nuevo”, después
              completa la información de los siguientes apartados:
            </p>
            <br />
            <span className="font-semiboldd">Principal:</span>
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">Nombre.</li>
              <li className="before:content-['2.'] before:mr-2">País.</li>
              <li className="before:content-['3.'] before:mr-2">Estado.</li>
              <li className="before:content-['4.'] before:mr-2">Ciudad.</li>
              <li className="before:content-['5.'] before:mr-2">Colonia.</li>
              <li className="before:content-['6.'] before:mr-2">Calle.</li>
              <li className="before:content-['7.'] before:mr-2">
                Número exterior.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Número interior.
              </li>
              <li className="before:content-['9.'] before:mr-2">
                Código postal.
              </li>
              <li className="before:content-['10.'] before:mr-2">
                Estatus: para indicar si es un almacén que estará disponible en
                el sistema, o suspendido. También es posible considerar fechas
                establecidas para limitar cuándo estará disponible un almacén.
              </li>
            </ol>
            <br />
            <p>
              Un vez que la se haya colocado la información deseada, es
              necesario presionar el botón “Guardar”.
            </p>
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[90vh] overflow-auto px-8 py-6">
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => setShowMenu(section.id)}
                className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    showMenu === section.id
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
              >
                {section.title}
              </button>

              {showMenu === section.id && (
                <div className="flex flex-col px-8 items-start space-y-5">
                  {section.subsections.map((subsection, index) => {
                    const buttonIndex =
                      sections
                        .slice(0, section.id - 1)
                        .reduce((acc, s) => acc + s.subsections.length, 0) +
                      index;

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          scrollToArticle(subsection.ref, buttonIndex)
                        }
                        className={`px-3 py-2 font-roboto font-normal text-[14px] 
                          ${
                            activeButton === buttonIndex
                              ? "font-medium text-grisHeading"
                              : "text-[#8F8F8F]"
                          }`}
                      >
                        {subsection.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WarehouseGeneral;
