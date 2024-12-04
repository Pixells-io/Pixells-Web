import React, { useState, useRef } from "react";
import "../../../public/main.css";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

function ModulesBanner() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice del carrusel
  const carouselRef = useRef(null); // Referencia al carrusel

  const modules = [
    {
      id: 1,
      title: "VENDE TUS <br/> PRODUCTOS",
      img: "/img/sistema_pixells_project_manager.webp",
      color: "#A692E8",
    },
    {
      id: 2,
      title: "GESTIONA <br/> INVENTARIOS",
      img: "/img/sistema_pixells_project_manager.webp",
      color: "#58ABB0",
    },
    {
      id: 3,
      title: "FABRICA <br> ARTICULOS",
      img: "/img/sistema_pixells_project_manager.webp",
      color: "#7B93E7",
    },
    {
      id: 4,
      title: "VENDE TUS <br/> PRODUCTOS",
      img: "/img/sistema_pixells_project_manager.webp",
      color: "#A692E8",
    },
    {
      id: 5,
      title: "GESTIONA <br/> INVENTARIOS",
      img: "/img/sistema_pixells_project_manager.webp",
      color: "#58ABB0",
    },
    {
      id: 6,
      title: "FABRICA <br> ARTICULOS",
      img: "/img/sistema_pixells_project_manager.webp",
      color: "#A692E8",
    },
  ];

  // Función para manejar el desplazamiento hacia atrás
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(modules.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Función para manejar el desplazamiento hacia adelante
  const handleNext = () => {
    if (currentIndex === modules.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Duplicar los módulos para crear un bucle infinito
  const extendedModules = [...modules, ...modules]; // Duplicamos los módulos

  return (
    <div className="mx-4 text-center sm:mx-0">
      <span className="font-poppins text-2xl font-normal text-grisHeading sm:text-xl">
        LOS MÓDULOS MÁS IMPORTANTES PARA TU EMPRESA
      </span>
      <div className="relative mt-10 flex items-center justify-center gap-20">
        {/* Botón de navegación anterior */}
        <IonIcon
          icon={chevronBack}
          className="absolute left-4 top-1/2 z-10 transform cursor-pointer rounded-full bg-black px-2 py-2 text-2xl text-blancoBox sm:px-4 sm:py-4 sm:text-3xl"
          onClick={handlePrev}
        />

        <div
          ref={carouselRef}
          className="flex gap-10 overflow-hidden scroll-smooth px-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {extendedModules.map((module, index) => (
            <div
              key={module.id}
              className="overflow flex h-[27.375rem] w-[21.688rem] flex-shrink-0 flex-col justify-end rounded-3xl text-start transition-transform sm:w-[23.688rem]"
              style={{
                backgroundColor: module.color,
                transform: `translateX(-${(currentIndex - 1) * 100}%)`, // Ajuste para mostrar 3 en el centro
              }}
            >
              <div className="px-6 pb-14">
                <h3
                  className="mb-4 font-poppins text-3xl text-blancoBg"
                  dangerouslySetInnerHTML={{ __html: module.title }}
                ></h3>
              </div>
              <img
                src={module.img}
                alt={module.title}
                className="tempered-glass-effect mb-8 ml-8 w-[315px] rounded sm:ml-10 sm:w-[339px]"
              />
            </div>
          ))}
        </div>

        {/* Botón de navegación siguiente */}
        <IonIcon
          icon={chevronForward}
          className="absolute right-4 top-1/2 z-10 transform cursor-pointer rounded-full bg-black px-2 py-2 text-2xl text-blancoBox sm:px-4 sm:py-4 sm:text-3xl"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default ModulesBanner;
