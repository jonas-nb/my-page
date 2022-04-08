import React from "react";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navega = useNavigate();
  return (
    <div className="cursor-pointer p-5 border-b-4 border-black mb-10 mt-10 ">
      <h3 className="font-bold text-red-600 text-3xl lg:text-5xl">Menu</h3>
      <div className="text-2xl lg:text-3xl flex flex-col justify-between h-32 lg:h-36 p-3 ">
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navega("/");
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: 250,
              behavior: "smooth",
            });
            navega("/");
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            navega("/work");
          }}
        >
          Work
        </div>
      </div>
    </div>
  );
};

export default Menu;
