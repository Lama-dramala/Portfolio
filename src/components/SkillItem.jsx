import React from "react";

export default function SkillItem({ props }) {
  return (
    <li className="skills_icon-list_item">
      <div className="skills_icon-list_item_img-wrap">
        <img src={"img/skill-logos/" + props.img} alt={props.title + "-logo"} />
      </div>
      {props.title}
    </li>
  );
}
