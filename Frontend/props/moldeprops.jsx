import React from 'react';

const DiplomaCard = ({ titulo, descripcion, imagen, colorFondo, colorTexto }) => (
  <div style={{ backgroundColor: colorFondo, color: colorTexto, padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
    <img src={imagen} alt={titulo} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
    <p>Inicio de clases:</p>
    <p>Certificado:</p>
    <button style={{ margin: '10px 0', padding: '8px 16px', background: colorTexto, color: colorFondo, border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Más información
    </button>
    <p>Contáctanos para más detalles</p>
  </div>
);

export default DiplomaCard;