import React from "react";
import "./efeitosGrid.css";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { ImGit } from "react-icons/im";
const GridSkill = () => {
  return (
    <div className="flex justify-around items-center mt-5">
      <IoLogoHtml5 className="text-orange-600 text-6xl " />
      <IoLogoCss3 className="text-blue-600 text-6xl " />
      <IoLogoJavascript className="text-yellow-500 text-6xl " />
      <ImGit className="text-orange-600 text-6xl " />
      <IoLogoReact className="text-teal-400 text-6xl " />
    </div>
  );
};

export default GridSkill;
