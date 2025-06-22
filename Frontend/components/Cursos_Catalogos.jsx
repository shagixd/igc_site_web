import React from 'react';
import FormularioCatalogo from '../props/Formulario';

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

function Cursos_Catalogos() {
  return (
    <div className='fondo-catalogo' style={{ background: 'black'}}>
      <h2 className="catalogo-title">Catalogo de Cursos</h2>
      <p className="catalogo-desc">Solicita el curso en la cual quieres especializarte y potenciar tu conocimiento para mejorar tus oportunidades laborales.</p>
      <FormularioCatalogo
        opciones={cursos}
        labelSelect="Catálogo de Cursos"
        placeholderSelect="Seleccione un curso"
      />
    </div>
  );
}

export default Cursos_Catalogos;