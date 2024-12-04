import React from "react";

function InputTitle({ type, name, placeholder }) {
  return (
    <div className="relative w-full space-y-2">
      <span className="font-roboto text-xs text-grisText"> {placeholder} </span>
      <input
        type={type}
        name={name}
        className="w-full rounded-lg border border-grisHeading px-4 py-2 font-roboto text-sm text-grisHeading"
      />
    </div>
  );
}

export default InputTitle;
