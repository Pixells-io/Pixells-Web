import React, { useState } from "react";

function InputForm({ type, name, placeholder, value, onChange, color }) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const handleChange = (e) => {
    setInternalValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const inputValue = value !== undefined ? value : internalValue;

  return (
    <div className="relative w-full">
      <input
        id={name}
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
        className={
          color == true
            ? "w-full rounded-xl border border-red-500 px-4 py-3 font-roboto text-[16px] text-red-500"
            : "border[#D7D7D7] w-full rounded-xl border px-4 py-3 font-roboto text-[16px] text-grisHeading"
        }
        style={{ outline: "none" }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 ${
          color == true ? "text-red-500" : "text-grisHeading"
        } ${
          isFocused || inputValue.trim()
            ? "border[#D7D7D7] top-[-14px] text-xs"
            : "top-2 text-sm"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default InputForm;
