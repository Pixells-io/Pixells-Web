import React from "react";
import "../../../public/main.css";

function DarkBanner() {
  return (
    <div className="overflow-hidden bg-[#080019] py-16 text-center">
      <div className="px-12 text-left sm:px-0 sm:text-center">
        <span className="text-gradient-home-black font-poppins text-4xl text-white">
          CRECE RÁPIDO. OPERA EN GRANDE.
        </span>
      </div>
      <div className="mt-16 flex w-full justify-center">
        <img
          src="/img/dark_system.webp"
          className="rotate-img w-5/6 sm:w-4/6"
        />
      </div>
    </div>
  );
}

export default DarkBanner;
