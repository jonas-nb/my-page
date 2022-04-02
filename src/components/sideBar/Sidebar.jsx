import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
const Sidebar = () => {
  return (
    <div className="bg-black w-full h-32 flex flex-col items-center justify-around ">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Sidebar;
