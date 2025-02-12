import { IonIcon } from "@ionic/react";
import { chevronForward, informationCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
function ServicesGeneral() {
  const sections = [
    {
      id: 1,
      title: "Servicios General",
      subsections: [
        { title: "Crear un servicio", ref: useRef(null) },
       
      ],
    },
    {
      id: 2,
      title: "Secciones del Formulario",
      subsections: [
        { title: "Sección Principal", ref: useRef(null) },
        { title: "Sección General", ref: useRef(null) },
        { title: "Sección Usuarios", ref: useRef(null) },
        { title: "Sección Proceso", ref: useRef(null) },
        { title: "Sección Compras", ref: useRef(null) },
      ],
    },
  ];

  const containerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  const scrollToArticle = (articleRef, buttonIndex) => {
    const container = containerRef.current;
    const article = articleRef.current;

    if (container && article) {
      const scrollPosition = article.offsetTop - container.offsetTop;
      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      setActiveButton(buttonIndex);
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <div
        ref={containerRef}
        className="w-full max-h-[90vh] overflow-auto col-span-8 px-6 py-10"
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
            Servicios General
          </span>
          <article
            ref={sections[0].subsections[0].ref}
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <p>Dentro de este submódulo podemos crear lo siguiente:</p>
            <br />
            <ul class="list-disc px-8">
              <li>Servicios</li>
              <li>Categorías</li>
              <li>Combos</li>
            </ul>
            <br />
            <p>
              Para crear un nuevo servicios es necesario primero crear una
              categoría de servicios. Una categoría de servicios es para poder
              seccionar nuestros inventarios de una mejor forma.
            </p>
            <br />

            <p>
              Por ejemplo, cuando existe una empresa de fumigación, será
              necesario tener separados los tipos de servicios y algunas
              categorías pueden ser “Para el Hogar, Para el Campo, Para Bodega”.
              De esta forma podemos ordenar los tipos de servicios y darle
              estructura a nuestro inventario de servicios.
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
              cambia el nombre y presiona “Listo”.
            </p>
            <br />

            <p>
              Para eliminar ve a la tabla de categorías y da click en el botón
              “basura”. Confirma si deseas aceptar el movimiento.
            </p>
            <br />

            <p>
              Una vez creada la categoría, podemos dar de alta un servicio y
              asociarlo a la categoría deseada.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 3*/}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Secciones del Formulario
          </span>

          <article
            ref={sections[1].subsections[0].ref}
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <span className="font-semibold">Sección Principal:</span>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">Nombre.</li>
              <li className="before:content-['2.'] before:mr-2">Descrición.</li>
              <li className="before:content-['3.'] before:mr-2">
                Seleccionar categoría.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Tipo de artículo:
                <ul className="ml-6">
                  <li className="before:content-['a.'] before:mr-2">
                    Compra: los servicios que se deben comprar y adquirir.
                  </li>
                  <li className="before:content-['b.'] before:mr-2">
                    Venta: los servicios serán para la venta y generarán
                    ingresos.
                  </li>
                </ul>
              </li>

              <li className="before:content-['5.'] before:mr-2">
                Precio unitario de venta
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
              <li className="before:content-['5.'] before:mr-2">
                Color: presiona el botón “Selecciona” y escoge el color deseado
              </li>
            </ol>
          </article>
        </div>
        {/*ARTICLE 4 */}
        <div ref={sections[1].subsections[1].ref} className="mt-6">
          <span
           
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Sección General
          </span>
          <article   className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>Campos Opcionales:</p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Sujeto a impuesto: si es un servicio que lleva o es afectado por
                impuestos.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Disponible para devolución: si es un servicio que se aceptará
                para devoluciones o cancelaciones por parte de los clientes.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Comentarios: comentarios adicionales para incluir información de
                apoyo.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Estatus: para colocar si es un servicio que estará disponible en
                el sistema, o suspendido. También es posible considerar fechas
                establecidas para limitar cuándo estará disponible un servicio.
              </li>
              <li className="before:content-['5.'] before:mr-2">
                Imagen del servicio.
              </li>
            </ol>

            <p>
              Un vez que la se haya colocado la información deseada, es
              necesario presionar el botón “Guardar”.
            </p>
            <br />
            <p>En caso de ser un servicio de venta:</p>
            <br />
          </article>
        </div>
        {/*ARTICLE 5 */}
        <div className="mt-6">
          <span
            ref={sections[1].subsections[2].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Sección Usuarios
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              {" "}
              1. Agrega usuario: presiona el botón “+ Agrega”. Posteriormente,
              selecciona el usuario que deseas asociar al servicio y da click en
              “Aceptar”. El primer usuario agregado será el responsable del
              servicio. En caso de agregar más usuarios y de querer asignar a
              otra personas como responsable del servicio, se deberá activar el
              switch de forma manual en el usuario responsable deseado.
            </p>
            <br />
            <p>Para eliminar un usuario, presionar el botón “Eliminar”.</p>
            <br />
            <p>Para agregar más usuarios, podrás repetir el mismo proceso.</p>
            <br />
            <p>
              Un vez que se haya colocado la información deseada, es necesario
              presionar el botón “Guardar”.
            </p>
            <br />
          </article>
        </div>
        {/*ARTICLE 6 */}
        <div className="mt-6">
          <span
            ref={sections[1].subsections[3].ref}
            className="font-roboto font-semibold text-[14px] text-grisHeading"
          >
            Sección Proceso
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para agregar una Etapa, presiona el botón “+ Agrega”, después
              completa la información:
            </p>
            <br />
            <ol className="mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Título de la etapa.
              </li>
              <li className="before:content-['2.'] before:mr-2">
                Color de la etapa.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                Descripción.
              </li>
            </ol>
            <br />
            <p>
            Para eliminar un usuario, presionar el botón “Eliminar”.

            </p><br />
            <p>
            Se pueden crear tantas etapas como sean necesarias. Así mismo, este proceso se puede hacer desde el módulo de ventas <IonIcon icon={chevronForward} className="text-center px-2 text-[14px]"/> seguimiento de servicios.
            </p><br />
            <p>
            Es importante considerar que las etapas que se agreguen desde éste módulo serán las etapas disponibles para dar seguimiento en la venta de un servicio. 

            </p><br />
            <p>
            Un vez que se haya colocado la información deseada, es necesario presionar el botón “Guardar”.

            </p>

          </article>
        </div>
        {/*ARTICLE 7 */}
        <div className="mt-6">
          <span  ref={sections[1].subsections[4].ref} className="font-roboto font-semibold text-[14px] text-grisHeading">
          Sección Compras:

          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
          <p>Selecciona el proveedor predeterminado que se desea tener para automatizar y reducir el rango de error en la creación de compras.</p><br />

          <p>Un vez que la se haya colocado la información deseada, es necesario presionar el botón “Guardar”.
          </p><br />
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[90vh] overflow-auto px-8 py-6">
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => setShowMenu(section.id)}
                className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    showMenu === section.id
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
              >
                {section.title}
              </button>

              {showMenu === section.id && (
                <div className="flex flex-col px-8 items-start space-y-5">
                  {section.subsections.map((subsection, index) => {
                    const buttonIndex =
                      sections
                        .slice(0, section.id - 1)
                        .reduce((acc, s) => acc + s.subsections.length, 0) +
                      index;

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          scrollToArticle(subsection.ref, buttonIndex)
                        }
                        className={`px-3 py-2 font-roboto font-normal text-[14px] 
                          ${
                            activeButton === buttonIndex
                              ? "font-medium text-grisHeading"
                              : "text-[#8F8F8F]"
                          }`}
                      >
                        {subsection.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesGeneral;
