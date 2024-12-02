import InputForm from "@/components/Inputs/InputForm";
import React from "react";
import { Link } from "react-router-dom";

function CheckoutForm() {
  return (
    <div className="flex min-h-screen items-center justify-center text-center align-middle">
      <div className="w-1/4 items-center justify-center">
        <div className="flex items-center justify-center py-6 text-center">
          <Link to={"/"}>
            <img src="/img/logo.webp" width={"60px"} />
          </Link>
        </div>
        <div className="py-4 text-center">
          <span className="font-poppins text-2xl font-semibold text-grisHeading">
            Crear Cuenta Nueva
          </span>
        </div>
        <div className="text-left">
          <span className="font-poppins text-sm font-normal text-grisHeading">
            Registrate y disfruta el sistema Pixells con un usuario de forma
            gratuita. Haz que tu empresa sea profesional y con procesos
            controlados.
          </span>
        </div>
        <div className="mt-14 space-y-6">
          <InputForm
            type="email"
            name="email"
            placeholder="Correo Electrónico"
          />
          <InputForm type="password" name="password" placeholder="Contraseña" />
          <InputForm
            type="password"
            name="confirm_password"
            placeholder="Confirmar Contraseña"
          />
        </div>
        <div className="mt-6 flex gap-4 text-left">
          <label
            htmlFor="hr"
            className="light:text-black flex flex-row items-center gap-2.5 dark:text-white"
          >
            <input
              id="hr"
              type="checkbox"
              name="checkbox"
              className="peer hidden"
            />
            <div className="light:bg-[#e8e8e8] flex h-5 w-5 rounded-md border border-[#a2a1a833] transition peer-checked:bg-primario dark:bg-[#212121]">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </label>
          <span className="font-poppins text-xs text-grisHeading">
            Acepto los{" "}
            <Link className="text-blue-600" to={"/terminos-y-condiciones"}>
              Términos y Condiciones
            </Link>
            ,{" "}
            <Link className="text-blue-600" to={"/aviso-de-privacidad"}>
              Aviso de Privacidad
            </Link>{" "}
            y el{" "}
            <Link className="text-blue-600">Concentimiento Electrónico </Link>
            para el uso de Pixells.
          </span>
        </div>
        <div className="mt-12">
          <button className="rounded-xl bg-primario px-12 py-3 font-poppins text-sm text-white hover:bg-primarioBotones">
            CREAR
          </button>
        </div>
        <div className="mt-6">
          <span className="font-poppins text-xs text-grisHeading">
            Si ya tienes una cuenta,{" "}
            <Link className="text-blue-600">Inicia Sesión</Link>.
          </span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
