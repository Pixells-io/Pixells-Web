import React from "react";
import { Link } from "react-router-dom";
import MenuSideBar from "@/pages/Knowledge/Components/MenuSideBar";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";

function HeaderHelp() {
  return (
    <div className="sticky top-0 z-20 flex justify-between bg-white px-6 py-3">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/logos/logo_yacamba.webp"
            alt="Yacamba Logo"
            className="h-6 sm:h-8"
          />
        </Link>
      </div>
      
      {/* Search input container with proper alignment */}
      <div className="hidden md:flex w-80 items-center rounded-[10px] border border-blancoBox px-3 py-2">
        <div className="flex items-center flex-1">
          <IonIcon
            icon={searchOutline}
            className="size-[16px] text-grisSubText"
          />
          <input 
            type="text"
            placeholder="Buscar..."
            className="flex-1 ml-2 font-roboto text-[14px] focus:outline-none text-grisSubText"
          />
        </div>
        <div className="flex items-center gap-1">
          <p className="font-roboto text-[14px] font-normal text-grisSubText">⌘</p>
          <p className="font-roboto text-[14px] font-normal text-grisSubText">K</p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6 sm:gap-4">
        <IonIcon
          icon={searchOutline}
          className="size-[16px] text-grisSubText md:hidden"
        />
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
          Comenzar
        </Link>
        <MenuSideBar />
      </div>
    </div>
  );
}

export default HeaderHelp;
