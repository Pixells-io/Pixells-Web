import { ScrollArea } from "@/components/ui/scroll-area";
import { IonIcon } from "@ionic/react";
import { chevronForward, informationCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
function InventoryGeneral() {
  const section = [
    {
      id: 1,
      title: "Articulos General",
      subsections: [
        { title: "Crear un articulo", ref: "article1" },
        { title: "Artículo simple o variable", ref: "article2" },
      ],
    },
    {
      id: 2,
      title: "Secciones del Formulario",
      subsections: [
        { title: "Sección Principal", ref: "article3" },
        { title: "Sección General", ref: "article4" },
        { title: "Sección Inventario", ref: "article5" },
        { title: "Sección Inventario por almacén", ref: "article6" },
        { title: "Sección Compras", ref: "article7" },
      ],
    },
  ];

  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const scrollAreaRef = useRef(null);

  const scrollToArticle = (articleId, buttonIndex) => {
    const article = document.getElementById(articleId);

    if (scrollAreaRef.current && article) {
      // Get the viewport element from the ScrollArea component
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );

      if (viewport) {
        const scrollPosition = article.offsetTop;

        viewport.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });

        setActiveButton(buttonIndex);
      }
    }
  };

  return (
    <div className="w-full h-full max-h-[90vh] grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <ScrollArea
        ref={scrollAreaRef}
        className="w-full h-full col-span-8 px-6 py-2"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          INVENTARIOS
        </span>
        {/*ARTICLE 1 */}
        <div className="mt-6">
          <article className="font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Este módulo nos ayudará a gestionar todo lo relacionado a nuestro
              inventario de artículos, servicios, gastos y sucursales, desde la
              creación, edición y consulta de información.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Artículos General
          </span>
          <article
            id="article1"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <p>Dentro de este submódulo podemos crear lo siguiente:</p>
            <br />
            <ul class="list-disc px-8">
              <li>Artículos</li>
              <li>Categorías</li>
              <li>Atributos</li>
            </ul>
            <br />
            <p>
              Para crear un nuevo artículo es necesario primero crear una
              categoría de artículos. Una categoría de artículos es para poder
              seccionar nuestros inventarios de una mejor forma.
            </p>
            <br />

            <p>
              Por ejemplo, cuando existe una empresa de producción de alimentos,
              es necesario crear distintos artículos para fabricar un producto.
              La “Materia Prima” puede ser un ejemplo de una categoría donde
              puedes agrupar los materiales.
            </p>
            <br />

            <p>
              Presiona el botón nuevo y después selecciona Categoría. A
              continuación indica el nombre de la categoría y después presiona
              “Listo”.
            </p>
            <br />

            <p>
              Para editar, da click en el botón “i” de información, después
              cambia el nombre y presiona “Listo”.{" "}
            </p>
            <br />

            <p>
              Para eliminar ve a la tabla de categorías y da click en el botón
              “basura”. Confirma si deseas aceptar el movimiento.
            </p>
            <br />

            <p>
              Una vez creada la categoría, podemos dar de alta un artículo y
              asociarlo a la categoría deseada.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 3 */}
        <div className="mt-6">
          <article
            id="article2"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <span className="font-semibold">Artículo simple o variable</span>
            <br />
            <br />
            <p>
              Artículo simple: es un artículo singular y que no cuenta con más
              opciones similares. Por ejemplo, si eres una tienda que se dedica
              a vender productos alimenticios para el hogar, un producto simple
              puede ser el azucar o la sal.
            </p>
            <br />
            <p>
              Artículo variable: Es un artículo que cuenta con varios modelos
              que dependen de un artículo madre. Por ejemplo, si eres una tienda
              de ropa, un producto variable puede ser una playera que cuenta con
              diferentes colores y distintas tallas.
            </p>
            <br />
            <p>
              Para dar de alta y configurar un producto variable, primero debes
              definir los atributos relacionados al producto, algunos atributos
              pueden ser Talla, Color, Material.
            </p>
            <br />
            <p>
              Después de haber definido el tipo de artículo que vamos a guardar,
              da click en Nuevo{" "}
              <IonIcon icon={chevronForward} className="text-center" /> Artículo
              y a continuación completa los siguientes campos requeridos en la
              primer sección para guardar un artículo de forma rápida:
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 4 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Secciones del Formulario
          </span>

          <article
            id="article3"
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <span className="font-semibold">Sección Principal:</span>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Nombre o descripción.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Seleccionar categoría.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Tipo de artículo:
                <ul className="ml-6">
                  <li className="before:content-['a.'] before:mr-2">
                    Inventario: los artículos que se deben almacenar y controlar
                    un stock.
                  </li>
                  <li className="before:content-['b.'] before:mr-2">
                    Compra: los artículos que se deben comprar y adquirir.
                  </li>
                  <li className="before:content-['c.'] before:mr-2">
                    Venta: los artículos que son para la venta y que generarán
                    ingresos para la compañía.
                  </li>
                </ul>
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Unidades de medida: se debe seleccionar la unidad de medida
                correspondiente dando click en el botón de información{" "}
                <IonIcon
                  icon={informationCircleOutline}
                  className="text-center pt-4"
                />
                , seleccionar la unidad y presionar “Listo”
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Precio unitario de venta
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Seleccionar almacén
              </li>
            </ol>
            <br />
            <p>
              Un vez que la se haya colocado la información deseada, es
              necesario presionar el botón “Guardar”.
            </p>
            <br />
            <p>Campos opcionales:</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Centro de costos
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Listas de precios
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Código de barras
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Clave del SAT
              </li>
            </ol>
          </article>
        </div>
        {/*ARTICLE 5 */}
        <div className="mt-6">
          <span
            id="article4"
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Seccion General
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>Campos Opcionales:</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Sujeto a impuesto: si es un artículo que lleva o es afectado por
                impuestos.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Disponible para devolución: si es un producto que se aceptará
                para devoluciones o cancelaciones por parte de los clientes.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Disponible para fabricar: si es un producto que se desea
                habilitar en el módulo de Transformación, para elaborar listas
                de materiales y órdenes de fabricación.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Fabricante: agregar el fabricante principal.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Comentarios: comentarios adicionales para incluir información de
                apoyo.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Estatus: para colocar si es un artículo que estará disponible en
                el sistema, o suspendido. También es posible considerar fechas
                establecidas para limitar cuándo estará disponible un artículo.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Imagen del artículo.
              </li>
            </ol>
            <p>
              Un vez que la se haya colocado la información deseada, es
              necesario presionar el botón “Guardar”.
            </p>
            <br />
            <p>En caso de ser un artículo variable, Sección Variables:</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Agrega atributos: elegir el atributo que se desea incluir en el
                artículo y presionar el botón “+ Agrega”. Posteriormente,
                seleccionar las opciones de variables deseadas que aparecen
                dentro del atributo. Si se desea agregar más variables a algún
                atributo, ve a artículos{" "}
                <IonIcon icon={chevronForward} className="text-center pt-4" />{" "}
                atributos{" "}
                <IonIcon icon={chevronForward} className="text-center pt-4" />{" "}
                seleccionar atributo{" "}
                <IonIcon icon={chevronForward} className="text-center pt-4" />{" "}
                agregar o eliminar variables.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Imagen de cada variable.
              </li>
            </ol>
            <br />
            <p>
              Un vez que la se haya colocado la información deseada, es
              necesario presionar el botón “Guardar”.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 6 */}
        <div className="mt-6">
          <span
            id="article5"
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Sección Inventario:
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>Método de Valoración de Inventario</p>
            <br />
            <p>
              Seleccionar el método en cómo será valorado el inventario tomando
              en cuenta siempre sus entradas y salidas de cualquier almacén.
            </p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Costo promedio: se re-calcula siempre el costo cuando hay
                entradas y salidas del almacén. Se contempla siempre un promedio
                de la cantidad de producto ingresado con el precio del producto
                que se ingresó. Sumando ambas cantidades a sus rubros
                respectivamente y volviendo a dividir cantidad total entre monto
                del inventario total, cada ocasión que el almacén sufre un
                movimiento.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Lote/No. de Serie: Siempre mantendrán el costo de la misma forma
                en que se ingresó cada lote en particular. Si el lote A se
                ingresó con un costo unitario de 10 pesos, de la misma forma
                será contemplado a su salida del almacén.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">PEPS.</li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                Coste Estándar.
              </li>
              <br />
            </ol>
            <p>Nivel de Inventario</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Mínimo: el mínimo stock aceptable que deberá tener el sistema.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Máximo: el máximo stock aceptable que deberá tener el sistema.
              </li>
            </ol>

            <p>
              Un vez que la se haya colocado la información deseada, es
              necesario presionar el botón “Guardar”.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 7 */}
        <div className="mt-6">
          <span
            id="article6"
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Sección Inventario por almacén:
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Dentro de esta sección podrás consultar el inventario de un
              artículo específico. Muestra todos los almacenes de la empresa y
              el stock que se en encuentra en cada uno de los almacenes.
            </p>

            <br />
            <p>En la tabla puedes visualizar:</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Código del almacén.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Nombre del almacén.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                En stock: la cantidad total que hay del artículo.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Comprometido: lo que otros almacenes han pedido o producto que
                se encuentra en proceso de venta.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Pedido: producto que se encuentra en camino al almacén.
              </li>
              <li className="before:content-['6.'] before:mr-2">
                Disponible: cantidad disponible real que se puede tomar del
                artículo.
              </li>
              <li className="before:content-['7.'] before:mr-2">
                Costo del Artículo.
              </li>
            </ol>
          </article>
        </div>
        {/*ARTICLE 8 */}
        <div className="mt-6">
          <span
            id="article7"
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Sección Compras:
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Selecciona el proveedor predeterminado que se desea tener para
              automatizar y reducir el rango de error en la creación de compras.
            </p>
            <br />

            <p>
              Un vez que la se haya colocado la información deseada, es
              necesario presionar el botón “Guardar”.
            </p>
            <br />
          </article>
        </div>
      </ScrollArea>
       <section className="col-span-4 w-full max-h-[90vh] px-8 py-6">
             <ScrollArea className="h-full">
               <div className="flex flex-col space-y-4">
                 {section.map((item) => (
                   <div key={item.index} className="flex flex-col">
                     <button
                       onClick={() => setShowMenu(item.index)}
                       className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                                 ${
                                   showMenu === item.index
                                     ? "border-l border-[#000000] text-grisHeading font-semibold"
                                     : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                                 }`}
                     >
                       {item.title}
                     </button>
     
                     {showMenu === item.index && (
                       <div className="flex flex-col px-8 items-start space-y-5">
                         {item.subsections.map((subsection, idx) => (
                           <button
                             key={subsection.ref}
                             onClick={() => scrollToArticle(subsection.ref, idx)}
                             className={`px-3 py-2 font-roboto font-normal text-[14px] 
                                       ${activeButton === idx ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}`}
                           >
                             {subsection.title}
                           </button>
                         ))}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </ScrollArea>
           </section>
    </div>
  );
}

export default InventoryGeneral;
