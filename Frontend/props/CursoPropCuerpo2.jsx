import React, { useState } from 'react';
import FormularioSimple from './FormularioSimple';

const labels = [
  'Presentacion',
  'Dirigido a',
  '¿Por qué debemos asistir al congreso?'
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

const CursoPropCuerpo2 = ({contenidos }) => {
  const [selected, setSelected] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [showBenef, setShowBenef] = useState(false);

  return (
    <div style={{ marginLeft: 128, marginRight: 128 }}>
      {/* Contenedor principal: cajas a la izquierda, formulario a la derecha */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginTop: '24px' }}>
        {/* Columna izquierda: dos cajas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '60%' }}>
          {/* Caja de botones y contenido */}
          <div
            style={{
              ...boxStyle,
              width: '100%',
              background: 'none',
              border: 'none',
              color: '#222'
            }}
          >
            <div style={{ marginBottom: '12px', display: 'flex', gap: 0 }}>
              {labels.map((label, idx) => (
                <button
                  key={label}
                  onClick={() => setSelected(idx)}
                  style={{
                    flex: 1,
                    background: selected === idx ? '#fff' : '#d1d1d1',
                    color: selected === idx ? '#444' : '#222',
                    border: '1px solid #bbb',
                    padding: '10px 0',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <div>
              {selected !== null && (
                <p style={{ color: '#222', margin: 0, border: '1px solid #bbb', padding: 12 }}>{contenidos[selected]}</p>
              )}
            </div>
          </div>
          {/* Caja de beneficio y certificado */}
          <div style={{ ...boxStyle, width: '100%', background: 'none', border: 'none' }}>
            {/* Beneficio section */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '8px',
              background: '#fff',
              border: '1.5px solid #7c3aed',
              borderRadius: 0,
              padding: '0 0 0 0',
              minHeight: 56
            }}>
              <div style={{ 
                fontSize: '2rem', 
                background: '#7c3aed', 
                width: 56, 
                height: 56, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff',
                borderRadius: 0
              }}>🎁</div>
              <div style={{ fontWeight: 'bold', flex: 1, color: '#4b2996', fontSize: 18, paddingLeft: 12 }}>Beneficio</div>
              <button
                style={{
                  fontSize: '1.5rem',
                  background: '#c7b6f7',
                  border: 'none',
                  borderRadius: 0,
                  color: '#4b2996',
                  width: 36,
                  height: 36,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 12
                }}
                onClick={() => setShowBenef((prev) => !prev)}
                aria-label="Mostrar información de beneficio"
              >
                {showBenef ? '−' : '+'}
              </button>
            </div>
            <div style={{ width: '100%' }}>
              {showBenef && (
                <div style={{ marginBottom: '16px', border: '1.5px solid #7c3aed', padding: 12 }}>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    <li>Al concluir el curso de capacitación recibirá el certificado correspondiente válido por la cantidad de horas realizadas</li>
                    <li>Materiales impresos de todo el curso</li>
                    <li>Material del contenido de las clases en DVD o formato digital</li>
                    <li>Examen por módulos (opcional)</li>
                  </ul>
                  <h4 style={{ marginBottom: 4, marginTop: 16 }}>Plataforma Virtual</h4>
                  <p style={{ marginTop: 0, marginBottom: 12 }}>
                    Acceso a nuestra plataforma virtual donde podrás seguir las clases en vivo, descargar material y resolver las evaluaciones de cada sesión.
                  </p>
                  <h4 style={{ marginBottom: 4 }}>Soporte Constante</h4>
                  <p style={{ marginTop: 0, marginBottom: 12 }}>
                    Nuestros asesores estarán pendientes en lo que usted pueda necesitar apoyo académico.
                  </p>
                  <h4 style={{ marginBottom: 4 }}>Descargas de Clases</h4>
                  <p style={{ marginTop: 0, marginBottom: 12 }}>
                    Puedes descargar la grabación de tus sesiones desarrolladas en vivo una vez concluida la clase.
                  </p>
                  <h4 style={{ marginBottom: 4 }}>Envío a Domicilio</h4>
                  <p style={{ marginTop: 0, marginBottom: 12 }}>
                    Enviaremos los materiales y certificados correspondientes a tu domicilio a nivel nacional previo adicional de pago para el envío.
                  </p>
                  <h4 style={{ marginBottom: 4 }}>Clases en Vivo</h4>
                  <p style={{ marginTop: 0, marginBottom: 12 }}>
                    Tus clases en vivo desde nuestra plataforma virtual.
                  </p>
                  <h4 style={{ marginBottom: 4 }}>50 Horas Académicas</h4>
                  <p style={{ marginTop: 0, marginBottom: 12 }}>
                    Recibirás 50 horas académicas a lo largo del ciclo lectivo.
                  </p>
                </div>
              )}
            </div>
            {/* Certificado section */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '8px', 
              marginTop: '16px',
              background: '#fff',
              border: '1.5px solid #7c3aed',
              borderRadius: 0,
              padding: '0 0 0 0',
              minHeight: 56
            }}>
              <div style={{ 
                fontSize: '2rem', 
                background: '#7c3aed', 
                width: 56, 
                height: 56, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff',
                borderRadius: 0
              }}>🏅</div>
              <div style={{ fontWeight: 'bold', flex: 1, color: '#4b2996', fontSize: 18, paddingLeft: 12 }}>Certificado</div>
              <button
                style={{
                  fontSize: '1.5rem',
                  background: '#c7b6f7',
                  border: 'none',
                  borderRadius: 0,
                  color: '#4b2996',
                  width: 36,
                  height: 36,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 12
                }}
                onClick={() => setShowCert((prev) => !prev)}
                aria-label="Mostrar información de certificado"
              >
                {showCert ? '−' : '+'}
              </button>
            </div>
            <div style={{ width: '100%' }}>
              {showCert && (
                <div style={{ border: '1.5px solid #7c3aed', padding: 12 }}>
                  <p>La CERTIFICACIÓN es válida de acuerdo a los estándares de SERVIR, según la Normativa de la Presidencia Ejecutiva Nº 141-2016-SERVIR-PE sobre “Normas para la gestión del proceso de capacitación en las entidades públicas”.</p>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    <li>Asimismo los participantes que cumplan con los requisitos del Congreso y que obtengan nota aprobatoria en las evaluaciones del Congreso obtendrán el certificado otorgado por EGG (Indispensable aprobar el curso y récord de Asistencia al 90%).</li>
                    <li>Un Certificado válido para postular a convocatorias Públicas y Privadas</li>
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <img
                      src="https://www.universia.net/content/dam/universia/images/certificado-ejemplo.png"
                      alt="Ejemplo de certificado"
                      style={{ maxWidth: '480px', width: '100%', height: '260px', objectFit: 'contain', border: '1px solid #ccc', borderRadius: 0, display: 'block' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Formulario a la derecha */}
        <div style={{ width: '40%' }}>
          <FormularioSimple />
        </div>
      </div>
    </div>
  );
};

export default CursoPropCuerpo2;
