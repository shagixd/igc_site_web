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
      <p className='descripcion-1'>{descripcion}</p>
      <p className='descripcion-2'>
        {descripcion2}
        {mostrarMas && <span className='descripcion-3'> {descripcionExtra}</span>}
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