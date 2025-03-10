import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";

function Series() {
  const sections = [
    {
      index: 1,
      title: "Series y Folios",
      ref: "article1",
      subsections: [],
    },
   
  ];

  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(0);
  const scrollAreaRef = useRef(null);

  return (
    <div className="w-full h-full max-h-[90vh] grid grid-cols-8 md:grid-cols-12 md:gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <ScrollArea
        ref={scrollAreaRef}
        className="w-full h-full col-span-8 px-2 md:px-6 py-2"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CONTABILIDAD
        </span>

        <div className="mt-6">
          <span
            id="article1"
            className="font-poppins text-[16px] text-grisHeading"
          >
            Series y Folios
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Aqui podemos configurar que nomenclatura y consecutivo queremos
              utilizar para cada tipo de CFDI que vamos a emitir. El sistema nos
              da la oportunidad de colocar infrmoación nueva o podemos continuar
              con algún folio que tengamos activo y no perder la numeración.
            </p>
            <br />
            <p>En la tabla principal tenemos la siguiente información:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                La serie registrada.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                El folio con su secuencia actual.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Tipo de CFDI al que se asoció la serie.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                CFDI´s: la cantidad de folios que se han emitido en este
                sistema.
              </li>
              <li className="before:content-['5.'] before:mr-2">Estatus.</li>
              <li className="before:content-['6.'] before:mr-2">
                Acciones para eliminar la serie.
              </li>
            </ol>

            <br />
            <p>
              Para registrar un nueva serie con su folio consecutivo, presiona
              el botón “Nuevo”. A continuación, llena la siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Selecciona el tipo de documento al que se asociará dicha serie.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Letra alfabética que se designará a la serie.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Número de folio con el que empezará el sistema.
              </li>
            </ol>
            <br />
            <p>
              Para registrar un nueva serie con su folio consecutivo, presiona
              el botón “Nuevo”. A continuación, llena la siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Selecciona el tipo de documento al que se asociará dicha serie.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Letra alfabética que se designará a la serie.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Número de folio con el que empezará el sistema.
              </li>
            </ol>
            <br />
            <p>

            Al finalizar toca “Guardar”.

            </p><br />

          </article>
        </div>
      </ScrollArea>

      <SectionNavigation
        sections={sections}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        scrollAreaRef={scrollAreaRef}
      />
    </div>
  );
}

export default Series;
