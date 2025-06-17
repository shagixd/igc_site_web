import React from 'react';

const CursoPropEntrada = ({ titulo, fechaInicio, descripcion, imagenSrc }) => {
  return (
    <div className="curso-prop-entrada" style={{ display: 'flex', alignItems: 'center', background: '#ffe4ec', padding: 32, marginBottom: 64 }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '2.3em', textAlign: 'center' }}>{titulo}</p>
        <p style={{ marginTop: 8, textAlign: 'center' }}>{descripcion}</p>
        <span style={{ 
          color: '#666', 
          fontSize: '0.95em', 
          marginTop: 24, 
          marginBottom: 8, 
          background: '#fff', 
          padding: '2px 8px', 
          borderRadius: 6 
        }}>
          Inicio de Clases: {fechaInicio}
        </span>
      </div>
      <img
        src={imagenSrc}
        alt={titulo}
        style={{ width: '50%', height: 180, objectFit: 'cover', marginLeft: 32, borderRadius: 12 }}
      />
    </div>
  );
};

export default CursoPropEntrada;