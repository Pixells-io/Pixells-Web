import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function PaymentGeneral() {
  const sections = [
    {
      index: 1,
      title: "Pagos general",
      ref: "article1",
      subsections: [ { title: "Tabla de Pagos pendientes", ref: "article1.1" },
        { title: "Tabla de Pagos completados", ref: "article1.2" },],
    },
    {
      index: 2,
      title: " Proceso para registrar un pago",
      ref: "article2",
      subsections: [
        { title: "Un solo método", ref: "article2.1" },
        { title: "Varios métodos", ref: "article2.2" },
      ],
    },
    {
      index: 3,
      title: "Resumen de Pagos",
      ref: "article3",
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
            Pagos general
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El submódulo de pagos permite gestionar y registrar los
              desembolsos realizados a proveedores de manera eficiente y
              organizada. A través de este módulo, es posible administrar
              diferentes métodos de pago, llevar un control detallado de las
              cuentas por pagar y garantizar un adecuado seguimiento de los
              egresos de la empresa.
            </p>
            <br />
            <p>
              Se compone de dos secciones: <strong>Pagos</strong> y{" "}
              <strong>Resumen.</strong> A continuación, se describen sus
              respectivas funciones.
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Pagos pendientes:</strong> Muestra todos los movimientos
                de compra que aún no han sido liquidados.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Pagos completados:</strong> Registra los pagos que han
                sido realizados.
              </li>
            </ol>
            <br />
          </article>
        </div>

        <div id="article1.1" className="mt-6">
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p className="font-semibold">Tabla de "Pagos pendientes"</p>
            <br />
            <p>Esta tabla proporciona la siguiente información:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Folio de la compra a pagar:</strong> Identificador único
                para cada transacción pendiente de pago.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Proveedor:</strong> Entidad a la que se debe realizar el
                pago.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                <strong>Vencimiento:</strong> Fecha límite para realizar el
                pago.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                <strong>Fecha de creación:</strong> Día en que se generó la
                compra.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                <strong>Entrega:</strong> Estado de la entrega del producto o
                servicio.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                <strong>Estatus:</strong> Situación actual del pago (pendiente,
                vencido, etc.).
              </li>
              <li className="before:content-['7.'] before:mr-2">
                <strong>Total de la compra:</strong> Monto total de la
                transacción.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                <strong>Balance pendiente:</strong> Cantidad restante por pagar.
              </li>
              <li className="before:content-['9.'] before:mr-2">
                <strong>Acciones:</strong> Opción para ver detalles del pago.
              </li>
            </ol>
            <br />
            <p id="article1.2" className="font-semibold">
              Tabla de "Pagos completados"
            </p>
            <br />
            <p>
              Muestra un registro de los pagos ya efectuados con los siguientes
              datos:
            </p>
            <br />

            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                ID del pago generado: Identificador único para cada pago
                realizado.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Proveedor relacionado: Entidad a la que se realizó el pago.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Fecha en que se realizó el pago: Día en que se efectuó el pago.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Creador: Usuario que registró el pago.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Estatus del pago: Situación actual del pago (realizado,
                cancelado, etc.).
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Total abonado: Monto que se ha pagado hasta el momento.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Compras asociadas: Lista de compras relacionadas con este pago.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Acciones: Ver detalles o cancelar el pago.
              </li>
            </ol>
            <br />
            <p>
              Para realizar un nuevo pago, presiona el botón "Nuevo" y llena la
              siguiente información:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Fecha del pago.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Proveedor al que se realizará el pago.
              </li>
            </ol>
            <br />
            <p>
              Una vez seleccionado el proveedor, el sistema mostrará las compras
              asociadas.
            </p>
            <br />
            <p>La tabla muestra la siguiente información:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Casilla de selección: Permite elegir las compras a pagar.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Número de documento: Folio de la compra.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Días de crédito: Tiempo restante para liquidar la compra según
                el crédito otorgado.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Impuesto: Impuesto aplicado a la compra.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Total: Monto total de la compra.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Balance: Cantidad pendiente por pagar.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                A pagar: Monto que se abonará en el pago actual.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Restante: Saldo que quedará pendiente tras el pago.
              </li>
            </ol>
            <br />
          </article>
        </div>

        <div id="article2" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Proceso para registrar un pago
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Selecciona las compras a pagar marcando las casillas
                correspondientes.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Ingresa la cantidad a pagar en cada compra dentro de la columna
                "A pagar".
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Presiona el botón "Agregar método" para configurar la
                información del pago.
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                Elige un método de pago.
              </li>
              <br />
              <ol className="px-8">
                <li id="article2.1" className="before:content-['a.'] before:mr-2">
                  <strong>Un solo método:</strong> selecciona el botón “Un solo
                  método”. Después visualizarás el folio de la compra y un
                  input, selecciona el input y escoge el método deseado.
                </li>
                <br />
                <ol className="px-8">
                  <li className="before:content-['I.'] before:mr-2">
                    A continuación llena la siguiente información:
                  </li>
                  <br />
                  <ol className="px-8">
                    <li className="before:content-['1.'] before:mr-2">
                      Cuenta de banco donde se registrará el pago.
                    </li>
                    <li className="before:content-['2.'] before:mr-2">
                      Fecha del movimiento.
                    </li>
                    <li className="before:content-['3.'] before:mr-2">
                      Referencia: por si lleva algún dato adicional.
                    </li>
                    <li className="before:content-['4.'] before:mr-2">
                      Cuenta.
                    </li>
                    <li className="before:content-['5.'] before:mr-2">
                      Ingresa el total a pagar.
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
                    pagando.
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
                </ol>
                <br />
                <li id="article2.2" className="before:content-['b.'] before:mr-2">
                  <strong>Varios métodos:</strong> selecciona el botón “Varios
                  métodos de pago”. Después visualizarás el folio o los folios
                  de las compras seleccionadas.
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
                      Cuenta de banco donde se registrará el pago.
                    </li>
                    <li className="before:content-['2.'] before:mr-2">
                      Fecha del movimiento.
                    </li>
                    <li className="before:content-['3.'] before:mr-2">
                      Referencia: por si lleva algún dato adicional.
                    </li>
                    <li className="before:content-['4.'] before:mr-2">
                      Cuenta.
                    </li>
                    <li className="before:content-['5.'] before:mr-2">
                      Ingresa el total a pagar.
                    </li>
                  </ol>
                  <br />

                  <li className="before:content-['II.'] before:mr-2">
                    En la parte inferior del modal, encontrarás distintos datos.
                  </li>
                  <br />
                  <ol className="px-8">
                    <li className="before:content-['1.'] before:mr-2">
                      <strong>Importe total:</strong> Es el total del folio de
                      la compra seleccionada. El cual se deberá cubrir con los
                      distintos métodos de pago deseados.
                    </li>
                    <br />
                    <li className="before:content-['2.'] before:mr-2">
                      <strong>Saldo vencido:</strong> Es el balance vencido que
                      tiene el proveedor relacionado a un folio de compra
                      específico.
                    </li>
                    <br />
                    <li className="before:content-['3.'] before:mr-2">
                      <strong>“Restante”:</strong> Nos indica lo que hace falta
                      por colocar en total a pagar. Si restante tiene un valor
                      diferente de 0, el total a pagar no coincide con el monto
                      colocado en la columna “A pagar” en la tabla anterior, no
                      podremos continuar y es necesario corregir la información
                      hasta que restante aparezca en 0.
                    </li>
                    <br />
                    <li className="before:content-['4.'] before:mr-2">
                      <strong>Total a pagar:</strong> El cual nos recuerda el
                      monto que se está pagando en todo el movimiento general.
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
              <br />
              <li className="before:content-['5.'] before:mr-2">
                Una vez se haya finalizado con la configuración de los métodos
                de pago, encontraremos al final de la tabla, los siguientes
                conceptos.
              </li>
              <ol className="px-8">
                <li className="before:content-['a.'] before:mr-2">
                  Balance total: se refiere al balance total que se debe al
                  proveedor relacionado a las compras seleccionadas por las
                  casillas iniciales.
                </li>
                <li className="before:content-['b.'] before:mr-2">
                  Restante total: el restante que faltaría por liquidar, una vez
                  se confirme la operación actual.
                </li>
                <li className="before:content-['c.'] before:mr-2">
                  Impuesto: el valor del impuesto que se está pagando en la
                  operación actual.
                </li>
                <li className="before:content-['d.'] before:mr-2">
                  Total a cobrar: el total de lo que se está pagando, incluyendo
                  impuestos.
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
              El movimiento quedará aplicado y los saldos del proveedor quedarán
              actualizados.
            </p>
            <br />
          </article>
        </div>

        <div id="article3" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Resumen de Pagos
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              El Resumen de Pagos proporciona una visión general de los
              desembolsos realizados, facilitando el control financiero y la
              planificación de egresos.
            </p>{" "}
            <br />
            <p>
              Primero podemos visualizar el monto total de los pagos realizados
              durante el mes en curso, proporcionando una visión clara del flujo
              de egresos reciente.
            </p>{" "}
            <br />
            <p>
              Enseguida encontraremos una gráfica de pagos mensuales, siendo una
              representación visual que muestra la distribución de los pagos
              realizados en cada mes del año, facilitando la comparación de
              egresos a lo largo del tiempo.
            </p>
            <br />
            <p>
              Más adelante tenemos la tabla de próximos pagos, la cual nos
              muestra una lista de los pagos pendientes a realizar, con la
              siguiente información:
            </p>
            <br />

            <ol className="px-8">
    <li className="before:content-['1.'] before:mr-2"><strong>Documento de compra:</strong> Identificación de la transacción a pagar.</li>
    <li className="before:content-['2.'] before:mr-2"><strong>Cantidad:</strong> Monto correspondiente al pago.</li>
    <li className="before:content-['3.'] before:mr-2"><strong>Fecha:</strong> Día programado para el pago.</li>
    <li className="before:content-['4.'] before:mr-2"><strong>Estatus:</strong> Estado actual del pago (pendiente, pagado, vencido, etc.).</li>
</ol>
<br />
<p>
Por último encontraremos la tabla de bancos con el resumen de los cobros registrados en las distintas cuentas bancarias, con los siguientes datos:

</p><br />
<ol className="px-8">
    <li className="before:content-['1.'] before:mr-2"><strong>Cuenta bancaria:</strong> Cuenta en la que se ha realizado el pago.</li>
    <li className="before:content-['2.'] before:mr-2"><strong>Método de pago:</strong> Medio utilizado para realizar la transacción (efectivo, transferencia, tarjeta, etc.).</li>
    <li className="before:content-['3.'] before:mr-2"><strong>Total del cobro:</strong> Monto pagado en la cuenta correspondiente.</li>
</ol>
<br />

<p>
Este módulo es una herramienta clave para garantizar el cumplimiento de las obligaciones financieras, optimizando la gestión de egresos y el control de cuentas por pagar.
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

export default PaymentGeneral;
