import React from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";

// Весь компонент обёрнут в forwardRef для коректной работы функции motion. Сам по себе он ничего не меняет,
// кроме того, что нам помимо стандартных для компонента пропсов нужно передать ref
export const SkillItem = forwardRef(({ props }, ref) => {
  return (
    // ref, который мы передаём в forwardRef мы просто навешиваем на родительский элемент,
    // больше мы его нигде не используем
    // Опять же, это нужно просто для корректной работы motion ниже
    <li ref={ref} className="skills_icon-list_item">
      <div className="skills_icon-list_item_img-wrap">
        <img src={"img/skill-logos/" + props.img} alt={props.title + "-logo"} />
      </div>
      {props.title}
    </li>
  );
});

// По сути мы создаём копию нашего компонента, но оборачиваем её в motion, чтобы потом как-тоа нимировать
// Можно было и не "копировать" компонент, а обернуть в motion основной, но так как-то логичней что ли:
// У нас есть просто рабочий компонент и есть компонент, который можно как-то анимировать,
// а разница - добавление одной строки
export const MotionSkillItem = motion(SkillItem);
