import { MotionPortfolioItem } from "./PortfolioItem";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projectList = [
    {
      title: "Delicious Pizza",
      img: "Delicious-pizza.jpg",
      links: { site: "https://delicious-pizza-beta.vercel.app/", github: "https://github.com/Lama-dramala" },
      technology: ["React", "Redux", "SCSS"],
    },
    {
      title: "Aura Motors",
      img: "Aura-Motors_.jpg",
      links: {
        site: "https://lama-dramala.github.io/Aura-Motors/",
        github: "https://github.com/Lama-dramala/Aura-Motors",
      },
      technology: ["HTML/CSS", "JS"],
    },
    {
      title: "React-Sneakers",
      img: "react-sneakers.jpg",
      links: {
        site: "https://react-sneakers-weld.vercel.app/",
        github: "https://github.com/Lama-dramala/React-Sneakers",
      },
      technology: ["React", "SCSS"],
    },
    {
      title: "Estimatesguru",
      img: "Estimatesguru.jpg",
      links: {
        site: "https://lama-dramala.github.io/Estimatesguru/",
        github: "https://github.com/Lama-dramala/Estimatesguru",
      },
      technology: ["Bootstrap", "JS"],
    },
    {
      title: "Levi's Music Project",
      img: "Levi-s.jpg",
      links: {
        site: "https://lama-dramala.github.io/Levi-s/",
        github: "https://github.com/Lama-dramala/Levi-s",
      },
      technology: ["HTML/CSS", "Wordpress"],
    },
  ];

  const itemAnimation = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        // delay: 0.3,
        duration: 1,
      },
    },
  };

  return (
    <section id="projectsSection" className="projects">
      <h3 className="section-title">My Projets</h3>
      <div className="projects_description">
        {/* без {" "} не будет пробела */}
        Here are some of my projects. If you want to see more, you can visit my{" "}
        <a href="https://github.com/Lama-dramala" target="_blank" className="projects_description_link">
          GitHub
        </a>
      </div>
      <div className="projects_container">
        {projectList.map((item) => (
          <MotionPortfolioItem
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemAnimation}
            props={item}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
}
