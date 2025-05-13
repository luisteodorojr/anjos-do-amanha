// src/components/HeroComponent.jsx
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../components/assets/img/logo_anjos_amanha.png';

const HeroComponent = () => {
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container text-center">
        <div className="row justify-content-center" data-aos="zoom-out">
          <div className="col-lg-8">
            <img src={logo} alt="Logo Anjos do Amanhã" className="img-fluid mb-3" />
            <a href="#about" className="btn-get-started">Saiba Mais</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
