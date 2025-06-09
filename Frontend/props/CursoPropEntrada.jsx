import React from 'react';

const CursoPropEntrada = ({ titulo, fechaInicio, descripcion, imagenSrc, children }) => {
  return (
    <div className="curso-prop-entrada" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2em' }}>{titulo}</p>
        <span style={{ color: '#666', fontSize: '0.95em' }}>{fechaInicio}</span>
        <p style={{ marginTop: 8 }}>{descripcion}</p>
        {children}
      </div>
      <img
        src={imagenSrc}
        alt={titulo}
        style={{ width: 180, height: 180, objectFit: 'cover', marginLeft: 32, borderRadius: 12 }}
      />
    </div>
  );
};

export default CursoPropEntrada;