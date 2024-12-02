import React from "react";

function InputForm({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="border[#D7D7D7] w-full rounded-xl border px-4 py-2 font-roboto text-sm text-grisHeading"
      style={{ outline: "none" }}
    />
  );
}

export default InputForm;
