import React, { useState } from 'react';

const PropsVariados = ({ titulo, descripcion, descripcion2, descripcionExtra, imagen, colorFondo, colorTexto, colorBorde }) => {
  const [mostrarMas, setMostrarMas] = useState(false);

  // Debug: mostrar props recibidas
  console.log({ titulo, descripcion, descripcion2, descripcionExtra, imagen, colorFondo, colorTexto, colorBorde });

  return (
    <div
      style={{
        // backgroundColor: colorFondo, // <-- Eliminado, sin color de fondo
        color: colorTexto,
        padding: '20px',
        borderRadius: '8px',
        margin: '10px 0',
        border: `2px solid ${colorBorde || colorTexto}` // <-- Usar colorBorde del prop
      }}
    >
      <img src={imagen} alt={titulo} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <p>
        {descripcion2}
        {mostrarMas && (
          <span> {descripcionExtra}</span>
        )}
      </p>
      <button
        style={{
          margin: '10px 0',
          padding: '8px 16px',
          background: colorTexto, // <-- Usar colorTexto para fondo del botón
          color: '#fff',
          border: `2px solid ${colorBorde || colorTexto}`, 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Ocultar información' : 'Más información'}
      </button>
    </div>
  );
};

export default PropsVariados;