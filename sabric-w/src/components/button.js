import React from "react";

function button({ buttonText }) {
  return (
    <div className="bg-orange-600 text-white rounded-md flex justify-center items-center capitalize p-3 font-normal text-lg mb-4 lg:text-md lg:mb-64 lg:font-normal lg:text-medium cursor-pointer lg:hover:opacity-70">
      <button type="submit" className="capitalize">{buttonText}</button>
    </div>
  );
}

export default button;
