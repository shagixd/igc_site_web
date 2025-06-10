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
  "Presentación del sistema de presupuesto público y su importancia en la gestión estatal.",
  "Capacitar en la formulación, ejecución y control del presupuesto público.",
  "Metodología con clases teóricas, análisis de casos y ejercicios prácticos.",
  "Funcionarios, contadores, economistas y profesionales vinculados al sector público.",
  "Evaluación por participación, trabajos prácticos y examen final."
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
        <CursoPropSalida secciones={contenidoCursos.presupuestoPublico} />
      </section>
    </div>
  );
};

export default CursoPresupuestoPublico;