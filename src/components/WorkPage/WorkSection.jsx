import React from "react";
import adviceImg from "./advice.png";
import PokeinitImg from "./Pokeinit.png";
const WorkSection = () => {
  return (
    <div>
      <section className="bg-white border mt-5">
        <div className="border border-red-600 w-full h-48 mt-5 bg-yellow-300">
          <h1>Pokeinit</h1>
          <img className="" src={PokeinitImg} alt="" />
          <ul>
            <a href="">show code</a>
            <a href="">show in production</a>
          </ul>
        </div>
        <div className="border border-red-600 w-full h-48 mt-5 bg-white"></div>
      </section>
    </div>
  );
};

export default WorkSection;
