import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { ImGit } from "react-icons/im";
const GridSkill = () => {
  return (
    <div className="flex justify-around items-center mt-5 text-6xl lg:w-7/12 lg:m-auto lg:mt-10">
      <IoLogoHtml5 className="text-orange-600 " />
      <IoLogoCss3 className="text-blue-600 " />
      <IoLogoJavascript className="text-yellow-500 " />
      <ImGit className="text-orange-600 " />
      <IoLogoReact className="text-teal-400 " />
    </div>
  );
};

export default GridSkill;
