import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
const section = [
  { title: "Alta nueva Oportunidad", ref: "article1", index: 1 },
 
];
function CrmOpotunity() {
   const [activeButton, setActiveButton] = useState(0);
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
    <div className="w-full h-full max-h-[90vh] grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
                <ScrollArea
                  ref={scrollAreaRef}
                  className="w-full h-full col-span-8 px-6 py-2"
                >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CRM
        </span>
        <h2
          id="article1"
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
      </ScrollArea>
       <section className="col-span-4 w-full max-h-[90vh] px-8 py-6">
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

export default CrmOpotunity;
