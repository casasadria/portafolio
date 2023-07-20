import React from "react";
import instagramLogo from "./images/instagram.jpg";
import linkedinLogo from "./images/linkedIn.jpg";
import githubLogo from "./images/github.jpg";
import "./css/MainComponent.css";

export default function MainComponent() {
  return (
    <div>
      <section className="projects">
        <h2>Proyectos</h2>
        <div className="project">
          <h3>Proyecto 1</h3>
          <p>
            Descripción del proyecto 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="project">
          <h3>Proyecto 2</h3>
          <p>
            Descripción del proyecto 2. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </section>

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
            Teléfono: <a href={`tel:${638278415}`}>{638278415}</a>
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
