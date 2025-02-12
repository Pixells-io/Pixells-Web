import React, { useRef, useState } from "react";

function RequestGeneral() {
  const containerRef = useRef(null);
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);

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
          VENTAS
        </span>
        {/*ARTICLE 1 */}
        <div className="mt-6">
          <span
            ref={article1Ref}
            className="font-poppins font-semibold text-[18px] text-grisHeading"
          >
            PEDIDOS DE VENTA
          </span>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Los pedidos de venta son una forma de generar una pre-venta dentro
              del sistema sin afectar los inventarios ni las cuentas de cobro de
              un cliente.
            </p>
            <br />

            <p>
              Se construyen, visualizan y editan de la misma forma que una
              venta. ver referencia (ventas)
            </p>
            <br />
            <p>
              Sin embargo, cuentan con una función para convertir el pedido en
              una venta.
            </p>
            <br />
          </article>
        </div>

        {/*ARTICLE 2 */}
        <div className="mt-6">
          <span className="font-poppins font-semibold text-[18px] text-grisHeading">
            Funcion Convertir en venta
          </span>
          <article
            ref={article2Ref}
            className="pt-5 font-roboto font-light text-[14px] text-grisHeading"
          >
            <p>
              Al presionar el botón “Convertir en Venta”, se generará una copia
              del pedido pero como una nueva creación de venta, que automatiza
              todo el proceso de creación de una venta nueva y toma como
              referencia el pedido previamente creado.
            </p>
            <br />
            <p>
              Es necesario seleccionar el cliente y las condiciones de pago para
              continuar.
            </p>
            <br />
            <p>
              Si se desea confirmar la venta, presiona el botón “Guardar” para
              generar una venta nueva, tomando como referencia el pedido.
            </p>
            <br />
            <p>El estatus del pedido cambiará a “venta creada”.</p>
            <br />
          </article>
        </div>
      </div>
      <section className="col-span-4 max-h-[90vh] overflow-auto px-8 py-6">
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <div className="flex flex-col space-y-5">
            <button
              onClick={() => scrollToArticle(article1Ref, 0)}
              className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    activeButton === 0
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              Pedidos de Venta
            </button>
            <button
              onClick={() => scrollToArticle(article2Ref, 1)}
              className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    activeButton === 1
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
            >
              Funcion Convertir en venta{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RequestGeneral;
