import React from "react";
import foto from "./profile-pic.png";
const Photo = () => {
  return (
    <div>
      <img className="m-auto w-32 " src={foto} alt="" />
    </div>
  );
};

export default Photo;
