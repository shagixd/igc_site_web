import React, { useState, useEffect } from 'react';

const PropsVariados = ({ titulo, descripcion, descripcion2, descripcionExtra, imagen, colorFondo, colorTexto, colorBorde, onExpandChange }) => {
  const [mostrarMas, setMostrarMas] = useState(false);

  useEffect(() => {
    if (onExpandChange) {
      onExpandChange(mostrarMas);
    }
    // Solo notificar cuando mostrarMas cambie
    // eslint-disable-next-line
  }, [mostrarMas]);

  return (
    <div>
      <img src={imagen} alt={titulo} />
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <p>
        {descripcion2}
        {mostrarMas && (
          <span> {descripcionExtra}</span>
        )}
      </p>
      <button
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Ocultar informacion' : 'Mostrar más información'}
      </button>
    </div>
  );
};

export default PropsVariados;