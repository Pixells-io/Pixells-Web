import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Footer from "@/layouts/Footer";
import { arrayData } from "./arrayData";

function HomePage() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* SideBar */}
        <div className="max-w-[283px] shrink-0 bg-transparent px-8">
          <div className="mt-10">
            <div className="flex flex-col space-y-5 pb-10 ">
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
            <div className="flex flex-col overflow-auto space-y-5">
              {arrayData.map((module) => (
                <div key={module.name} className="space-y-3 pb-5">
                  <span className="font-poppins font-semibold text-grisHeading text-[14px]">
                    {module.name}
                  </span>
                  {module.sub_modules.map((subModule) => (
                    <Link
                      key={subModule.name}
                      to={subModule.url}
                      className={`block cursor-pointer ${
                        location.pathname === subModule.url
                          ? "bg-[#008EF9] text-white"
                          : "hover:text-white hover:bg-[#008EF9] text-grisHeading"
                      } rounded-lg px-4 py-2 font-roboto font-normal text-[14px]`}
                    >
                      {subModule.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
