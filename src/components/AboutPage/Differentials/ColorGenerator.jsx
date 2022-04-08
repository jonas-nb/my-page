import React from "react";

const ColorGenerator = () => {
  return (
    <div className="m-auto mb-16 lg:mb-32  border w-3/4 lg:w-2/3 xl:w-1/2 mt-10 shadow-lg shadow-white cursor-pointer grid items-center ">
      <div className="grid">
        <div className="text-sm md:text-xl lg:text-2xl  hover:text-red-400">
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"
            target="_blank"
          >
            #CSS-in-JS
          </a>
        </div>
        <div className="text-lg lg:text-xl justify-self-end hover:text-red-400">
          <a href="https://axios-http.com/docs/intro" target="_blank">
            #Axios
          </a>
        </div>
      </div>
      <div className="text-xl md:text-2xl lg:text-4xl justify-self-end  hover:text-red-400">
        <a href="https://styled-components.com/" target="_blank">
          #Styled-Components
        </a>{" "}
      </div>
      <div className="text-4xl md:text-6xl lg:text-8xl justify-self-center hover:text-red-400">
        <a href="https://tailwindcss.com/" target="_blank">
          #Tailwind
        </a>
      </div>
      <div className="text-lg md:text-xl lg:text-2xl  hover:text-red-400">
        <a href="https://vitejs.dev/guide/" target="_blank">
          #Vite
        </a>
      </div>
      <div className="text-xl md:text-2xl lg:text-4xl  hover:text-red-400">
        <a
          href="https://v5.reactrouter.com/web/guides/quick-start"
          target="_blank"
        >
          #React Router
        </a>{" "}
      </div>
      <div className="text-lg md:text-xl lg:text-2xl justify-self-end hover:text-red-400">
        <a
          href="https://reactstrap.github.io/?path=/story/home-installation--page"
          target="_blank"
        >
          #Reactstrap
        </a>{" "}
      </div>
    </div>
  );
};

export default ColorGenerator;
