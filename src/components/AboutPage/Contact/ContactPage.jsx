import React from "react";
import { GrLinkedin, GrGithub, GrMail } from "react-icons/gr";
const ContactPage = () => {
  return (
    <div className="bg-black w-full text-white">
      <h1 className="text-center text-5xl pt-10">Contact Me</h1>
      <div className="mt-10 flex flex-col justify-center items-center pb-10 ">
        <a
          href="https://www.linkedin.com/in/jonas-batista-b77b24137/"
          target="_blank"
          className="flex items-center justify-around border w-6/12 h-14 bg-white text-black mb-3 text-xl rounded shadow-md shadow-slate-800"
        >
          <div>On Linkedin</div>
          <GrLinkedin className="text-4xl" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jonas.nb4@gmail.com"
          target="_blank"
          className="flex items-center justify-around border w-6/12 h-14 bg-white text-black mb-3 text-xl rounded shadow-md shadow-slate-800"
        >
          <div>Send Me An Email</div>
          <GrMail className="text-5xl" />
        </a>
        <h2 className="text-4xl">Tel</h2>
        <h3 className="text-3xl">+55 21 98214-3587</h3>
      </div>
    </div>
  );
};

export default ContactPage;
