

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Page1.css";
import { Link } from "react-router-dom";

const Portfolio = ({ portfolio }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <div className="divskill">
    <h1 className="t_h">My portfolio</h1>
    <div className="T_P" >
      {portfolio.map((data, index) => (
        <div data-aos="flip-left" className="card-p" key={index}><img className="logo-image-p" src={data.image} alt="logo" />
        <p className="card-text">{data.title}</p>
          <p> {data.text}</p>
          <button className="btn btn__primary" style={{ marginTop: "10px" }}> <Link to={data.link}>              Open
     </Link></button>
          
         
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default Portfolio
