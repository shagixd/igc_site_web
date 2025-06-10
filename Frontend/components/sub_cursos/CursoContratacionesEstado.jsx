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
  "Presentación del marco normativo de contrataciones con el Estado.",
  "Brindar conocimientos para participar y gestionar procesos de contratación pública.",
  "Clases teóricas, talleres prácticos y simulaciones de procesos de contratación.",
  "Empresarios, abogados, funcionarios y público interesado en contrataciones estatales.",
  "Evaluación por participación, resolución de casos y examen final."
];

const CursoContratacionesEstado = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "CONTRATACIONES CON EL ESTADO";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Domina los procesos y normativas para contratar con el Estado de manera eficiente y legal."
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
        <CursoPropSalida secciones={contenidoCursos.contratacionesEstado} />
      </section>
    </div>
  );
};

export default CursoContratacionesEstado;