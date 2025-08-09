import React from 'react';
import '../public/styles/CursoPropEntrada.css';

const CursoPropEntrada = ({ titulo, fechaInicio, descripcion, imagenSrc }) => {
  return (
    <div className="curso-prop-entrada">
      <div className="curso-prop-entrada-textos">
        <p className="curso-prop-entrada-titulo">{titulo}</p>
        <p className="curso-prop-entrada-descripcion">{descripcion}</p>
        <span className="curso-prop-entrada-fecha">
          Inicio de Clases: {fechaInicio}
        </span>
      </div>
      <img
        src={imagenSrc}
        alt={titulo}
        className="curso-prop-entrada-img"
      />
    </div>
  );
};

export default CursoPropEntrada;