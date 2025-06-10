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
  "Introducción a la gestión de obras públicas y su marco legal.",
  "Desarrollar competencias para la planificación, ejecución y supervisión de obras públicas.",
  "Metodología con clases teóricas, análisis de casos y visitas virtuales a proyectos.",
  "Ingenieros, arquitectos, funcionarios y profesionales del sector construcción.",
  "Evaluación por trabajos prácticos, participación y examen final."
];

const CursoObrasPublicas = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "OBRAS PÚBLICAS";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Aprende a gestionar obras públicas desde la planificación hasta la supervisión, cumpliendo la normativa vigente."
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
        <h3>Temario</h3>
        <CursoPropSalida secciones={contenidoCursos.obrasPublicas} />
      </section>
    </div>
  );
};

export default CursoObrasPublicas;