import React from "react";

const ColorGenerator = () => {
  return (
    <div className="m-auto border w-3/4 mt-10 shadow-lg shadow-white cursor-pointer grid items-center ">
      <div className="grid">
        <div className="text-sm  hover:text-red-400">#CSS-in-JS</div>
        <div className="text-lg justify-self-end hover:text-red-400">
          #Axios
        </div>
      </div>
      <div className="text-xl justify-self-end  hover:text-red-400">
        #Styled-Components
      </div>
      <div className="text-4xl justify-self-center hover:text-red-400">
        #Tailwind
      </div>
      <div className="text-lg  hover:text-red-400">#Vite</div>
      <div className="text-xl  hover:text-red-400">#React Router</div>
      <div className="text-nd justify-self-end hover:text-red-400">
        #Reactstrap
      </div>
    </div>
  );
};

export default ColorGenerator;
