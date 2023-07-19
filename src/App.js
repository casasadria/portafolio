import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Portafolio en React<br/> by <br/>Adrià Casas Llorens</h1>
      </header>
      <main>
        <section className="about-me">
          <h2>Sobre mí</h2>
          <p onClick={toggleTextVisibility}>
            {showFullText ? (
              <>
                ¡Hola! Soy Adrià, un desarrollador de Aplicaciones apasionado con experiencia en tecnologías como React, JavaScript, CSS, Java, Android, Kotlin... . Me encanta crear aplicaciones y aprender día a día de ello.
              </>
            ) : (
              <>
                ¡Hola! Soy Adrià, un desarrollador de Aplicaciones apasionado con experiencia en tecnologías como React, JavaScript...
                <span className="read-more">Leer Más</span>
              </>
            )}
          </p>
        </section>
        
        <section className="projects">
          <h2>Proyectos</h2>
          <div className="project">
            <h3>Proyecto 1</h3>
            <p>
              Descripción del proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="project">
            <h3>Proyecto 2</h3>
            <p>
              Descripción del proyecto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </section>
        
        <section className="contact">
          <h2>Contacto</h2>
          <p>Puedes contactarme a través de:</p>
          <ul>
            <li>Email: adria@example.com</li>
            <li>Teléfono: 123-456-7890</li>
            <li>
              Enlaces a mis perfiles de redes sociales:
              <ul>
                <li><a href="https://www.linkedin.com/in/adriacasas">LinkedIn</a></li>
                <li><a href="https://github.com/adriacasas">GitHub</a></li>
                <li><a href="https://twitter.com/adriacasas">Twitter</a></li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2023 Adrià Casas Llorens. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
