import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { arrayData } from "./arrayData";
import { ScrollArea } from "@/components/ui/scroll-area";
import HeaderHelp from "@/components/HeaderHelp";
import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";

function HomePage() {
  const location = useLocation();
  const [module, setModule] = useState("");
  const [subModule, setSubModule] = useState("");
  useEffect(() => {
    // Buscar el módulo y submódulo activo basado en la URL actual
    arrayData.forEach((module) => {
      module.sub_modules.forEach((subModule) => {
        if (subModule.url === location.pathname) {
          setModule(`${module.name}`);
          setSubModule(`${subModule.name}`)
        }
      });
    });
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderHelp />
      <div className="md:hidden px-7 py-2 flex justify-start items-center">
        <span className="font-roboto text-[14px] text-grisHeading">{module}</span><IonIcon icon={chevronForward} className="text-center text-grisHeading"/>
        <span className="font-roboto text-[14px] text-[#008EF9]">{subModule}</span>
      </div>
      <div className="flex flex-1">
        {/* SideBar */}
        <div className="hidden md:block w-[320px] mt-10 shrink-0 bg-transparent px-8">
          <div className="h-[calc(100vh-6rem)]">
            <ScrollArea className="h-full w-full">
              <div className="pr-4">
                <div className="flex flex-col space-y-5 pb-10">
                  <span className="font-poppins font-normal text-grisHeading text-[14px]">
                    Introducción
                  </span>
                  <span className="font-poppins font-normal text-grisHeading text-[14px]">
                    Configuración
                  </span>
                  <span className="font-poppins font-normal text-grisHeading text-[14px]">
                    Mi Cuenta
                  </span>
                </div>
                <div className="flex flex-col space-y-5">
                  {arrayData.map((module) => (
                    <div key={module.name} className="space-y-3 pb-5">
                      <span className="font-poppins font-semibold text-grisHeading text-[14px]">
                        {module.name}
                      </span>
                      {module.sub_modules.map((subModule) => (
                        <Link
                          key={subModule.name}
                          to={subModule.url}
                          className={`cursor-pointer ${
                            location.pathname === subModule.url
                              ? "bg-[#008EF9] text-white"
                              : "hover:text-white hover:bg-[#008EF9] text-grisHeading"
                          } rounded-lg flex items-center px-4 py-2 h-[32px] font-roboto font-light text-[14px]`}
                        >
                          {subModule.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="flex-1 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
