import React from 'react';
import '../public/styles/Formulario.css';

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

const FormularioCursosCatalogo = () => (
  <form
    method="post"
    action=""
    className="formulario-catalogo"
  >
    <div className="form-group">
      <label className="form-label">Nombre:</label>
      <input type="text" name="nombre" required className="form-input" />
    </div>
    <div className="form-group">
      <label className="form-label">Apellido:</label>
      <input type="text" name="apellido" required className="form-input" />
    </div>
    <div className="form-group">
      <label className="form-label">Correo:</label>
      <input type="email" name="correo" required className="form-input" />
    </div>
    <div className="form-group">
      <label className="form-label">Catálogo de Cursos:</label>
      <select name="catalogo" required defaultValue="" className="form-input">
        <option value="" disabled>Seleccione un curso</option>
        {cursos.map((curso, idx) => (
          <option key={idx} value={curso}>{curso}</option>
        ))}
      </select>
    </div>
    <div className="form-group">
      <label className="form-label">Comentario:</label>
      <textarea name="comentario" rows="3" className="form-input"></textarea>
    </div>
    <button type="submit" className="form-btn">Enviar solicitud</button>
  </form>
);

export default FormularioCursosCatalogo;
