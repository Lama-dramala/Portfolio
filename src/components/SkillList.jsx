import React from "react";
import { motion } from "framer-motion";

import { MotionSkillItem } from "./SkillItem";

export default function SkillList() {
  const skillList = [
    { title: "React", id: 0, img: "react-logo.png" },
    { title: "Redux", id: 1, img: "redux-logo.png" },
    { title: "TypeScript", id: 2, img: "typescript-logo.svg" },
    { title: "Javascript", id: 3, img: "js-logo.png" },
    { title: "HTML", id: 4, img: "html-logo.png" },
    { title: "CSS", id: 5, img: "css-logo.png" },
    { title: "SASS/SCSS", id: 6, img: "sass-logo.png" },
    { title: "Bootstrap", id: 7, img: "bootstrap-logo.png" },
    { title: "WordPress", id: 8, img: "WordPress-logo.png" },
  ];

  // Логика анимации
  const skillsAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      // Суть в том, что у каждого элемента custom будет равен его id + 1
      // и таким образом каждый элемент анимируется через 0.2 секунды после предыдущего
      transition: { delay: 0.5 + custom * 0.2 },
    }),
  };

  return (
    <div className="skills">
      {/* motion. это что-то вроде обёртки, для СТАНДАРТНЫХ html элементов. 
      Тут мы навешиваем условия срабатывания (попадание в поле зрения) на весь список, 
      а анимацию на элемент списка, чтобы можно было анимировать каждый элемент по очереди */}
      <motion.ul
        // в initial передаём то, как мы хотим чтобы элемент выглядел до анимации
        initial="hidden"
        // в whileInView то, что должно происходить при попадании элемента в поле видимости
        whileInView="visible"
        // once: true - отвечает за то, чтобы анимация проигрывалась лишь единожды, а не каждый раз,
        // как эоемент будет покидать и снова попадать в "поле зрения"
        viewport={{ once: true }}
        className="skills_icon-list"
      >
        {skillList.map((item) => (
          // custom это просто параметр, который я использую для анимации каждого элемента с определённой задержкой,
          // чтобы они как бы по очереди выплывали один за другим
          // variants - это в общем-то сама анимация: из какого состояния в какое перейти ик ак это сделать
          <MotionSkillItem custom={item.id + 1} variants={skillsAnimation} props={item} key={item.id} />
        ))}
      </motion.ul>
    </div>
  );
}
