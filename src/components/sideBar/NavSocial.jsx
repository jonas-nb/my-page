import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
const NavSocial = () => {
  return (
    <div className="text-white  flex w-24 text-3xl items-center justify-around lg:ml-20  ">
      <a href="https://github.com/jonas-nb" target={"_blank"}>
        <IoLogoGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jonas-batista-b77b24137/#experience"
        target={"_blank"}
      >
        <IoLogoLinkedin />
      </a>
    </div>
  );
};

export default NavSocial;
