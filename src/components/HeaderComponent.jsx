import React, { useEffect, useState } from "react";
import logo from "../components/assets/img/logo.png";

const HeaderComponent = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "Sobre" },
    { id: "services", label: "Campanhas" },
    { id: "portfolio", label: "Galeria" },
    { id: "team", label: "Voluntários" },
    { id: "contact", label: "Contato" },
  ];

  const handleNavClick = () => {
    if (window.innerWidth < 1200) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src={logo} alt="Logo ONG" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={handleNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <i
            className={`mobile-nav-toggle bi ${isMobileMenuOpen ? "bi-x" : "bi-list"} d-xl-none`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          ></i>
        </nav>

        <div className="header-social-links">
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/missao.anjosdoamanha/" className="instagram"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
