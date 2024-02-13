import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const projects = [
    {
      title: "Delicious Pizza",
      img: "Delicious-pizza.png",
      stackList: ["React", "Redux", "SCSS"],
      links: ["https://github.com/Lama-dramala/DeliciousPizza", "https://delicious-pizza-beta.vercel.app/"],
    },
    {
      title: "Estimatesguru",
      img: "Estimatesguru.png",
      stackList: ["Bootstrap"],
      links: [
        "https://github.com/Lama-dramala/Estimatesguru",
        "https://lama-dramala.github.io/Estimatesguru/",
      ],
    },
    {
      title: "Levi's Music Project",
      img: "Levi-s.png",
      stackList: ["Woordpress"],
      links: ["https://github.com/Lama-dramala/Levi-s", "https://lama-dramala.github.io/Levi-s/"],
    },
  ];

  return (
    <section id="projectsSection" className="projects">
      <h3 className="section-title">My Projets</h3>
      <div className="projects_container">
        {projects.map((project) => (
          <ProjectItem props={project} key={project.img} />
        ))}
      </div>
    </section>
  );
}
