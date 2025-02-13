import React, { useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
function WarehouseGeneral() {
  const section = [
    {
      index: 1,
      title: "Almacenes General",
      subsections: [{ title: "Principal", ref: "article1" }],
    },
  ];

 const [showMenu, setShowMenu] = useState(1);
     const [activeButton, setActiveButton] = useState(1);
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
  <div className="w-full h-full max-h-[90vh] grid grid-cols-8 md:grid-cols-12 md:gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
         <ScrollArea
           ref={scrollAreaRef}
           className="w-full h-full col-span-8 px-2 md:px-6 py-2"
         >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          INVENTARIOS
        </span>
        {/*ARTICLE 1 */}
        <div id="article1" className="mt-6">
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
      </ScrollArea>
      <section className="hidden md:block col-span-4 w-full max-h-[90vh] px-8 py-6">
              <ScrollArea className="h-full">
                <div className="flex flex-col space-y-4">
                  {section.map((item) => (
                    <div key={item.index} className="flex flex-col">
                      <button
                        onClick={() => setShowMenu(item.index)}
                        className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                                  ${
                                    showMenu === item.index
                                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                                  }`}
                      >
                        {item.title}
                      </button>
      
                      {showMenu === item.index && (
                        <div className="flex flex-col px-8 items-start space-y-5">
                          {item.subsections.map((subsection, idx) => (
                            <button
                              key={subsection.ref}
                              onClick={() => scrollToArticle(subsection.ref, idx)}
                              className={`px-3 py-2 font-roboto font-normal text-[14px] 
                                        ${activeButton === idx ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}`}
                            >
                              {subsection.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </section>
    </div>
  );
}

export default WarehouseGeneral;
