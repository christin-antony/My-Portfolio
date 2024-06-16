import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Page1.css';

const Header = () => {
  const p2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const letters = p2Ref.current.querySelectorAll('span');
          gsap.fromTo(letters, 
            { opacity: 0, y: -100 }, 
            { opacity: 1, y: -10, duration: 1, ease: 'back.out(1.7)', stagger: 0.1 }
          );
          observer.disconnect(); // Stop observing once animation is triggered
        }
      });
    }, { threshold: 0.5 }); // Trigger when at least 50% of the element is visible

    observer.observe(p2Ref.current);

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div>
      <div className="div2">
        <p className="p1">Hello, I'm</p>
        <p className="p2" ref={p2Ref}>
          {Array.from("CHRISTIN").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
          <span className="space">&nbsp;</span>
          {Array.from("ANTONY").map((letter, index) => (
            <span key={index + 8}>{letter}</span> // Key offset to avoid duplicate keys
          ))}
        </p>
        <div className="marquee">
          <p className="p3">MERN Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
