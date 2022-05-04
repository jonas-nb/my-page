import React from "react";
import adviceImg from "./advice.png";
import PokeinitImg from "./Pokeinit.png";
const WorkSection = () => {
  return (
    <div>
      <section className="bg-white flex flex-col items-center ">
        <div className="w-11/12 md:w-full h-80 bg-yellow-300 rounded flex flex-col md:flex-row items-center justify-around mt-10 ">
          <img
            className="w-2/6 md:w-1/6 shadow shadow-black rounded"
            src={PokeinitImg}
            alt="pokeinit project icon."
          />
          <ul className="md:w-4/12 md:h-32 flex md:flex-col justify-between items-center md:items-start w-5/6">
            <a
              href="https://github.com/jonas-nb/PokeInit"
              target="_blank"
              className="p-1 md:p-0 text-md md:text-2xl md:w-11/12 md:h-2/6 flex items-center justify-center text-white rounded bg-black/90 hover:bg-black"
            >
              Show Code
            </a>
            <a
              href="https://fancy-chebakia-587538.netlify.app"
              target="_blank"
              className="p-1 md:p-0 text-md md:text-2xl md:w-11/12 md:h-2/6 flex items-center justify-center text-white rounded bg-black/90 hover:bg-black"
            >
              Show in Production
            </a>
          </ul>
        </div>

        <div className="w-11/12 md:w-full h-80 bg-blue-300 rounded flex flex-col md:flex-row items-center justify-around mt-10 ">
          <img
            className="w-2/6 md:w-1/6 shadow shadow-black rounded"
            src={adviceImg}
            alt="advice project icon."
          />
          <ul className="md:w-4/12 md:h-32 flex md:flex-col justify-between items-center md:items-start w-5/6">
            <a
              href="https://github.com/jonas-nb/AdviceApp"
              target="_blank"
              className="p-1 md:p-0 text-md md:text-2xl md:w-11/12 md:h-2/6 flex items-center justify-center text-white rounded bg-black/90 hover:bg-black"
            >
              Show Code
            </a>
            <a
              href="https://stirring-jalebi-9adf6d.netlify.app"
              target="_blank"
              className="p-1 md:p-0 text-md md:text-2xl md:w-11/12 md:h-2/6 flex items-center justify-center text-white rounded bg-black/90 hover:bg-black"
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
