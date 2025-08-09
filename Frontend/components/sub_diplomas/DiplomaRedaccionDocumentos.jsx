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
  "El Diploma Redacción de documentos administrativos, organizado por el Instituto de Gerencia Intercontinental, se llevará a cabo en modalidad presencial y virtual. Este programa tiene como objetivo fortalecer competencias profesionales en redacción administrativa.",
  ".",
  ".",
  "Profesionales interesados en adquirir herramientas y tendencias en redacción de documentos administrativos.",
  ".",
];

const DiplomaRedaccionDocumentos = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "NO ENCONTRADO";
  const fechaInicio = query.get('inicioClases') || "NO DISPONIBLE";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="El diploma Redacción de documentos administrativos busca desarrollar habilidades profesionales en redacción administrativa."
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
        <CursoPropSalida secciones={contenidoCursos.redaccionDocumentos} />
      </section>
    </div>
  );
};

export default DiplomaRedaccionDocumentos;
