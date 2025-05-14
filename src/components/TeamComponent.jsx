import React, { useEffect, useState } from "react";
import teamData from "./teamData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamComponent = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    setVolunteers(teamData);
  }, []);

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Voluntários</h2>
        <p>Conheça quem faz tudo acontecer com amor e dedicação.</p>
      </div>

      <div className="site-section slider-team-wrap">
        <div className="container">
          <div className="slider-nav d-flex justify-content-end mb-3">
            <a href="#!" className="js-prev js-custom-prev">
              <i className="bi bi-arrow-left-short"></i>
            </a>
            <a href="#!" className="js-next js-custom-next">
              <i className="bi bi-arrow-right-short"></i>
            </a>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".js-custom-next",
              prevEl: ".js-custom-prev"
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 30 }
            }}
            className="init-swiper"
          >
            {volunteers.map((person, index) => (
              <SwiperSlide key={index}>
                <div className="team">
                  <div className="pic">
                    <img src={person.photo} alt={person.name} className="img-fluid" />
                  </div>
                  <h3>
                    <a href="#"><span className="">{person.name}</span></a>
                  </h3>
                  <span className="d-block position">{person.role}</span>
                  <p>{person.bio}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
