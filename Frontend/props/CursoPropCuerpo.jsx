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
  border: '1px solid #0084ffff',
  borderRadius: '10px',
  padding: '16px',
  background: '#ffffffff',
  width: '680px', // duplicado el ancho
  minHeight: '120px',
  boxSizing: 'border-box',
  transition: 'height 0.2s'
};

const CursoPropCuerpo = ({contenidos }) => {
  const [selected, setSelected] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [showBenef, setShowBenef] = useState(false);

  return (
    <div style={{ width: '80%', margin: '0 auto', background: '#f5f5f5d7' }}>
      
      {/* Contenedor principal: cajas a la izquierda, formulario a la derecha */}
      <div style={{ display: 'flex', gap: '5%', alignItems: 'flex-start', marginTop: '2%' }}>
        
        {/* Columna izquierda: dos cajas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '60%' }}>
          
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
                    background: selected === idx ? '#fff' : '#d1d1d1ff',
                    color: selected === idx ? '#444' : '#222',
                    border: '1px solid #bbb',
                    padding: '1% 2%',
                    width: '20%',
                    fontSize: 'clamp(8px, 1vw, 18px)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s'
                  }}>
                  {label}
                </button>
              ))}
            </div>
            <div>
              {selected !== null && (
                <p style={{ color: '#222', margin: 0, border: '1px solid #bbb', padding: '1%',fontSize: 'clamp(11px, 1vw, 21px)' }}>{contenidos[selected]}</p>
              )}
            </div>
          </div>

          {/* Caja de beneficio y certificado */}
          <div style={{ ...boxStyle, width: '100%', background: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
            {/* Beneficio section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
              background: '#fff',
              border: '1.5px solid #0077ffff',
              borderRadius: 0,
              padding: 0,
              minWidth: '80%',
              justifyContent: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(20px, 2vw, 40px)',
                padding: '1.5%',
                background: '#0077ffff',
                width: '10%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                borderRadius: 0
              }}>🎁</div>
              <div style={{ fontWeight: 'bold',color:'#222222ff', flex: 1, fontSize: 'clamp(20px, 1.5vw, 30px)', textAlign: 'center' }}>Beneficio</div>
              <button
                style={{
                  fontSize: 'clamp(26px, 2vw, 40px)',
                  background: '#1667fdff',
                  padding: '2%',
                  border: 'none',
                  borderRadius: 0,
                  color: '#ffffffff',
                  width: '10%',
                  height: '100%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setShowBenef((prev) => !prev)}
                aria-label="Mostrar información de beneficio"
              >
                {showBenef ? '−' : '+'}
              </button>
            </div>
            <div style={{ width: 760, maxWidth: '100%', textAlign: 'center' }}>
              {showBenef && (
                <div style={{ marginBottom: '22px', border: '1.5px solid #0077ffff', padding: 28, fontSize: 'clamp(10px, 1vw, 18px)' }}>
                  <ul style={{ margin: 0, paddingLeft: 38, textAlign: 'left' }}>
                    <li>Al concluir el curso de capacitación recibirá el certificado correspondiente válido por la cantidad de horas realizadas</li>
                    <li>Materiales impresos de todo el curso</li>
                    <li>Material del contenido de las clases en DVD o formato digital</li>
                    <li>Examen por módulos (opcional)</li>
                  </ul>
                  <div style={{ marginTop: 16, textAlign: 'left' }}>
                    <b>Plataforma Virtual:</b> Acceso a nuestra plataforma virtual donde podrás seguir las clases en vivo, descargar material y resolver las evaluaciones de cada sesión.<br />
                    <b>Soporte Constante:</b> Nuestros asesores estarán pendientes en lo que usted pueda necesitar apoyo académico.<br />
                    <b>Descargas de Clases:</b> Puedes descargar la grabación de tus sesiones desarrolladas en vivo una vez concluida la clase.<br />
                    <b>Envío a Domicilio:</b> Enviaremos los materiales y certificados correspondientes a tu domicilio a nivel nacional previo adicional de pago para el envío.<br />
                    <b>Clases en Vivo:</b> Tus clases en vivo desde nuestra plataforma virtual.<br />
                    <b>50 Horas Académicas:</b> Recibirás 50 horas académicas a lo largo del ciclo lectivo.
                  </div>
                </div>
              )}
            </div>
            {/* Certificado section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
              background: '#fff',
              border: '1.5px solid #0077ffff',
              borderRadius: 0,
              padding: 0,
              minWidth: '80%',
              justifyContent: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(20px, 2vw, 40px)',
                padding: '1.5%',
                background: '#0077ffff',
                width: '10%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                borderRadius: 0
              }}>🏅</div>
              <div style={{ fontWeight: 'bold',color:'#222222ff', flex: 1, fontSize: 'clamp(20px, 1.5vw, 30px)', paddingLeft: 16, textAlign: 'center' }}>Certificado</div>
              <button
                style={{
                  fontSize: 'clamp(26px, 2vw, 40px)',
                  background: '#1667fdff',
                  padding: '2%',
                  border: 'none',
                  borderRadius: 0,
                  color: '#ffffffff',
                  width: '10%',
                  height: '100%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setShowCert((prev) => !prev)}
                aria-label="Mostrar información de certificado"
              >
                {showCert ? '−' : '+'}
              </button>
            </div>
            <div style={{ width: 760, maxWidth: '100%', textAlign: 'center' }}>
              {showCert && (
                <div style={{ border: '1.5px solid #0077ffff', padding: 28, fontSize: 'clamp(10px, 1vw, 18px)' }}>
                  <p style={{ marginBottom: 16 }}>La CERTIFICACIÓN es válida de acuerdo a los estándares de SERVIR, según la Normativa de la Presidencia Ejecutiva Nº 141-2016-SERVIR-PE sobre “Normas para la gestión del proceso de capacitación en las entidades públicas”.</p>
                  <ul style={{ margin: 0, paddingLeft: 38, textAlign: 'left' }}>
                    <li>Asimismo los participantes que cumplan con los requisitos del Congreso y que obtengan nota aprobatoria en las evaluaciones del Congreso obtendrán el certificado otorgado por EGG (Indispensable aprobar el curso y récord de Asistencia al 90%).</li>
                    <li>Un Certificado válido para postular a convocatorias Públicas y Privadas</li>
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
                    <img
                      src="https://www.universia.net/content/dam/universia/images/certificado-ejemplo.png"
                      alt="Ejemplo de certificado"
                      style={{ maxWidth: '520px', width: '100%', height: 'auto', maxheight: '260px', objectFit: 'contain', border: '1px solid #000', borderRadius: 0, display: 'block' }}
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

export default CursoPropCuerpo;