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
    <div style={{ width: '100%', height: '100%' }}>
      {Array.isArray(secciones) && secciones.length > 0 ? (
        secciones.map((seccion, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '2rem',
              border: '1px solid #e0e0e0',
              borderRadius: 12,
              padding: '20px 24px', // Más espacio lateral
              width: '100%',
              maxWidth: 1500,        // Más angosto
              margin: '24px auto',  // Centrado y espacio arriba/abajo
              boxSizing: 'border-box',
              minHeight: 90,
              background: '#fff'    // Opcional: fondo blanco para destacar
            }}
          >
            <button
              onClick={() => toggleSeccion(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: abiertas.includes(idx) ? '#7c3aed' : 'none', // Fondo morado si está abierto
                border: 'none',
                width: '100%',
                textAlign: 'left',
                fontSize: '1.35rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                minHeight: 64,
                paddingTop: 16,
                paddingBottom: 16,
                borderRadius: 8,
                color: abiertas.includes(idx) ? '#fff' : '#222' // Texto blanco si está abierto
              }}
            >
              <span style={{ flex: 1 }}>{seccion.titulo}</span>
              <span style={{
                fontSize: '2rem',
                transition: 'transform 0.2s',
                transform: abiertas.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                ▼
              </span>
            </button>
            {abiertas.includes(idx) && (
              <div style={{ marginTop: 16, fontSize: '1.15rem', minHeight: 60, width: '100%' }}>
                <div dangerouslySetInnerHTML={{ __html: seccion.texto }} />
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No hay información disponible.</p>
      )}
    </div>
  );
};

export default CursoPropSalida;