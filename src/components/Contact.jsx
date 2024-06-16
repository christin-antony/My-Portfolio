import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Page1.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <div className="div8">
        <p className="p8">Get In Touch</p>
        <div className="div88">
          <div className="div9">
            <p className="p9">Get In Touch</p>
            <input type="text" placeholder="Your Name" className="in1" />
            <input type="text" placeholder="Your Email" className="in1" />
            <input type="text" placeholder="Your Phone" className="in1" />
            <textarea className="in2" placeholder="Write a Message"></textarea>
            <button className="btn1">Send</button>
          </div>
          <div className="div99">
            <p className="p99">My Contact Details</p>

            <div className="Co-div">
              <p className="p12"><IoMdMail /></p>

              {/* Replace <a> with <Link> */}
              <p className="p11">
                <Link to="mailto:christin10antony@gmail.com">
                  christin10antony@gmail.com
                </Link>
              </p>
            </div>
            <div className="Co-div">
              <p className="p12"><FaSquarePhone /></p>

              <p className="p11">8593899533</p>
            </div>
            <div className="Co-div">
              <p className="p12"> <FaLinkedin /> </p>

              {/* Replace <a> with <Link> */}
              <p className="p11">
                <Link to="https://linkedin.com/in/christin-antony">
                  www.linkedin.com/in/christin-antony
                </Link>
              </p>
            </div>
            <div className="Co-div">
              <p className="p12"><FaGithub /></p>

              {/* Replace <a> with <Link> */}
              <p className="p11">
                <Link to="https://github.com/christin-antony">
                www.github.com/christin-antony 
                
                </Link>
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div style={{height:"20px",backgroundColor:"black"}}>

        </div>
    </div>
  );
};

export default Contact;
