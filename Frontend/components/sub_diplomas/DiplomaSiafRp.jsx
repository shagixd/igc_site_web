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
  "El Diploma de Especialización Siaf Rp – Siga y Seace, organizado por el Instituto de Gerencia Intercontinental, se llevará a cabo en modalidad presencial y virtual. Este programa tiene como objetivo fortalecer competencias profesionales en SIAF RP, SIGA y SEACE.",
  ".",
  ".",
  "Profesionales interesados en adquirir herramientas y tendencias en SIAF RP, SIGA y SEACE.",
  ".",
];

const DiplomaSiafRp = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "NO ENCONTRADO";
  const fechaInicio = query.get('inicioClases') || "NO DISPONIBLE";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="El diploma de Especialización Siaf Rp."
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
        <CursoPropSalida secciones={contenidoCursos.siafRp} />
      </section>
    </div>
  );
};

export default DiplomaSiafRp;
