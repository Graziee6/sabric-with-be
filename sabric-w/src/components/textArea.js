import React from "react";

function textArea({ placeholder, name, captureInput }) {
  return (
    <div className="bg-white rounded-lg">
      <textarea
        cols="16"
        rows="4"
        placeholder={placeholder}
        className="text-slate-400 p-3 font-light capitalize outline-none flex justify-start rounded-lg" name={name} onChange={captureInput}
      ></textarea>
    </div>
  );
}

export default textArea;
