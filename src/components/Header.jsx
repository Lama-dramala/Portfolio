import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <li className="navigation_item">
            <a href="#aboutSection">Hi</a>
          </li>
          <li className="navigation_item">
            <a href="#skillsSection">Skills</a>
          </li>
          <li className="navigation_item">
            <a href="#projectsSection">Projects</a>
          </li>
          <li className="navigation_item">
            <a href="#">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
