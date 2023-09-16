import React from "react";

function textCard({ number, heading, text, id }) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2 lg:text-left lg:items-start lg:justify-start cursor-pointer" key={id}>
      <div className="py-4 text-center">
        <h1 className="text-gray-300 text-3xl opacity-70 font-bold">{number}</h1>
      </div>
      <div className="text-white">
        <h1 className="capitalize font-bold text-medium mb-3">{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default textCard;
