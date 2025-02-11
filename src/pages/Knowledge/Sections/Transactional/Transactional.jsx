import React, { useRef, useState } from "react";

function Transactional() {
  const article1Ref = useRef(null);
  const containerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  const scrollToArticle = (articleRef, buttonIndex) => {
    const container = containerRef.current;
    const article = articleRef.current;

    if (container && article) {
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
        className="w-full max-h-[90vh] overflow-auto col-span-8 px-6 py-10"
      >
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          TRANSACCIONALES
        </span>
        <h2
          ref={article1Ref}
          className="pt-5 font-poppins font-semibold text-[18px] text-grisHeading"
        >
          INTRODUCCIÓN
        </h2>

        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              Yacamba, es un sistema que te ayudará a gestionar las operaciones
              completas de tu compañía. Desde la creación de un prospecto
              comercial, estructura y agenda de la empresa, hasta la gestión de
              procesos transaccionales como lo son las ventas, compras, manejo
              de inventarios, control de cuentas de banco, facturación, entre
              otros.
            </p>
            <br />
            <p>Lo primero que debemos hacer es tener una cuenta activa.</p>
            <br />

            {/* <img src="" alt="Rectangulo del sistema" className="" /> */}

            <p>
              Una vez teniendo una cuenta activa, para realizar un uso adecuado
              y optimizado del sistema, es necesario asegurarnos de contar con
              todos los catálogos para poder empezar a operar.
            </p>
            <br />
            <p>
              Los catálogos que debemos considerar lo más completos posible son:
            </p>
            <br />
            <ul className="mb-4 px-8 list-disc list-inside">
              <li>Usuarios internos</li>
              <li>Clientes</li>
              <li>Proveedores</li>
              <li>Bancos Propios</li>
              <li>Cuentas de Banco</li>
              <li>Artículos</li>
              <li>Servicios</li>
              <li>Almacenes</li>
              <li>Sucursales</li>
              <li>Punto de venta (En caso de tener puntos de venta)</li>
              <li>Fórmulas (En caso de transformar)</li>
            </ul>
            <p>
              Adicional a esto, si deseamos llevar una contabilidad dentro del
              sistema, debemos dar de alta:
            </p>
            <br />
            <ul className="mt-4 mb-4 list-disc list-inside">
              <li>
                Cuentas contables (En caso de requerir adicionales a las que
                contiene el sistema)
              </li>
              <li>Balances de activos, pasivos y capital</li>
            </ul>
          </article>
        </div>
      </div>
      <section
        className="col-span-4 max
        -h-[90vh] overflow-auto px-8 py-6"
      >
        <div className="flex justify-start items-start max-w-[155px] whitespace-nowrap flex-col space-y-5">
          <div className="flex flex-col px-8 items-start space-y-5">
            <button
              onClick={() => scrollToArticle(article1Ref, 0)}
              className={`px-3 py-2 font-roboto font-normal text-[14px] ${
                activeButton === 0
                  ? "border-l border-[#000000] text-grisHeading font-semibold"
                  : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
              }`}
            >
              Introducción
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Transactional;
