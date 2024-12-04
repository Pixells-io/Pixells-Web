import React from "react";
import { Link } from "react-router-dom";

function FooterDesktopWhite() {
  return (
    <div className="w-full">
      <div className="flex w-full bg-white px-16 pb-20 pt-10">
        <div className="w-1/5">
          <Link to={"/"}>
            <img
              src="/img/logo.webp"
              alt="Logo Pixells Blanco"
              width={"50px"}
            />
          </Link>
        </div>
        <div className="w-1/5">
          <span className="font-poppins text-sm font-normal text-[#242425]">
            PIXELLS
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
        <div className="w-1/5">
          <span className="font-poppins text-sm font-normal text-[#242425]">
            PRODUCTOS
          </span>
          <div className="mt-4">
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
        <div className="w-1/5">
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
        <div className="w-1/5">
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
      <div className="flex border-t border-blancoBox bg-white px-4 py-4">
        <div className="px-10">
          <span className="font-roboto text-xs font-light text-[#242425]">
            Copyright © 2024 Pixells Inc.
          </span>
        </div>
        <div className="border-l border-r px-10 text-[#242425]">
          <span className="font-roboto text-xs font-light text-[#242425]">
            Todos los derechos reservados.
          </span>
        </div>
        <div className="px-10">
          <Link
            to={"/aviso-de-privacidad"}
            className="font-roboto text-xs font-light text-[#242425] hover:text-primario"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterDesktopWhite;
