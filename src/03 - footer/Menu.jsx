import React from "react";
import { useNavigate, Link } from "react-router-dom";
const Menu = () => {
  const navega = useNavigate();
  return (
    <div className="bg-white cursor-pointer border-b-4 border-black">
      <h3 className="font-bold text-red-600 text-3xl lg:text-5xl p-1 pt-20">
        Menu
      </h3>
      <div className="p-1 flex items-center justify-between w-full h-32 text-white text-lg mb-20">
        <div
          className="border h-10 w-1/5 flex items-center justify-center bg-black hover:bg-red-600 rounded"
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
          className="border h-10 w-1/5 flex items-center justify-center bg-black hover:bg-red-600 rounded"
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
          className="border h-10 w-1/5 flex items-center justify-center bg-black hover:bg-red-600 rounded"
          onClick={() => {
            navega("/work");
          }}
        >
          Work
        </div>
        <div
          className="border h-10 w-1/4 flex items-center justify-center bg-black hover:bg-red-600 rounded"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navega("/about");
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Menu;
