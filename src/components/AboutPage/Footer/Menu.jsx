import React from "react";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const home = useNavigate();
  return (
    <div className="cursor-pointer">
      <h3 className="font-bold text-red-600">Menu</h3>
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          home("/");
        }}
      >
        About
      </div>
    </div>
  );
};

export default Menu;
