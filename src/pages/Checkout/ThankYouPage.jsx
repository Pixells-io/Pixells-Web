import React, { useEffect, useState } from "react";
import "../../../public/main.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
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

  return (
    <div className="bg-gradient-thank-you relative flex h-screen w-full items-center justify-center overflow-hidden">
      <span className="font-poppins text-3xl font-semibold tracking-wide text-grisHeading">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        BIENVENIDO A PIXELLS
      </span>
    </div>
  );
}

export default ThankYouPage;
