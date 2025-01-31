import React, { useState } from "react";
import Footer from "@/layouts/Footer";
import { arrayData } from "./arrayData";

function HomePage() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* SideBar */}
        <div className="w-[283px] shrink-0 bg-transparent px-8">
         
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
            <div className="flex flex-col space-y-5">
              {arrayData.map((module) => (
                <div key={module.name} className="space-y-3">
                  <span className="font-poppins font-semibold text-grisHeading">
                    {module.name}
                  </span>
                  {module.sub_modules.map((subModule) => (
                    <div
                      key={subModule.name}
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedModule(subModule);
                        setSelectedAction(null);
                      }}
                    >
                      <span className="rounded-lg px-4 py-2 hover:text-white font-roboto font-normal text-grisHeading text-[14px] hover:bg-[#008EF9]">
                        {subModule.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-4">
          <div className="w-full h-full grid grid-cols-12 gap-4 rounded-[10px] bg-white border border-[#E8E8E8] p-7">
            {/* Articles section with overflow */}
            <div className="col-span-8 h-[calc(100vh-200px)] overflow-y-auto pr-4">
              {selectedModule && (
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold text-grisHeading">
                    {selectedModule.name}
                  </h1>
                  <div className="grid gap-6">
                    {selectedModule.actions.map((action) => (
                      <div key={action.title} className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                          {action.title}
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: action.description,
                          }}
                          className="prose max-w-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Section with action links - fixed height to match articles */}
            <section className="col-span-4 p-10 h-[calc(100vh-200px)] overflow-y-auto">
              {selectedModule && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg mb-4">Contenido</h3>
                  {selectedModule.actions.map((action) => (
                    <p
                      className="block text-grisHeading hover:text-blue-600 cursor-pointer"
                    >
                      {action.title}
                    </p>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;