import React from "react";
import CurrentCampaignBanner from "./CurrentCampaignBanner";
import qrcode from "../components/assets/img/qrcode.png";
import campanha from "../components/assets/img/campanha.png";

const CurrentCampaignContainer = () => {
  return (
    <CurrentCampaignBanner
      title="Campanha do Dia das Crianças"
      subtitle="Doe brinquedos, espalhe sorrisos!"
      description={
        <>
          Missão Anjos do Amanhã: Espalhando sorrisos, transformando vidas.
          <br />
          Com apenas R$ 40, você faz uma infância mais feliz — é carinho que vira
          brincadeira, esperança e brilho no olhar.
          <br />
          Um pequeno gesto, um enorme sorriso: o seu apoio chega onde importa.
          <br />
          Juntos, podemos alcançar 1000 brinquedos e 1000 sorrisos!
          <br />
          <br />
          <strong>Entregue seu brinquedo em um dos pontos de coleta:</strong>
          <ul>
            <li>Livraria Leitura — Center Shopping</li>
            <li>Livraria Leitura — Uberlândia Shopping</li>
            <li>Praia Store — Praia Clube</li>
            <li>Livraria Plural — Centro</li>
            <li>Colégio Batista Mineiro — Martins e Granja Marileusa</li>
            <li>MG World Suplementos — Tabajaras e Granada</li>
          </ul>
        </>
      }
      ctaText="Doar agora"
      ctaHref="https://www.vakinha.com.br/5706257"
      whatsappHref="https://wa.me/5534999912580"
      imageUrl={campanha}
      qrCodeUrl={qrcode}
    />
  );
};

export default CurrentCampaignContainer;
