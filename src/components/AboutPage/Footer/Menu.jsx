import React from "react";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navega = useNavigate();
  return (
    <div className="cursor-pointer p-5 border-b-4 border-black mb-10 ">
      <h3 className="font-bold text-red-600 text-3xl">Menu</h3>
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
            top: 20,
            behavior: "smooth",
          });
          home("/");
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
  );
};

export default Menu;
