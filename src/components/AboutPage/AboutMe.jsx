import React from "react";
import Diferentials from "./Differentials/Diferentials";
import MyPerfil from "./perfil/MyPerfil";

import Phrase from "./Phrase";
import SkillPage from "./stacksPage/SkillPage";

const AboutMe = () => {
  return (
    <div>
      <Phrase />
      <MyPerfil />
      <SkillPage />
      <Diferentials />
    </div>
  );
};

export default AboutMe;
