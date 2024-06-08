// first page

import React, { useState, useEffect } from "react";
import "./Page1.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Header from "./Header";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import About from "./About";
import ima1 from "./image/a.png";
import ima2 from "./image/b.png";
import ima3 from "./image/c.png";
import ima4 from "./image/d.png";
import ima5 from "./image/e.png";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWebAwesome } from "react-icons/fa6";
import Skills from "./Skills";

const Page1 = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const portfolio =[{image:ima2,title:" KidKinder web Application",text:"My KidKinder app is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js).It provides a platform for parents to book classes and educators to access educational resources."},{image:ima1,title:"Netflix clone",text:"  My MERN stack Netflix clone is a full-stack web application developed with MongoDB, Express.js, React, and Node.js. It mimicking the essential functionalities of Netflix."},{image:ima3,title:" Blog Management web Application",text:"  My blog management system is a full-stack web application created using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows admin to create, edit, and delete blog posts."},{image:ima4,title:"JWT",text:"x"},{image:ima5,title:"YouTube clone",text:" My MERN stack YouTube clone is a full-stack web application built using MongoDB, Express.js, React, and Node.js. It allows users to upload and view on videos, replicating core features of YouTube"}]
  const skills = [{skill:"HTML",logo:<IoLogoHtml5 />},{skill:"CSS",logo:<FaCss3Alt />},{skill:"Bootstrap",logo:<FaBootstrap />},{skill:"JavaScript",logo:<IoLogoJavascript />},{skill:"MongoDB",logo:<SiMongodb />},{skill:"ExpressJs",logo:<SiExpress />},{skill:"ReactJs",logo:<FaReact />},{skill:"NodeJs",logo:<FaNode />},{skill:"Gsap",logo:"Gsap"},{skill:"JWT",logo:"JWT"},{skill:"JSX",logo:"JSX"},{skill:"EJS",logo:"EJX"},{skill:"Git and GitHub",logo:<FaGithubSquare />},{skill:"Web design",logo:<FaSquareWebAwesome />},{skill:"VCS",logo:"VCS"},{skill:"API Integration",logo:"API"},{skill:"Frontend development",logo:"</>"},{skill:" Backend development",logo:"</>"},{skill:"  Deployment and Hosting",logo:<FaGithubSquare />},{skill:"CRUD",logo:"CRUD"}]
  const education=[{edu:" Jai Bharath College of Management and Engineering Technology (affiliated to ktu University) B. TECH COMPUTER SCIENCE ENGINEERING,  Completed in 2022."},{edu:"L. B. S. M. H. S. S AVITTATHUR, 12th, Completed in 2017"},{edu:" ST MARY'S H. S. S, IRINJALAKUDA, 10th, Completed in 2015"}]
  const experience=[{exp:"MERN stack developer internship trainee GALTech Technologies Pvt. Ltd. 2024 – Present"},{exp:" Through this intensive program, I have gained indepth knowledge and hands-on experience with MongoDB, Express.js, React, and Node.js."},{exp:"The training has also enhanced my problemsolving skills and my ability to work effectively in a team."}]
  
  return (
    <div>
      <div className="div0">
        <Navbar />
        <section id="home">
          <Header />
        </section>
      </div>

      <section id="about">
        <About />
      </section>


      <section id="portfolio">
        <Portfolio portfolio={portfolio} />
      </section>
     


      <section id="resume">
        <Resume  education={education} experience={experience} skills={skills} />
      </section>
      
      <section id="skills">
        <Skills skills={skills} />
      </section>

      
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default Page1;
