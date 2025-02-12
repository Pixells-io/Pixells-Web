import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
const section = [
  {
    index: 1,
    title: "Chat",
    subsections: [{ title: "Descripción", ref: "article1" }],
  },
];

function ChatGeneral() {
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
   <div className="w-full h-full max-h-[90vh] grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
       <ScrollArea
         ref={scrollAreaRef}
         className="w-full h-full col-span-8 px-6 py-2"
       >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CHAT
        </span>
        <h2
          id="article1"
          className="pt-5 font-poppins text-[16px] text-grisHeading"
        >
          Descripción
        </h2>

        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para generar una nueva conversación con un usuario interno de la
              compañía, debes seleccionar el selector de usuarios en la columna
              izquierda de la vista, en la parte superior y escoger el usuario
              al que le deseas mandar un mensaje.
            </p>
            <br />
            <p>
              Una vez elegido, solo debes empezar a escribir y mandar mensajes.
              Dentro del chat encontrarás las funcionalidades de reenviar y
              responder mensaje, además de enviar un documento o imágen.
            </p>
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Para reenviar un mensaje da click en los 3 puntos que se
                encuentran a un costado del mensaje y selecciona reenviar.
                Selecciona al usuario que le deseas mandar el mensaje y da click
                en guardar.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Para responder un mensaje, da click en los mismos 3 puntos que
                se encuentran al costado del mensaje y selecciona responder. A
                continuación escribe el mensaje que quieres responder al mensaje
                anterior seleccionado.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Para enviar un documento PDF o una imagen, da click en el botón
                de “+” que se encuentra a un costado de la barra para escribir
                el mensaje. Adjunta el documento y da click en el botón enviar.
              </li>
              <br />
            </ol>
          </article>
        </div>
      </ScrollArea>
      <section className="col-span-4 w-full max-h-[90vh] px-8 py-6">
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
export default ChatGeneral;
