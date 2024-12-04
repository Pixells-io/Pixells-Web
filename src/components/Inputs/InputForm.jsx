import React, { useState } from "react";

function InputForm({ type, name, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border[#D7D7D7] w-full rounded-xl border px-4 py-3 font-roboto text-sm text-grisHeading"
        style={{ outline: "none" }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 ${
          isFocused || value.trim()
            ? "border[#D7D7D7] top-[-14px] text-xs text-grisHeading"
            : "top-2 text-sm text-grisHeading"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default InputForm;
