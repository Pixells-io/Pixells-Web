import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
const section = [{ title: "Leads", ref: "article1", index: 1 }];

function CrmHome() {
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
          
          className="pt-5 font-poppins text-[16px] text-grisHeading"
        >
          CRM General
        </h2>
        {/*ARTICLE 1 */}
        <div id="article1">
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

export default CrmHome;
