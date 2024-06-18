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

import logo11 from './image/api.png'
import logo2 from './image/backens.png'
import logo3 from './image/bootstrap.jpeg'
import logo4 from './image/crud.webp'
import logo5 from './image/css.png'
import logo6 from './image/ejs.png'
import logo7 from './image/expreess.png'
import logo8 from './image/front.png'
import logo9 from './image/git.png'
import logo10 from './image/gsap.jpg'
import logo1 from './image/html.png'
import logo12 from './image/hub.png'
import logo13 from './image/jsx.png'
import logo14 from './image/jwt.webp'
import logo15 from './image/monogodb.png'
import logo16 from './image/node.js.png'
import logo17 from './image/react.js.png'
import logo18 from './image/web.jpg'
import logo19 from './image/vcs.png'
import logo20 from './image/java.png'


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

  const portfolio =[{image:ima2,title:" KidKinder web Application",text:"My KidKinder app is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js).It provides a platform for parents to book classes and educators to access educational resources.",link:"https://github.com/christin-antony/KidKinder-web-Application.git"},{image:ima1,title:"Netflix clone",text:"  My MERN stack Netflix clone is a full-stack web application developed with MongoDB, Express.js, React, and Node.js. It mimicking the essential functionalities of Netflix.",link:"https://github.com/christin-antony/NetFlix-Clone.git"},{image:ima3,title:" Blog Management web Application",text:"  My blog management system is a full-stack web application created using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows admin to create, edit, and delete blog posts.",link:"https://github.com/christin-antony/BLOG-MANAGEMENT-SYSTEM.git"},{image:ima4,title:"JWT Application",text:"This application is a full-featured web app built using the MERN stack (MongoDB, Express.js, React, and Node.js). It employs JSON Web Tokens (JWT) for secure user authentication and authorization.",link:"https://github.com/christin-antony/JWT-auth"},{image:ima5,title:"YouTube clone",text:" My MERN stack YouTube clone is a full-stack web application built using MongoDB, Express.js, React, and Node.js. It allows users to upload and view on videos, replicating core features of YouTube",link:"https://christin-antony.github.io/YouTube-clone-web/"}]
  const skills = [{skill:"HTML",logo:<IoLogoHtml5 />,imageskill:logo1},{skill:"CSS",logo:<FaCss3Alt />,imageskill:logo5},{skill:"Bootstrap",logo:<FaBootstrap />,imageskill:logo3},{skill:"JavaScript",logo:<IoLogoJavascript />,imageskill:logo20},{skill:"MongoDB",logo:<SiMongodb />,imageskill:logo15},{skill:"ExpressJs",logo:<SiExpress />,imageskill:logo7},{skill:"ReactJs",logo:<FaReact />,imageskill:logo17},{skill:"NodeJs",logo:<FaNode />,imageskill:logo16},{skill:"Gsap",logo:"Gsap",imageskill:logo10},{skill:"JWT",logo:"JWT",imageskill:logo14},{skill:"JSX",logo:"JSX",imageskill:logo13},{skill:"EJS",logo:"EJX",imageskill:logo6},{skill:"Git and GitHub",logo:<FaGithubSquare />,imageskill:logo9},{skill:"Web design",logo:<FaSquareWebAwesome />,imageskill:logo18},{skill:"VCS",logo:"VCS",imageskill:logo19},{skill:"API Integration",logo:"API",imageskill:logo11},{skill:"Frontend development",logo:"</>",imageskill:logo8},{skill:" Backend development",logo:"</>",imageskill:logo2},{skill:"  Deployment and Hosting",logo:<FaGithubSquare />,imageskill:logo12},{skill:"CRUD",logo:"CRUD",imageskill:logo4}]
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
      <div style={{height:".1px"}}></div>
      </section>


      <section >
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
