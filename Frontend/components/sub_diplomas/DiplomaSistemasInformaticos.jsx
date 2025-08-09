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
  "El Diploma de Sistemas Informáticos de Gestión Pública 2022, organizado por el Instituto de Gerencia Intercontinental, se llevará a cabo en modalidad presencial y virtual. Este programa tiene como objetivo fortalecer competencias profesionales en sistemas informáticos.",
  ".",
  ".",
  "Profesionales interesados en adquirir herramientas y tendencias en sistemas informáticos de gestión pública.",
  ".",
];

const DiplomaSistemasInformaticos = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "NO ENCONTRADO";
  const fechaInicio = query.get('inicioClases') || "NO DISPONIBLE";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="El diploma de Sistemas Informáticos de Gestión Pública 2022 busca desarrollar habilidades profesionales en sistemas informáticos."
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
        <CursoPropSalida secciones={contenidoCursos.sistemasInformaticos} />
      </section>
    </div>
  );
};

export default DiplomaSistemasInformaticos;
