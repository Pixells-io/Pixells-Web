import React, { useRef, useState } from "react";
function CrmLeadsDashboard() {
  const article1Ref = useRef(null);
  const containerRef = useRef(null);

  const [activeButton, setActiveButton] = useState(null);

  const scrollToArticle = (articleRef, buttonIndex) => {
    const container = containerRef.current;
    const article = articleRef.current;

    if (container && article) {
      // Obtener la posición del artículo relativa al contenedor
      const containerRect = container.getBoundingClientRect();
      const articleRect = article.getBoundingClientRect();

      // Calcular la posición de scroll
      const scrollPosition = article.offsetTop - container.offsetTop;

      // Hacer el scroll
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
        className="w-full max-h-[70vh] overflow-auto col-span-8 px-6 py-10"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CRM
        </span>
        <h2
          ref={article1Ref}
          className="pt-5 font-poppins text-[16px] text-grisHeading"
        >
          Leads Dashboard
        </h2>
        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>Control y Monitoreo de Leads</p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
                Nuevo Lead: La tarjeta que encontramos en esta etapa es generada
                por la acción de agregar una nueva oportunidad o puede provenir
                del proveedor de generación de leads de forma automatizada.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
                Cierre: En esta etapa, podrás adjuntar y enviar contratos al
                prospecto y confirmar los servicios que está contratando.
              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
                Pago: Una vez que el cliente haya aceptado los contratos, se
                podrá programar el pago para el prospecto y confirmar el inicio
                de los servicios.
              </li>
              <br />
              <li className="before:content-['4.'] before:mr-2">
                On Boarding: En esta etapa, confirmamos la información para
                registrar al nuevo cliente y preparar el inicio de los
                servicios. Se mantiene en esta etapa por 5 días para saber que
                tenemos leads confirmados y debemos empezar a gestionar sus
                servicios.
              </li>
              <br />
            </ol>
            <p>
              {" "}
              La información que encontramos dentro de la tarjeta, es la que se
              llena en el formulario cuando mueves la tarjeta del lead de un
              paso a otro. Existe información básica que siempre contendrá la
              tarjeta.{" "}
            </p>
            <br />

            <p>
              En la parte posterior encontrarás información como el nombre del
              lead, el tipo de lead “Individual” o “Business” y el estatus
              “Activo”, “Suspendido”, “Cancelado”, “Finalizado”.
            </p>
            <br />
            <p>
              En la parte inferior, encontraremos un círculo rojo que nos indica
              hace cuantos días se creo el lead, un circulo amarillo que nos
              indica hace cuantos días fue la ultima actualización (si es 0,
              quiere decir que hoy ha sido la ultima actualización, 1 día ayer,
              2 días antier y asi sucesivamente), un icono para generar
              comentarios o notas, la imagen del usuario que aparece en el
              icono, se refiere al ultimo usuario que generó un comentario. El
              comentario incluye fecha y hora.
            </p>
          </article>
        </div>
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">Perfil de Lead</span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
          <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
              Editar un lead: da click en el botón de editar, en la columna izquierda, después modifica la información deseada y guarda.
              </li>
              <br />
              <li className="before:content-['2.'] before:mr-2">
              Cambiar el Status: da click en el botón del estatus y selecciona el estatus deseado.

              </li>
              <br />
              <li className="before:content-['3.'] before:mr-2">
              Trackea lo que ha sucedido con el lead, paso a paso.

              </li>
              <br />
            </ol>
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[60vh] overflow-auto px-8 py-6">
        <div className="flex max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <button
            onClick={() => scrollToArticle(article1Ref, 0)}
            className={`px-3 py-2 font-roboto font-normal text-[14px] 
                ${
                  activeButton === 0
                    ? "border-l border-[#000000] text-grisHeading font-semibold"
                    : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                }`}
          >
            {" "}
            Leads Dashboard
          </button>
        </div>
      </section>
    </div>
  );
}

export default CrmLeadsDashboard;
