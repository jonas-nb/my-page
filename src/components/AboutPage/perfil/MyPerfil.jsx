import React from "react";
import Name from "./Name";
import Photo from "./Photo";

const MyPerfil = () => {
  return (
    <div className=" bg-black border-t-2 rounded border-black/10 m-2 mt-20 flex flex-col border-red-600 shadow-2xl ">
      <div className="m-auto relative bottom-16  ">
        <Photo />
      </div>
      <Name />
    </div>
  );
};

export default MyPerfil;
