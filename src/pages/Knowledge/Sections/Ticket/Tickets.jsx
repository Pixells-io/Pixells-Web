import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
const section = [
  {
    index: 1,
    title: "Tickets",
    subsections: [{ title: "Descripción", ref: "article1" }],
  },
];

function TicketsGeneral() {
  const [showMenu, setShowMenu] = useState(1);
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
          TICKETS
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
              El módulo de “Tickets” está destinado para solicitar apoyo de
              otras áreas para resolver algún problema tipificado para que éste
              sea resuelto a la brevedad posible y pueda el estatus ser
              rastreado en tiempo real.
            </p>
            <br />
            <p>
              Para agregar un ticket nuevo debes dar clic en el botón “+” y
              contestar los siguientes campos del formulario.
            </p>
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">Área.</li>
              <li className="before:content-['2.'] before:mr-2">
                Responsable.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Poner título al ticket a levantar.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Describir o dar más detalles del ticket a levantar.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Seleccionar importancia.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Seleccionar la categoría.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Dar clic en “Guardar”.
              </li>
            </ol>

            <p>
              Una vez guardado el ticket aparecerá en la lista de tickets
              realizados y se podrá visualizar una columna de estatus, el
              primero, una vez generado dirá “Creado”.
            </p>
            <br />
            <p>Y los tickets se dividirán en las siguientes columnas:</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Mis tickets: los tickets que tú levantaste.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Asignados: los tickets que se asignaron a ti.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                En proceso: los tickets en proceso asignados a ti.
              </li>
            </ol>
            <p>
              Para dar seguimiento del ticket, debes dar clic en el botón de la
              columna “Acciones”. Se abrirá una nueva ventana con las siguientes
              características:
            </p>
            <br />
            <span>
              1. Columna del lado derecho, se visualizará la información general
              del ticket.
            </span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">
                Información de fecha de creación del ticket.
              </li>
              <li className="before:content-['b.'] before:mr-2">
                Mostrará los días acumulados desde la fecha de creación.
              </li>
              <li className="before:content-['c.'] before:mr-2">
                La persona que lo creó.
              </li>
              <li className="before:content-['d.'] before:mr-2">
                Día(s) de la última actualización.
              </li>
              <li className="before:content-['e.'] before:mr-2">
                El nivel de importancia.
              </li>
              <li className="before:content-['f.'] before:mr-2">El estatus.</li>
              <li className="before:content-['g.'] before:mr-2">
                La descripción.
              </li>
              <li className="before:content-['h.'] before:mr-2">
                La categoría.
              </li>
            </ol>

            <span>
              2. Columna del lado izquierdo, se visualizará algunas acciones que
              podrán realizarse con el ticket:
            </span>
            <ol className="mt-4 mb-4">
              <li className="before:content-['a.'] before:mr-2">Acciones.</li>
              <ol className="px-8 mb-4">
                <li className="before:content-['I.'] before:mr-2">
                  Visita: se agregan los comentarios.
                </li>
                <li className="before:content-['II.'] before:mr-2">
                  Llamada telefónica: se agregan los comentarios.
                </li>
                <li className="before:content-['III.'] before:mr-2">
                  Mensaje: se agregan los comentarios.
                </li>
                <li className="before:content-['IV.'] before:mr-2">
                  E-mail: se agregan los comentarios.
                </li>
                <li className="before:content-['V.'] before:mr-2">
                  Documento: se adjunta documento.
                </li>
                <li className="before:content-['VI.'] before:mr-2">
                  Completado: se agregan comentarios.
                </li>
              </ol>

              <li className="before:content-['b.'] before:mr-2">
                Agregar más “Responsables” si fuera necesario. Esto le llegará a
                todos los pertenecientes del área.
              </li>
            </ol>
            <p>
              A partir de que se agrega la primera acción, el estatus del ticket
              cambia a “En proceso”
            </p>
            <br />
            <span>
              3. En el centro de la pantalla se podrá visualizar el histórico de
              las acciones.
            </span>
            <br />
            <br />
            <p>
              Una vez completado el ticket, se actualizará en la lista general
              de tickets el estatus como “Completado”.
            </p>
            <br />
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
export default TicketsGeneral;
