// first page

import React from "react";
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
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiRedux,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import { FaReact, FaNode, FaGitAlt, FaTruck, FaFileInvoiceDollar, FaPalette } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";
import Skills from "./Skills";

const Page1 = () => {
  const professionalProjects = [
    {
      title: "Manzil Transport ERP",
      company: "Reon Technologies · Transportation Client, UAE",
      text: "Complete ERP for a UAE transportation services company. Owned the project end-to-end — from planning to delivery — covering Sales, CRM, Accounts, User Management, and HRM modules.",
      placeholderIcon: <FaTruck size={60} />,
    },
    {
      title: "Decagon India ERP",
      company: "Reon Technologies · Accounting Client, India",
      text: "Client project focused on developing the complete Accounts module, tailored to Indian accounting standards and practices.",
      placeholderIcon: <FaFileInvoiceDollar size={60} />,
    },
    {
      title: "Al Rooj Tyres ERP",
      company: "Reon Technologies · Tyre Trading Client, UAE",
      text: "ERP for a second-hand tyre collection and sales company based in the UAE. Built Customer, Contract, and Supplier modules along with several Accounts screens.",
      placeholderIcon: <GiCarWheel size={60} />,
    },
  ];

  const personalProjects = [
    {
      image: ima5,
      title: "YouTube Clone",
      text: "A full-stack MERN application replicating YouTube's core features — video upload and playback, built with MongoDB, Express.js, React, and Node.js.",
      link: "https://christin-antony.github.io/YouTube-clone-web/",
    },
    {
      image: ima2,
      title: "KidKinder Web Application",
      text: "A full-stack MERN application giving parents a platform to book classes and educators a way to share educational resources.",
      link: "https://github.com/christin-antony/KidKinder-web-Application.git",
    },
    {
      image: ima1,
      title: "Netflix Clone",
      text: "A full-stack MERN application mimicking the essential functionalities of Netflix.",
      link: "https://github.com/christin-antony/NetFlix-Clone.git",
    },
    {
      image: ima3,
      title: "Blog Management Web Application",
      text: "A full-stack MERN application allowing an admin to create, edit, and delete blog posts.",
      link: "https://github.com/christin-antony/BLOG-MANAGEMENT-SYSTEM.git",
    },
    {
      image: ima4,
      title: "JWT Authentication App",
      text: "A full-stack MERN application using JSON Web Tokens (JWT) for secure user authentication and authorization.",
      link: "https://github.com/christin-antony/JWT-auth",
    },
    {
      title: "Personal Web Design Projects",
      text: "Independent web design work exploring layout, responsiveness, and UI polish outside of client engagements.",
      link: "https://web-christin-design.com",
      placeholderIcon: <FaPalette size={60} />,
    },
  ];

  const skills = [
    { skill: "HTML", icon: <IoLogoHtml5 />, color: "#E34F26" },
    { skill: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { skill: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { skill: "JavaScript", icon: <IoLogoJavascript />, color: "#D4AC0D" },
    { skill: "React JS", icon: <FaReact />, color: "#61DAFB" },
    { skill: "Media Query", icon: <MdDevices />, color: "#0EA5E9" },
    { skill: "Next JS", icon: <SiNextdotjs />, color: "#111111" },
    { skill: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { skill: "Node JS", icon: <FaNode />, color: "#339933" },
    { skill: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { skill: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
    { skill: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { skill: "Express JS", icon: <SiExpress />, color: "#111111" },
    { skill: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
    { skill: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institute:
        "Jai Bharath College of Management and Engineering Technology (APJ Abdul Kalam Technological University)",
      date: "Completed 2022",
    },
  ];

  const experience = [
    {
      role: "MERN Stack Developer",
      company: "Reon Technologies Pvt Ltd",
      date: "Jan 2025 – Present",
      points: [
        "Contributing mainly to ERP Accounts modules, with exposure to Purchase, Sales, and HRM.",
        "Delivered Manzil Transport ERP (UAE) end-to-end — Sales, CRM, Accounts, User Management, HRM.",
        "Built the complete Accounts module for Decagon India ERP, tailored to Indian accounting standards.",
        "Worked on Customer, Contract, Supplier, and Accounts screens for Al Rooj Tyres ERP (UAE).",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "GALTech Technologies Pvt Ltd",
      date: "Jan 2024 – Nov 2024",
      points: [
        "Built and shipped a full-stack YouTube Clone using the MERN stack.",
        "Gained hands-on experience across the frontend and backend of production-style applications.",
      ],
    },
  ];

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
        <Portfolio
          professionalProjects={professionalProjects}
          personalProjects={personalProjects}
        />
      </section>

      <section id="resume">
        <Resume education={education} experience={experience} />
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
