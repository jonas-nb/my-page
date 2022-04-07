import React from "react";

import Copy from "./Copy";
import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./social/Social";

const FooterPage = () => {
  return (
    <div className="">
      <Logo />
      <div>
        <Menu />
        <Social />
      </div>

      <Copy />
    </div>
  );
};

export default FooterPage;
