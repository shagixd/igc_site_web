import React, { useState } from 'react';
import '../public/styles/CursoPropSalida.css';

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
      <div className="temario-header">
        <hr className="divider" />
        <h3 className="temario-title">Temario</h3>
      </div>

      <div className="secciones-container">
        {Array.isArray(secciones) && secciones.length > 0 ? (
          secciones.map((seccion, idx) => (
            <div key={idx} className="seccion-box">
              <button
                className={`seccion-toggle ${abiertas.includes(idx) ? 'open' : ''}`}
                onClick={() => toggleSeccion(idx)}
              >
                <span className="seccion-titulo-text">{seccion.titulo}</span>
                <span className="arrow">▼</span>
              </button>

              {abiertas.includes(idx) && (
                <div className="seccion-contenido">
                  <div dangerouslySetInnerHTML={{ __html: seccion.texto }} />
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-data">No hay información disponible.</p>
        )}
      </div>
    </>
  );
};

export default CursoPropSalida;