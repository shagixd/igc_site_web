import React, { useState } from 'react';

const CursoPropSalida = ({ secciones }) => {
  const [abiertas, setAbiertas] = useState([]);

  const toggleSeccion = (idx) => {
    setAbiertas((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <>
    |<div>
      <hr style={{ border: 'none', borderTop: '5px solid #e0e0e0', margin: '2% auto', width:'80%' }} />
        <h3 style={{
          fontSize: 'clamp(24px, 2.5vw, 36px)',
          fontWeight: 'bold',
          color: '#888',
          marginBottom: '2rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          textAlign: 'center',
          textShadow: '1px 2px 8px #bbb'
        }}>
          Temario
        </h3>
    </div>
    <div style={{ width: '100%', height: 'auto' }}>
      {Array.isArray(secciones) && secciones.length > 0 ? (
        secciones.map((seccion, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: 12,
              padding: '1% 1%',
              width: '75%',
              margin: '2% auto',  // Centrado y espacio arriba/abajo
              boxSizing: 'border-box',
              background: '#fff'    // Opcional: fondo blanco para destacar
            }}>
            <button
              onClick={() => toggleSeccion(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: abiertas.includes(idx) ? '#0051ffff' : 'none', // Fondo morado si está abierto
                border: 'none',
                width: '100%',
                textAlign: 'left',
                fontSize: 'clamp(16px, 1.2vw, 30px)',
                cursor: 'pointer',
                fontWeight: 'bold',
                padding: '1% 2%',
                borderRadius: 8,
                color: abiertas.includes(idx) ? '#fff' : '#222' // Texto blanco si está abierto
              }}>
              <span style={{ flex: 1 }}>{seccion.titulo}</span>
              <span style={{
                fontSize: 'clamp(16px, 1.2vw, 30px)',
                transition: 'transform 0.2s',
                transform: abiertas.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                ▼
              </span>
            </button>
            {abiertas.includes(idx) && (
              <div style={{ marginTop: 16, fontSize: 'clamp(12px, 1.5vw, 24px)', width: '90%', margin: '1% auto' }}>
                <div dangerouslySetInnerHTML={{ __html: seccion.texto }} />
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No hay información disponible.</p>
      )}
    </div>
    </>
  );
};

export default CursoPropSalida;