import React from 'react';

const ContactComponent = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contato</h2>
        <p>Fale com a equipe da ONG Anjos do Amanhã! Estamos à disposição para tirar dúvidas, receber doações, parcerias e muito mais.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Endereço</h3>
                <p>Uberlândia - MG, Brasil</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Telefone</h3>
                <p>(34) 99999-9999</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email</h3>
                <p>contato@anjosdoamanha.org.br</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form action="#" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Seu nome" required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Seu email" required />
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control" placeholder="Assunto" required />
                </div>
                <div className="col-md-12">
                  <textarea name="message" rows="6" className="form-control" placeholder="Mensagem" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Carregando...</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Sua mensagem foi enviada. Obrigado!</div>
                  <button type="submit">Enviar mensagem</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
