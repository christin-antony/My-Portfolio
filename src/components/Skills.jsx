import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Page1.css";

const Skills = ({ skills }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <div >
      <div className="divskill">
        <h1 className="t_h">Technical Skill</h1>
        <div className="T_C" >
          {skills.map((data, index) => (
            <div data-aos="zoom-in-up" className="card-s" key={index}><img className="logo-image" src={data.imageskill} alt="logo" />
              <p> {data.skill}</p>

            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Skills