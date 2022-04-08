import React from "react";
import GridSkill from "./GridSkill";
import Title from "./Title";

const SkillPage = () => {
  return (
    <section className="block bg-red-100 w-full h-64 lg:mt-12">
      <Title />
      <GridSkill />
    </section>
  );
};

export default SkillPage;
