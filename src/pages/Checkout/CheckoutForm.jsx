import InputForm from "@/components/Inputs/InputForm";
import React from "react";

function CheckoutForm() {
  return (
    <div className="flex min-h-screen items-center justify-center text-center align-middle">
      <div className="w-1/5 items-center justify-center">
        <div className="flex items-center justify-center py-6 text-center">
          <img src="/img/logo.webp" width={"60px"} />
        </div>
        <div className="py-4 text-left">
          <span className="font-poppins text-2xl font-semibold text-grisHeading">
            Crear Cuenta Nueva
          </span>
        </div>
        <div className="text-left">
          <span className="font-poppins text-sm font-normal text-grisHeading">
            Registrate y disfruta el sistema Pixells con <br /> un usuario de
            forma gratuita. Haz que tu <br /> empresa sea profesional y con
            procesos <br /> controlados.
          </span>
        </div>
        <div className="mt-14 space-y-4">
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
      </div>
    </div>
  );
}

export default CheckoutForm;
