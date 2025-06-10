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
  "El curso inicia con una presentación general sobre la importancia del rol de asistente de gerencia.",
  "Desarrollar habilidades profesionales, tecnológicas y emocionales para destacar en el entorno laboral actual.",
  "Clases teóricas y prácticas, talleres y simulaciones de situaciones reales de oficina.",
  "Personas interesadas en desempeñarse como asistentes de gerencia o secretariado.",
  "Evaluación continua mediante trabajos prácticos y examen final.",
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
        <h3>Temario</h3>
        <CursoPropSalida secciones={contenidoCursos.asistenteGerencia} />
      </section>
    </div>
  );
};

export default CursoAsistenteGerencia;