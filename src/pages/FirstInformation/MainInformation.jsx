import { IonIcon } from "@ionic/react";
import {
  add,
  arrowForwardOutline,
  carOutline,
  fastFoodOutline,
  flaskOutline,
  peopleOutline,
  remove,
  shirtOutline,
  storefrontOutline,
} from "ionicons/icons";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

function ThankYouPage() {
  //Validate is create account
  const [clientId, setClientId] = useState(Cookies.get("client_id"));
  const navigate = useNavigate();

  useEffect(() => {
    if (clientId == "undefined") {
      navigate("/");
    } else {
      setTimeout(() => {
        navigate("/primeros-pasos");
      }, 10000);
    }
  }, []);

  //Set status
  const [status, setStatus] = useState(1);

  function changeStatus(status) {
    setStatus(status);
  }

  //Array of options
  const operationArray = [
    {
      id: 1,
      title: "Vendo Servicios",
      selected: 0,
      icon: peopleOutline,
    },
    {
      id: 2,
      title: "Vendo Productos",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 3,
      title: "Fabrico Productos",
      selected: 0,
      icon: flaskOutline,
    },
    {
      id: 4,
      title: "Tengo Tiendas",
      selected: 0,
      icon: storefrontOutline,
    },
    {
      id: 5,
      title: "Reparo Productos",
      selected: 0,
      icon: carOutline,
    },
    {
      id: 6,
      title: "Tengo un Restautante",
      selected: 0,
      icon: fastFoodOutline,
    },
  ];

  const [operation, setOperation] = useState(operationArray);

  function changeOperationActive(id, active) {
    let newOperation = operation.map((item) => {
      if (item.id == id) {
        item.selected = active == 0 ? 1 : 0;
      }
      return item;
    });

    setOperation(newOperation);
  }

  //Users Number
  const [users, setUsers] = useState(1);

  //Economic Sector
  const economicArray = [
    {
      id: 1,
      title: "Agricultura, alimentación y silvicultura",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 2,
      title: "Energía y Minería",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 3,
      title: "Producción",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 4,
      title: "Sectores de servicios",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 5,
      title: "Infraestructuras, construcción y sectores relacionados",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 6,
      title: "Educación e investigación",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 7,
      title: "Función pública, servicios públicos y salud",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 8,
      title: "Transporte, transporte marítimo",
      selected: 0,
      icon: shirtOutline,
    },
    {
      id: 9,
      title: "Otros sectores",
      selected: 0,
      icon: shirtOutline,
    },
  ];

  const [economic, setEconomic] = useState(economicArray);

  function changeEconomicActive(id, active) {
    let newEconomic = economic.map((item) => {
      if (item.id == id) {
        item.selected = active == 0 ? 1 : 0;
      }
      return item;
    });

    setEconomic(newEconomic);
  }

  async function sendForm() {
    const filteredOperation = operation
      .filter((item) => item.selected === 1)
      .map((item) => item.id);
    const filteredEconomic = economic
      .filter((item) => item.selected === 1)
      .map((item) => item.id);

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}suscriptions/create-suscription-info`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          operation: JSON.stringify(filteredOperation),
          users: users,
          economic: JSON.stringify(filteredEconomic),
        }),
      },
    );

    const session = await response.json();

    if (session.status == 201) {
      window.location.href = "https://sistema.pixells.io";
    }
  }

  return (
    <div className="h-screen w-full">
      <div className="px-8 py-10 sm:px-48 sm:py-32">
        <div className="flex justify-between rounded-full bg-grisBg px-2 py-2">
          {/*  */}
          <button
            type="button"
            onClick={() => changeStatus(1)}
            className={
              status == 1
                ? "rounded-full bg-primarioBotones px-2 text-xl text-white"
                : status >= 2
                  ? "rounded-full bg-[#00C472] px-2 text-xl text-white"
                  : null
            }
          >
            1
          </button>
          <button
            type="button"
            onClick={() => changeStatus(2)}
            className={
              status == 2
                ? "rounded-full bg-primarioBotones px-2 text-xl text-white"
                : status >= 3
                  ? "rounded-full bg-[#00C472] px-2 text-xl text-white"
                  : "rounded-full bg-grisSubText px-2 text-xl text-white"
            }
          >
            2
          </button>
          <button
            type="button"
            onClick={() => changeStatus(3)}
            className={
              status == 3
                ? "rounded-full bg-primarioBotones px-2 text-xl text-white"
                : "rounded-full bg-grisSubText px-2 text-xl text-white"
            }
          >
            3
          </button>
        </div>
        {/* CARDS */}
        <div hidden={status != 1 ? true : false} className="py-14 text-center">
          <h2 className="font-poppins text-2xl font-semibold tracking-wider text-grisHeading">
            ¿Que tipo de operación tiene tu empresa?
          </h2>
          <h3 className="pt-6 font-poppins text-base text-grisHeading">
            Selecciona una o más opciones
          </h3>
          <div className="grid grid-cols-1 justify-items-center gap-4 pt-6 sm:mx-48 sm:mt-12 sm:grid-cols-3">
            {operation.map((item, index) => (
              <div
                key={index}
                onClick={() => changeOperationActive(item.id, item.selected)}
                className={
                  item.selected === 0
                    ? "flex h-28 w-52 flex-col items-center justify-center rounded-2xl border border-blancoBox"
                    : "flex h-28 w-52 flex-col items-center justify-center rounded-2xl border border-primarioBotones bg-[#F3F6FF]"
                }
              >
                <IonIcon icon={item.icon} className="text-2xl" />
                <h2 className="pt-2 font-poppins text-sm">{item.title}</h2>
              </div>
            ))}
          </div>
          <div className="py-10 text-end sm:px-0 sm:py-2">
            <IonIcon
              icon={arrowForwardOutline}
              className="rounded-full bg-primarioBotones p-1 text-4xl text-white sm:text-2xl"
              onClick={() => changeStatus(2)}
            />
          </div>
        </div>
        <div
          hidden={status != 2 ? true : false}
          className="space-x-8 py-14 text-center"
        >
          <h2 className="font-poppins text-2xl font-semibold tracking-wider text-grisHeading">
            ¿Cuantos usuarios planeas para tu sistema?
          </h2>
          <div className="mt-28 flex items-center justify-center">
            <div className="flex items-center justify-center gap-8 sm:w-1/3">
              <IonIcon
                icon={remove}
                className="text-4xl"
                onClick={() => setUsers(users > 1 ? users - 1 : 1)}
              />
              <input
                type="number"
                step={1}
                min={1}
                value={users}
                onChange={(e) => setUsers(e.target.value)}
                className="w-40 rounded-xl border border-blancoBox text-center font-poppins text-3xl"
              />
              <IonIcon
                icon={add}
                className="text-4xl"
                onClick={() => setUsers(users + 1)}
              />
            </div>
          </div>
          <div className="py-20 text-end sm:py-2">
            <IonIcon
              icon={arrowForwardOutline}
              className="rounded-full bg-primarioBotones p-1 text-4xl text-white sm:text-2xl"
              onClick={() => changeStatus(3)}
            />
          </div>
        </div>
        <div hidden={status != 3 ? true : false} className="py-14 text-center">
          <h2 className="font-poppins text-2xl font-semibold tracking-wider text-grisHeading">
            ¿En que sector económico se encuentra tu empresa?
          </h2>
          <h3 className="pt-6 font-poppins text-base text-grisHeading">
            Selecciona una o más opciones
          </h3>
          <div className="grid grid-cols-1 justify-items-center gap-4 py-8 sm:mx-48 sm:mt-12 sm:grid-cols-3">
            {economic.map((item, index) => (
              <div
                key={index}
                onClick={() => changeEconomicActive(item.id, item.selected)}
                className={
                  item.selected === 0
                    ? "flex h-28 w-52 flex-col items-center justify-center rounded-2xl border border-blancoBox"
                    : "flex h-28 w-52 flex-col items-center justify-center rounded-2xl border border-primarioBotones bg-[#F3F6FF]"
                }
              >
                <IonIcon icon={item.icon} className="text-2xl" />
                <h2 className="pt-2 font-poppins text-sm">{item.title}</h2>
              </div>
            ))}
          </div>
          <div className="py-2 text-end">
            <IonIcon
              icon={arrowForwardOutline}
              className="rounded-full bg-primarioBotones p-1 text-4xl text-white sm:text-2xl"
              onClick={() => sendForm()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
