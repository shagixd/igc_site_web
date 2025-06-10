import React, { useState } from 'react';
import FormularioSimple from './FormularioSimple';

const labels = [
  'Presentacion',
  'Objetivo',
  'Metodologia',
  'Dirigido a',
  'Metodo de evaluacion'
];

const boxStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  padding: '16px',
  background: '#fafafa',
  width: '680px', // duplicado el ancho
  minHeight: '120px',
  boxSizing: 'border-box',
  transition: 'height 0.2s'
};

const CursoPropCuerpo = ({ texto, contenidos }) => {
  const [selected, setSelected] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [showBenef, setShowBenef] = useState(false);

  return (
    <div>
      <p>{texto}</p>
      {/* Contenedor principal: cajas a la izquierda, formulario a la derecha */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginTop: '24px' }}>
        {/* Columna izquierda: dos cajas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '680px', flex: '0 0 auto' }}>
          {/* Caja de botones y contenido */}
          <div style={boxStyle}>
            <div style={{ marginBottom: '12px' }}>
              {labels.map((label, idx) => (
                <button key={label} onClick={() => setSelected(idx)} style={{ marginRight: 8 }}>
                  {label}
                </button>
              ))}
            </div>
            <div>
              {selected !== null && <p>{contenidos[selected]}</p>}
            </div>
          </div>
          {/* Caja de beneficio y certificado */}
          <div style={boxStyle}>
            {/* Beneficio section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ fontSize: '2rem' }}>🎁</div>
              <div style={{ fontWeight: 'bold', flex: 1 }}>Beneficio</div>
              <button
                style={{
                  fontSize: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => setShowBenef((prev) => !prev)}
                aria-label="Mostrar información de beneficio"
              >
                {showBenef ? '−' : '+'}
              </button>
            </div>
            <div style={{ width: '100%' }}>
              {showBenef && (
                <div style={{ marginBottom: '16px' }}>
                  <p>Al inscribirte obtendrás acceso a materiales exclusivos y descuentos en futuros cursos.</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    alt="Ejemplo de beneficio"
                    style={{ maxWidth: '120px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}
                  />
                </div>
              )}
            </div>
            {/* Certificado section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', marginTop: '16px' }}>
              <div style={{ fontSize: '2rem' }}>🏅</div>
              <div style={{ fontWeight: 'bold', flex: 1 }}>Certificado</div>
              <button
                style={{
                  fontSize: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => setShowCert((prev) => !prev)}
                aria-label="Mostrar información de certificado"
              >
                {showCert ? '−' : '+'}
              </button>
            </div>
            <div style={{ width: '100%' }}>
              {showCert && (
                <div>
                  <p>Al finalizar el curso recibirás un certificado oficial de participación.</p>
                  <img
                    src="https://www.universia.net/content/dam/universia/images/certificado-ejemplo.png"
                    alt="Ejemplo de certificado"
                    style={{ maxWidth: '300px', border: '1px solid #ccc', borderRadius: '8px' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Formulario a la derecha */}
        <div style={{ flex: 1 }}>
          <FormularioSimple />
        </div>
      </div>
    </div>
  );
};

export default CursoPropCuerpo;