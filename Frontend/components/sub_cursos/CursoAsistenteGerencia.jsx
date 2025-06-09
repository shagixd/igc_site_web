import React from 'react';
import { useLocation } from 'react-router-dom';
import CursoPropEntrada from '../../props/CursoPropEntrada';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CursoAsistenteGerencia = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "NO ENCONTRADO";
  const fechaInicio = query.get('inicioClases') || "NO DISPONIBLE";

  return (
    <CursoPropEntrada
      titulo={titulo}
      fechaInicio={fechaInicio}
      descripcion="El curso de Asistente de Gerencia y Secretaría busca desarrollar habilidades profesionales, tecnológicas y emocionales para destacar en el entorno laboral actual."
      imagenSrc="/img/cloud.png"
    >
    </CursoPropEntrada>
  );
};

export default CursoAsistenteGerencia;
