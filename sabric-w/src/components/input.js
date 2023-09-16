import React from "react";

function Input({ inputType, inputPlaceholder, captureInput, name }) {
  return (
    <div className="bg-transparent">
      <input
        className="outline-none w-full bg-white text-gray-400 font-light p-3 rounded-lg"
        type={inputType}
        placeholder={inputPlaceholder}
        required
        onChange={captureInput}
        name={name}
      />
    </div>
  );
}

export default Input;
