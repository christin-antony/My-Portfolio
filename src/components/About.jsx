import React, { useEffect, useRef } from "react";
import "./Page1.css";
import { gsap } from "gsap";

const About = () => {
  const div7Ref = useRef(null);

  useEffect(() => {
    const div7 = div7Ref.current;

    // Intersection Observer callback
    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Initial state
          gsap.set(div7, { opacity: 0, y: 20 });

          // Animation
          gsap.to(div7, {
            duration: 5,
            delay: 0.5, // Initial delay before animation starts
            // repeat: -1, // Infinite repeat
            repeatDelay: 10, // Delay between repeats
            opacity: 1,
            rotationY: 360,
            y: 0,
            stagger: 0.1,
            ease: "power3.out",
          });

          // Stop observing after animation starts
          observer.disconnect();
        }
      });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    // Observe the div7 element
    if (div7) {
      observer.observe(div7);
    }

    return () => {
      // Cleanup observer on component unmount
      if (observer && div7) {
        observer.unobserve(div7);
      }
    };
  }, []);

  return (
    <div>
      <div className="div6">
        <p className="p6">About Me</p>
        <div className="div66">
          <div ref={div7Ref} className="div7">
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
              applications.Highly skilled MERN stack developer with a strong
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
