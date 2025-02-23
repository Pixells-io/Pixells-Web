import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import InputForm from "@/components/Inputs/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IonIcon } from "@ionic/react";
import { checkmarkOutline, people, sparklesSharp } from "ionicons/icons";
import Cookies from "js-cookie";
import { use } from "react";

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [stripeError, setStripeError] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if (useCard === true) {
      event.preventDefault();

      if (!stripe || !elements) {
        return; // Asegúrate de que Stripe y Elements estén listos
      }

      setLoading(true);

      const cardElement = elements.getElement(CardElement);

      // Crear el PaymentMethod con la información de la tarjeta
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error(error);
        setLoading(false);
        setStripeError(true);
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}suscriptions/create-suscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_method_id: paymentMethod?.id,
            email: email,
            password: password,
            confirm_password: confirmPassword,
            checkbox: checkbox,
            plan: selectedPlan,
            card_name: cardName,
            name: name,
            last_name: lastName,
            business_name: businessName,
            cupon: cupon,
            client_code: clientCode,
          }),
        },
      );

      const session = await response.json();

      if (session.suscription.error) {
        setLoading(false);
        setStripeError(true);
        return;
      } else {
        //Success Pay
        const client_id = session.client;
        const client_token = session.token;
        setLoading(false);

        //Set Client ID in Cache
        Cookies.set("client_id", client_id, { expires: 1 });
        Cookies.set("token", client_token, {
          domain: ".yacamba.io",
          secure: true,
          sameSite: "None",
        });

        //Redirect to Thank You Page
        navigate("/gracias");
      }
    } else {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}suscriptions/create-suscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_method_id: 0,
            email: email,
            password: password,
            confirm_password: confirmPassword,
            checkbox: checkbox,
            plan: selectedPlan,
            card_name: cardName,
            name: name,
            last_name: lastName,
            business_name: businessName,
            cupon: cupon,
            client_code: clientCode,
          }),
        },
      );

      const session = await response.json();

      if (session.suscription.error) {
        setLoading(false);
        setStripeError(true);
        return;
      } else {
        //Success Pay
        const client_id = session.client;
        const client_token = session.token;
        setLoading(false);

        //Set Client ID in Cache
        Cookies.set("client_id", client_id, { expires: 1 });
        Cookies.set("token", client_token, {
          domain: ".yacamba.com",
          secure: true,
          sameSite: "None",
        });

        //Redirect to Thank You Page
        navigate("/gracias");
      }
    }
  };

  const style = {
    base: {
      // Estilos para el campo de la tarjeta
      iconColor: "#666ee8",
      color: "#31325f",
      fontWeight: 500,
      fontFamily: "Roboto, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#aab7c4",
      },
      // Agregar otros estilos si lo deseas
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  };

  //Inputs
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessNameError, setBusinessNameError] = useState(false);
  const [emailDuplicated, setEmailDuplicated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [cuponData, setCuponData] = useState(null);

  //Cupons
  const [cupon, setCupon] = useState("");
  const [useCupon, setUseCupon] = useState(false);
  const [cuponError, setCuponError] = useState(false);

  //Client Code
  const [clientCode, setClientCode] = useState("");
  const [useClientCode, setUseClientCode] = useState(false);
  const [clientCodeError, setClientCodeError] = useState(false);

  const [ammount, setAmmount] = useState(3000);

  //Use Card
  const [useCard, setUseCard] = useState(true);

  //Step State
  const [step, setStep] = useState(2);

  //Name of the card
  const [cardName, setCardName] = useState("");

  //Button State
  const [buttonState, setButtonState] = useState(false);

  async function validateInput() {
    //Validate the name
    if (name.length > 0) {
      setNameError(false);
    } else {
      setNameError(true);

      return;
    }

    //Validate last name
    if (lastName.length > 0) {
      setLastNameError(false);
    } else {
      setLastNameError(true);

      return;
    }

    if (businessName.length > 0) {
      setBusinessNameError(false);
    } else {
      setBusinessNameError(true);

      return;
    }

    //Validate the email
    if (email.length > 0) {
      setEmailError(false);

      //Validate the email is not repeated
      const response = await fetch(
        `https://saasbackend.yacamba.com/api/saas/validate-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );

      const info = await response.json();

      if (info.status === 201) {
        //Email is Done
        setEmailDuplicated(false);
      } else {
        //Email have a problem
        setEmailError(true);
        setEmailDuplicated(true);
      }
    } else {
      setEmailError(true);
      return;
    }

    //Validate the password
    if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    ) {
      setPasswordError(false);
    } else {
      setPasswordError(true);

      return;
    }

    //Validate the checkbox
    if (checkbox == true) {
      setCheckboxError(false);
    } else {
      setCheckboxError(true);
      return;
    }

    setStep(2);
  }

  function changeStateInputs(value, type) {
    switch (type) {
      case 1:
        setEmail(value);
        setEmailError(false);
        setButtonState(false);
        break;
      case 2:
        setPassword(value);
        setPasswordError(false);
        setButtonState(false);
        break;
      case 3:
        setConfirmPassword(value);
        setPasswordError(false);
        setButtonState(false);
        break;
      case 4:
        setName(value);
        setNameError(false);
        setButtonState(false);
        break;
      case 5:
        setLastName(value);
        setLastNameError(false);
        setButtonState(false);
        break;
    }
  }

  //Selected Plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  function selectPlanFunction(plan) {
    setSelectedPlan(plan);
    setStep(3);
  }

  async function setDiscountCheckout() {
    if (cupon.length > 0) {
      const response = await fetch(
        `https://brainbackend.yacamba.com/api/discount/consult-discount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: cupon,
          }),
        },
      );

      const info = await response.json();

      if (info.data == null) {
        setCuponError(true);
      } else {
        setCuponError(false);
        const cuponInfo = info.data;

        setCuponData(cuponInfo);

        switch (cuponInfo.type) {
          case "1":
            //Percent Discount
            const newAmmount = 3000 - (3000 * cuponInfo.discount) / 100;
            setAmmount(newAmmount);
            setUseCard(true);

            break;
          case "2":
            //Permanent Free
            setUseCard(false);
            setAmmount(0);

            break;
          case "3":
            //Temporal Free
            setAmmount(0);
            setUseCard(false);
            break;
        }
      }
    }
  }

  async function setFreeMonth(plan) {
    setCupon("PRUEBAGRATIS");

    if (cupon.length > 0) {
      await setDiscountCheckout();

      setSelectedPlan(plan);
      setStep(3);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-h-screen justify-center px-8 pt-8 text-center align-middle sm:items-center sm:px-0 sm:pt-0"
    >
      {/* STEP 1 */}
      <div
        className="items-center justify-center sm:w-1/4"
        hidden={step != 1 ? true : false}
      >
        <div>
          <div className="flex items-center justify-center py-4 text-center">
            <Link to={"/"}>
              <img src="/logos/icono_yacamba_azul.webp" width={"60px"} />
            </Link>
          </div>
          <div className="py-4 text-center">
            <span className="font-poppins text-2xl font-semibold text-grisHeading">
              Crear Cuenta Nueva
            </span>
          </div>
          <div className="text-left">
            <span className="font-poppins text-sm font-normal text-grisHeading">
              Registrate y disfruta el sistema Yacamba con un usuario de forma
              gratuita. Haz que tu empresa sea profesional y con procesos
              controlados.
            </span>
          </div>
          <div className="mt-8 space-y-4 text-left">
            <div className="flex gap-4">
              <InputForm
                type="name"
                name="name"
                value={name}
                color={nameError}
                onChange={(e) => changeStateInputs(e.target.value, 4)}
                placeholder="Nombre"
              />
              <InputForm
                type="text"
                name="apellido"
                color={lastNameError}
                value={lastName}
                onChange={(e) => changeStateInputs(e.target.value, 5)}
                placeholder="Apellido"
              />
            </div>
            <InputForm
              type="text"
              name="name_business"
              value={businessName}
              color={businessNameError}
              onChange={(e) => setBusinessName(e.target.value, 1)}
              placeholder="Nombre del Negocio"
            />
            <InputForm
              type="email"
              name="email"
              value={email}
              color={emailError}
              onChange={(e) => changeStateInputs(e.target.value, 1)}
              placeholder="Correo Electrónico"
            />
            {emailDuplicated == true ? (
              <span className="font-roboto text-sm text-red-500">
                Este Email ya esta en uso, elige otro
              </span>
            ) : null}
            <InputForm
              type="password"
              name="password"
              color={passwordError}
              value={password}
              onChange={(e) => changeStateInputs(e.target.value, 2)}
              placeholder="Contraseña"
            />
            <InputForm
              type="password"
              name="confirm_password"
              color={passwordError}
              value={confirmPassword}
              onChange={(e) => changeStateInputs(e.target.value, 3)}
              placeholder="Confirmar Contraseña"
            />
          </div>
          <div className="mt-4 flex gap-4 text-left">
            <label
              htmlFor="hr"
              className="light:text-black flex flex-row items-center gap-2.5 dark:text-white"
            >
              <input
                id="hr"
                type="checkbox"
                name="checkbox"
                checked={checkbox}
                onClick={() => setCheckbox(!checkbox)}
                className="peer hidden"
              />
              <div
                className={
                  checkboxError == true
                    ? "light:bg-[#e8e8e8] flex h-5 w-5 rounded-md border border-red-500 transition peer-checked:bg-primario dark:bg-[#212121]"
                    : "light:bg-[#e8e8e8] flex h-5 w-5 rounded-md border border-[#a2a1a833] transition peer-checked:bg-primario dark:bg-[#212121]"
                }
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </label>
            <span className="font-poppins text-xs text-grisHeading">
              Acepto los{" "}
              <Link className="text-blue-600" to={"/terminos-y-condiciones"}>
                Términos y Condiciones
              </Link>
              ,{" "}
              <Link className="text-blue-600" to={"/aviso-de-privacidad"}>
                Aviso de Privacidad
              </Link>{" "}
              y el{" "}
              <Link className="text-blue-600">Concentimiento Electrónico </Link>
              para el uso de Yacamba.
            </span>
          </div>
          <div className="mt-6">
            <button
              disabled={buttonState}
              type="button"
              onClick={() => validateInput(2)}
              className={
                buttonState == true
                  ? "rounded-xl bg-grisSubText px-12 py-3 font-poppins text-sm text-white hover:bg-grisText"
                  : "rounded-xl bg-primario px-12 py-3 font-poppins text-sm text-white hover:bg-primarioBotones"
              }
            >
              Continuar
            </button>
          </div>
          <div className="mt-4">
            <span className="font-poppins text-xs text-grisHeading">
              Si ya tienes una cuenta,{" "}
              <Link
                className="text-blue-600"
                to={"https://sistema.yacamba.com"}
              >
                Inicia Sesión
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
      {/* STEP 2 */}
      <div className="w-full" hidden={step != 2 ? true : false}>
        <div className="mt-8 flex justify-center text-center align-middle">
          <div className="sm:w-2/7 items-center justify-center">
            <span className="font-poppins text-3xl font-semibold tracking-wide">
              Escoge tu plan
            </span>
            <Tabs
              defaultValue="monthly"
              className="mt-8 overflow-auto border-0 bg-transparent"
            >
              <TabsList className="py h-full rounded-3xl border border-grisDisabled bg-transparent px-2">
                <TabsTrigger
                  className="rounded-3xl bg-transparent px-4 py-2 font-roboto text-sm font-medium text-grisSubText data-[state=active]:bg-black data-[state=active]:text-white"
                  value="monthly"
                >
                  Mensual
                </TabsTrigger>

                {/* 
                <TabsTrigger
                  className="rounded-3xl bg-transparent px-4 py-2 font-roboto text-sm font-medium text-grisSubText data-[state=active]:bg-black data-[state=active]:text-white"
                  value="anual"
                >
                  Anual
                </TabsTrigger>
                */}
              </TabsList>
              <TabsContent value="monthly">
                <div className="mt-8 rounded-xl border border-grisDisabled sm:flex">
                  {/* 
                  <div className="border-r border-grisDisabled px-6 py-6 text-left sm:w-1/2">
                    <span className="font-poppins text-xl font-medium text-black">
                      Gratuito
                    </span>
                    <br />
                    <span className="font-roboto text-sm text-[#ABABAB]">
                      $0/mensual MXN
                    </span>
                    <div className="w-full py-8 text-center">
                      <button
                        disabled={true}
                        type="button"
                        className="w-3/5 rounded-3xl border border-grisSubText px-4 py-3 font-roboto text-base tracking-wider text-grisSubText"
                      >
                        No disponible
                      </button>
                    </div>
                    <div className="space-y-2 py-2">
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Acceso a todos los módulos del sistema</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>1 usuario</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Facturación electrónica disponible</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Notificaciones en tiempo real</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Descarga de app gratuita</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>
                          Asistente virtual de inteligencia artificil 24/7
                        </h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Uso de Calendario</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Integraciones de terceros limitadas</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisDisabled">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Soporte personal limitado</h2>
                      </div>
                    </div>
                    <div className="pt-6">
                      <span className="font-roboto text-sm font-normal tracking-wider text-[#ABABAB]">
                        * Plan gratuito, 1 usuario disponible
                      </span>
                    </div>
                  </div>
                  */}
                  <div className="px-6 py-6 text-left">
                    <div className="flex gap-2">
                      <IonIcon
                        icon={sparklesSharp}
                        className="text-xl text-[#00A9B3]"
                      ></IonIcon>
                      <span className="font-poppins text-xl font-medium text-black">
                        Plan Mensual
                      </span>
                    </div>
                    <span className="font-roboto text-sm text-[#ABABAB]">
                      $3,000/mensual MXN
                    </span>
                    <div className="flex w-full gap-8 py-8 text-center">
                      <button
                        type="button"
                        onClick={() => selectPlanFunction(1)}
                        className="w-3/5 rounded-3xl border bg-[#00A9B3] px-4 py-3 font-roboto text-base tracking-wider text-white hover:bg-[#43b9c0]"
                      >
                        Escoger Plan
                      </button>
                      <button
                        type="button"
                        onClick={() => setFreeMonth(1)}
                        className="w-3/5 rounded-3xl border border-black bg-white px-4 py-3 font-roboto text-base tracking-wider text-black hover:bg-black hover:text-white"
                      >
                        Probar Gratis
                      </button>
                    </div>
                    <div className="space-y-2 py-2">
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Acceso a todos los módulos del sistema</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Usuarios ilimitados</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Facturación electrónica disponible</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Notificaciones en tiempo real</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Descarga de app gratuita</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>
                          Asistente virtual de inteligencia artificil 24/7
                        </h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Uso de Calendario</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Integraciones de terceros</h2>{" "}
                        <h2 className="text-[#00A9B3]">ilimitadas</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Soporte personal limitado</h2>
                      </div>
                    </div>
                    <div className="pt-6">
                      <span className="font-roboto text-sm font-normal tracking-wider text-[#ABABAB]">
                        * Cancelación en cualquier momento
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="anual" className="">
                <div className="mt-8 flex rounded-xl border border-grisDisabled">
                  <div className="w-1/2 border-r border-grisDisabled px-6 py-6 text-left">
                    <span className="font-poppins text-xl font-medium text-black">
                      Gratuito
                    </span>
                    <br />
                    <span className="font-roboto text-sm text-[#ABABAB]">
                      $0/mensual MXN
                    </span>
                    <div className="w-full py-8 text-center">
                      <button
                        disabled={true}
                        type="button"
                        className="w-3/5 rounded-3xl border border-grisSubText px-4 py-3 font-roboto text-base tracking-wider text-grisSubText"
                      >
                        No disponible
                      </button>
                    </div>
                    <div className="space-y-2 py-2">
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Acceso a todos los módulos del sistema</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>1 usuario</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Facturación electrónica disponible</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Notificaciones en tiempo real</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Descarga de app gratuita</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>
                          Asistente virtual de inteligencia artificil 24/7
                        </h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Uso de Calendario</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Integraciones de terceros limitadas</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisDisabled">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Soporte personal limitado</h2>
                      </div>
                    </div>
                    <div className="pt-6">
                      <span className="font-roboto text-sm font-normal tracking-wider text-[#ABABAB]">
                        * Plan gratuito, 1 usuario disponible
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 px-6 py-6 text-left">
                    <div className="flex gap-2">
                      <IonIcon
                        icon={sparklesSharp}
                        className="text-xl text-primario"
                      ></IonIcon>
                      <span className="font-poppins text-xl font-medium text-black">
                        Plan Anual
                      </span>
                    </div>
                    <span className="font-roboto text-sm text-[#ABABAB]">
                      $2,500/mensual MXN
                    </span>
                    <div className="w-full py-8 text-center">
                      <button
                        type="button"
                        onClick={() => selectPlanFunction(2)}
                        className="w-3/5 rounded-3xl border bg-primario px-4 py-3 font-roboto text-base tracking-wider text-white hover:bg-primarioBotones"
                      >
                        Escoger Plan
                      </button>
                    </div>
                    <div className="space-y-2 py-2">
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Acceso a todos los módulos del sistema</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Usuarios ilimitados</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Facturación electrónica disponible</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Notificaciones en tiempo real</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Descarga de app gratuita</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>
                          Asistente virtual de inteligencia artificil 24/7
                        </h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Uso de Calendario</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Integraciones de terceros</h2>{" "}
                        <h2 className="text-primario">ilimitadas</h2>
                      </div>
                      <div className="flex gap-2 font-roboto text-sm font-normal tracking-wider text-grisHeading">
                        <IonIcon icon={checkmarkOutline} className="text-lg" />
                        <h2>Soporte personal limitado</h2>
                      </div>
                    </div>
                    <div className="pt-6">
                      <span className="font-roboto text-sm font-normal tracking-wider text-[#ABABAB]">
                        * Cancelación en cualquier momento
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <div className="py-8">
              <IonIcon icon={people} className="text-2xl text-[#ABABAB]" />
              <h2 className="mt-4 font-roboto text-sm font-normal text-[#ABABAB]">
                Necesitas mas información de nuestro equipo de atención a
                clientes?
              </h2>
              <div className="mt-6">
                <Link
                  to={"/contacto"}
                  className="rounded-full bg-[#F0F0F0] px-4 py-2 text-[#ABABAB] hover:bg-[#e8e8e8]"
                >
                  Más información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* STEP 3 */}
      <div className="w-full" hidden={step != 3 ? true : false}>
        <div className="flex justify-center text-center">
          <div className="w-full sm:w-2/6">
            <div className="flex w-full justify-center py-10 text-center align-middle">
              <img
                src="/logos/icono_yacamba_azul.webp"
                alt="Yacamba Logo"
                className="h-10"
              />
            </div>
            <div className="rounded-xl border border-grisDisabled px-10 py-8 text-left">
              <h2 className="font-poppins text-xl font-semibold tracking-wider text-grisHeading">
                Tarjeta de crédito o débito
              </h2>
              <div className="flex gap-1 py-4">
                <img src="/img/visa.webp" alt="Visa" className="h-5" />
                <img
                  src="/img/mastercard.webp"
                  alt="Mastercard"
                  className="h-5"
                />
                <img
                  src="/img/american_express.webp"
                  alt="American Express"
                  className="w-8"
                />
                <img
                  src="/img/apple_pay.webp"
                  alt="Apple Pay"
                  className="h-5"
                />
                <img
                  src="/img/google_pay.webp"
                  alt="Google Pay"
                  className="h-5"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h2 className="font-poppins text-lg font-semibold text-grisHeading">
                    Plan Mensual
                  </h2>
                  <span className="font-roboto text-xs text-[#ABABAB]">
                    Cancela cuando quieras
                  </span>
                </div>
                <div>
                  <h2 className="font-poppins text-lg font-semibold text-grisHeading">
                    ${" "}
                    {ammount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    mxn
                  </h2>
                  <span className="font-roboto text-xs text-[#ABABAB]">
                    Por mes + IVA
                  </span>
                </div>
              </div>
              {useCard == true ? (
                <div>
                  <span
                    className="font-poppins text-xs text-[#ABABAB]"
                    onClick={() => setUseCupon(!useCupon)}
                  >
                    ¿Tienes un codigo de descuento?
                  </span>
                  {useCupon == true ? (
                    <div>
                      {cuponError == true ? (
                        <h2 className="mt-2 font-roboto text-base text-red-400">
                          El cupon esta vencio o no existe
                        </h2>
                      ) : (
                        false
                      )}
                      <div className="flex">
                        <input
                          type="text"
                          name="cupon"
                          placeholder="Ingresa el cupon"
                          value={cupon}
                          onChange={(e) => setCupon(e.target.value)}
                          className={
                            cuponError == true
                              ? "w-full border-b border-red-500 py-2 font-roboto text-base text-red-500 focus:outline-none"
                              : "w-full border-b border-[#aab7c5] py-2 font-roboto text-base text-[#aab7c5] focus:outline-none"
                          }
                        />
                        <button
                          type="button"
                          onClick={() => setDiscountCheckout()}
                          className="rounded-xl bg-primario px-4 font-poppins text-sm text-white hover:bg-primarioBotones"
                        >
                          Aplicar
                        </button>
                      </div>
                    </div>
                  ) : (
                    false
                  )}
                </div>
              ) : (
                false
              )}
              <div>
                <span
                  className="font-poppins text-xs text-[#ABABAB]"
                  onClick={() => setUseClientCode(!useClientCode)}
                >
                  ¿Tienes un codigo de referido?
                </span>
                {useClientCode == true ? (
                  <input
                    type="text"
                    name="ref_code"
                    placeholder="Ingresa el codigo de referido"
                    value={clientCode}
                    onChange={(e) => setClientCode(e.target.value)}
                    className="w-full border-b border-[#aab7c5] py-2 font-roboto text-base text-[#aab7c5] focus:outline-none"
                  />
                ) : (
                  false
                )}
              </div>
              {useCard == true ? (
                <>
                  <div
                    className={
                      stripeError == true
                        ? "mt-10 border-b border-red-500 pb-4"
                        : "mt-10 border-b pb-4"
                    }
                  >
                    <CardElement options={{ style }} />
                  </div>
                  <div className="w-full pt-4">
                    <input
                      type="text"
                      name="card_name"
                      placeholder="Títular de la tarjeta"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full border-b border-[#aab7c5] py-2 font-roboto text-base text-[#aab7c5] focus:outline-none"
                    />
                  </div>
                </>
              ) : (
                <h2 className="rounded-xl bg-white px-12 py-3 font-poppins text-xs text-primario">
                  {cuponData?.type == 3
                    ? `Tienes acceso a una prueba gratuita de ${cuponData?.discount} mes.`
                    : `Tienes acceso a una cuenta gratuita, por lo cual no necesitas
                  ingresar un metodo de pago.`}
                </h2>
              )}
              <div className="mt-24 text-center">
                <button
                  //disabled={loading || !stripe}
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                  className="rounded-xl bg-primario px-12 py-3 font-poppins text-sm text-white hover:bg-primarioBotones"
                >
                  {loading ? "Cargando..." : "Pagar"}
                </button>
              </div>
              <div className="pt-4 text-center">
                <Link
                  to={"/"}
                  className="rounded-xl bg-white px-12 py-3 font-poppins text-xs text-[#ABABAB]"
                >
                  Cancelar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
