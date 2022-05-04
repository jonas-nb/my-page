import React from "react";
import { GrLinkedin, GrGithub, GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
const Icons = () => {
  return (
    <div className="">
      <ul className="flex flex-row items-center justify-around text-5xl lg:w-5/12 lg:m-auto">
        <li className="flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/jonas-batista-b77b24137/#experience"
            target={"_blank"}
          >
            <GrLinkedin />
          </a>
        </li>
        <li className="flex justify-center items-center">
          <a href="https://github.com/jonas-nb" target={"_blank"}>
            <GrGithub />
          </a>
        </li>
        <li className="flex justify-center items-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jonas.nb4@gmail.com"
            target={"_blank"}
          >
            <GrMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
