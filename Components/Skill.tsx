import React from "react";
import SkillLanguage from "./SkillLanguage";

const Skills = () => {
  return (
    <div id="Skills" className="pt-[4rem] md:pt-[5rem] pb-[5rem] bg-[#121121] ">
      <h1 className="heading">
        Ski<span className="text-blue-500">lls</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:-pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          {/* <SkillItem title="React Developer" year="2014 - 2018" />
          <SkillItem title="Mern Stack Developer" year="2016 - 2020" /> */}
          <SkillLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          {/* <SkillItem title="Next Js Developer" year="2018 - 2021" />
          <SkillItem title="Node Js Developer" year="2021 - 2023" /> */}
          <SkillLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
