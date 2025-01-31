import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuMovil from "./MenuMovil";

function MenuDesktop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuMovilModal, setMenuMovilModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 flex justify-between bg-white px-8 py-3 ${
        isScrolled ? "border-b border-blancoBox" : ""
      }`}
    >
      <MenuMovil modal={menuMovilModal} setModal={setMenuMovilModal} />
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/logos/logo_yacamba.webp"
            alt="Yacamba Logo"
            className="h-6 sm:h-8"
          />
        </Link>
      </div>
      <div className="hidden items-center justify-center gap-8 sm:flex">
        <Link
          to={"/"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          INICIO
        </Link>
        <Link
          to={"/"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          MÓDULOS
        </Link>
        <Link
          to={"/soporte"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          SOPORTE
        </Link>
        <Link
          to={"/contacto"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          CONTACTO
        </Link>
        <Link
          to={"/ayuda"}
          className="font-poppins text-sm font-medium text-grisHeading hover:text-primarioBotones"
        >
          AYUDA
        </Link>
      </div>
      <div className="flex items-center justify-end gap-6 sm:gap-4">
        <Link
          to={"https://sistema.yacamba.com/login"}
          className="hidden font-poppins text-sm font-medium text-primarioBotones hover:text-primario sm:block"
        >
          INGRESAR
        </Link>
        <Link
          to={"/checkout"}
          className="rounded-xl bg-primarioBotones px-2 py-2 font-roboto text-xs font-semibold text-white hover:bg-primario"
        >
          Comenzar Gratis
        </Link>
        <IonIcon
          icon={menuOutline}
          className="text-3xl sm:hidden"
          onClick={() => setMenuMovilModal(true)}
        ></IonIcon>
      </div>
    </div>
  );
}

export default MenuDesktop;
