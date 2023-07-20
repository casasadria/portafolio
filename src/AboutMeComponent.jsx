import React, { useState } from "react";
import "./css/AboutMeComponent.css"; // Importamos el archivo CSS para el componente

export function AboutMeComponent() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <section className="about-me">
        <h2>Sobre mí</h2>
        <p className={`about-text ${showFullText ? "expanded" : ""}`} onClick={toggleTextVisibility}>
          {showFullText ? (
            <>
              <>
              ¡Hola! Soy Adrià, un desarrollador de Aplicaciones apasionado con experiencia en tecnologías como React,
          JavaScript, CSS, Java, Android, Kotlin... . Me encanta crear aplicaciones y aprender día a día de ello.
          <br />
          <br />
          Además de mi formación académica, siempre he disfrutado dedicar tiempo en casa a la realización de proyectos
          personales. He desarrollado aplicaciones de escritorio, como sistemas de chat, y he trabajado con bases de
          datos SQL y NoSQL para realizar operaciones CRUD. También he tenido la oportunidad de utilizar plataformas
          como Firebase y AWS en proyectos de menor escala, así como integrar diferentes API's en mis aplicaciones.
          Es importante destacar que mi objetivo es seguir estudiando mientras trabajo, ya que estoy comprometido a
          seguir desarrollándome profesionalmente y ampliando mis capacidades como desarrollador.
          <br />
          <br />
          ¡Un ejemplo que puedo mostrar de una aplicación que hemos desarrollado en equipo, LearnTrack, pueden visitar
          la página web del mismo <a href="https://www.learntrack.cat" target="_blank" rel="noopener noreferrer">learntrack.cat</a>donde he programado toda la lógica del aplicativo! ¡El
          Sábado día 10 de Junio del 2023, fuimos ganadores del premio de mSchools al presentarnos a la modalidad App
          Education! Y BBDD domino tanto SQL/NoSQL como sistemas de bases de datos, he utilizado MySQL como Microsoft
          SQL Server como PostgreSQL, en el apartado de NoSQL he utilizado más Firebase, pero tengo experiencia en
          MongoDB.
          <br />
          <br />
          Estoy entusiasmado por la posibilidad de unirme a su equipo y contribuir con mis habilidades y conocimientos
          en el área de desarrollo de aplicaciones. Estoy seguro de que mi pasión por la tecnología y mi dedicación para
          mantenerme actualizado con las últimas tendencias y herramientas en el campo serán de gran valor para el éxito
          de su organización. Agradezco sinceramente su tiempo y consideración. Adjunto mi currículum para obtener más
          detalles sobre mi experiencia y logros. Estoy disponible para una entrevista, y estaré encantado de proporcionar
          cualquier información adicional que pueda ser necesaria. ¡Espero tener la oportunidad de discutir cómo mi perfil
          se alinea con los objetivos insertados!
          <br />
          <br />
          Atentamente,
          <br />
          Adrià Casas Llorens
            </>
              
            </>
          ) : (
            <>
              ¡Hola! Soy Adrià, un desarrollador de Aplicaciones apasionado con
              experiencia en tecnologías como React, JavaScript...
              <span className="read-more">Leer Más</span>
            </>
          )}
        </p>
      </section>
    </div>
  );
}
