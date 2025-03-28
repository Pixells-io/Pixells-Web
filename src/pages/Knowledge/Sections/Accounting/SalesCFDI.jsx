import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";

function SalesCFDI() {
  const sections = [
    {
      index: 1,
      title: "CFDI",
      ref: "article1",
      subsections: [],
    },
    {
      index: 2,
      title: "Emitir una factura de venta a movimientos existentes",
      ref: "article2",
      subsections: [],
    },
    {
      index: 3,
      title: "Registrar una factura en blanco",
      ref: "article3",
      subsections: [],
    },
    {
      index: 4,
      title: "Series y Folios",
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
          CONTABILIDAD
        </span>

        <div className="mt-6">
          <span
            id="article1"
            className="font-poppins text-[16px] text-grisHeading"
          >
            Facturas de ventas
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <span className="font-poppins font-semibold text-[18px] text-grisHeading">
              CFDI
            </span>
            <br />
            <p>
              Este submódulo, emitie distintos tipos de CFDI a los clientes para
              finalizar con el proceso de la venta, lo puedes realizar mediante
              dos métodos diferentes:
            </p>
            <br />
            <p>
              La primera es asociar un{" "}
              <strong>CFDI a movimientos existentes</strong>. Permite emitir una
              factura de venta tomando como referencia un movimiento de venta
              previamente registrado en el sistema.
            </p>
            <br />
            <p>
              La segunda es emitir un <strong>CFDI en blanco</strong>. Esta
              opción permite realizar una factura de venta sin necesidad de
              haber generado previamente un movimiento de compra en el módulo de
              Ventas Generales. Al utilizar este método, el sistema automatiza
              el proceso y registra la venta de forma inmediata.
            </p>{" "}
            <br />
            <p>La tabla principal nos muestra la siguiente información:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Folio de la factura.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del proveedor.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Subtotal de la venta.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Impuestos de la venta.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Total de la venta.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Usuario que creó el movimiento.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Fecha en que se registró el movimiento.
              </li>
            </ol>
          </article>
        </div>

        <div className="mt-6">
          <span
            id="article2"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            Emitir una factura de venta a movimientos existentes
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>Seleccionar la información fiscal para los siguientes campos:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Tipo de CFDI.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Fecha de CFDI.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Escoge el cliente. Si se han registrado los datos en cómo se va
                a facturar a dicho cliente previamente, algunos campos se
                llenarán de forma inmediata. En caso de que no se llenen,
                continuar con los siguientes campos.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Lugar de expedición de la factura.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Uso de CFDI.
              </li>
              <li className="before:content-['6.'] before:mr-2">Serie.</li>
              <li className="before:content-['7.'] before:mr-2">
                Método de pago.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Forma de pago.
              </li>
              <li className="before:content-['9.'] before:mr-2">Moneda.</li>
              <li className="before:content-['10.'] before:mr-2">
                Número de decimales.
              </li>
            </ol>

            <br />
            <p>
              Posteriormente, en la tabla siguiente marca las casillas de las
              ventas que deseas asociar a dicha factura de cliente. Puedes
              marcar una sola casilla o varias simultáneamente.
            </p>
            <br />
            <p>La tabla contiene los siguientes campos:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Casilla para marcar.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Número de documento de venta.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Cantidad de productos.
              </li>
              <li className="before:content-['4.'] before:mr-2">Subtotal.</li>
              <li className="before:content-['5.'] before:mr-2">Impuestos.</li>
              <li className="before:content-['6.'] before:mr-2">
                Total de la venta.
              </li>
            </ol>
            <br />
            <p>
              Las facturas de clientes pueden emitirse de dos maneras: en
              relación con los productos vendidos o con los cobros realizados
              por la venta.
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Relación con productos:</strong> Permite registrar la
                factura de forma parcial, seleccionando únicamente ciertos
                productos de una o varias ventas.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Relación con cobros:</strong> Permite registrar la
                factura en función de los cobros parciales realizados al cliente
                por dicha venta.
              </li>
            </ol>
            <br />
            <p>
              Para un registro adecuado, es fundamental definir el método
              deseado y seleccionar la opción correspondiente en pantalla:{" "}
              <strong>relacionar por productos</strong> o{" "}
              <strong>relacionar por cobros</strong>.
            </p>
            <br />
            <p>
              En caso de seleccionar relacionar por productos, marcar las
              casillas deseadas de la siguiente tabla:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Código del producto.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Cantidad de producto.
              </li>
              <li className="before:content-['3.'] before:mr-2">Unidad.</li>
              <li className="before:content-['4.'] before:mr-2">Concepto.</li>
              <li className="before:content-['5.'] before:mr-2">
                Precio unitario.
              </li>
              <li className="before:content-['6.'] before:mr-2">Descuento.</li>
              <li className="before:content-['7.'] before:mr-2">Subtotal.</li>
            </ol>
            <br />

            <p>
              Por último, después de marcar los productos, tenemos el apartado
              de totales con:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">Subtotal.</li>
              <li className="before:content-['2.'] before:mr-2">Impuestos.</li>
              <li className="before:content-['3.'] before:mr-2">
                Total de la factura de cliente por emitir.
              </li>
            </ol>
            <br />
            <p>
              Al final del documento, tenemos la opción de previsualizar la
              factura, guardarla como borrador o generar el CFDI.
            </p>
          </article>
        </div>

        <div className="mt-6">
          <span
            id="article3"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
Registrar una factura en blanco
</span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
         <p>

         Una factura en blanco se puede registrar de forma manual o arrastrando el xml. Para agregar de forma manual, debes llenar los campos obligtorios que solicita el sistema. Si deseas arrastar un xml, jala el archivo desde tu ordenador y la información fiscal y de productos se agregará de forma inmediata. Si hay algún campo que no se haya llenado, completa la información faltante.

         </p><br />
         <p className="font-semibold">
         Sigue los siguientes pasos:

         </p><br />
         <p>
         Seleccionar la información fiscal para los siguientes campos:
         </p><br />
         <ol className="px-8">
  <li className="before:content-['1.'] before:mr-2">
    Tipo de CFDI.
  </li>
  <li className="before:content-['2.'] before:mr-2">
    Fecha de CFDI.
  </li>
  <li className="before:content-['3.'] py-1 before:mr-2">
    Escoge el cliente. Si se han registrado los datos en cómo se va a facturar a dicho cliente previamente, algunos campos se llenarán de forma inmediata. En caso de que no se llenen, continuar con los siguientes campos.
  </li>
  <li className="before:content-['4.'] before:mr-2">
    Lugar de expedición de la factura.
  </li>
  <li className="before:content-['5.'] before:mr-2">
    Uso de CFDI.
  </li>
  <li className="before:content-['6.'] before:mr-2">
    Serie.
  </li>
  <li className="before:content-['7.'] before:mr-2">
    Método de pago.
  </li>
  <li className="before:content-['8.'] before:mr-2">
    Forma de pago.
  </li>
  <li className="before:content-['9.'] before:mr-2">
    Moneda.
  </li>
  <li className="before:content-['10.'] before:mr-2">
    Número de decimales.
  </li>
</ol>
<br />
<p>
    
Después de llenar la información fiscal correspondiente, agregar los productos para registrar dentro de la factura de cliente

</p> <br />
<p>
Escribe dentro del buscador de productos y posteriormente marca las casillas de los productos que se desea añadir. Al final presiona el botón “Agregar”.

</p> <br />
<p>
O bien, dentro de la tabla general de la factura de proveedor, toca el botón “+” y agrega el producto deseado. La tabla muestra la siguiente información:

</p> <br />
<ol className="px-8">
  <li className="before:content-['1.'] before:mr-2">
    Nombre del producto.
  </li>
  <li className="before:content-['2.'] before:mr-2">
    Código del producto.
  </li>
  <li className="before:content-['3.'] before:mr-2">
    Agrega la cantidad.
  </li>
  <li className="before:content-['4.'] before:mr-2">
    Unidad.
  </li>
  <li className="before:content-['5.'] before:mr-2">
    Determina el precio por unidad.
  </li>
  <li className="before:content-['6.'] before:mr-2">
    Agrega el descuento en caso de ser necesario.
  </li>
  <li className="before:content-['7.'] before:mr-2">
    Agrega impuesto.
  </li>
  <li className="before:content-['8.'] before:mr-2">
    Fecha de Entrega.
  </li>
  <li className="before:content-['9.'] before:mr-2">
    Subtotal.
  </li>
</ol>
<br />
<p>
Al final del documento, tenemos la opción de previsualizar la factura, guardarla como borrador o generar el CFDI.

</p>
          </article>
        </div>
        <div className="mt-6">
          <span
            id="article4"
            className="font-poppins font-semibold text-[18px] text-grisHeading"
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

export default SalesCFDI;
