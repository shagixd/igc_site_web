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
  "Presentación de la gestión documental y su importancia en las organizaciones.",
  "Capacitar en técnicas y herramientas para la organización y digitalización de documentos.",
  "Metodología práctica con ejercicios de archivo, digitalización y gestión electrónica.",
  "Responsables de archivo, asistentes administrativos y público interesado.",
  "Evaluación por prácticas, participación y prueba final."
];

const CursoGestionDocumental = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "GESTIÓN DOCUMENTAL";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Aprende a gestionar documentos físicos y digitales de manera eficiente y segura."
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
        <CursoPropSalida secciones={contenidoCursos.gestionDocumental} />
      </section>
    </div>
  );
};

export default CursoGestionDocumental;