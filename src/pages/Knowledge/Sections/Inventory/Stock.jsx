import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function StockArticle() {
  const sections = [
    {
      index: 1,
      title: "Stock de artículos",
      ref: "article1",
      subsections: [],
    },

    {
      index: 2,
      title: "Ajustes de inventario",
      ref: "article2",
      subsections: [
        { title: "Crear nuevo ajuste de inventario", ref: "article2.1" },
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
            Stock de artículos
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este submódulo se compone de dos segmentos principales:
              Existencias y Ajustes de Inventario. Su función principal es
              proporcionar una visión general del stock disponible para cada
              artículo o almacén.
            </p>
            <br />
            <br />
          </article>
        </div>

        <div id="article1" className="mt-3">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Existencias
          </span>
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <br />
            <p>La tabla principal de existencias su vez tiene dos partes:</p>
            <br />
            <p>
              Almacenes: proporciona una lista de los almacenes disponibles y su
              stock por almacén. Para consultar el stock del almacén, presiona
              el botón “ver” al final de la tabla.
            </p>
            <br />
            <p>
              La información del almacén muestra la lista de los artículos que
              se encuentran disponibles en dicho almacén con la siguiente
              información:
            </p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Código del artículo.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del artículo.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Ubicación, en caso de que haya, se encuentre en alguna ubicación
                específica registrada dentro del almacén.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Stock: el inventario total considerando ventas no entregadas y
                compras no recibidas.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Comprometido: es el stock que se tiene previsto entregar por
                alguna venta, algún traspaso o alguna orden de fabricación.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Pedido: es el stock que se tiene previsto recibir por alguna
                compra, alguna solicitud de traspaso o alguna orden de
                fabricación.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Disponible: es lo que se tiene físicamente disponible y se puede
                manipular en ese momento.
              </li>
              <li className="before:content-['8.'] before:mr-2">
                Costo: el costo total de los artículos disponibles en el
                almacén.
              </li>
              <li className="before:content-['9.'] before:mr-2">
                Variables: en caso de que sea un producto con variables,
                presiona el botón ver para consultar la información de cada
                variable del producto.
              </li>
            </ol>
            <br />
            <p>
              Artículos: proporciona una lista de los artículos disponibles y su
              stock por artículo. Para consultar el stock del artículo, presiona
              el botón “ver” al final de la tabla.
            </p>
            <br />
            <p>
              La información del artículo muestra la lista de los almacenes en
              donde se encuentra disponible dicho artículo y su stock por
              almacén:
            </p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Código del almacén
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del almacén
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Stock: el inventario total considerando ventas no entregadas y
                compras no recibidas
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Comprometido: es el stock que se tiene previsto entregar por
                alguna venta, algún traspaso o alguna orden de fabricación.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Pedido: es el stock que se tiene previsto recibir por alguna
                compra, alguna solicitud de traspaso o alguna orden de
                fabricación.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Disponible: es lo que se tiene físicamente disponible y se puede
                manipular en ese momento.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Costo: el costo total de los artículos disponibles en el
                almacén.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Ubicaciones: en caso de que sea un almacén con ubicaciones,
                presiona el botón ver, para consultar la información de cada
                ubicación del almacén.
              </li>
            </ol>
          </article>
        </div>
        <div id="article2" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Ajustes de inventario
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Los ajustes de inventario se utilizan para corregir discrepancias
              entre el stock registrado en el sistema y la cantidad física real
              de productos en el almacén. Estos ajustes pueden deberse a
              diversas razones, como pérdidas por merma, daños, robos, errores
              en el registro de entradas y salidas, o regularización de
              inventarios tras auditorías.
            </p>
            <br />
            <p id="article2.1" className="font-semibold">
              Crear nuevo ajuste de inventario
            </p>
            <br />
            <p>
              Para crear un nuevo ajuste de inventario, en la tabla principal
              toca el botón Nuevo{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />{" "}
              Ajuste de inventario en la parte superior derecha de la pantalla.
            </p>
            <p>A continuación agrega la siguiente información:</p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Selecciona el almacén donde se hará el ajuste
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Selecciona la cuenta contable la cual será afectada
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Agrega la fecha del ajuste{" "}
              </li>
              <li className="before:content-['4.'] before:mr-2">Categoría</li>
              <li className="before:content-['5.'] before:mr-2">
                Agrega una descripción para complementar la información del
                ajuste
              </li>
            </ol>
            <br />
            <p>
              Posteriormente, encontrarás todos los artículos para ajustar las
              cantidades disponibles en el almacén.
            </p>
            <br />
            <p>La tabla nos muestra la siguiente información:</p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Código del artículo
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del producto
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Existencia actual
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Recuento: se podrá indicar la cantidad de piezas existentes y
                reales físicamente
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Diferencias: es la variación entre la existencia actual y el
                recuento, puede ser positivo o negativo
              </li>
              <li className="before:content-['6.'] before:mr-2">
                El estatus indica si la variación es con faltante, sobrante o
                está completa.
              </li>
            </ol>
            <br />
            <p>
              Cuando un artículo tenga diferentes lotes, se deberá realizar el
              recuento por lote. Para ello es necesario presionar el botón “ver”
              hasta el final de la tabla, se mostrará un nuevo apartado, donde
              será necesario registrar el recuento por lote.
            </p>
            <br />
            <p>La tabla muestra lo siguiente:</p>
            <br />
            <ol>
              <li className="before:content-['1.'] before:mr-2">
                Lotes del artículo
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Existencias de cada lote
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Recuento: donde se deberá agregar la cantidad de existencias
                para cada lote
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Desviación: es la variación entre la existencia actual y el
                recuento, puede ser positivo o negativo
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Por último la tabla muestra el total de los lotes y el estatus
                final, que puede ser con faltante, sobrante o completa. El
                total, será el que se mostrará en la tabla anterior del resto de
                los artículos en la columna de “Diferencia”
              </li>
            </ol>
            <br />

            <p>
              Al terminar de registrar la información de cada lote, presiona el
              botón “Listo”.
            </p>
            <br />
            <p>
              Una vez que se hayan registrado todos los movimientos y ajustes de
              inventario requeridos, presione el botón “crear ajuste”, después
              confirma.
            </p>
            <br />
            <p>
              Para consultar los ajustes realizados, en la tabla principal de
              ajustes de inventario, escoge el movimiento deseado y toca el
              botón Tres puntos{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />{" "}
              eliminar.
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

export default StockArticle;
