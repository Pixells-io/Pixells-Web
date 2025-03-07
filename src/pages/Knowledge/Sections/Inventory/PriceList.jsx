import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";
import SectionNavigation from "../../Components/SectionNavigation";
import { chevronForward, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function PriceList() {
  const sections = [
    {
      index: 1,
      title: "Listas de precios",
      ref: "article1",
      subsections: [
        { title: "¿Cómo crear una lista de precios?", ref: "article1.1" },
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
            Listas de precios
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Las listas de precios desempeñan un papel fundamental en la
              actualización y gestión de los valores de artículos y servicios,
              permitiendo su ajuste según los distintos canales, mercados o
              segmentos de clientes definidos por la empresa. Asimismo, es
              relevante considerar que, dentro del punto de venta, estas listas
              también pueden administrarse para ofrecer precios diferenciados a
              los clientes en tiendas y sucursales.
            </p>
            <br />
            <p id="article1.1" className="font-semibold">
              ¿Cómo crear una lista de precios?
            </p>
            <br />
            <p>
              Para crear una nueva lista de precios, presiona el botón “nuevo”
              en la parte superior derecha de la pantalla.
            </p>
            <br />
            <p>Posteriormente agrega los siguientes datos:</p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                {" "}
                Nombre de la lista
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Lista de precios base: esto significa que se puede tomar alguna
                lista anterior como referencia para hacer más rápido el proceso,
                modificar los productos deseados y así no tener que agregar
                todos los productos de nuevo a la lista.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Índice de refactorización: Es el índice por el cual se
                multiplicarán los valores iniciales de los productos
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                Modalidad: Permanente o por fecha. En caso de que la lista
                funcione para un periodo determinado, colocar las fechas
                deseadas.
              </li>
              <br />
              <li className="before:content-['5.'] before:mr-2">
                Redondeo: se refiere a que lo productos se redondean a un número
                entero para evitar los decimales.
              </li>
              <br />
            </ol>
            <br />
            <p>
              En caso de que se haya elegido una lista de precios base, los
              productos se agregarán a la lista de forma automática. Si se
              requiere agregar más productos, presiona el botón “+” en la parte
              inferior izquierda de la tabla. Si es una lista de precios que no
              contiene una lista de precios base, será necesario agregar todos
              los productos por primera vez. Para ello, toca el botón “+” en la
              parte inferior izquierda de la tabla. Posteriormente indica los
              siguientes valores:
            </p>
            <br />
            <p>
              Si es una lista de precios que no contiene una lista de precios
              base, será necesario agregar todos los productos por primera vez.
            </p>
            <br />
            <p>
              Para ello, toca el botón “+” en la parte inferior izquierda de la
              tabla. Posteriormente indica los siguientes valores:
            </p>
            <br />
            <ol className="px-8">
              <li className="before:content-['1.'] before:mr-2">
                Escoge el artículo deseado
              </li><br />
              <li className="before:content-['2.'] before:mr-2">
                Código: indica el código del artículo
              </li><br />
              <li className="before:content-['3.'] before:mr-2">
                Precio unitario: indica el precio unitario del producto
              </li><br />
              <li className="before:content-['4.'] before:mr-2">
                Lista de precios base: indica si el artículo tiene una lista de
                precios de referencia activa, se puede modificar. En caso de que
                se agregue un producto nuevo a la lista, se puede agregar una
                lista de precios base, siempre y cuando el producto se encuentre
                en alguna lista.
              </li><br />
              <li className="before:content-['5.'] before:mr-2">
                Índice de refactorización: El índice de refactorización con el
                que cuenta el producto con alguna lista de precios activa.{" "}
              </li><br />
              <li className="before:content-['6.'] before:mr-2">
                Indice editable: es el indice por el cuál se multiplicará el
                precio del producto base.
              </li><br />
              <li className="before:content-['7.'] before:mr-2">
                Precio de refactorización: el precio final del producto para la
                venta.
              </li>
            </ol><br />
            <p>Al finalizar toca el botón “Guardar”.</p>
            <br />

            <p>
              Para eliminar la lista, presiona el botón “Eliminar” en la parte
              inferior izquierda de la lista, después confirma. O bien, en la
              tabla de principal de listas, presiona el botón{" "}
              <IonIcon icon={ellipsisVertical} className="text-center px-2" />{" "}
              <IonIcon icon={chevronForward} className="text-center px-2" />{" "}
              Eliminar.
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

export default PriceList;
