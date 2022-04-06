import React from "react";
import ColorGenerator from "./ColorGenerator";

const Diferentials = () => {
  return (
    <div className="bg-black  mt-5 text-white flex flex-col justify-between items-center font-mono shadow-md rounded shadow-black ">
      <h1 className="text-3xl lg:text-6xl mt-10 lg:mt-16">My Differentials</h1>
      <ColorGenerator />
    </div>
  );
};

export default Diferentials;
