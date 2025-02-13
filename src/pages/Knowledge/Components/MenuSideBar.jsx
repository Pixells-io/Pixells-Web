import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLocation, Link } from "react-router-dom";
import { arrayData } from "../arrayData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";

function MenuSideBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <SheetTrigger>
        <IonIcon icon={menuOutline} className="text-3xl sm:hidden"></IonIcon>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-80 sm:w-[320px] px-8" // Ancho completo en móvil, fijo en desktop
      >
        <SheetHeader className="hidden">
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <div className="h-full w-full">
          <ScrollArea className="h-[calc(100vh-2rem)]">
            <div className="px-4 py-6">
              <div className="flex flex-col space-y-5 pb-10">
                <span className="font-poppins font-normal text-grisHeading text-[14px]">
                  Introducción
                </span>
                <span className="font-poppins font-normal text-grisHeading text-[14px]">
                  Configuracion
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
                        onClick={() => setIsOpen(false)}
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
      </SheetContent>
    </Sheet>
  );
}

export default MenuSideBar;