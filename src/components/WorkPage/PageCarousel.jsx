import React from "react";

const PageCarousel = (props) => {
  return (
    <div className="border-2 border-white/10 w-11/12 m-auto rounded mt-2  bg-black h-52 flex justify-start text-white shadow-lg shadow-slate-800/30">
      {/* image project */}
      <div className="w-3/6 flex ">
        <img className="object-cover rounded" src={props.imgEnd} alt="" />
      </div>

      {/* About project */}
      <div className="text-sm w-3/6 flex flex-col items-center justify-around">
        {/* project title */}
        <h1 className="">{props.title}</h1>
        {/* About Project */}
        <p className="w-11/12 h-20 overflow-x-hidden overflow-scroll">
          {props.about}
        </p>
        {/* Container of visited */}
        <div className=" w-full h-6 flex justify-around border">
          <a
            href={props.code}
            className="border w-10 text-center rounded bg-slate-200 text-black"
            target={"_blank"}
          >
            Code
          </a>
          <a
            href={props.page}
            className="border w-24 text-center rounded bg-slate-200 text-black"
            target="_blank"
          >
            Web Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageCarousel;
