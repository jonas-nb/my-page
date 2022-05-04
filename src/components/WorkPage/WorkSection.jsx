import React from "react";
import adviceImg from "./advice.png";
import PokeinitImg from "./Pokeinit.png";
const WorkSection = () => {
  return (
    <div>
      <section className="bg-white flex flex-col items-center mt-5">
        <div className="w-11/12 h-80 bg-yellow-300 rounded flex flex-col items-center justify-around mt-10 ">
          <img
            className="w-4/6 shadow shadow-black rounded"
            src={PokeinitImg}
            alt="pokeinit project icon."
          />
          <ul className="flex justify-between items-center w-5/6">
            <a
              href="https://github.com/jonas-nb/PokeInit"
              target="_blank"
              className="p-1 text-md text-white rounded bg-black/90 hover:bg-black"
            >
              Show Code
            </a>
            <a
              href="https://fancy-chebakia-587538.netlify.app"
              target="_blank"
              className="p-1 text-md text-white rounded bg-black/90 hover:bg-black"
            >
              Show in Production
            </a>
          </ul>
        </div>

        <div className="w-11/12 h-80 bg-blue-300 rounded flex flex-col items-center justify-around mt-10 ">
          <img
            className="w-4/6 shadow shadow-black rounded"
            src={adviceImg}
            alt="advice project icon."
          />
          <ul className="flex justify-between items-center w-5/6">
            <a
              href="https://github.com/jonas-nb/AdviceApp"
              target="_blank"
              className="p-1 text-md text-white rounded bg-black/90 hover:bg-black"
            >
              Show Code
            </a>
            <a
              href="https://stirring-jalebi-9adf6d.netlify.app"
              target="_blank"
              className="p-1 text-md text-white rounded bg-black/90 hover:bg-black"
            >
              Show in Production
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkSection;
