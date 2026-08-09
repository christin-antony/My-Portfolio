import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Page1.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <div className="div6">
        <p className="p6">About Me</p>
        <div className="div66">
          <div data-aos="zoom-out-up" className="div7">
            <p className="p7">
              Full-stack Software Developer specializing in ERP and accounting
              systems, with a track record of building scalable, real-world
              business solutions using the MERN stack and NestJS/PostgreSQL.
              Currently at Reon Technologies, building Accounts, Sales, CRM,
              HRM and User Management modules for ERP platforms serving
              clients in the UAE and India, with end-to-end ownership from
              planning to delivery. Proficient in JavaScript, React.js,
              Node.js, MongoDB, NestJS and PostgreSQL, with hands-on
              experience integrating APIs and building intuitive, reliable
              user interfaces. Committed to writing clean, maintainable code
              and staying current with modern web development practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
