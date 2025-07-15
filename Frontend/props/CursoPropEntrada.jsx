import React from 'react';

const CursoPropEntrada = ({ titulo, fechaInicio, descripcion, imagenSrc }) => {
  return (
    <div className="curso-prop-entrada" style={{ display: 'flex', alignItems: 'center', background: '#1b7ecfff', padding: 32, marginBottom: 64 }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: 'clamp(26px, 2vw, 46px)', textAlign: 'center', color:'white' }}>{titulo}</p>
        <p style={{ marginTop: 8, textAlign: 'center',fontSize: 'clamp(16px, 1.2vw, 28px)', color:'white'}}>{descripcion}</p>
        <span style={{ 
          color: '#666', 
          fontSize: 'clamp(12px, 1vw, 22px)', 
          marginTop: 24, 
          marginBottom: 8, 
          background: '#fff', 
          padding: '1% 2%', 
          borderRadius: 6 
        }}>
          Inicio de Clases: {fechaInicio}
        </span>
      </div>
      <img
        src={imagenSrc}
        alt={titulo}
        style={{ width: '50%', height: 200, objectFit: 'cover', marginLeft: 32, borderRadius: 12 }}
      />
    </div>
  );
};

export default CursoPropEntrada;