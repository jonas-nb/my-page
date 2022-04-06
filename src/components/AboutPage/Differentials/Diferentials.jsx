import React from "react";
import ColorGenerator from "./ColorGenerator";

const Diferentials = () => {
  return (
    <div className="bg-black h-96 mt-5 text-white flex flex-col justify-between items-center font-mono">
      <h1 className="text-3xl mt-10">My Differentials</h1>
      <ColorGenerator />
    </div>
  );
};

export default Diferentials;
