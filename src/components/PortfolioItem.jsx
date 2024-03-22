export default function PortfolioItem({ props }) {
  return (
    <div className="projects_item">
      <div className="projects_item_preview">
        <img src={"img/projects-preview/" + props.img} alt="Site Preview" />
        <div className="projects_item_preview_text">
          <h6 className="projects_item_preview_title">
            <a href={props.links.site} target="_blank">
              {props.title}
            </a>
          </h6>
        </div>
      </div>
      <ul className="projects_item_stack-list">
        {props.technology.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={props.links.github} target="_blank" className="projects_item_links">
        Visit GitHub
      </a>
    </div>
  );
}
