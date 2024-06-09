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
              Highly skilled MERN stack developer with a strong background in
              building robust and scalable web applications. Proficient in
              JavaScript, React.js, Node.js, and MongoDB. Experienced in
              developing intuitive user interfaces, integrating APIs. A problem
              solver with a strong commitment to delivering high-quality
              software solutions. Committed to staying up-to-date with the
              latest technologies and trends in web development. Seeking a
              challenging role to contribute my expertise in frontend and
              backend development to create innovative and impactful web
              applications. Highly skilled MERN stack developer with a strong
              background in building robust and scalable web applications.
              Committed to staying up-to-date with the latest technologies and
              trends in web development. Seeking a challenging role to
              contribute my expertise in frontend and backend development to
              create innovative and impactful web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
