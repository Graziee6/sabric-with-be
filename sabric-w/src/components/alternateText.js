import React from "react";
import { Link } from 'react-router-dom';

function alternateText({ p1, link, p2 }) {
  return (
    <div className="bg-transparent flex gap-0.5 font-semibold items-center justify-center lg:items-start lg:justify-start w-full">
      <p className="text-black">{p1}</p>
      <Link to={link} className="no-underline text-purple-800 capitalize hover:underline">
        {p2}
      </Link>
    </div>
  );
}

export default alternateText;
