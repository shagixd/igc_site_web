import React, { useState } from 'react';
import FormularioEmail from './FormularioEmail';
import { FaMedal } from "react-icons/fa6";
import '../public/styles/CursoPropCuerpo.css';
import { GrCertificate } from "react-icons/gr";

const labels = [
  'Presentacion',
  'Dirigido a',
  '¿Por qué debemos asistir al congreso?'
];

const CursoPropCuerpo2 = ({ contenidos }) => {
  const [selected, setSelected] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [showBenef, setShowBenef] = useState(false);

  return (
    <div className="curso-cuerpo-container">
      {/* Contenedor principal: cajas izquierda, formulario derecha */}
      <div className="curso-cuerpo-layout">
        
        {/* Columna izquierda: pestañas y beneficios/certificados */}
        <div className="left-column">
          
          {/* Pestañas de navegación */}
          <div className="tabs-container">
            <div className="tab-buttons">
              {labels.map((label, idx) => (
                <button
                  key={label}
                  onClick={() => setSelected(idx)}
                  className={`tab-button ${selected === idx ? 'active' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {selected !== null && (
                <p className="content-text">{contenidos[selected]}</p>
              )}
            </div>
          </div>

          {/* Sección de Beneficios y Certificado */}
          <div className="info-cards">

            {/* Beneficio */}
            <div className="info-card">
              <div className="info-header">
                <div className="icon-box">
                  <GrCertificate />
                </div>
                <span className="info-title">Beneficio</span>
                <button
                  className="toggle-btn"
                  onClick={() => setShowBenef((prev) => !prev)}
                  aria-label="Mostrar beneficios">
                  {showBenef ? '−' : '+'}
                </button>
              </div>
              {showBenef && (
                <div className="info-content">
                  <ul className="info-list">
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

            {/* Certificado */}
            <div className="info-card">
              <div className="info-header">
                <div className="icon-box">
                  <FaMedal />
                </div>
                <span className="info-title">Certificado</span>
                <button
                  className="toggle-btn"
                  onClick={() => setShowCert((prev) => !prev)}
                  aria-label="Mostrar certificado"
                >
                  {showCert ? '−' : '+'}
                </button>
              </div>
              {showCert && (
                <div className="info-content">
                  <p className="cert-intro">
                    La CERTIFICACIÓN es válida de acuerdo a los estándares de SERVIR, según la Normativa de la Presidencia Ejecutiva Nº 141-2016-SERVIR-PE sobre “Normas para la gestión del proceso de capacitación en las entidades públicas”.
                  </p>
                  <ul className="info-list">
                    <li>Asimismo los participantes que cumplan con los requisitos del Congreso y que obtengan nota aprobatoria en las evaluaciones del Congreso obtendrán el certificado otorgado por EGG (Indispensable aprobar el curso y récord de Asistencia al 90%).</li>
                    <li>Un Certificado válido para postular a convocatorias Públicas y Privadas</li>
                  </ul>
                  <div className="cert-image-container">
                    <img
                      src="https://www.universia.net/content/dam/universia/images/certificado-ejemplo.png"
                      alt="Ejemplo de certificado"
                      className="cert-image"
                    />
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="right-column">
          <FormularioEmail 
                opciones={["Curso de asistentes de Gerencia", "Curso de contrataciones del Estado", "Curso de Gestion Documental", "Curso de Gestion Publica", "Curso invierte PE.", "Curso de obras Publicas", "Curso de Ofimatica 2025", "Curso de planteaminto Estrategico", "Curso de presupuesto Publico",
                            "Diplomado de Administracion Financiera", "Diplomado de Asistente Administrativa", "Diplomado de Asistente de Gerencia Administrativa", "Diplomado de Finanzas Publicas", "Diplomado de Gestion Documental", "Diplomado de gestion Financiera y Tesoreria", "Diplomado de planeamiento y presupuesto", "Diplomado de planificacion de presupuesto de resultados", "Diplomado de redaccin de Documentos", "Diplomado de redaccion Ortografica", "Diplomado de Siaf-RP", "Diplomado de Siaf-SP", "Diplomado de Sistema Nacional de Abastecimiento", "Diplomado de Sistemas Informaticos", "Diplomado de Tributacion",
                            "Congreso de Gerencia Finanzas Publicas", "Congreso de Innovacion Secretarial", "Congreso Internacional de Asistentes de Gerencia", "Congreso Internacional Gerencial 2do.", "Congreso Nacional de Administracion 1er.", "Congreso de Nacional de Asistentes XIV", "Congreso Nacional de Presupuesto 3er.", "Congreso Nacional Presupuesto IV", "Congreso Nacional de Secretarias 11", "Congreso Nacional de Secretarias 12"]}
                placeholderSelect="Seleccione un Curso"/>
        </div>

      </div>
    </div>
  );
};

export default CursoPropCuerpo2;