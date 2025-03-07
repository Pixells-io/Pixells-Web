import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function PlanAccount() {
  const sections = [
    {
      index: 1,
      title: "Plan de flujo de efectivo",
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
          GESTIÓN DE BANCOS
        </span>

        <div id="article1" className="mt-6">
          <span className="font-poppins text-[16px] text-grisHeading">
            Plan de flujo de efectivo
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Dentro de este submódulo podemos encontrar una agenda que muestra
              los totales de ingreso y egreso por día. De esta forma podemos
              controlar mejor las finanzas y no olvidar los movimientos que
              debemos hacer todos los días relacionados a temas monetarios. Al
              seleccionar el día que se desea consultar, podremos encontrar un
              apartado que nos muestra el detalle de las cuentas por cobrar, por
              pagar y el saldo de ambas. Tanto las cuentas por cobrar y por
              pagar, muestran lo siguiente:
            </p>
            <br />
            <p>
            Al seleccionar el día que se desea consultar, podremos encontrar un apartado que nos muestra el detalle de las cuentas por cobrar, por pagar y el saldo de ambas.

            </p>
            <br />
            <p>
            Tanto las cuentas por cobrar y por pagar, muestran lo siguiente:

            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Documento del movimiento, podemos acceder a él dando click en el
                nombre
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del cliente relacionado al movimiento
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Monto del movimiento
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Total de los movimientos pendientes
              </li>
            </ol>
            <br />
            <p>
              Por último, podemos consultar la pestaña de Saldo, el cual nos
              indica el balance entre los ingresos y egresos respectivos del
              día, puede ser positivo o negativo. 
            </p>
            <br />
            <p>
 Para cerrar este apartado,
              presiona el botón “Listo”.
            </p>
            <br />
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

export default PlanAccount;
