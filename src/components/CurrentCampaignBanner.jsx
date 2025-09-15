// src/components/CurrentCampaignBanner.jsx
import React from "react";
import PropTypes from "prop-types";

const CurrentCampaignBanner = ({
    title,
    subtitle,
    description,   // pode ser string ou JSX (ex.: com <br/>)
    ctaText,
    ctaHref,
    whatsappHref,
    imageUrl,
    qrCodeUrl,
}) => {
    return (
        <section id="current-campaign" className="section dark-background current-campaign">
            <div
                className="current-campaign-bg"
                style={{ backgroundImage: `url(${imageUrl})` }}
                aria-hidden="true"
            />
            <div className="current-campaign-overlay" aria-hidden="true" />

            <div className="container current-campaign-content">
                <div className="row align-items-center gy-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h1 className="current-campaign-title">{title}</h1>
                        <br />
                        <h2 className="current-campaign-subtitle">{subtitle}</h2>
                        <div className="current-campaign-description">{description}</div>

                        <div className="d-flex flex-wrap current-campaign-actions call-to-action">
                            <a
                                href={ctaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn align-middle"
                            >
                                {ctaText}
                            </a>
                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn align-middle"
                            >
                                Falar no WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="current-campaign-card">
                            <h5 className="mb-2">Junte-se a nós</h5>
                            <p className="mb-3">
                                Doe pelo QR Code ou clique em <strong>{ctaText}</strong> e espalhe sorrisos.
                            </p>
                            <img
                                src={qrCodeUrl}
                                alt="QR Code de doação"
                                className="img-fluid rounded current-campaign-qrcode"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

CurrentCampaignBanner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired, // aceita string ou JSX
    ctaText: PropTypes.string.isRequired,
    ctaHref: PropTypes.string.isRequired,
    whatsappHref: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    qrCodeUrl: PropTypes.string.isRequired,
};

export default CurrentCampaignBanner;
