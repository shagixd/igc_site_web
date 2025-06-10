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
  "Presentación del sistema Invierte.pe y su marco normativo.",
  "Capacitar en la formulación, evaluación y gestión de proyectos de inversión pública.",
  "Clases teóricas, análisis de casos reales y ejercicios prácticos con herramientas oficiales.",
  "Profesionales y técnicos vinculados a la gestión de proyectos de inversión pública.",
  "Evaluación por participación, desarrollo de casos y prueba final."
];

const CursoInviertePE = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "INVIERTE.PE";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Este curso te permitirá dominar el sistema Invierte.pe para la gestión eficiente de proyectos de inversión pública."
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
        <CursoPropSalida secciones={contenidoCursos.inviertePE} />
      </section>
    </div>
  );
};

export default CursoInviertePE;