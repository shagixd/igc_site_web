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
  "Introducción a la gestión pública y su importancia en el desarrollo del país.",
  "Comprender los principios y herramientas para una gestión pública eficiente y transparente.",
  "Metodología basada en casos prácticos, análisis de políticas públicas y talleres participativos.",
  "Funcionarios públicos, estudiantes y profesionales interesados en el sector público.",
  "Evaluación mediante participación en clase, trabajos grupales y examen final."
];

const CursoGestionPublica = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "GESTIÓN PÚBLICA";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Este curso te permitirá comprender los procesos de modernización del Estado y su impacto en la gestión pública."
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
        <CursoPropSalida secciones={contenidoCursos.gestionPublica} />
      </section>
    </div>
  );
};

export default CursoGestionPublica;
