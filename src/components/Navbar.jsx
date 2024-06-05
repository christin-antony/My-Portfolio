// Navbar.js

import React, { useState, useEffect } from "react";
import "./Page2.css";
import { DiYeoman } from "react-icons/di";
import { FaArrowUpRightFromSquare, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          console.log(`Active section: ${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div >
      <div className={`navbar-container ${scroll ? "scroll-background" : ""}`}>
        <div className="log-container">
          <DiYeoman />
        </div>
        <div className="tab-group">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
          <a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>Portfolio</a>
         
          <a href="#resume" className={activeSection === "resume" ? "active" : ""}>Resume</a>
          {/* <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a> */}
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a> 
        </div>
        <div className="nav-buttons-group">
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
          <button className="btn btn__primary"> 
            <p>Hire me </p>
    
          </button>
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
