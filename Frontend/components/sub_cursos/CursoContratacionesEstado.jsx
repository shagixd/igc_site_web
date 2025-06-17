import React from 'react';
import { useLocation } from 'react-router-dom';
import CursoPropEntrada from '../../props/CursoPropEntrada';
import CursoPropCuerpo from '../../props/CursoPropCuerpo';
import CursoPropSalida from '../../props/CursoPropSalida';
import contenidoCursos from '../../props/ContenidoCursos.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const contenidos = [
  "El programa «Gestión de las Contrataciones del Estado y su Reglamento» está orientado a capacitar sobre las normativas que regulan la contratación pública en el país, en este caso, la nueva Ley de Contrataciones del Estado y su respectivo reglamento. A través de este programa, los participantes adquirirán conocimientos sobre los procedimientos, requisitos y principios que deben seguir las entidades del Estado al momento de contratar bienes, servicios y obras, con el objetivo de garantizar la eficiencia, transparencia y legalidad en el uso de los recursos públicos. Este programa proporcionará una formación teórica y práctica sobre la gestión de las contrataciones estatales, abordando cada una de sus fases: planificación, selección, ejecución contractual y resolución de controversias, incluyendo obras públicas. Todo ello en el marco de la nueva normativa vigente, además de analizar las principales modificaciones introducidas por el órgano responsable de las contrataciones públicas.",
  "El objetivo del programa es capacitar a los participantes en la aplicación de la Ley de Contrataciones del Estado y su Reglamento, promoviendo la ética, transparencia e integridad en la gestión de procedimientos de contratación pública. Asimismo, busca desarrollar competencias para manejar sistemas electrónicos de adquisiciones, resolver conflictos y gestionar obras públicas de manera eficiente. El final es formar servidores públicos con herramientas legales y de gestión que les permiten comprender la dinámica de las compras públicas y mitigar riesgos en la toma de decisiones operativas y administrativas.",
  <>
    La metodología de la capacitación se basa en un enfoque andrológico, diseñado específicamente para la enseñanza de adultos. Este enfoque incorpora principios fundamentales como la participación activa, la valorización de la experiencia, la horizontalidad en las interacciones y la flexibilidad en el proceso de aprendizaje. Los aspectos clave incluyen:
    <ul style={{ marginTop: 8, marginBottom: 8 }}>
      <li>Presentaciones teóricas</li>
      <li>Material de trabajo</li>
      <li>Análisis de casos reales</li>
    </ul>
    Ambiente de clases y plataforma virtual: Herramientas digitales que complementan la formación y facilitan el acceso a los contenidos.
  </>,
  "El curso de digitalización de archivos está dirigido a todos los profesionales que se desempeñan en el área de trámite documental,  así como a los profesionales ejecutivos y operativos vinculados con la gestión de información y manejo de la gestión documental de las distintas instituciones públicas que buscan optimizar. y modernizar su gestión de archivos.",
  "La evaluación del participante será constante y acumulativa, con un examen al iniciar y finalizar el curso, teniendo como nota mínima aprobatoria un 14. Se deberá considerar la participación, los trabajos prácticos realizados en cada sesión y la asistencia, con puntos extras sumados al promedio final."
];

const CursoContratacionesEstado = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "CONTRATACIONES CON EL ESTADO";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Domina los procesos y normativas para contratar con el Estado de manera eficiente y legal."
          imagenSrc="/img/react.png"
        />
      </section>
      <section>
        <CursoPropCuerpo
          texto="Selecciona una opción:"
          contenidos={contenidos}
        />
      </section>
      <section>
        <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '48px 0 16px 0' }} />
        <h3 style={{ 
          fontSize: '2em', 
          fontWeight: 'bold', 
          color: '#888', 
          marginBottom: '2rem', 
          letterSpacing: '1px',
          textTransform: 'uppercase',
          textAlign: 'center',
          textShadow: '1px 2px 8px #bbb'
        }}>
          Temario
        </h3>
        <CursoPropSalida secciones={contenidoCursos.contratacionesEstado} />
      </section>
    </div>
  );
};

export default CursoContratacionesEstado;