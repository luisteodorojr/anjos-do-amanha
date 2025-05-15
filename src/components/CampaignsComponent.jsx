
import React from 'react';

const CampaignsComponent = () => {
  const campaigns = [
    {
      title: 'Campanha de Material Escolar',
      description: 'Distribuímos kits completos de material escolar para crianças em situação de vulnerabilidade antes do início do ano letivo.',
      icon: 'bi-pencil'
    },
    {
      title: 'Páscoa Solidária',
      description: 'Oferecemos ovos de Páscoa e atividades lúdicas que levam alegria para as crianças das comunidades atendidas.',
      icon: 'bi-egg-fill'
    },
    {
      title: 'Campanha do Agasalho',
      description: 'Coletamos e distribuímos roupas e cobertores para ajudar famílias a enfrentarem o inverno com mais dignidade.',
      icon: 'bi-cloud-drizzle-fill'
    },
    {
      title: 'Dia das Crianças',
      description: 'Realizamos festas com brincadeiras, presentes e alimentação para tornar o dia das crianças ainda mais especial.',
      icon: 'bi-emoji-smile-fill'
    },
    {
      title: 'Natal Solidário',
      description: 'Encerramos o ano com uma linda celebração de Natal, com distribuição de brinquedos, ceia e carinho.',
      icon: 'bi-gift-fill'
    }
  ];

  return (
    <section id="services" className="services section light-background">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Campanhas</h2>
          <p>Conheça as principais ações realizadas pela ONG ao longo do ano</p>
        </div>

        <div className="row gy-4 justify-content-center">
          {campaigns.map((camp, index) => (
            <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={index * 100} key={index}>
              <div className="icon-box text-center p-4 bg-white rounded shadow">
                <div className="icon mb-3">
                  <i className={`bi ${camp.icon}`} style={{ fontSize: '2rem', color: '#144d3c' }}></i>
                </div>
                <h4 className="title mb-2">{camp.title}</h4>
                <p className="description text-muted">{camp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsComponent;
