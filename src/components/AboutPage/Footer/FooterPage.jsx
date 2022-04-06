import React from "react";
import Contact from "./Contact";
import Copy from "./Copy";
import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./Social";

const FooterPage = () => {
  return (
    <div>
      <Logo />
      <div>
        <Menu />
        <Social />
      </div>
      <Contact />
      <Copy />
    </div>
  );
};

export default FooterPage;
