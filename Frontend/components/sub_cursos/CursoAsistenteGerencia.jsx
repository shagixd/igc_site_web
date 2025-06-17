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
  "El Curso Especializado para Secretarias y Asistentes de Gerencia, organizado por el Instituto de Gerencia Intercontinental, se llevará a cabo en modalidad presencial y virtual durante los meses de marzo y abril de 2025. Este programa tiene como objetivo fortalecer competencias profesionales y personales, con énfasis en habilidades gerenciales, tecnológicas y el desarrollo del equilibrio emocional para enfrentar los desafíos del entorno laboral actual.",
  ".",
  ".",
  "Profesionales de apoyo administrativo y gerencial como asistentes, secretarias y recepcionistas, interesados en adquirir herramientas y tendencias que mejoren su desempeño organizacional.",
  ".",
];

const CursoAsistenteGerencia = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "NO ENCONTRADO";
  const fechaInicio = query.get('inicioClases') || "NO DISPONIBLE";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="El curso de Asistente de Gerencia y Secretaría busca desarrollar habilidades profesionales, tecnológicas y emocionales para destacar en el entorno laboral actual."
          imagenSrc="/img/cloud.png"
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
        <CursoPropSalida secciones={contenidoCursos.asistenteGerencia} />
      </section>
    </div>
  );
};

export default CursoAsistenteGerencia;