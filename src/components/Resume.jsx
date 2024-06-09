import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Page1.css";

const Resume = ({ experience, education }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <div >
      <div className="div3">
        <h1 className="p4">My Resume</h1>
       
        <div className="div4">
          <div>
            <h1 className="p5">Education</h1>
            {education.map((data, index) => (
              <div key={index}  data-aos="flip-left" className="div5">
                {data.edu}
              </div>
            ))}
          </div>
          <div>
            <h1 className="p5">Experience</h1>
            {experience.map((data, index) => (
              <div key={index} data-aos="flip-right" className="div55">
                {data.exp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
