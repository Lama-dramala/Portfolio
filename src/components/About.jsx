import React, { useEffect, useState } from "react";

export default function About() {
  // Массив титулов, которые будут постепенно "печататься" и удаляться, а так же вспомагательные данные
  const dignityList = ["Front-end developer", "React developer", "Job seeker"];
  const [dignityIndex, setDignityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleText, setVisibleText] = useState("");
  const [changeSpeed, setChangeSpeed] = useState(250);

  // Функция, которая будет с определённой периодичностью менять текст
  function tick() {
    let fullText = dignityList[dignityIndex];
    let updatedText = isDeleting
      ? fullText.substring(0, visibleText.length - 1)
      : fullText.substring(0, visibleText.length + 1);
    setVisibleText(updatedText);

    if (!isDeleting && updatedText == fullText) {
      setChangeSpeed(1000);
      setIsDeleting(true);
    }
    if (isDeleting) {
      setChangeSpeed(100);
    }
    if (isDeleting && updatedText == "") {
      setIsDeleting(false);
      dignityIndex == 2 ? setDignityIndex(0) : setDignityIndex(dignityIndex + 1);
      setChangeSpeed(250);
    }
  }

  useEffect(() => {
    setTimeout(tick, changeSpeed);
  }, [visibleText]);

  return (
    <section id="aboutSection" className="about">
      <div className="about_text">
        <h2 className="about_title">
          Hi! I'm Oleg, <br /> a {visibleText}{" "}
        </h2>
        <p className="about_description">
          I have been engaged in commercial website design for over two years. All of my sites are responsive,
          so they will look good on any devices. In this portfolio you can check out my skills and projects or
          contact me in any convenient for you way
        </p>
        <a href="#" className="about_contact">
          Contact me
        </a>
      </div>
      <img src="img/Makima03.jpg" alt="My picture" className="about_picture" />
    </section>
  );
}
