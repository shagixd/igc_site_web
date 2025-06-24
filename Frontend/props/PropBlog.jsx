// PropsVariados.jsx
import React, { useState, useEffect } from 'react';

const PropsVariados = ({
  titulo,
  descripcion,
  descripcion2,
  descripcionExtra,
  imagen,
  onExpandChange
}) => {
  const [mostrarMas, setMostrarMas] = useState(false);

  useEffect(() => {
    if (onExpandChange) {
      onExpandChange(mostrarMas);
    }
    // eslint-disable-next-line
  }, [mostrarMas]);

  return (
    <>
      <div className="card-imagen">
        <img src={imagen} alt={titulo} />
      </div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p>
        {descripcion2}
        {mostrarMas && <span> {descripcionExtra}</span>}
      </p>
      <a
        href="#"
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          setMostrarMas(!mostrarMas);
        }}>
        {mostrarMas ? 'Ocultar información' : 'Mostrar más información'}
      </a>
    </>
  );
};

export default PropsVariados;