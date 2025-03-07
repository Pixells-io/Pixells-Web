import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";

function TraceabilityReports() {
  const sections = [
    {
      index: 1,
      title: "Informes de trazabilidad",
      ref: "article1",
      subsections: [
        { title: "Información General", ref: "article1.1" },
        { title: "Lotes", ref: "article1.2" },
        { title: "Operación por lotes", ref: "article1.3" },
      ],
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
          INVENTARIOS
        </span>

        <div id="article1" className="mt-6">
          <span className="font-poppins text-[16px] text-grisHeading">
          Informes de Trazabilidad
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Los informes de trazabilidad nos muestran los lotes que se
              encuentran disponibles en el almacén y como han sido las
              operaciones y los movimientos del artículo en distintas
              necesidades como entradas, salidas y traspasos, entregas de
              mercancía, fabricaciones, entre otras.
            </p>
            <br />
            <p>
              Para consultar la trazabilidad de un artículo, presiona el input
              “Selecciona un artículo” escoge el artículo deseado y el sistema
              mostrará toda la información:
            </p>
            <br />
            <p id="article1.1" className="font-semibold">Información general
            </p><br />
            <ol className="px-5 list-disc">
                <li>Código</li>
                <li>Artículo</li>
                <li>Precio unitario de venta</li>
                <li>Costo unitario promedio: el promedio de todos los ingresos al almacén</li>
                <li>Utilidad unitario promedio:</li>
                <li>Existencias</li>
                <li>Costo de existencias</li>
                <li>Venta promedio</li>
                <li>Utilidad promedio</li>
            </ol><br />
            <p id="article1.2" className="font-semibold">
            Lotes
            </p><br />
            <ol className="px-5 list-disc">
                <li>Lote: código del lote</li>
                <li>Almacén: almacén donde se encuentra</li>
                <li>Cantidad: cantidad disponible</li>
                <li>Costo Un.: costo unitario promedio</li>
                <li>Costo Total: costo del lote completo</li>
                <li>Primer Ingreso: fecha en que ingresó por primera vez al almacén</li>
                <li>Ultimo Mov.: último movimiento del lote</li>
            </ol><br />
            <p id="article1.3" className="font-semibold">
            Operaciones por lote

            </p><br />
            <ol className="px-5 list-disc">
                <li>Documento: código del tipo de movimiento que se realizó</li>
                <li>Fecha: fecha en que se realizó el movimiento</li>
                <li>Almacén: almacén que se afectó en el movimiento</li>
                <li>Cuenta Mayor	</li>
                <li>Cantidad: cantidad que se afectó en el movimiento</li>
                <li>Tipo Movimiento: el tipo de movimiento que se realizó</li>
            </ol><br />

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

export default TraceabilityReports;
