import React, { useRef, useState } from "react";
import "../../../public/main.css";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

function FirstBanner() {
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedImg, setSelectedImg] = useState(
    "/img/sistema_pixells_project_manager.webp",
  );

  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice del carrusel
  const carouselRef = useRef(null); // Referencia al carrusel

  const modules = [
    {
      id: 1,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 2,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 3,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 4,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 5,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
    {
      id: 6,
      name: "Ventas",
      img: "/img/sistema_pixells_project_manager.webp",
    },
  ];

  function changeSelectedImg(img, id) {
    setSelectedImg(img);
    setSelectedModule(id);
  }

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
    <div className="rounded-3xl bg-[#7794F915] px-6 py-6 sm:flex">
      <div className="mt-16 sm:ml-16 sm:w-1/2">
        <span className="text-gradient-home text-3xl font-normal leading-10 sm:text-5xl">
          Una nueva forma de <br /> operar tu empresa.
        </span>
        <div className="mt-10">
          <span className="font-roboto text-lg font-light text-[#242425]">
            Implementa un ERP y CRM en la nube con inteligencia artificial.
            <br />
            Vende, transforma, compra, administra tu agenda y más
            <br />
            funciones, con usuarios ilimitados.
          </span>
        </div>
        <div className="mt-10 text-center sm:mr-40">
          <Link
            to={"/checkout"}
            className="rounded-xl bg-primario px-2 py-2 font-roboto text-xs font-semibold text-white hover:bg-primarioBotones"
          >
            Comenzar Gratis
          </Link>
        </div>
        <div className="mt-32">
          <img
            src="/img/computadora_sistema_pixells.webp"
            alt="Sistema Pixells Laptop"
            className="h-auto w-full sm:w-[34.375rem]"
          />
        </div>
      </div>
      <div className="justify-center pt-20 sm:w-1/2">
        <div className="w-full">
          <img
            src={selectedImg}
            alt="Sistema Pixells Project Manager"
            className={
              selectedModule === 0
                ? "gradient-radius blurred-image h-auto w-full sm:w-[40rem]"
                : "gradient-radius h-auto w-full sm:w-[40rem]"
            }
          />
        </div>
        <div className="mt-[-3.5rem] flex items-center justify-center rounded-2xl text-center sm:ml-[3rem] sm:mt-[-4.8rem] sm:w-[36rem] sm:px-6 sm:py-4">
          <IonIcon
            icon={chevronBack}
            className="z-10 transform cursor-pointer rounded-full text-3xl text-black"
            onClick={handlePrev}
          />
          <div
            className="mt-4 flex w-[32rem] gap-10 overflow-hidden scroll-smooth p-4 px-6"
            style={{ scrollBehavior: "smooth" }}
            ref={carouselRef}
          >
            {modules.map((module, i) => (
              <div
                key={i}
                className={
                  selectedModule === module.id
                    ? "tempered-glass flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-2xl border border-primario"
                    : "border-grisClaro tempered-glass flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-2xl border hover:border-primario"
                }
                onClick={() => changeSelectedImg(module.img, module.id)}
                style={{
                  transform: `translateX(-${(currentIndex - 1) * 100}%)`, // Ajuste para mostrar 3 en el centro
                }} // Ajuste para mostrar 3 en el centro
              >
                <span className="font-poppins text-sm text-grisHeading">
                  {module.name}
                </span>
              </div>
            ))}
          </div>
          <IonIcon
            icon={chevronForward}
            className="z-10 transform cursor-pointer rounded-full text-3xl text-black"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstBanner;
