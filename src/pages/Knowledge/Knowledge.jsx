import React from "react";
import Footer from "@/layouts/Footer";

function HomePage() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex h-full w-[283px] shrink-0 flex-col bg-transparent px-8">
        <div></div>
        <div className="mt-10">
          <div className="flex flex-col space-y-5">
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
        </div>
        <div className="pt-16">
          <span className="font-poppins font-semibold text-grisHeading">
            VENTAS
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
