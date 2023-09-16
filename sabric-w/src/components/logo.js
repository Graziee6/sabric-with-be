import React from "react";
import { Link } from "react-router-dom";

function logo() {
  const home = "/";
  return (
    <div>
      <Link to={home}>
        <img src="./assets/sabric-logo.png" alt="sabric logo" />
      </Link>
    </div>
  );
}

export default logo;
