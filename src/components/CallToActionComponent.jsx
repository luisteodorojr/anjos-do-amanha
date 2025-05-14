import React from "react";

const CallToActionComponent = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Quer saber mais?</h3>
            <p>
              Se você deseja obter mais informações, fazer uma doação ou se tornar um voluntário,
              entre em contato com a gente pelo WhatsApp. Sua ajuda pode transformar vidas!
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a
              className="cta-btn align-middle"
              href="https://wa.me/5534991426364"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionComponent;
