import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function TaxesSettings() {
  const sections = [
    {
      index: 1,
      title: "Impuestos configuración",
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
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este módulo facilita la gestión de impuestos, facturación y otros
              aspectos fundamentales de la contabilidad, asegurando un control
              eficiente y organizado de las obligaciones fiscales y financieras.
            </p>
          </article>
        </div>
        <div id="article1" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Impuestos configuración{" "}
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En este submódulo podremos configurar y crear los impuestos
              necesarios para la empresa, que estarán disponibles para agregar a
              la configuración de artículos y servicios.
            </p>
            <br />
            <p>La tabla principal nos muestra la siguiente información:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Código: Identificador único del impuesto.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del impuesto: Nombre que recibe el impuesto.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Categoría del impuesto: General o local.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Tipo de impuesto: De traslado o retención.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Tasas habilitadas en el sistema: Tasas disponibles para este
                impuesto.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Acciones: Ver detalle del impuesto o eliminar.
              </li>
            </ol>
            <br />
            <p>
              Para agregar un nuevo impuesto al sistema, presione el botón
              “Nuevo”, a continuación llena la siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Selecciona el tipo de impuesto, traslado o retención.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Escoge la categoría, general o local.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Agrega el nombre del impuesto.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Añade una nueva tasa.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Escoge el número de decimales disponible.
              </li>
            </ol>
            <br />

            <p>Para finalizar toca el botón “Guardar”.</p>
            <br />
            <p>
              Para modificar la configuración del impuesto, toca el botón{" "}
              <IonIcon icon={ellipsisVertical} className="text-center px-2" />{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />
              Ver detalle. Para cancelar la operación, presione el botón{" "}
              <IonIcon
                icon={ellipsisVertical}
                className="text-center px-2"
              />{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />
              Cancelar.
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

export default TaxesSettings;
