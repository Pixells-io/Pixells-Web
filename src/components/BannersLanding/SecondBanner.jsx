import React from "react";
import { IonIcon } from "@ionic/react";
import {
  barChartOutline,
  settingsOutline,
  terminalOutline,
} from "ionicons/icons";
import "../../../public/main.css";

function SecondBanner() {
  return (
    <div className="second-banner-gradient px-6 py-8 pb-10 sm:px-8">
      <div className="border-b border-white py-2">
        <span className="Yacamba-inteligence-gradient font-poppins text-base font-semibold">
          YACAMBA INTELLIGENCE
        </span>
      </div>
      <div className="sm:flex">
        <div className="py-14 sm:w-2/3 sm:px-14">
          <span className="font-poppins text-3xl font-semibold leading-[55px] tracking-wider text-blancoBg sm:text-4xl">
            Integra tu empresa <br />
            a la inteligencia <br />
            artificial, haz que <br />
            haga las cosas por ti
          </span>
          <div className="mt-6 text-justify sm:w-2/4 sm:text-left">
            <span className="text-justify font-roboto font-normal leading-4 text-blancoBg">
              Yacamba intelligence, está disponible a partir de Diciembre de
              2024 dentro del sistema. Su costo puede variar, dependiendo los
              servicios seleccionados.
            </span>
          </div>
        </div>
        <div className="grid items-center sm:w-1/3">
          <div className="sm:mr-8">
            <div className="flex items-center gap-4 border-b border-white py-6">
              <IonIcon
                icon={settingsOutline}
                className="text-5xl text-white sm:text-xl"
              ></IonIcon>
              <div>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  Soporte inteligente para poder relizar cualquier acción dentro
                  del sistema. Respuestas faciles y objetivas.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-white py-6">
              <IonIcon
                icon={barChartOutline}
                className="text-5xl text-white sm:text-xl"
              ></IonIcon>
              <div>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  Reporteo y obtención de información del sistema en tiempo
                  real. Pregunta cuales son tus ventas del días, tus actividades
                  de hoy, etc.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-white py-6">
              <IonIcon
                icon={terminalOutline}
                className="text-5xl text-white sm:text-xl"
              ></IonIcon>
              <div>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  Ejecuta tareas con inteligencia Artificial. Evita saturarte de
                  actividades operativas y deja que
                </span>
                <span className="crispin-title-gradient"> CRISPIN </span>
                <span className="font-roboto text-sm font-semibold leading-4 text-blancoBg">
                  haga las cosas por tí.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
