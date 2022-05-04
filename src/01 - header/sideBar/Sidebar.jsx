import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavSocial from "./NavSocial";
const Sidebar = () => {
  return (
    <div className=" bg-black w-full h-52 flex flex-col lg:flex-row items-center justify-around lg:justify-start border-t">
      <Logo />
      <Navbar />
      <NavSocial />
    </div>
  );
};

export default Sidebar;
