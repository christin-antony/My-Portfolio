import React, { useEffect, useRef } from "react";
import "./Page1.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Resume = ({ experience, education }) => {
  const div3Ref = useRef(null);

  useEffect(() => {
    const div3 = div3Ref.current;

    // Intersection Observer callback
    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // GSAP Animations
          gsap.fromTo(
            ".div5",
            { opacity: 0, y: 50, rotationY: 90 },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.2,
              // repeat: -1,
              yoyo: true,
            }
          );
          gsap.fromTo(
            ".div55",
            { opacity: 0, y: 50, rotationY: 90 },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.2,
              // repeat: -1,
              yoyo: true,
            }
          );
          gsap.fromTo(
            ".card-s",
            { opacity: 0, x: 50, rotationX: 90 },
            {
              opacity: 1,
              x: 0,
              rotationX: 0,
              duration: 10,
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
    if (div3) {
      observer.observe(div3);
    }

    return () => {
      // Cleanup observer on component unmount
      if (observer && div3) {
        observer.unobserve(div3);
      }
    };
  }, []);

  return (
    <div ref={div3Ref}>
      <div className="div3">
        <h1 className="p4">My Resume</h1>
       
        <div className="div4">
          <div>
            <h1 className="p5">Education</h1>
            {education.map((data, index) => (
              <div key={index} className="div5">
                {data.edu}
              </div>
            ))}
          </div>
          <div>
            <h1 className="p5">Experience</h1>
            {experience.map((data, index) => (
              <div key={index} className="div55">
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
