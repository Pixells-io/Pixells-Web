import React from "react";
import { Link } from "react-router-dom";

function FooterDesktop() {
  return (
    <div className="w-full">
      <div className="w-full space-y-8 bg-[#080019] px-10 pb-20 pt-10 sm:flex sm:space-y-0 sm:px-16">
        <div className="sm:w-1/5">
          <Link to={"/"}>
            <img
              src="/img/logo_blanco.webp"
              alt="Logo Pixells Blanco"
              width={"50px"}
            />
          </Link>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-white">
            PIXELLS
          </span>
          <div className="mt-4">
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-white"
            >
              Nosotros
            </Link>
          </div>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-white">
            PRODUCTOS
          </span>
          <div className="mt-4">
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-white"
            >
              Sistema ERP
            </Link>
            <br />
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-white"
            >
              Consultoria
            </Link>
          </div>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-white">
            LEGALES
          </span>
          <div className="mt-4">
            <Link
              to={"/terminos-y-condiciones"}
              className="font-poppins text-xs font-normal text-white"
            >
              Términos y Condiciones
            </Link>
            <br />
            <Link
              to={"/aviso-de-privacidad"}
              className="font-poppins text-xs font-normal text-white"
            >
              Aviso de Privacidad
            </Link>
            <br />
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-white"
            >
              Formas de Pago
            </Link>
          </div>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-white">
            SERVICIO AL CLIENTE
          </span>
          <div className="mt-4">
            <Link
              to={"/contacto"}
              className="font-poppins text-xs font-normal text-white"
            >
              Contáctanos
            </Link>
            <br />
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-white"
            >
              Preguntas Frecuentes
            </Link>
            <br />
            <Link
              to={"/soporte"}
              className="font-poppins text-xs font-normal text-white"
            >
              Soporte
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black px-4 py-4 sm:flex">
        <div className="px-10 py-4 sm:py-0">
          <Link
            to={"/aviso-de-privacidad"}
            className="font-roboto text-xs font-light text-white"
          >
            Política de privacidad
          </Link>
        </div>
        <div className="border-b border-t border-white px-10 py-4 sm:border-b-0 sm:border-l sm:border-r sm:border-t-0 sm:py-0">
          <span className="font-roboto text-xs font-light text-white">
            Todos los derechos reservados.
          </span>
        </div>
        <div className="px-10 py-4 sm:py-0">
          <span className="font-roboto text-xs font-light text-white">
            Copyright © 2024 Pixells Inc.
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterDesktop;
