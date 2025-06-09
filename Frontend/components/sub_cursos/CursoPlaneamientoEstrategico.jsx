import React from 'react';
import { useLocation } from 'react-router-dom';
import CursoPropEntrada from '../../props/CursoPropEntrada';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CursoPlaneamientoEstrategico = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "PLANEAMIENTO ESTRATEGICO";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <CursoPropEntrada
      titulo={titulo}
      fechaInicio={fechaInicio}
      descripcion="Desarrolla habilidades para la formulación y ejecución de planes estratégicos en el sector público y privado."
      imagenSrc="/img/node.png"
    >
      <p><strong>Modalidad:</strong> Presencial</p>
      <p><strong>Certificado:</strong> Diploma de Especialidad</p>
    </CursoPropEntrada>
  );
};

export default CursoPlaneamientoEstrategico;
