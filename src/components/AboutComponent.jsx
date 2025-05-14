import React from 'react';
import aboutImg from '../components/assets/img/about.jpeg';

const AboutComponent = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Sobre a ONG</h2>
        <p>Conheça mais sobre a missão e a atuação da Anjos do Amanhã</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <img src={aboutImg} className="img-fluid" alt="Sobre a ONG" />
          </div>

          <div className="col-lg-6 content">
            <h3>Transformando vidas com amor e solidariedade</h3>
            <p className="fst-italic">
              A Anjos do Amanhã é uma instituição filantrópica dedicada a apoiar crianças e adolescentes em situação de vulnerabilidade social.
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>Atuação direta em comunidades como Fidel Castro, Maná e Renovação.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Campanhas anuais de apoio: Campanha de Material Escolar, Páscoa, Campanha do Agasalho, Dia das Crianças e Natal.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Mais de 2.000 crianças beneficiadas todos os anos com carinho, esperança e oportunidades.</span></li>
            </ul>
            <p>
              Fundada em 2021 por Vinícius e Cristianne, a ONG nasceu com o propósito de fazer a diferença na vida de quem mais precisa. A cada ação, buscamos proporcionar dignidade, alegria e novas perspectivas para centenas de famílias.
            </p>

            <p>
              Nossa missão: Promover o bem-estar de crianças e adolescentes por meio de ações educativas, culturais e sociais, criando oportunidades e fortalecendo vínculos comunitários.
            </p>

              <p>
                Nossos valores: Amor, empatia, comprometimento com a comunidade, esperança, transformação, transparência e responsabilidade
            </p>

            <h3>Parcerias que fortalecem</h3>
            <p>
              Contamos com o apoio de voluntários, empresas e instituições que acreditam no nosso trabalho e caminham conosco nessa jornada de transformação social.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
