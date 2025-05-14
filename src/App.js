import React, { useEffect } from 'react';
import Home from "./pages/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/assets/css/style.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();

    const scrollTop = document.querySelector("#scroll-top");

    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTop.classList.add("active");
      } else {
        scrollTop.classList.remove("active");
      }
    };

    window.addEventListener("scroll", toggleScrollTop);
    return () => window.removeEventListener("scroll", toggleScrollTop);
  }, []);

  return (
    <div>
      <Home />

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default App;
