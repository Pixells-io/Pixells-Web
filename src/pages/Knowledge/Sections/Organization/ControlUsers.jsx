import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useRef, useState } from "react";

function UserManagement() {
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
          ORGANIZACIÓN
        </span>
        <h2 className="pt-5 font-poppins text-[16px] text-grisHeading">
          Control de Acceso
        </h2>

        {/*ARTICLE 1  */}
        <div id="article1" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Asignar permisos de un Puesto
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Ve al módulo de Organización y después entra al submenú “Control
              de Acceso”.
            </p>
            <br />

            <p>
              Los permisos se agregan únicamente por puestos. Sigue los
              siguientes pasos:
            </p>
            <br />

            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Selecciona la pestaña del área que deseas ajustar
              </li>
              <li className="before:content-['2.'] before:mr-2">
                A continuación, escoge un módulo y dentro del módulo verás del
                lado izquierdo de la tabla de forma vertical, las posibles
                acciones de un usuario en el sistema.
              </li>
              <li className="before:content-['3.'] before:mr-2">
                De forma horizontal, tendrás las diferentes posiciones que se
                han registrado en el área.
              </li>
              <li className="before:content-['4.'] before:mr-2">
                Marca o desmarca las casillas, para agregar o eliminar permisos
                a un puesto
              </li>
            </ol>
            <p>
              Cuando hayas finalizado marcando o desmarcando los permisos
              deseados, toca el botón actualizar para guardar el registro en el
              sistema.
            </p>
          </article>
        </div>
        {/*ARTICLE 2 */}
        <div id="article2" className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Consultar y Editar el perfil de un usuario
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Para consultar y editar la información de un usuario, ve al módulo
              Organización, en el submenú “Usuarios Gestor” y en la tabla
              principal, selecciona la pestaña “Usuarios”.
            </p>
            <br />

            <p>
              Busca el usuario deseado y en el título de la tabla “Acciones”
              toca el icono “i” para consultar y editar la información requerida
              para el usuario.
            </p>
            <br />

            <p>Para guardar los cambios, toca el botón “Guardar”.</p>
            <br />
          </article>
        </div>
      </ScrollArea>
      <section className="col-span-4 w-full max-h-[90vh] px-8 py-6">
        <ScrollArea className="h-full">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToArticle("article1", 1)}
              className={`px-3 py-2 font-roboto font-normal text-[14px] text-left
                  ${
                    activeButton === 1
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              Asignar permisos de un Puesto
            </button>
            <button
              onClick={() => scrollToArticle("article2", 2)}
              className={`px-3 py-2 font-roboto font-normal text-[14px] text-left
                  ${
                    activeButton === 2
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              Consultar y Editar el perfil de un usuario
            </button>
          </div>
        </ScrollArea>
      </section>
    </div>
  );
}

export default UserManagement;
