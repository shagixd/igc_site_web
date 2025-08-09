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
  "El Sistema Nacional de Inversiones – invierte.pe es una plataforma clave para la gestión de proyectos públicos en Perú. Este curso te enseñará cómo utilizar este sistema para planificar, ejecutar y evaluar proyectos de inversión pública, asegurando su sostenibilidad y el uso adecuado de los recursos.",
  "Capacitar a los participantes en el uso adecuado del Sistema Nacional de Inversiones invierte.pe, proporcionando las herramientas necesarias para mejorar la calidad y efectividad de los proyectos públicos en el marco de las normativas y políticas nacionales.",
  "El curso se desarrollará mediante clases teóricas, análisis de casos reales y actividades prácticas en el uso del sistema invierte.pe, con el objetivo de aplicar los conocimientos adquiridos in situaciones concretas de gestión pública.",
  "Funcionarios públicos, gestores de proyectos, consultores y profesionales del sector público interesados en mejorar la ejecución y gestión de proyectos de inversión pública a través del uso del sistema invierte.pe.",
  "La evaluación del participante será constante y acumulativa, teniendo un examen al iniciar y finalizar el curso con la mínima nota aprobatorio de 14, ya que se deberá considerar la participación y trabajos prácticos realizados en cada sesión, la asistencia con puntos extras sumados al promedio final."
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
          imagenSrc="/img/1.jpg"
        />
      </section>
      <section>
        <CursoPropCuerpo
          texto="Selecciona una opción:"
          contenidos={contenidos}
        />
      </section>
      <section>
        <CursoPropSalida secciones={contenidoCursos.inviertePE} />
      </section>
    </div>
  );
};

export default CursoInviertePE;