import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MenuMovil({ modal, setModal }) {
  const navigate = useNavigate();

  function redirectFunction(url) {
    navigate(url);
    setModal(false);
  }

  return (
    <div
      className={`${
        modal ? "block" : "hidden"
      } fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden overflow-y-hidden bg-white px-8 py-3`}
    >
      <div className="mt-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logos/logo_yacamba.webp" className="h-10" alt="" />
        </Link>
        <IonIcon
          icon={closeOutline}
          className="text-3xl text-grisText"
          onClick={() => setModal(false)}
        />
      </div>
      <div className="px-4 pt-20">
        <button
          type="button"
          onClick={() => redirectFunction("/")}
          className="w-full border-b border-blancoBox py-4 text-left font-poppins text-sm text-grisHeading"
        >
          INICIO
        </button>
        <button
          type="button"
          onClick={() => redirectFunction("/")}
          className="w-full border-b border-blancoBox py-4 text-left font-poppins text-sm text-grisHeading"
        >
          MODULOS
        </button>
        <button
          type="button"
          onClick={() => redirectFunction("/soporte")}
          className="w-full border-b border-blancoBox py-4 text-left font-poppins text-sm text-grisHeading"
        >
          SOPORTE
        </button>
        <button
          type="button"
          onClick={() => redirectFunction("/contacto")}
          className="w-full py-4 text-left font-poppins text-sm text-grisHeading"
        >
          CONTACTO
        </button>
        <div className="space-y-6 pt-24 text-center">
          <button
            type="button"
            onClick={() => redirectFunction("/checkout")}
            className="w-full rounded-lg bg-primarioBotones py-2 font-roboto text-xs font-semibold tracking-widest text-white"
          >
            Comenzar Gratis
          </button>
          <button
            type="button"
            onClick={() => redirectFunction("/")}
            className="w-full rounded-lg border border-primarioBotones py-2 font-roboto text-xs font-semibold tracking-widest text-primarioBotones"
          >
            Iniciar Sesión
          </button>
        </div>
        <div className="pt-8 text-center"></div>
      </div>
    </div>
  );
}

export default MenuMovil;
