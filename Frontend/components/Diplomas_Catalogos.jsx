import React from 'react';
import FormularioCatalogo from '../props/Formulario';

const diplomas = [
  "Diploma de Especialización de Tributación",
  "Diploma de Especialización Planificación y Presupuesto Público por Resultados",
  "Diploma de Especialización en gestión Financiera y Tesorería Gubernamental",
  "Diploma de Especialización Administración Financiera Gubernamental",
  "Diploma de Especialización en Finanzas Públicas",
  "Diploma de Especialización en Gestión y Gerencia Pública",
  "Diploma de Especialización en Gestión Logística y Contrataciones del Estado",
  "Diploma de Especialización en el SIAF - SP",
  "Diploma de Especialización en Gestión de Recursos Humanos",
  "Diploma de Especialización en Gestión y Control Patrimonial de Bienes Estatales",
  "Diploma de Especialización en Diploma de Gestión de Almacenes",
  "Diploma de Especialización en Derecho Administrativo",
  "Diploma de Especialización en Derecho Penal en la Función Pública",
  "Diploma de Especialización en Asistente de Gerencia"
];

const Diplomas_Catalogos = () => (
    <>
        <div>
            <h2 className="catalogo-title">Catálogo de Diplomas</h2>
            <p className="catalogo-desc">Solicita el diploma en el cual quieres especializarte y potenciar tu conocimiento para mejorar tus oportunidades laborales.</p>
        </div>
        
        <div>
            <FormularioCatalogo
              opciones={diplomas}
              labelSelect="Catálogo de Diplomas"
              placeholderSelect="Seleccione un diploma"
            />
        </div>
    </>
);

export default Diplomas_Catalogos;