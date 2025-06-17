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
  <>
    <p>El programa de “Obras Públicas por Administración Directa – Directiva N° 017-2023-CG/GMPL” es de naturaleza teórico-práctica, tiene por finalidad de fortalecer las capacidades de los participantes sobre la gestión de obras públicas ejecutadas bajo la modalidad de Administración Directa utilizando lo señalado en la directiva emitida por la Contraloría General de la República.</p>
    <p>El curso aborda temas referidos al marco general o generalidades para el desarrollo y aplicación de la directiva, así como el marco normativo del invierte.PE y la Ley de Contrataciones del Estado enmarcada en servicios, así como la aprobación y preparación previa al inicio de la obra por la modalidad de administración directa, la ejecución física de la obra, y finalmente la culminación y liquidación de las obras por esta modalidad." </p>
  </>,
  "Brindar a los participantes los conocimientos teóricos y prácticos necesarios para la gestión eficiente de obras públicas bajo la modalidad de administración directa, enfatizando en el marco normativo vigente, la planificación, ejecución, supervisión, control presupuestal, y rendición de cuentas, a fin de garantizar el cumplimiento de los objetivos del proyecto con transparencia, eficacia y calidad.",
  <>
    <p>La metodología de la capacitación se basa en un enfoque andragógico, diseñado La metodología de la capacitación se basa en un enfoque andragógico, diseñado específicamente para la enseñanza de adultos. Este enfoque incorpora principios fundamentales como la participación activa, la valorización de la experiencia, la horizontalidad en las interacciones y la flexibilidad en el proceso de aprendizaje.</p>
    <p>El curso desarrolla una metodología basada en la exposición de teoría específica y la resolución de casos prácticos, a partir de situaciones significativas que generen el conflicto cognitivo y motiven permanentemente al participante a un aprendizaje autónomo, considerando en todo momento el aprender haciendo y tomando en cuenta la experiencia laboral de los estudiantes. Asimismo, se promoverá el aprendizaje colaborativo, entre otras estrategias posibles de implementar en ambientes virtuales de aprendizaje. </p>
  </>,
  "Profesionales, técnicos, y funcionarios públicos involucrados en la gestión, planificación, ejecución, supervisión, y control de obras públicas bajo la modalidad de administración directa, como ingenieros, arquitectos, especialistas en presupuestos, administradores, y demás personal de entidades públicas relacionadas con la ejecución de proyectos de infraestructura.",
  "La evaluación del participante será constante y acumulativa, teniendo un examen al iniciar y finalizar el curso con la mínima nota aprobatorio de 14, ya que se deberá considerar la participación y trabajos prácticos realizados en cada sesión, la asistencia con puntos extras sumados al promedio final."
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
        <CursoPropSalida secciones={contenidoCursos.obrasPublicas} />
      </section>
    </div>
  );
};

export default CursoObrasPublicas;