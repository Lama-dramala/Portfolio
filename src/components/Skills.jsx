import React from "react";

export default function Skills() {
  const skills = [
    { title: "React", img: "react-logo.png" },
    { title: "Redux", img: "redux-logo.png" },
    { title: "Javascript", img: "js-logo.png" },
    { title: "HTML", img: "html-logo.png" },
    { title: "CSS", img: "css-logo.png" },
    { title: "SASS/SCSS", img: "sass-logo.png" },
    { title: "Bootstrap", img: "bootstrap-logo.png" },
    { title: "Figma", img: "figma-logo.png" },
    { title: "WordPress", img: "WordPress-logo.png" },
  ];

  return (
    <section id="skillsSection" className="skills">
      <h3 className="skills_title section-title">My Skills</h3>
      <ul className="skills_icon-list">
        {skills.map((skill) => (
          <div className="skills_icon-list_item" key={skill.title}>
            <div className="skills_icon-list_item_img-wrap">
              <img src={"img/skill-logos/" + skill.img} alt="" />
            </div>
            {skill.title}
          </div>
        ))}
        {/* <div className="skills_icon-list_items">
          <img src="img/skill-logos/react-logo.png" alt="" />
          React
        </div> */}
      </ul>
    </section>
  );
}
