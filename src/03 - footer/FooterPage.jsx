import React from "react";

import Copy from "./Copy";
import Menu from "./Menu";
import Social from "./social/Social";

const FooterPage = () => {
  return (
    <div className="bg-white">
      <div>
        <Menu />
        <Social />
      </div>

      <Copy />
    </div>
  );
};

export default FooterPage;
