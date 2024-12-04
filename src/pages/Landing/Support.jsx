import FooterDesktopWhite from "@/components/FooterDesktopWhite";
import InputTitle from "@/components/Inputs/InputTitle";
import React from "react";

function Support() {
  return (
    <div>
      <div className="w-3/5 px-40 pt-14">
        <h3 className="font-poppins text-xl font-semibold tracking-wider text-grisHeading">
          Contacto de Soporte y Asistencia Técnica
        </h3>
        <div className="mt-10 w-4/5 space-y-4">
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
        <div className="mt-16">
          <button
            type="button"
            className="rounded-xl bg-[#242425] px-4 py-2 font-roboto text-xs font-semibold tracking-wider text-white"
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
