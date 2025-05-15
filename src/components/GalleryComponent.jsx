import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import galleryData from "./galleryData.json";

// Função para normalizar filtros (remove acentos e espaços)
const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const GalleryComponent = () => {
  const [images, setImages] = useState([]);
  const [filters, setFilters] = useState([]);
  const isotope = useRef(null);
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    setImages(galleryData);
    const uniqueFilters = [...new Set(galleryData.map((img) => img.filter))];
    setFilters(uniqueFilters);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const container = document.querySelector(".isotope-container");
    const allImages = container.querySelectorAll("img");
    let loadedCount = 0;

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === allImages.length) {
        isotope.current = new Isotope(container, {
          itemSelector: ".isotope-item",
          layoutMode: "masonry"
        });

        GLightbox({
          selector: ".glightbox"
        });

        isotope.current.arrange({
          filter: activeFilter === "*" ? "*" : `.filter-${activeFilter}`
        });

        isotope.current.layout();
      }
    };

    allImages.forEach((img) => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.onload = onImageLoad;
      }
    });

    return () => {
      if (isotope.current) isotope.current.destroy();
    };
  }, [images]);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({
        filter: activeFilter === "*" ? "*" : `.filter-${activeFilter}`
      });
      isotope.current.layout();
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Galeria</h2>
        <p>Veja alguns dos momentos especiais registrados pelo nosso projeto.</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-layout="masonry">
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li
              onClick={() => setActiveFilter("*")}
              className={activeFilter === "*" ? "filter-active" : ""}
              data-filter="*"
            >
              Todos
            </li>
            {filters.map((filter, idx) => {
              const slug = slugify(filter);
              return (
                <li
                  key={idx}
                  onClick={() => setActiveFilter(slug)}
                  className={activeFilter === slug ? "filter-active" : ""}
                  data-filter={`.filter-${slug}`}
                >
                  {filter}
                </li>
              );
            })}
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {images.map((img, index) => {
              const slug = slugify(img.filter);
              return (
                <div
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${slug}`}
                  key={index}
                >
                  <img src={img.src} className="img-fluid" alt={img.alt} />
                  <div className="portfolio-info">
                    <h4>{img.title || "Foto"}</h4>
                    <p>{img.alt}</p>
                    <a
                      href={img.src}
                      title={img.alt}
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent;
