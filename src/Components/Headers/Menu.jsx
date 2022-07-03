import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Menu = () => {
  return (
    <div className="flex flex-row items-center justify-around">
      <Link to="/">
        <img
          className="w-20"
          src="src\Assets\img\mainLogo.png"
          alt="logo da page"
        />
      </Link>
      <DarkModeButton />
    </div>
  );
};

export default Menu;
