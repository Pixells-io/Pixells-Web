import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
const section = [
  {
    index: 1,
    title: "Creador",
    subsections: [
      { title: "Creación de capacitaciones", ref: "article1" },
      { title: "Insertar material de la capacitación", ref: "article2" },
      { title: "Creación de examen", ref: "article3" },
    ],
  },
  {
    index: 2,
    title: "Mis capacitaciones",
    subsections: [{ title: "Capacitaciones generales", ref: "article4" }],
  },
];

function Capacitation() {
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
          DESARROLLO ORGANIZACIONAL
        </span>

        <h2 className="pt-5 font-poppins text-[16px] text-grisHeading">
          Capacitación
        </h2>

        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El proceso de capacitación permite administrar el programa de
              capacitación, por rubro determinado de la empresa, para
              incrementar los conocimientos, habilidades y competencias de los
              colaboradores.
            </p>
            <br />

            <p>Existen dos perfiles de usuarios para este módulo:</p>
            <br />

            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                El creador de las capacitaciones: generador de las
                capacitaciones, el responsable de crear y subir el material de
                consulta; y los exámenes, en caso de ser capacitación interna.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                A quien se le asignan capacitaciones: colaborador que recibe las
                capacitaciones para consultarlas y contestar los respectivos
                exámenes; en caso de ser internas. Cuando son internas se
                especifica el lugar y la fecha para dicha capacitación.
              </li>
            </ol>
          </article>
        </div>
        {/*Article 1 */}

        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            CREADOR
          </span>
          <article
            id="article1"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <span className="font-semibold">Creación de capacitaciones</span>
            <br />
            <p>
              Para crear el programa de capacitación, debes dar de alta cada una
              de las capacitaciones completando los siguientes campos:
            </p>
            <ol className="">
              <li className="before:content-['1.'] before:mr-2">
                Nombre de la capacitación.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Descripción de la capacitación.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Asignar el o las áreas, puestos o usuarios.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Seleccionar el tipo de capacitación.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Seleccionar si la capacitación será interna o externa.
              </li>
              <ol className="px-8 mt-4 mb-4">
                <li className="before:content-['a.'] before:mr-2">
                  Seleccionar si la capacitación será interna o externa.
                </li>
                <li className="before:content-['b.'] before:mr-2">
                  Si es interna, se especifica si es online o presencial. Y se
                  asigna al responsable de impartir.
                </li>
              </ol>

              <li className="before:content-['6.'] before:mr-2">
                Si es externa se establece el lugar y se especifica el nombre
                del capacitador.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Se establece la fecha tentativa de dicha “capacitación”.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Dar clic en “Guardar”.
              </li>
            </ol>
            <br />

            <p>
              Una vez guardada la capacitación, aparecerá en forma de lista, en
              la vista principal de esta sección. A cada capacitación interna,
              le puedes agregar material de inducción (presentaciones, archivos,
              o videos cortos) con el fin de que cada colaborador autogestione
              sus inducciones.
            </p>
            <br />
            <span id="article2" className="font-semibold">
              Insertar material de la capacitación
            </span>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Dar clic en el signo de “+” abajo de la columna “archivo”.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Agregar documento en el recuadro de color.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Escribir el nombre del documento.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Dar clic para guardar/subir documentos.
              </li>
            </ol>

            <p>
              Una vez cargado los documentos, en la misma vista principal en
              donde se encuentran enlistadas las inducciones, abajo de la
              columna “Examen” dar clic en el botón, si está de color azul es
              porque el examen no está creado, si está de color verde es porque
              ya se creo.
            </p>
            <br />
            <span id="article3" className="font-semibold">
              Creación de examen
            </span>
            <br />
            <p>
              Esto aplica en caso de ser una capacitación interna. Para crear un
              examen deberán completarse los siguientes campos
            </p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Nombre del examen.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Escribir el límite de minutos para responder.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Agregar la pregunta 1.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Especificar el tipo de pregunta, si es singular (una sóla
                respuesta correcta) o múltiple (varias respuestas correctas).
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Cuando es pregunta de tipo singular, escribes las respuestas y
                sólo una de ella podrá seleccionarse como verdadera, las demás
                no seleccionadas el sistema las detectará como falsas.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Cuando es pregunta de tipo múltiple, escribes las respuestas y
                se pueden seleccionar más de una como correcta, las no
                seleccionadas el sistema las detectará como falsas.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Agregar consecutivamente el número de preguntas necesarias para
                dicho examen.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Dar clic en “Enviar” una vez que estén terminadas todas las
                preguntas y respuestas.
              </li>
            </ol>

            <p>
              Para consultar el estatus de respuesta de las capacitaciones
              asignadas hay que dar “clic” en el botón abajo de la columna
              “Historial” y ahí se podrán monitorear por usuario, los
              colaboradores que hayan respondido dicha inducción, así como su
              calificación.
            </p>
            <br />
            <p>
              En la tabla de capacitaciones se podrá observar dos fechas
              “Tentativa” y “Real”.
            </p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                La fecha tentativa se establece en el formulario inicial cuando
                se da de alta la capacitación.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                La fecha real está disponible para establecer y confirmar la
                fecha real en que se impartirá dicha capacitación.
              </li>
            </ol>
            <p>
              Considerar que las capacitaciones que se hayan agregado como
              externas, se omiten los campos de “Archivos” y “Examen” quedando
              únicamente “Evidencia” en donde se subirá el comprobante que emita
              la institución que la impartió.
            </p>
          </article>
        </div>

        <div className="mt-6">
          <span
            id="article4"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            MIS CAPACITACIONES
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Tus capacitaciones asignadas las podrás encontrar en esta sección
              y se podrán filtrar por el tipo de inducción.
            </p>
            <br />
            <p>
              Estas se pueden visualizar en forma de rectángulos para únicamente
              dando “clic” en la caja, se podrá consultar la información
              asignada a dicha capacitación interna. Así mismo dando “clic” en
              el botón de “play” se podrá responder el examen. En el caso de las
              capacitaciones externas no tendrán cargada información ni se podrá
              responder al examen.
            </p>
            <br />
            <p>
              Es importante que sepas, que el examen tiene un tiempo para
              responder, de exceder este tiempo el examen se cerrará y
              únicamente calificará las preguntas contestadas.
            </p>
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
export default Capacitation;
