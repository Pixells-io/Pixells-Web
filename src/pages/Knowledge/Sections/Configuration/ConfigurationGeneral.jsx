import { IonIcon } from "@ionic/react";
import { cogOutline, settingsSharp } from "ionicons/icons";
import React, { useRef, useState } from "react";

function ConfigurationGeneral() {
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

        CONFIGURACIÓN
        </span>
        <div className="mt-6">
            <p>El módulo de Configuración <IonIcon icon={cogOutline} className="text-[14px] text-grisHeading"/>  es recomendable que solo tenga acceso el usuario maestro de la empresa o el dueño de la misma. 
            </p><br />
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">

          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <ol className="mt-4 mb-4">
             
            </ol>
          </article>
        </div>
      </div>
      <section
        className="col-span-4 max
        -h-[90vh] overflow-auto px-8 py-6"
      >
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <div className="flex flex-col px-8 items-start space-y-5">
            <button
              onClick={() => scrollToArticle(article1Ref, 0)}
              className={`px-3 py-2 font-roboto font-normal text-[14px] ${
                activeButton === 0
                  ? "border-l border-[#000000] text-grisHeading font-semibold"
                  : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
              }`}
            >
              Introducción
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConfigurationGeneral;
