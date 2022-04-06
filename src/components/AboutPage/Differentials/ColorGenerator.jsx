import React from "react";

const ColorGenerator = () => {
  return (
    <div className="m-auto mb-16 lg:mb-20 border w-3/4 lg:w-2/3 xl:w-1/2 mt-10 shadow-lg shadow-white cursor-pointer grid items-center ">
      <div className="grid">
        <div className="text-sm md:text-xl lg:text-2xl  hover:text-red-400">
          #CSS-in-JS
        </div>
        <div className="text-lg lg:text-xl justify-self-end hover:text-red-400">
          #Axios
        </div>
      </div>
      <div className="text-xl md:text-2xl lg:text-4xl justify-self-end  hover:text-red-400">
        #Styled-Components
      </div>
      <div className="text-4xl md:text-6xl lg:text-8xl justify-self-center hover:text-red-400">
        #Tailwind
      </div>
      <div className="text-lg md:text-xl lg:text-2xl  hover:text-red-400">
        #Vite
      </div>
      <div className="text-xl md:text-2xl lg:text-4xl  hover:text-red-400">
        #React Router
      </div>
      <div className="text-lg md:text-xl lg:text-2xl justify-self-end hover:text-red-400">
        #Reactstrap
      </div>
    </div>
  );
};

export default ColorGenerator;
