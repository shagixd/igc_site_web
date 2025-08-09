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
  "El Diploma de Especialización en Finanzas Públicas, organizado por el Instituto de Gerencia Intercontinental, se llevará a cabo en modalidad presencial y virtual. Este programa tiene como objetivo fortalecer competencias profesionales en finanzas públicas.",
  ".",
  ".",
  "Profesionales interesados en adquirir herramientas y tendencias en finanzas públicas.",
  ".",
];

const DiplomaFinanzasPublicas = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "NO ENCONTRADO";
  const fechaInicio = query.get('inicioClases') || "NO DISPONIBLE";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="El diploma de Especialización en Finanzas Públicas busca desarrollar habilidades profesionales en finanzas públicas."
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
        <CursoPropSalida secciones={contenidoCursos.finanzasPublicas} />
      </section>
    </div>
  );
};

export default DiplomaFinanzasPublicas;
