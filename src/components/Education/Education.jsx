import React from "react";
import "./Education.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/NITM.png";
import profilePic2 from "../../img/profilePic2.jpg";
// import profilePic3 from "../../img/profile3.jpg";
// import profilePic4 from "../../img/profile4.jpg";

const Education = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "NIT Meghalaya ECE'24",
      score:"CGPA : 9.45 / 10"
    },
    {
      img: profilePic2,
      review:
        "Modern Academy Senior Secondary School",
        score:"Class 12th Percentage : 81.6%"
    },
    {
      img: profilePic2,
      review:
      "Modern Academy Senior Secondary School",
        score:"Class 10th CGPA : 10 /10"
    }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Education </span>
        <span>Details</span>
        {/* <span>from me...</span> */}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <span>{client.score}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    </div>
  );
};

export default Education;
