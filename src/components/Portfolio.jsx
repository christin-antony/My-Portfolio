// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "./Page1.css"; // Assuming this is the correct CSS file path
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// import Card from "react-bootstrap/Card";

// const Portfolio = ({ portfolio }) => {
//   const divportRef = useRef(null);

//   useEffect(() => {
//     const divport = divportRef.current;

//     // Intersection Observer callback
//     const onIntersection = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           observer.disconnect();
//         }
//       });
//     };

//     // Create Intersection Observer
//     const observer = new IntersectionObserver(onIntersection, {
//       threshold: 0.1, // Trigger when 10% of the element is visible
//     });

//     // Observe the divport element
//     if (divport) {
//       observer.observe(divport);
//     }

//     return () => {
//       // Cleanup observer on component unmount
//       if (observer && divport) {
//         observer.unobserve(divport);
//       }
//     };
//   }, []);

//   return (
//     <div className="portfolio1">
//       <h1 className="ph">my portfolio</h1>
//       <div className="divport" ref={divportRef}>
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView="auto"
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000 }} // Adjust delay according to your preference
//           modules={[EffectCoverflow, Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           {portfolio.map((data, index) => (
//             <SwiperSlide key={index}>
//               <Card className="divswip">
//                 <Card.Img variant="top" src={data.image} className="img-card" />
//                 <Card.Body className="card-body">
//                   <Card.Title className="card-text">{data.title}</Card.Title>
//                   <Card.Text className="card-p">{data.text}</Card.Text>
//                   <button className="btn btn__primary" style={{ marginTop: "70px" }}> <Link to={data.link}>
//                  Open
//                 </Link></button>
//                 </Card.Body>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Page1.css";
import { Link } from "react-router-dom";

const Portfolio = ({ portfolio }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <div className="divskill">
    <h1 className="t_h">My portfolio</h1>
    <div className="T_P" >
      {portfolio.map((data, index) => (
        <div data-aos="flip-left" className="card-p" key={index}><img className="logo-image-p" src={data.image} alt="logo" />
        <p className="card-text">{data.title}</p>
          <p> {data.text}</p>
          <button className="btn btn__primary" style={{ marginTop: "10px" }}> <Link to={data.link}>              Open
     </Link></button>
          
         
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default Portfolio
