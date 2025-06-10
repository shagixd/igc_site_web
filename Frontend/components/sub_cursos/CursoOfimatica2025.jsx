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
  "Presentación de las herramientas de ofimática más utilizadas en el entorno laboral.",
  "Desarrollar habilidades en el uso de Word, Excel, PowerPoint y herramientas colaborativas.",
  "Metodología práctica con ejercicios y proyectos aplicados a situaciones reales.",
  "Estudiantes, profesionales y público en general que deseen mejorar su productividad digital.",
  "Evaluación por ejercicios prácticos, participación y proyecto final."
];

const CursoOfimatica2025 = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "OFIMÁTICA 2025";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Domina las herramientas de ofimática esenciales para el entorno laboral moderno."
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
        <CursoPropSalida secciones={contenidoCursos.ofimatica2025} />
      </section>
    </div>
  );
};

export default CursoOfimatica2025;