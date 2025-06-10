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
    <div>
      {Array.isArray(secciones) && secciones.length > 0 ? (
        secciones.map((seccion, idx) => (
          <div key={idx} style={{ marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: 8, padding: 12 }}>
            <button
              onClick={() => toggleSeccion(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              <span style={{ flex: 1 }}>{seccion.titulo}</span>
              <span style={{ fontSize: '1.5rem', transition: 'transform 0.2s', transform: abiertas.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </span>
            </button>
            {abiertas.includes(idx) && (
              <div style={{ marginTop: 8 }}>
                <p>{seccion.texto}</p>
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