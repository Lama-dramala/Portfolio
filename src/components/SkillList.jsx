import React from "react";

import SkillItem from "./SkillItem";

export default function SkillList() {
  const skillList = [
    { title: "React", img: "react-logo.png" },
    { title: "Redux", img: "redux-logo.png" },
    { title: "TypeScript", img: "typescript-logo.svg" },
    { title: "Javascript", img: "js-logo.png" },
    { title: "HTML", img: "html-logo.png" },
    { title: "CSS", img: "css-logo.png" },
    { title: "SASS/SCSS", img: "sass-logo.png" },
    { title: "Bootstrap", img: "bootstrap-logo.png" },
    { title: "WordPress", img: "WordPress-logo.png" },
  ];

  return (
    <div className="skills">
      <ul className="skills_icon-list">
        {skillList.map((item) => (
          <SkillItem props={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
}
