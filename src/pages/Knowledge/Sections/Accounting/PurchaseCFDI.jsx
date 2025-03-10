import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";

function PurchaseCFDI() {
  const sections = [
    {
      index: 1,
      title: "Facturas de compras",
      ref: "article1",
      subsections: [],
    },
    {
      index: 2,
      title: "Registrar una factura de compra a movimientos existentes",
      ref: "article2",
      subsections: [],
    },
    {
      index: 3,
      title: "Registrar una factura en blanco",
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
          CONTABILIDAD
        </span>

        <div className="mt-6">
          <span
            id="article1"
            className="font-poppins text-[16px] text-grisHeading"
          >
            Facturas de compras
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En este submódulo, es posible registrar las facturas emitidas por
              los proveedores mediante dos métodos diferentes:
            </p>
            <br />
            <p id="article1.1">
              La primera es asociar un{" "}
              <strong>CFDI a movimientos existentes</strong>. Permite registrar
              una factura de compra vinculándola a un movimiento de compra
              previamente registrado en el sistema.
            </p>{" "}
            <br />
            <p id="article1.2">
              La segunda es <strong>registrar un CFDI en blanco</strong>. Esta
              opción permite ingresar una factura de compra sin necesidad de
              haber generado previamente un movimiento de compra en el módulo de
              Compras Generales. Al utilizar este método, el sistema automatiza
              el proceso y registra la compra de forma inmediata.
            </p>
            <br />
            <p>La tabla principal nos muestra la siguiente información:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Folio de la factura del proveedor.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del proveedor.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Subtotal de la compra.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Impuestos de la compra.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Total de la compra.
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
            Registrar una factura de compra a movimientos existentes
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
              <li className="before:content-['3.'] py-1 before:mr-2">
                Escoge el proveedor. Si se han registrado los datos en cómo debe
                facturarte un proveedor previamente, algunos campos se llenarán
                de forma inmediata. En caso de que no se llenen los campos,
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
              compras que deseas asociar a dicha factura de proveedor. Puedes
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
                Número de documento de compra.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Cantidad de productos.
              </li>
              <li className="before:content-['4.'] before:mr-2">Subtotal.</li>
              <li className="before:content-['5.'] before:mr-2">Impuestos.</li>
              <li className="before:content-['6.'] before:mr-2">
                Total de la compra.
              </li>
            </ol>
            <br />
            <p>
              Las facturas de proveedores pueden registrarse de dos maneras: en
              relación con los productos adquiridos o con los pagos realizados
              por la compra.
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                <strong>Relación con productos:</strong> Permite registrar la
                factura de forma parcial, seleccionando únicamente ciertos
                productos de una o varias compras.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                <strong>Relación con pagos:</strong> Permite registrar la
                factura en función de los pagos parciales realizados al
                proveedor por dicha compra.
              </li>
            </ol>
            <br />
            <p>
              Para un registro adecuado, es fundamental definir el método
              deseado y seleccionar la opción correspondiente en pantalla:{" "}
              <strong>relacionar por productos</strong> o{" "}
              <strong>relacionar por pagos</strong>.
            </p>{" "}
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
                Total de la factura de proveedor a registrar.
              </li>
            </ol>
            <br />
            <p>
              Al final del documento, tenemos la opción de previsualizar la
              factura, guardarla como borrador o generar el CFDI.
            </p>
            <br />
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
              Una factura en blanco se puede registrar de forma manual o
              arrastrando el xml. Para agregar de forma manual, debes llenar los
              campos obligtorios que solicita el sistema. Si deseas arrastar un
              xml, jala el archivo desde tu ordenador y la información fiscal y
              de productos se agregará de forma inmediata. Si hay algún campo
              que no se haya llenado, completa la información faltante.
            </p>
            <br />
            <p className="font-semibold">Sigue los siguientes pasos:</p>
            <br />
            <p>Seleccionar la información fiscal para los siguientes campos:</p>
            <br />

            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Tipo de CFDI.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Fecha de CFDI.
              </li>
              <li className="before:content-['3.'] mb-2 before:mr-2">
                Escoge el proveedor. Si se han registrado los datos en cómo debe
                facturarte un proveedor previamente, algunos campos se llenarán
                de forma inmediata. En caso de que no se llenen los campos,
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
              Después de llenar la información fiscal correspondiente, agregar
              los productos para registrar dentro de la factura de proveedor.
            </p>
            <br />
            <p>
              Escribe dentro del buscador de productos y posteriormente marca
              las casillas de los productos que se desea añadir. Al final
              presiona el botón “Agregar”.
            </p>
            <br />
            <p>
              O bien, dentro de la tabla general de la factura de proveedor,
              toca el botón “+” y agrega el producto deseado. La tabla muestra
              la siguiente información:
            </p>
            <br />

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
              <li className="before:content-['4.'] before:mr-2">Unidad.</li>
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
              <li className="before:content-['9.'] before:mr-2">Subtotal.</li>
            </ol>

            <br />

            <p>
              Al final del documento, tenemos la opción de previsualizar la
              factura, guardarla como borrador o generar el CFDI.
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

export default PurchaseCFDI;
