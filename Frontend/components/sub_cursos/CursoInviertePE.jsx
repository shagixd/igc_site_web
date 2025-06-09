import React from 'react';
import { useLocation } from 'react-router-dom';
import CursoPropEntrada from '../../props/CursoPropEntrada';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CursoInviertePE = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "GESTION PUBLICA Y MODERNIZACION DEL ESTADO";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <CursoPropEntrada
      titulo={titulo}
      descripcion="Este curso te permitirá comprender los procesos de modernización del Estado y su impacto en la gestión pública."
      fechaInicio={fechaInicio}
      imagenSrc="/img/react.png"
    >
    </CursoPropEntrada>
  );
};

export default CursoInviertePE;