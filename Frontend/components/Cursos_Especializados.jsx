import React from 'react';
import DiplomaCard from '../props/PropInfo';

const diplomas = [
  {
    titulo: 'GESTION PUBLICA Y MODERNIZACION DEL ESTADO',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/react.png',
    colorFondo: '#e3f2fd',
    colorTexto: '#1565c0',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-publica-y-modernizacion-del-estado'
  },
  {
    titulo: 'PLANEAMIENTO ESTRATEGICO',
    descripcion: 'Modalidad: Presencial',
    imagen: '/img/node.png',
    colorFondo: '#e8f5e9',
    colorTexto: '#2e7d32',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/planeamiento-estrategico'
  },
  {
    titulo: 'SISTEMA NACIONAL DE INVERSIONES INVIERTE.PE',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/python.png',
    colorFondo: '#fff3e0',
    colorTexto: '#ef6c00',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/sistema-nacional-de-inversiones-invierte-pe'
  },
  {
    titulo: 'OBRAS PUBLICAS POR ADMINISTRACION DIRECTA',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/data-science.png',
    colorFondo: '#f3e5f5',
    colorTexto: '#6a1b9a',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/obras-publicas-por-administracion-directa'
  },
  {
    titulo: 'OFIMATICA PROFESIONAL 2025',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/devops.png',
    colorFondo: '#e0f7fa',
    colorTexto: '#00838f',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/ofimatica-profesional-2025'
  },
  {
    titulo: 'GESTION DE CONTRATACIONES DEL ESTADO',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/uxui.png',
    colorFondo: '#fce4ec',
    colorTexto: '#ad1457',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-de-contrataciones-del-estado'
  },
  {
    titulo: 'GESTION DE PRESUPUESTO PUBLICO',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/cybersecurity.png',
    colorFondo: '#ede7f6',
    colorTexto: '#4527a0',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-de-presupuesto-publico'
  },
  {
    titulo: 'CURSO ESPECIALIZADO: GESTIÓN DOCUMENTAL Y ARCHIVOS ELECTRÓNICOS',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/ai.png',
    colorFondo: '#fffde7',
    colorTexto: '#f9a825',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-documental-y-archivos-electronicos'
  },
  {
    titulo: 'ASISTENTE DE GERENCIA Y SECRETARIAS',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/cloud.png',
    colorFondo: '#e1f5fe',
    colorTexto: '#0277bd',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/asistente-de-gerencia-y-secretarias'
  }
];

const Cursos_Especializados = () => (
  <div>
    <h2>Cursos Especializados</h2>
    <p>Instituto de gerencia Intercontinental</p>
    <div className="diplomas-container">
      {diplomas.map((diploma, idx) => (
        <DiplomaCard
          key={diploma.link}
          titulo={diploma.titulo}
          descripcion={diploma.descripcion}
          imagen={diploma.imagen}
          colorFondo={diploma.colorFondo}
          colorTexto={diploma.colorTexto}
          inicioClases={diploma.inicioClases}
          certificado={diploma.certificado}
          style={((idx + 1) % 3 === 0) ? { marginRight: 0 } : {}}
          boton={
            <a
              href={`${diploma.link}?titulo=${encodeURIComponent(diploma.titulo)}&inicioClases=${encodeURIComponent(diploma.inicioClases)}`}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                background: diploma.colorTexto,
                color: diploma.colorFondo,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: '8px 16px',
                textDecoration: 'none'
              }}
            >
              Más información
            </a>
          }
        />
      ))}
    </div>
  </div>
);

export default Cursos_Especializados;