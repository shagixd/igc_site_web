import React from 'react';
import { useLocation } from 'react-router-dom';
import CursoPropEntrada from '../../props/CursoPropEntrada';
import CursoPropCuerpo2 from '../../props/CursoPropCuerpo2';
import CursoPropSalida from '../../props/CursoPropSalida';
import contenidoCongresos from '../../props/ContenidoCongresos.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const contenidos = [
  "Queremos destacar ante todos los participantes la vital importancia de los sistemas administrativos en el contexto de la gestión pública, ya que son fundamentales para alcanzar las metas establecidas en las diversas áreas administrativas. Con este objetivo en mente, hemos concebido un congreso innovador dirigido específicamente a las secretarias y asistentes de gerencia que trabajan en entidades públicas. Este congreso está diseñado para abordar de manera exhaustiva los temas relevantes para el día a día de estas profesionales, centrándose especialmente en la gestión operativa y administrativa de la administración pública. Nuestra intención es ofrecer un enfoque práctico y orientado a la acción, facilitando el aprendizaje y la implementación efectiva de herramientas prácticas y tecnológicas que mejoren la eficiencia y la efectividad en sus roles. Durante el evento, los participantes tendrán la oportunidad de explorar estrategias innovadoras, compartir experiencias y aprender de expertos en el campo. Nuestra meta es proporcionarles las herramientas y el conocimiento necesarios para enfrentar los desafíos actuales y futuros de la gestión administrativa en el sector público, contribuyendo así al logro de los objetivos institucionales y al servicio eficaz a la comunidad. ¡Les esperamos en este congreso que promete ser una experiencia enriquecedora y transformadora!",
  "El evento está dirigido a un público específico: secretarias y asistentes de gerencia del sector público y privados. Elegimos este grupo porque reconocemos su importancia en la eficiencia operativa de las instituciones. Queremos brindarles herramientas y redes de apoyo para enfrentar sus desafíos laborales y alcanzar su máximo potencial.",
  "Deberías asistir al congreso porque proporciona una oportunidad única para mantenerte actualizado sobre las últimas tendencias, prácticas y tecnologías en gestión administrativa pública. Esto te permitirá mejorar tus habilidades y conocimientos, lo que es invaluable para tu desarrollo profesional. Además, el evento reúne a profesionales, expertos y líderes en el campo, ofreciendo una excelente oportunidad para establecer contactos, intercambiar ideas y construir relaciones que pueden beneficiar tu carrera a largo plazo."
];

const CongresoInternacionalAsistentesGerencia = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "CONGRESO INTERNACIONAL DE ASISTENTES DE GERENCIA Y SECRETARIAS";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Actualízate en normativas y tendencias tributarias."
          imagenSrc="/img/congreso-tributacion.png"
        />
      </section>
      <section>
        <CursoPropCuerpo2
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
        <CursoPropSalida secciones={contenidoCongresos.congresoInternacionalAsistentesGerencia} />
      </section>
    </div>
  );
};

export default CongresoInternacionalAsistentesGerencia;
