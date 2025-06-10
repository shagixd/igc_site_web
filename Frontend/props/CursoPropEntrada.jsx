import React, { useState } from 'react';

const CursoPropEntrada = ({ titulo, fechaInicio, descripcion, imagenSrc, botones = [], children }) => {
  const [botonActivo, setBotonActivo] = useState(0);

  return (
    <div className="curso-prop-entrada" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2em' }}>{titulo}</p>
        <span style={{ color: '#666', fontSize: '0.95em' }}>{fechaInicio}</span>
        <p style={{ marginTop: 8 }}>{descripcion}</p>
        {botones.length > 0 && (
          <div style={{ margin: '16px 0' }}>
            {botones.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => setBotonActivo(idx)}
                style={{
                  marginRight: 8,
                  padding: '6px 14px',
                  borderRadius: 4,
                  border: '1px solid #ccc',
                  background: botonActivo === idx ? '#1976d2' : '#fff',
                  color: botonActivo === idx ? '#fff' : '#333',
                  cursor: 'pointer'
                }}
              >
                {btn.label}
              </button>
            ))}
            <div style={{ marginTop: 12 }}>
              {botones[botonActivo]?.contenido}
            </div>
          </div>
        )}
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