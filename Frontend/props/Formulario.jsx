import React from 'react';

const cursos = [
  "El Nuevo Sistema de Inversión Pública Invierte.pe",
  "Gestión Pública",
  "Planeamiento Estratégico",
  "Finanzas Públicas",
  "Presupuesto Público por Resultados",
  "Gestión Financiera y Operaciones de Tesorería",
  "Gestión de Contabilidad Gubernamental",
  "Normas Internacionales de Contabilidad NICs Sector Público",
  "Gestión Tributaria: Detracciones, Percepciones y Retenciones",
  "Sistemas Electrónicos En La Gestión Pública",
  "Sistema Integrado de Administración Financiera – SIAF",
  "Sistema Integrado de Gestión Administrativa – SIGA",
  "Gestión Operativa y Práctica del SEACE",
  "Sistema De Abastecimiento Y Contrataciones Públicas",
  "Gestión del Abastecimiento Público como sistema",
  "Gestión de las Contrataciones del Estado",
  "Gestión y Control Patrimonial de Bienes Estatales",
  "Administración de Almacenes",
  "Gestión de Obras Públicas",
  "Auditoria Y Control Gubernamental",
  "Gestión de Control Interno",
  "Control Previo y su Fiscalización en la Gestión Pública",
  "Delitos de Corrupción en la Administración Pública",
  "Ética y Ley de Transparencia en la Función Pública",
  "Derecho Administrativo Público",
  "Derecho Administrativo",
  "Procedimiento Administrativo General",
  "Derecho Administrativo y el Proceso Contencioso Administrativo",
  "Gestión del Fedatario Gubernamental",
  "Gestión De Recursos Humanos Y Servicio Civil",
  "Régimen Disciplinario y Procedimiento Sancionador",
  "Sistemas Pensionarios, Beneficios Sociales en los Regímenes Laborales",
  "Procesos Administrativos Disciplinarios",
  "Formulación de los Documentos de Gestión: ROF-MOF-CAP-MAPROS",
  "Gestión de Planillas Electrónicas",
  "Cursos De Habilidades Blandas",
  "Redacción Administrativa de Documentos",
  "Gestión Documentaría y Tecnología de Archivos",
  "Liderazgo, Motivación y Gestión de Equipos",
  "Asistentes de Gerencia y Alta Dirección",
  "Gestión Empresarial",
  "Gestión Laboral",
  "Administración Logística",
  "Gestión de Finanzas",
  "Gestión Tributaria",
  "Gestión de Recursos Humanos",
  "Seguridad y Salud en el Trabajo Administrativo",
  "Ofimática."
];

const inputStyle = { width: '100%', marginBottom: '12px', boxSizing: 'border-box' };

const FormularioCursosCatalogo = () => (
  <form method="post" action="" style={{ maxWidth: '400px', margin: '32px auto', padding: '16px', boxSizing: 'border-box' }}>
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
      <label>Catálogo de Cursos:</label><br />
      <select name="catalogo" required defaultValue="" style={inputStyle}>
        <option value="" disabled>Seleccione un curso</option>
        {cursos.map((curso, idx) => (
          <option key={idx} value={curso}>{curso}</option>
        ))}
      </select>
    </div>
    <div>
      <label>Comentario:</label><br />
      <textarea name="comentario" rows="3" style={inputStyle}></textarea>
    </div>
    <button type="submit" style={{ width: '100%' }}>Enviar solicitud</button>
  </form>
);

export default FormularioCursosCatalogo;
