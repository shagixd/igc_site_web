import React from 'react';

const Diplomas_Catalogos = () => (
    <>
        <div>
            <h2>Catálogo de Diplomas</h2>
            <p>Solicita el diploma en el cual quieres especializarte y potenciar tu conocimiento para mejorar tus oportunidades laborales.</p>
        </div>
        
        <div>
            <form method="post" action="" style={{ maxWidth: '400px', margin: '32px auto', padding: '16px', boxSizing: 'border-box' }}>
                {/*
                  Define un estilo para los campos de entrada
                */}
                {(() => {
                  const inputStyle = { width: '100%', marginBottom: '16px', boxSizing: 'border-box' };
                  return (
                    <>
                      <div>
                        <label>Nombre:</label><br />
                        <input type="text" name="nombre" required style={inputStyle} />
                      </div>
                      <div>
                        <label>Apellido:</label><br />
                        <input type="text" name="apellido" required style={inputStyle} />
                      </div>
                      <div>
                        <label>Correo:</label><br />
                        <input type="email" name="correo" required style={inputStyle} />
                      </div>
                      <div>
                        <label>Catálogo de Diplomas:</label><br />
                        <select name="catalogo" required style={inputStyle}>
                          <option value="" disabled selected>Seleccione un diploma</option>
                          <option value="Diploma de Especialización de Tributación">Diploma de Especialización de Tributación</option>
                          <option value="Diploma de Especialización Planificación y Presupuesto Público por Resultados">Diploma de Especialización Planificación y Presupuesto Público por Resultados</option>
                          <option value="Diploma de Especialización en gestión Financiera y Tesorería Gubernamental">Diploma de Especialización en gestión Financiera y Tesorería Gubernamental</option>
                          <option value="Diploma de Especialización Administración Financiera Gubernamental">Diploma de Especialización Administración Financiera Gubernamental</option>
                          <option value="Diploma de Especialización en Finanzas Públicas">Diploma de Especialización en Finanzas Públicas</option>
                          <option value="Diploma de Especialización en Gestión y Gerencia Pública">Diploma de Especialización en Gestión y Gerencia Pública</option>
                          <option value="Diploma de Especialización en Gestión Logística y Contrataciones del Estado">Diploma de Especialización en Gestión Logística y Contrataciones del Estado</option>
                          <option value="Diploma de Especialización en el SIAF - SP">Diploma de Especialización en el SIAF - SP</option>
                          <option value="Diploma de Especialización en Gestión de Recursos Humanos">Diploma de Especialización en Gestión de Recursos Humanos</option>
                          <option value="Diploma de Especialización en Gestión y Control Patrimonial de Bienes Estatales">Diploma de Especialización en Gestión y Control Patrimonial de Bienes Estatales</option>
                          <option value="Diploma de Especialización en Diploma de Gestión de Almacenes">Diploma de Especialización en Diploma de Gestión de Almacenes</option>
                          <option value="Diploma de Especialización en Derecho Administrativo">Diploma de Especialización en Derecho Administrativo</option>
                          <option value="Diploma de Especialización en Derecho Penal en la Función Pública">Diploma de Especialización en Derecho Penal en la Función Pública</option>
                          <option value="Diploma de Especialización en Asistente de Gerencia">Diploma de Especialización en Asistente de Gerencia</option>
                        </select>
                      </div>
                      <div>
                        <label>Comentario:</label><br />
                        <textarea name="comentario" rows="3" style={inputStyle}></textarea>
                      </div>
                      <button type="submit" style={{ width: '100%' }}>Enviar solicitud</button>
                    </>
                  );
                })()}
            </form>
        </div>
    </>
);

export default Diplomas_Catalogos;