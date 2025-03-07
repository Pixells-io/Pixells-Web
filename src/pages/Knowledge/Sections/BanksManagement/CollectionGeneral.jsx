import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function CollectionGeneral() {
  const sections = [
    {
      index: 1,
      title: "Cobros general",
      ref: "article1",
      subsections: [],
    },
    {
      index: 2,
      title: "Cobros",
      ref: "article2",
      subsections: [],
    },
    {
        index: 3,
        title: "Proceso para registrar un cobro",
        ref: "article3",
        subsections: [  { title: "Un solo método", ref: "article3.1" },{ title: "Varios métodos", ref: "article3.2" }],
      },
      {
        index: 4,
        title: "Resumen de cobros",
        ref: "article4",
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
            Cobros general
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El submódulo de cobros permite gestionar y registrar los pagos
              recibidos de los clientes de manera eficiente y organizada. A
              través de este módulo, es posible administrar diferentes métodos
              de pago, llevar un control detallado de las cuentas por cobrar y
              garantizar un adecuado seguimiento de los ingresos de la empresa.
            </p>
            <br />
            <p>
              Se compone de dos secciones: <strong> Cobros</strong> y{" "}
              <strong>Resumen</strong>. A continuación, se describen sus
              respectivas funciones.
            </p>
            <br />
          </article>
        </div>
        <div id="article2" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Cobros
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Dentro de la tabla principal de esta sección, a su vez podemos
              visualizar dos apartados, Cobranza pendiente, que se refiere a
              todos los movimientos de venta que no están liquidados y
              Completados, que muestra los movimientos de cobro que se han
              registrado.
            </p>
            <br />
            <p>
              La tabla de “Cobranza pendiente”, nos muestra la siguiente
              información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Documento: folio del documento a cobrar
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Cliente relacionado al documento
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Vencimiento, fecha en que vence la vigencia para el cobro
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Creación, fecha en que se creó el documento de venta
              </li>
              <li className="before:content-['5.'] before:mr-2">Entrega</li>
              <li className="before:content-['6.'] before:mr-2">Estatus</li>
              <li className="before:content-['7.'] before:mr-2">
                Total de la venta
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Balance pendiente por cobrar
              </li>
              <li className="before:content-['9.'] before:mr-2">
                Acciones posibles, ver detalle
              </li>
            </ol>
            <br />
            <p>
              La tabla de “Completados”, nos muestra la siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Id del documento de cobro generado
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Cliente relacionado al movimiento
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Fecha en que se realizó el cobro
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Creador, usuario que realizó el movimiento
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Estatus del movimiento
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Total que se cobró en el movimiento
              </li>
              <li className="before:content-['7.'] before:mr-2">Compras</li>
              <li className="before:content-['8.'] before:mr-2">
                Acciones posibles, ver detalle, cancelar
              </li>
            </ol>
            <br />
            <p>
              Para crear un nuevo cobro, toca el botón “Nuevo”. A continuación,
              llena la siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Fecha del cobro
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Selecciona el cliente
              </li>
            </ol>
            <br />
            <p>
              Una vez que se haya seleccionado el cliente, el sistema mostrará
              las ventas que se han realizado con dicho cliente.{" "}
            </p>
            <br />
            <p>La tabla muestra la siguiente información:</p> <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Casilla para seleccionar venta
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Número de documento: indica el folio de la venta
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Días de crédito: Son los días que restan para aplicar el cobro
                al cliente, de acuerdo al crédito otorgado.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Impuesto: indica el impuesto que lleva la venta y el cual se
                contemplará en el cobro.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Total: el monto total de la venta
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Balance: la cantidad restante que hace falta por cobrar al
                cliente
              </li>
              <li className="before:content-['7.'] before:mr-2">
                A Pagar: en este campo, se debe ingresar el monto que se cobrará
                en el movimiento actual.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Restante: indica el saldo pendiente que el cliente deberá
                liquidar después de aplicar el cobro.
              </li>
            </ol>
          </article>
        </div>
        <div id="article3" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Proceso para registrar un cobro
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Marca la casilla de las ventas a las que deseas aplicar un
                cobro. Puedes seleccionar una sola casilla para asignar el pago
                a un único movimiento o marcar varias simultáneamente para
                agrupar múltiples ventas en un mismo cobro.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Agrega la cantidad a cobrar en cada venta seleccionada dentro de
                la casilla de la columna “A pagar”.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Una vez que hayas seleccionado las casillas deseadas, enseguida
                de los movimientos de venta, toca el botón “Agregar método” para
                configurar la información de cobro para cada venta.
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                El sistema permite efectuar el cobro utilizando un único método
                de pago o combinando varios métodos de manera simultánea. A
                continuación, selecciona la opción deseada.
              </li>
              <br />
              <ol className="px-8">
                <li id="article3.1">
                  <span className="text-bold pr-2">a.</span>
                  <strong className="pr-2">Un solo método:</strong>
                  selecciona el botón “Un solo método”. Después visualizarás el
                  folio de la venta y un input, selecciona el input y escoge el
                  método deseado.
                </li>
                <br />
                <ol className="px-8 space-y-2">
                  <li className="before:content-['I.'] before:mr-2">
                    A continuación llena la siguiente información:
                  </li>
                  <ol className="px-8">
                    <li className="before:content-['1.'] before:mr-2">
                      Cuenta de banco donde se registrará el cobro
                    </li>
                    <li className="before:content-['2.'] before:mr-2">
                      Fecha del movimiento
                    </li>
                    <li className="before:content-['3.'] before:mr-2">
                      Referencia: por si lleva algún dato adicional
                    </li>
                    <li className="before:content-['4.'] before:mr-2">
                      Cuenta
                    </li>
                    <li className="before:content-['5.'] before:mr-2">
                      Ingresa el total a cobrar
                    </li>
                  </ol>
                  <br />
                  <li className="before:content-['II.'] before:mr-2">
                    En la parte inferior del modal, encontrarás dos datos:
                    “Restante”, nos indica lo que hace falta por colocar en
                    total a pagar. Si restante tiene un valor diferente de 0, el
                    total a pagar no coincide con el monto colocado en la
                    columna “A pagar” en la tabla anterior, no podremos
                    continuar y es necesario corregir la información hasta que
                    restante aparezca en 0. Por otro lado, encontramos el valor
                    “Total a pagar”, el cual nos recuerda el monto que se está
                    cobrando.
                  </li>
                  <br />
                  <li className="before:content-['III.'] before:mr-2">
                    Una vez que la información se haya ingresado de forma
                    correcta, se habilitará el botón “Guardar”, se debe
                    seleccionar para continuar.
                  </li>
                  <br />
                  <li className="before:content-['IV.'] before:mr-2">
                    Si se desea cancelar la operación, presione el botón
                    cancelar.
                  </li>
                  <br />
                  <li className="before:content-['V.'] before:mr-2">
                    Si se desea cambiar la opción a varios métodos de pago,
                    presiona la flecha de regresar en la parte superior
                    izquierda del modal y elige la opción deseada.
                  </li>
                  <br />
                </ol>
                <br />
                <li id="article3.2">
                  <p>
                    <span className="text-bold pr-2">b.</span>
                    <strong className="pr-2">Varios métodos: </strong>
                    selecciona el botón “Varios métodos de pago”. Después
                    visualizarás el folio o los folios de las ventas
                    seleccionadas.{" "}
                  </p>
                  <br />
                  <p>
                    En cada venta podrás agregar distintos métodos, presionando
                    el botón “+” de color azul y enseguida se podrá escoger el
                    método seleccionando cada uno de los inputs que se habilitan
                    al tocar el botón “+”. Para configurar la información de
                    cada método, presiona la “flecha” de color verde y sigue los
                    siguientes pasos:
                  </p>
                </li>
                <br />
                <ol className="px-8">
                  <li className="before:content-['I.'] before:mr-2">
                    A continuación llena la siguiente información:
                  </li>
                  <ol className="px-8">
                    <li className="before:content-['1.'] before:mr-2">
                      Cuenta de banco donde se registrará el cobro
                    </li>
                    <li className="before:content-['2.'] before:mr-2">
                      Fecha del movimiento
                    </li>
                    <li className="before:content-['3.'] before:mr-2">
                      Referencia: por si lleva algún dato adicional
                    </li>
                    <li className="before:content-['4.'] before:mr-2">
                      Cuenta
                    </li>
                    <li className="before:content-['5.'] before:mr-2">
                      Ingresa el total a cobrar
                    </li>
                  </ol>
                  <br />
                  <li className="before:content-['II.'] before:mr-2">
                    En la parte inferior del modal, encontrarás distintos datos:
                  </li>
                  <ol className="px-8">
                    <li className="before:content-['1.'] before:mr-2">
                      <strong>Importe total:</strong> Es el total del folio de
                      la venta seleccionada. El cual se deberá cubrir con los
                      distintos métodos de pago deseados.
                    </li>
                    <br />
                    <li className="before:content-['2.'] before:mr-2">
                      <strong>Saldo vencido:</strong> Es el balance vencido que
                      tiene el cliente relacionado a un folio de venta
                      específico.
                    </li>
                    <br />
                    <li className="before:content-['3.'] before:mr-2">
                      <strong>Restante:</strong> Nos indica lo que hace falta
                      por colocar en total a pagar. Si restante tiene un valor
                      diferente de 0, el total a pagar no coincide con el monto
                      colocado en la columna “A pagar” en la tabla anterior, no
                      podremos continuar y es necesario corregir la información
                      hasta que restante aparezca en 0.
                    </li>
                    <br />
                    <li className="before:content-['4.'] before:mr-2">
                      <strong>"Total a pagar":</strong> El cual nos recuerda el
                      monto que se está cobrando en todo el movimiento general.
                    </li>
                  </ol>
                  <br />
                  <li className="before:content-['III.'] before:mr-2">
                    Una vez que la información se haya ingresado de forma
                    correcta, se habilitará el botón “Guardar”, se debe
                    seleccionar para continuar.
                  </li>
                  <br />
                  <li className="before:content-['IV.'] before:mr-2">
                    Si se desea cancelar la operación, presione el botón
                    cancelar.
                  </li>
                  <br />
                  <li className="before:content-['V.'] before:mr-2">
                    Si se desea cambiar la opción a un solo método de pago,
                    presiona la flecha de regresar en la parte superior
                    izquierda del modal y elige la opción deseada.
                  </li>
                </ol>
                <br />
              </ol>
              <li className="before:content-['5.'] before:mr-2">
                Una vez se haya finalizado con la configuración de los métodos
                de pago, encontraremos al final de la tabla, los siguientes
                conceptos:
              </li>
              <ol className="px-8">
                <li className="before:content-['a.'] before:mr-2">
                  Balance total: se refiere al balance total que debe el cliente
                  relacionado a las ventas seleccionadas por las casillas
                  iniciales.
                </li>
                <li className="before:content-['b.'] before:mr-2">
                  Restante total: el restante que faltaría por liquidar, una vez
                  se confirme la operación actual.
                </li>
                <li className="before:content-['c.'] before:mr-2">
                  Impuesto: el valor del impuesto que se está cobrando en la
                  operación actual.
                </li>
                <li className="before:content-['d.'] before:mr-2">
                  Total a cobrar: el total de lo que se está cobrando,
                  incluyendo impuestos.
                </li>
              </ol>

              <br />
              <li className="before:content-['6.'] before:mr-2">
                Para finalizar la operación, en caso de que toda la información
                se haya llenado de forma correcta, se habilitará el botón
                “Guardar” al final de la pantalla. Confirmar para finalizar.
              </li>
            </ol>
            <br />
            <p>
              El movimiento quedará aplicado y los saldos del cliente quedarán
              actualizados.
            </p>
          </article>
        </div>
        <div id="article4" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Resumen de cobros
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El Resumen de Cobros proporciona una visión general de todos los
              pagos recibidos, permitiendo un seguimiento detallado de las
              transacciones realizadas. Esta sección facilita la gestión
              financiera al consolidar la información sobre los cobros
              efectuados, los clientes involucrados y los métodos de pago
              utilizados.
            </p>
            <br />
            <p>
              Primero podemos visualizar el monto total de los pagos recibidos
              durante el mes en curso, proporcionando una visión clara del flujo
              de ingresos reciente.
            </p>
            <br />
            <p>
              Enseguida encontraremos una gráfica de cobros mensuales, siendo
              una representación visual que muestra la distribución de los
              cobros realizados en cada mes del año, facilitando la comparación
              de ingresos a lo largo del tiempo.
            </p>
            <br />
            <p>
              Más adelante tenemos la tabla de próximos cobros, la cual nos
              muestra una lista de los pagos pendientes a recibir, con la
              siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Documento de venta:</strong> Identificación de la
                transacción a cobrar.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Cantidad:</strong> Monto correspondiente al cobro.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                <strong>Fecha:</strong> Día programado para el pago.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                <strong>Estatus:</strong> Estado actual del cobro (pendiente,
                pagado, vencido, etc.).
              </li>
            </ol>

            <br />
            <p>
              Por último encontraremos la tabla de bancos con el resumen de los
              cobros registrados en las distintas cuentas bancarias, con los
              siguientes datos:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Cuenta bancaria:</strong> Cuenta en la que se ha
                recibido el pago.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Metodo de pago:</strong> Medio utilizado para realizar
                la transacción (efectivo, transferencia, tarjeta, etc.).
              </li>
              <li className="before:content-['3.'] before:mr-2">
                <strong>Total del cobro:</strong> Monto recibido en la cuenta
                correspondiente.
              </li>
            </ol>
            <br />
            <p>
              Este resumen proporciona una herramienta esencial para monitorear
              los ingresos y gestionar eficientemente las cuentas por cobrar.
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

export default CollectionGeneral;
