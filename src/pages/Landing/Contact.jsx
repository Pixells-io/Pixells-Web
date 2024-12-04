import FooterDesktopWhite from "@/components/FooterDesktopWhite";
import InputForm from "@/components/Inputs/InputForm";
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="flex px-32 py-24">
        <div className="w-1/2">
          <span className="font-poppins text-4xl font-semibold tracking-wider text-grisHeading">
            CONTACTA A NUESTRO <br />
            EQUIPO DE ATENCIÓN A <br />
            CLIENTES.
          </span>
          <div className="py-8">
            <span className="font-roboto text-lg font-light text-[#242425]">
              Haznos saber cualquier duda sobre el funcionamiento del sistema,
              <br />
              módulos existentes, actualizaciones, precios y más información.
            </span>
          </div>
          <div className="pt-4">
            <span className="font-roboto text-lg font-light text-[#242425]">
              Si lo prefieres, puedes contactarnos por Whatsapp y nuestro
              <br />
              asistente virtual te ayudará con cualquier duda.
            </span>
          </div>
          <div className="mt-8">
            <Link className="rounded-xl bg-[#242425] px-6 py-3 font-roboto text-xs font-semibold tracking-wider text-white">
              Contactar Whatsapp
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mx-16 rounded-xl border border-blancoBox text-center">
            <div className="py-8 text-center">
              <span className="font-poppins text-base text-[#242425]">
                CONTACTO ATENCIÓN AL CLIENTE
              </span>
            </div>
            <div className="space-y-6 px-8 pb-8">
              <div className="flex gap-6">
                <InputForm name={"name"} type={"text"} placeholder={"Nombre"} />
                <InputForm
                  name={"last_name"}
                  type={"text"}
                  placeholder={"Apellido"}
                />
              </div>
              <InputForm
                name={"email"}
                type={"email"}
                placeholder={"Correo Electrónico"}
              />
              <InputForm name={"phone"} type={"tel"} placeholder={"Teléfono"} />
              <InputForm
                name={"business_name"}
                type={"text"}
                placeholder={"Nombre de la Empresa"}
              />
              <InputForm
                name={"comments"}
                type={"text"}
                placeholder={"Comentarios"}
              />
            </div>
            <button className="mb-8 mt-4 rounded-xl bg-primarioBotones px-10 py-3 font-roboto text-xs font-semibold tracking-wider text-white hover:bg-primario">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-24 pb-28 pt-14">
        <div className="w-2/5">
          <img src="/img/pixells_support.webp" width={"400px"}></img>
        </div>
        <div className="flex w-3/5 flex-col justify-center space-y-6">
          <h2 className="font-poppins text-2xl font-semibold tracking-wider text-grisHeading">
            Contacto de Soporte y Asistencia Técnica
          </h2>
          <h3 className="font-poppins text-sm font-light text-[#242425]">
            Estamos para ayudarte en cualquier duda que tengas acerca del
            funcionamiento <br />
            del sistema.
          </h3>
          <div className="mt-2">
            <Link
              to={"/soporte"}
              className="rounded-xl bg-[#242425] px-4 py-2 font-roboto text-xs font-semibold tracking-wider text-white"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
      <FooterDesktopWhite />
    </div>
  );
}

export default Contact;
