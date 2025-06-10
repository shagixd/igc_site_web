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
  "Presentación del planeamiento estratégico y su relevancia in las organizaciones.",
  "Desarrollar habilidades para la formulación, implementación y evaluación de planes estratégicos.",
  "Metodología con talleres, análisis de casos y simulaciones prácticas.",
  "Directivos, gerentes, profesionales y estudiantes interesados en la gestión estratégica.",
  "Evaluación por participación, desarrollo de planes y exposición final."
];

const CursoPlaneamientoEstrategico = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "PLANEAMIENTO ESTRATÉGICO";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Desarrolla habilidades para la formulación y ejecución de planes estratégicos en el sector público y privado."
          imagenSrc="/img/node.png"
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
        <CursoPropSalida secciones={contenidoCursos.planeamientoEstrategico} />
      </section>
    </div>
  );
};

export default CursoPlaneamientoEstrategico;
