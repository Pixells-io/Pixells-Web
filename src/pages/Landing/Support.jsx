import FooterDesktopWhite from "@/components/FooterDesktopWhite";
import InputTitle from "@/components/Inputs/InputTitle";
import React from "react";

function Support() {
  return (
    <div>
      <div className="px-16 pt-14 sm:w-3/5 sm:px-40">
        <h3 className="font-poppins text-xl font-semibold tracking-wider text-grisHeading">
          Contacto de Soporte y Asistencia Técnica
        </h3>
        <div className="mt-10 space-y-4 sm:w-4/5">
          <InputTitle name={"subject"} type={"text"} placeholder={"Asunto"} />
          <InputTitle
            name={"email"}
            type={"email"}
            placeholder={"Correo Electrónico"}
          />
          <InputTitle
            name={"topic"}
            type={"text"}
            placeholder={"Necesitas ayuda con"}
          />
          <InputTitle name={"title"} type={"text"} placeholder={"Titulo"} />
          <InputTitle
            name={"description"}
            type={"text"}
            placeholder={"Descripción"}
          />
        </div>
        <div className="mt-16 text-center sm:text-left">
          <button
            type="button"
            className="rounded-xl bg-[#242425] px-6 py-2 font-roboto text-xs font-semibold tracking-wider text-white sm:px-4"
          >
            Enviar
          </button>
        </div>
      </div>
      <FooterDesktopWhite />
    </div>
  );
}

export default Support;
