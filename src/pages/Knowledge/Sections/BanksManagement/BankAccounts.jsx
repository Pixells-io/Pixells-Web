import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function BankAccounts() {
  const sections = [
    {
      index: 1,
      title: "Cuentas",
      ref: "article1",
      subsections: [],
    },

    {
      index: 2,
      title: "Saldos",
      ref: "article2",
      subsections: [
        { title: "Saldo Global", ref: "article2.1" },
        { title: "Cuenta bancaria y saldo", ref: "article2.2" },
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
          GESTIÓN DE BANCOS
        </span>

        <div className="mt-6">
          <span className="font-poppins text-[16px] text-grisHeading">
            Cuentas Bancarias
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este submódulo se compone de dos secciones:{" "}
              <strong>Cuentas</strong> y <strong>Saldos</strong>. A
              continuación, se describen sus respectivas funciones.
            </p>
            <br />
          </article>
        </div>

        <div id="article1" className="mt-3">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Cuentas
          </span>
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <br />
            <p>
              Dentro de “Cuenta” se harán los registros de bancos y cuentas
              bancarias. Bancos se refiere a la institución bancaria y cuenta
              bancaria hace referencia a la cuenta en sí donde se generan los
              movimientos de ingreso y egreso.
            </p>
            <br />
            <p>
              Dentro de la tabla principal de esta sección, podemos visualizar
              los dos apartados respectivamente.
            </p>
            <br />
            <p>
              Para crear un nuevo banco, toca el botón Nuevo{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />
              Banco. A continuación, llena la siguiente información:
            </p>
            <br />

            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                País de ubicación del banco
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Clave del banco
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Id del banco
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Nombre del banco
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Datos de contacto del banco
              </li>
              <ol className="px-8">
                <li className="before:content-['a.'] before:mr-2">Teléfono</li>
                <li className="before:content-['b.'] before:mr-2">Correo</li>
                <li className="before:content-['c.'] before:mr-2">
                  Calle, No. interior, No. exterior, Colonia
                </li>
              </ol>
            </ol>
            <br />

            <p>Al finalizar, presiona “Guardar”.</p>
            <br />
            <p>
              Una vez creado el banco, es posible habilitar una cuenta bancaria
              asociada a él. Para ello, toca el botón Nuevo{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />{" "}
              Cuenta bancaria.
            </p>
            <br />
            <p>Para crear la cuenta, agrega los siguientes datos:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Banco asociado
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Id de la cuenta
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Nombre de la cuenta
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Número de cuenta
              </li>
            </ol>
            <br />
            <p>Al terminar da click en el botón “Guardar”.</p>
            <br />
            <p>
              Una vez creada la cuenta bancaria, se pueden hacer movimientos de
              ingreso y egreso.
            </p>
            <br />
          </article>
        </div>
        <div id="article2" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Saldos{" "}
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Esta sección proporciona un resumen detallado de los movimientos
              asociados a las cuentas bancarias.
            </p>
            <br />
            <p>
              En esta sección, se presenta una visión general del estado
              financiero de las cuentas bancarias registradas en el sistema.{" "}
            </p>
            <br />
          </article>
        </div>

        <div id="article2.1">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Saldo Global</p>
            <br />
            <p>
              Se muestra el saldo total acumulado de todas las cuentas
              bancarias, proporcionando una referencia global de los recursos
              disponibles.
            </p>
            <br />
          </article>
        </div>
        
        <div id="article2.2">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Cuenta bancaria y saldo</p>
            <br />
            <p>
              Se despliega un listado de las diferentes cuentas bancarias junto
              con su respectivo saldo, permitiendo acceder al detalle individual
              de cada una para consultar movimientos específicos.
            </p>
            <br />
            <p>
              Para ingresar, presiona la cuenta deseada. Al acceder al detalle
              de una cuenta bancaria, se presenta información detallada sobre
              cada uno de sus movimientos. Esta sección permite un seguimiento
              preciso de las transacciones realizadas, proporcionando mayor
              control sobre los recursos financieros.
            </p>
            <br />
            <p>
              Primero podemos encontrar el saldo total de la cuenta. Enseguida
              tenemos la tabla con los distintos movimientos. Los datos
              disponibles incluyen:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Documento:</strong> Indica el tipo de movimiento
                efectuado.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Descripción del movimiento:</strong> Detalla la
                naturaleza de la transacción.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                <strong>Ingreso:</strong> Monto correspondiente en caso de que
                la transacción represente un ingreso.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                <strong>Egreso:</strong> Monto correspondiente en caso de que la
                transacción represente un egreso.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                <strong>Fecha del movimiento:</strong> Indica el día en que se
                registró la operación.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                <strong>Acciones:</strong> Permite acceder al documento original
                del movimiento para su consulta.
              </li>
            </ol>
            <br />
            <p>
              Finalmente, se incluye una tabla que recopila los movimientos
              globales de todas las cuentas bancarias, brindando una mayor
              transparencia y control sobre las transacciones. Esta tabla
              contiene la siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Número de cuenta:</strong> Identificador único de la
                cuenta bancaria.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Nombre del banco:</strong> Institución financiera a la
                que pertenece la cuenta.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                <strong>Descripción del movimiento:</strong> Detalle sobre la
                naturaleza de la transacción.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                <strong>Ingreso:</strong> Monto correspondiente en caso de que
                la transacción represente un ingreso.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                <strong>Egreso:</strong> Monto correspondiente en caso de que la
                transacción represente un egreso.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                <strong>Balance de la cuenta después del movimiento:</strong>{" "}
                Saldo actualizado tras la realización de la transacción.
              </li>
            </ol>
            <br />
            <p>
              Este esquema permite una gestión eficiente y ordenada de los
              recursos financieros de la empresa, facilitando el monitoreo y
              control de los movimientos bancarios.
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

export default BankAccounts;
