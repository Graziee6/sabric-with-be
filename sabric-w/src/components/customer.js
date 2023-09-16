import React from "react";
import OrangeStar from "./orangeStar";
import GreyStar from "./greyStar";


function customer({imgSrc, customerName, jobTitle, id}) {
  return (
    <div className="w-full bg-white flex flex-col gap-3 py-6" key={id}>
      <div className="flex flex-row justify-start items-start">
        <OrangeStar/>
        <OrangeStar/>
        <OrangeStar/>
        <OrangeStar/>
        <OrangeStar/>
      </div>
      <p>
        Create custom landing pages with Fastland that converts more visitors
        than any website. Easy & Fast.
      </p>
      <div className="flex flex-row justify-around">
        <div className="w-1/3">
            <img src={imgSrc} alt="customer" className="w-16 h-16 rounded-full"/>
        </div>
        <div className="h-12 flex flex-col justify-between align-middle gap-1">
            <p className="text-black text-medium font-semibold capitalize">{customerName}</p>
            <p className="text-gray-400 capitalize">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default customer;
