// src/components/ContactComponent.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8scuu6o',
        'template_fdjbpuh',
        form.current,
        'jWEGQSJ3QOe7nJuUv'
      )
      .then(
        () => {
          alert('Mensagem enviada com sucesso!');
          form.current.reset();
        },
        (error) => {
          alert('Erro ao enviar: ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contato</h2>
        <p>Fale com a equipe da ONG Anjos do Amanhã!</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form ref={form} onSubmit={sendEmail} className="php-email-form">
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
              <button type="submit">Enviar Mensagem</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
