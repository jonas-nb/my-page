import React from "react";
import MyPerfil from "./perfil/MyPerfil";

import Phrase from "./Phrase";
import SkillPage from "./stacksPage/SkillPage";

const AboutMe = () => {
  return (
    <div>
      <Phrase />
      <MyPerfil />
      <SkillPage />
    </div>
  );
};

export default AboutMe;
