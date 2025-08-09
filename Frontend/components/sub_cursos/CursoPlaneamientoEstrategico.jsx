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
  "El planeamiento estratégico es fundamental para la gestión efectiva de cualquier organización. Este curso ofrece un enfoque práctico para desarrollar estrategias que permitan alcanzar objetivos a largo plazo, optimizando recursos y adaptándose a un entorno en constante cambio.",
  "Capacitar a los participantes en la formulación, implementación y evaluación de planes estratégicos, proporcionando herramientas que faciliten la toma de decisiones y la gestión eficiente en organizaciones públicas y privadas.",
  "El curso combina teoría y práctica a través de estudios de caso, ejercicios aplicados y herramientas de planificación estratégica. Se promoverá el análisis crítico, la resolución de problemas y el trabajo en equipo.",
  "Profesionales, directivos, líderes de organizaciones, emprendedores y funcionarios públicos interesados en mejorar la planificación estratégica y la gestión organizacional.",
  "La evaluación del participante será constante y acumulativa, teniendo un examen al iniciar y finalizar el curso con la mínima nota aprobatorio de 14, ya que se deberá considerar la participación y trabajos prácticos realizados en cada sesión, la asistencia con puntos extras sumados al promedio final."
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
          <CursoPropSalida secciones={contenidoCursos.planeamientoEstrategico} />
        </section>
      </div>
    );
};

export default CursoPlaneamientoEstrategico;
