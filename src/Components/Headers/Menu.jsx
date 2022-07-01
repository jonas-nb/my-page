import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
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

      <Dropdown
        class="w-20  bg-[#E0AAFF] hover:bg-[#C77DFF] hover:outline hover:outline-offset-1 hover:outline-1 transition-colors duration-300  text-white"
        label="menu"
      >
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default Menu;
