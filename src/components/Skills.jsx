import React, { useEffect, useRef } from "react";
import "./Page1.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const Skills = ({ skills }) => {
  const divskillRef = useRef(null);

  useEffect(() => {
    const divskill = divskillRef.current;

    // Intersection Observer callback
    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // GSAP Animations
         
          gsap.fromTo(
            ".card-s",
            { opacity: 0, x: 50, rotationX: 90 },
            {
              opacity: 1,
              x: 0,
              rotationX: 0,
              duration: 5,
              ease: "power4.out",
              stagger: 0.1,

              yoyo: true,
            }
          );

          // Stop observing after animation starts
          observer.disconnect();
        }
      });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    // Observe the div3 element
    if (divskill) {
      observer.observe(divskill);
    }

    return () => {
      // Cleanup observer on component unmount
      if (observer && divskill) {
        observer.unobserve(divskill);
      }
    };
  }, []);


  return (
    <div ref={divskillRef}>
      <div className="divskill">
        <h1 className="t_h">Technical Skill</h1>
        <div className="T_C" >
          {skills.map((data, index) => (
            <div className="card-s" key={index}> <p className="logo">{data.logo}</p>
              <p> {data.skill}</p>

            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Skills