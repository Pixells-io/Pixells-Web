import React from "react";
import { Link } from "react-router-dom";

function FooterDesktopWhite() {
  return (
    <div className="w-full">
      <div className="w-full space-y-8 bg-white px-10 pb-20 pt-10 sm:flex sm:space-y-0 sm:px-16">
        <div className="sm:w-1/5">
          <Link to={"/"}>
            <img
              src="/logos/oruga_blanco.webp"
              alt="Logo Oruga Blanco"
              width={"50px"}
            />
          </Link>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-[#242425]">
            ORUGA
          </span>
          <div className="mt-4">
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Nosotros
            </Link>
          </div>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-[#242425]">
            PRODUCTOS
          </span>
          <div className="sm:w-1/5">
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Sistema ERP
            </Link>
            <br />
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Consultoria
            </Link>
          </div>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-[#242425]">
            LEGALES
          </span>
          <div className="mt-4">
            <Link
              to={"/terminos-y-condiciones"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Términos y Condiciones
            </Link>
            <br />
            <Link
              to={"/aviso-de-privacidad"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Aviso de Privacidad
            </Link>
            <br />
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Formas de Pago
            </Link>
          </div>
        </div>
        <div className="sm:w-1/5">
          <span className="font-poppins text-sm font-normal text-[#242425]">
            SERVICIO AL CLIENTE
          </span>
          <div className="mt-4">
            <Link
              to={"/contacto"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Contáctanos
            </Link>
            <br />
            <Link
              to={"/"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Preguntas Frecuentes
            </Link>
            <br />
            <Link
              to={"/soporte"}
              className="font-poppins text-xs font-normal text-[#242425] hover:text-primario"
            >
              Soporte
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-4 sm:flex">
        <div className="px-10 py-4 sm:py-0">
          <Link
            to={"/aviso-de-privacidad"}
            className="font-roboto text-xs font-light text-[#242425]"
          >
            Política de privacidad
          </Link>
        </div>
        <div className="border-b border-t px-10 py-4 text-[#242425] sm:border-b-0 sm:border-l sm:border-r sm:border-t-0 sm:py-0">
          <span className="font-roboto text-xs font-light text-[#242425]">
            Todos los derechos reservados.
          </span>
        </div>
        <div className="px-10 py-4 sm:py-0">
          <span className="font-roboto text-xs font-light text-[#242425]">
            Copyright © 2024 Oruga Inc.
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterDesktopWhite;
