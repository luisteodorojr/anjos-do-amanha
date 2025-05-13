import React from 'react';

const FooterComponent = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">

          <div className="col-lg-4 col-md-6 footer-about">
            <a href="#hero" className="d-flex align-items-center">
              <span className="sitename">Anjos do Amanhã</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Uberlândia - MG</p>
              <p>Brasil</p>
              <p className="mt-3"><strong>Telefone:</strong> <span>(34) 99999-9999</span></p>
              <p><strong>Email:</strong> <span>contato@anjosdoamanha.org.br</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Links úteis</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#hero">Início</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#about">Sobre</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Campanhas</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>Siga-nos</h4>
            <p>Acompanhe nossas redes sociais e fique por dentro das ações que realizamos por um futuro melhor para nossas crianças.</p>
            <div className="social-links d-flex">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© {new Date().getFullYear()} <strong className="px-1 sitename">Anjos do Amanhã</strong> Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
