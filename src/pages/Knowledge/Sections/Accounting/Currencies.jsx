import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";

function Currencies() {
  const sections = [
    {
      index: 1,
      title: "Divisas",
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
            Divisas
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
            Las divisas son necesarias para poder hacer operaciones con nuestros socios comerciales en distintas monedas. Podemos encontrar las dos divisas más usadas para transacciones en México, que en este caso es peso mexicano y dolar estadounidense. 

            </p><br />
            <p>
            La tabla principal nos muestra la siguiente información:

            </p><br />
            <ol className="px-8">
  <li className="before:content-['1.'] before:mr-2">
    Código de la divisa.
  </li>
  <li className="before:content-['2.'] before:mr-2">
    Símbolo de la divisa.
  </li>
  <li className="before:content-['3.'] py-1 before:mr-2">
    Nombre.
  </li>
  <li className="before:content-['4.'] before:mr-2">
    Tasa: Se actualiza de forma automática con la referencia de tipo de cambio global, en función de peso mexicano.
  </li>
  <li className="before:content-['5.'] before:mr-2">
    Visualizar.
  </li>
</ol>
<br />
<p>
Agregar nuevas divisas es muy sencillo, presiona el botón “Nuevo” y sigue estos pasos:

</p><br />
<ol className="px-8">
  <li className="before:content-['1.'] before:mr-2">
  Selecciona la divisa deseada
  </li>
  <li className="before:content-['2.'] before:mr-2">
  Presiona el botón “listo”
  </li>
  
</ol>     <br />
<p>
La divisa quedará agregada y estará disponible para su uso en las próximas operaciones.
</p>
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

export default Currencies;
