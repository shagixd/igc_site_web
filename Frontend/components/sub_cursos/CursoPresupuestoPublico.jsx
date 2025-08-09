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
  "El curso de Presupuesto Público abordará los conceptos fundamentales de la gestión del presupuesto público, basándose en las normas vigentes y sus recientes modificaciones. Se desarrollan los procesos e instrumentos esenciales de la programación, formulación, ejecución y control presupuestario, además de analizar la metodología del presupuesto por resultados. Todo esto se presenta considerando las diversas fases del proceso presupuestario peruano desde una perspectiva integral que abarca los niveles de gobierno nacional, regional y local.",
  <>
  <p>Comprender los fundamentos del proceso presupuestario público: Identificar y analizar los principales conceptos, normativas vigentes y recientes modificaciones relacionadas con el presupuesto público en el Perú, manejar herramientas e instrumentos presupuestarios: Dominar los procesos de programación, formulación, ejecución y control del presupuesto público, considerando las particularidades de cada fase.</p>
  <p>Aplicar el enfoque de presupuesto por resultados: Incorporar la metodología del presupuesto por resultados en la gestión pública para mejorar la asignación y el uso de los recursos públicos, promover la transparencia y la eficiencia en la gestión pública: Gestionar los recursos públicos cumpliendo con la normativa vigente y fomentando la rendición de cuentas en los niveles de gobierno nacional, regional y local.</p>
  <p>Fortalecer la sinergia entre niveles de gobierno: Desarrollar una visión integral del proceso presupuestario que articule de manera efectiva las acciones entre los niveles de gobierno nacional, regional y local.</p>
  </>,
  <>
  <ul>
    <li>Las clases se desarrollarán en la modalidad virtual con exposiciones con soporte audiovisual en un entorno dinámico, analítico y participativo en el que los docentes y participantes interactúan para una retroalimentación eficaz mediante prácticas, chat, foros y debates.</li>
    <li>Las clases se dan en vivo por la plataforma Zoom y aula virtual.</li>
    <li>Se fortalece el trabajo en equipo para el desarrollo de ejercicios bajo supervisión de los docentes.</li>
    <li>Se cuenta, además, con selección de casos y lecturas de estudio para reforzar la comprensión de los participantes.</li>
  </ul>
  </>,
  "La evaluación del participante será constante y acumulativa, teniendo un examen al iniciar y finalizar el curso con la mínima nota aprobatorio de 14, ya que se deberá considerar la participación y trabajos prácticos realizados en cada sesión, la asistencia con puntos extras sumados al promedio final.",
  "La evaluación del participante será constante y acumulativa, con un examen al iniciar y finalizar el curso, teniendo como nota mínima aprobatoria un 14. Se deberá considerar la participación, los trabajos prácticos realizados en cada sesión y la asistencia, con puntos extras sumados al promedio final."
];

const CursoPresupuestoPublico = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "PRESUPUESTO PÚBLICO";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (    
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Aprende a gestionar el presupuesto público de manera eficiente y conforme a la normativa vigente."
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
        <CursoPropSalida secciones={contenidoCursos.presupuestoPublico} />
      </section>
    </div>
  );
};

export default CursoPresupuestoPublico;