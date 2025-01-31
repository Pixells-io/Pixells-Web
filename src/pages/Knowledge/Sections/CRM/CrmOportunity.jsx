import React from "react";
function CrmOpotunity() {
  return (
    <div className="w-full grid grid-cols-12 gap-12 rounded-[10px] bg-white border border-[#E8E8E8] px-8 py-4">
      <div className="w-full max-h-[70vh] overflow-auto col-span-8 px-6 py-10">
        {/*Title */}
        <span className="font-poppins font-semibold text-[12px] text-[#008EF9]">
          CRM
        </span>
        <h2 className="pt-5 font-poppins text-[16px] text-grisHeading">
          Alta nueva Oportunidad
        </h2>
        {/*ARTICLE 1 */}
        <div>
          <article className="pt-5 font-roboto font-light text-[14px] text-grisHeading">
            <p>
              En el submenú toca “Nuevo Oportunidad”, llena la siguiente
              información:
            </p>
            <br />
            <ol className="mt-4 mb-4">
              <li className="before:content-['1.'] before:mr-2">
              Indica el nombre de la oportunidad.
              </li>
              <li className="before:content-['2.'] before:mr-2">Agrega el monto aproximado que consideras representa esta oportunidad, e indica su tipo de moneda.</li>
              <li>Selecciona el prospecto que quieres asociar.
              </li>
              <li>Indica en qué proceso de venta quieres colocar a la oportunidad.</li>
              </ol>
          </article>
        </div>
      </div>
    </div>
  );
}

export default CrmOpotunity;
