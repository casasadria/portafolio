import React, { useRef } from "react";
import instagramLogo from "../images/instagram.jpg";
import linkedinLogo from "../images/linkedIn.jpg";
import githubLogo from "../images/github.jpg";
import "../css/MainComponent.css";

export default function MainComponent() {
  const projectContainerRef = useRef(null);

  const scrollToNextProject = () => {
    const container = projectContainerRef.current;
    if (container) {
      container.scrollLeft += container.offsetWidth;
    }
  };

  const scrollToPreviousProject = () => {
    const container = projectContainerRef.current;
    if (container) {
      container.scrollLeft -= container.offsetWidth;
    }
  };
  return (
    <div>
       <div>
      <section className="projects">
        <h2>Proyectos</h2>
        <div className="projects-container" ref={projectContainerRef}>
          <div className="project">
            <h3>LearnTrack</h3>
            <p>
              LearnTrack es una emocionante aplicación de quizz que he desarrollado, diseñada para brindar una
              <br /> experiencia educativa interactiva y divertida tanto para profesores como para alumnos. La aplicación <br />
              ofrece roles distintos para "profesor" y "alumno", asegurando un acceso seguro y controlado.
            </p>
          </div>
          {/* Agrega más proyectos aquí */}
          <div className="project">
            <h3>Proyecto 2</h3>
            <p>
              Descripción del proyecto 2. Aquí puedes agregar la descripción y detalles del nuevo proyecto.
            </p>
          </div>
        </div>
        <div className="arrow-container">
          <span className="arrow left" onClick={scrollToPreviousProject}>&#8249;</span>
          <span className="arrow right" onClick={scrollToNextProject}>&#8250;</span>
        </div>
      </section>
    </div>
      <section className="contact">
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de:</p>
        <ul>
          <li>
            Email:{" "}
            <a href={`mailto:${"adriacasas48@gmail.com"}`}>
              {"adriacasas48@gmail.com"}
            </a>
          </li>
          <li>
            Teléfono: <a href={`tel:${"+34 638278415"}`}>{638278415}</a>
          </li>
        </ul>
        <div className="logos_social">
          <a
            className="rotateOnHover"
            href="https://instagram.com/casas_adria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram" />
            Instagram
          </a>
          <a
            className="rotateOnHover"
            href="https://www.linkedin.com/in/adri%C3%A0casasllorens"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
            LinkedIn
          </a>
          <a
            className="rotateOnHover"
            href="https://www.github.com/casasadria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" />
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
