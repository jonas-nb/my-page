import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
const Sidebar = () => {
  return (
    <div className=" bg-black w-full h-32 flex flex-col lg:flex-row items-center justify-around lg:justify-start border-t">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Sidebar;
