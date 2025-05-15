import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import midiaLinks from './midiaLinks.json';

const MidiaComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Força o refresh do AOS após renderização do DOM
  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard(); // força reprocessar todos os elementos com AOS
    }, 100); // pequeno delay para garantir que os elementos já foram renderizados
  }, [midiaLinks]);

  return (
    <section id="midia" className="services section light-background">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Na Mídia</h2>
          <p>
            Acompanhe reportagens, matérias e vídeos que destacam o impacto da ONG
            Anjos do Amanhã na comunidade.
          </p>
        </div>

        <div className="row gy-4 justify-content-center">
          {midiaLinks.map((item, index) => (
            <div
              className="col-xl-4 col-md-6 d-flex"
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="icon-box text-center p-4 bg-white rounded shadow position-relative w-100">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stretched-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="icon mb-3">
                    <i
                      className={`bi ${item.icone}`}
                      style={{ fontSize: '2rem', color: 'var(--accent-color)' }}
                    ></i>
                  </div>
                  <h4 className="title mb-2">{item.titulo}</h4>
                  <p className="description text-muted">{item.descricao}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MidiaComponent;
