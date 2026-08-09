import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Page1.css";

const ProjectCard = ({ data }) => (
  <div data-aos="flip-left" className="card-p">
    {data.image ? (
      <img className="logo-image-p" src={data.image} alt={data.title} />
    ) : (
      <div className="logo-image-p placeholder-image">{data.placeholderIcon}</div>
    )}
    <p className="card-text">{data.title}</p>
    {data.company && <p className="card-company">{data.company}</p>}
    <p>{data.text}</p>
    {data.link ? (
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn__primary"
        style={{ marginTop: "10px" }}
      >
        Open
      </a>
    ) : (
      <span className="confidential-badge">Confidential Client Project</span>
    )}
  </div>
);

const Portfolio = ({ professionalProjects, personalProjects }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <div className="divskill">
        <h1 className="t_h">Professional Projects</h1>
        <div className="T_P">
          {professionalProjects.map((data, index) => (
            <ProjectCard data={data} key={index} />
          ))}
        </div>

        <h1 className="t_h" style={{ marginTop: "60px" }}>
          Personal Projects
        </h1>
        <div className="T_P">
          {personalProjects.map((data, index) => (
            <ProjectCard data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
