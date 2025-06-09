import React from 'react';
import DiplomaCard from '../props/PropInfo';

const congresos = [
  {
    titulo: 'CONGRESO INTERNACIONAL DE ASISTENTES DE GERENCIA Y SECRETARIAS',
    descripcion: 'Actualízate en normativas y tendencias tributarias.',
    imagen: '/img/congreso-tributacion.png',
    colorFondo: '#e3f2fd',
    colorTexto: '#1565c0',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: 'CONGRESO INTERNACIONAL DE ASISTENTES DE GERENCIA Y SECRETARIAS',
    descripcion: 'Innovación y buenas prácticas en la gestión pública.',
    imagen: '/img/congreso-gestion.png',
    colorFondo: '#e8f5e9',
    colorTexto: '#2e7d32',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: 'CONGRESO INTERNACIONAL DE ASISTENTES DE GERENCIA Y SECRETARIAS',
    descripcion: 'Nuevas estrategias en finanzas estatales.',
    imagen: '/img/congreso-finanzas.png',
    colorFondo: '#fff3e0',
    colorTexto: '#ef6c00',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: 'C12° Congreso Nacional de secretarias y Asistentes de Gerencia en Gestión Pública',
    descripcion: 'Profundiza en procesos y normativas de contrataciones.',
    imagen: '/img/congreso-contrataciones.png',
    colorFondo: '#f3e5f5',
    colorTexto: '#6a1b9a',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: 'Congreso Internacional de Gerencia y Gestión de finanzas públicas',
    descripcion: 'Tendencias en gestión de talento en el sector público.',
    imagen: '/img/congreso-rrhh.png',
    colorFondo: '#e0f7fa',
    colorTexto: '#00838f',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: '11° congreso nacional de secretarias y asistentes de gerencia en gestión pública',
    descripcion: 'Ética y transparencia en la función pública.',
    imagen: '/img/congreso-etica.png',
    colorFondo: '#fce4ec',
    colorTexto: '#ad1457',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: 'XIV congreso nacional de asistentes de gerencia y secretaria',
    descripcion: 'Nuevas tecnologías en la administración pública.',
    imagen: '/img/congreso-tecnologia.png',
    colorFondo: '#ede7f6',
    colorTexto: '#4527a0',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: 'IV congreso nacional de presupuesto y finanzas públicos.',
    descripcion: 'Desarrollo sostenible y políticas públicas.',
    imagen: '/img/congreso-sostenible.png',
    colorFondo: '#fffde7',
    colorTexto: '#f9a825',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: '3er. Congreso Nacional de Presupuesto Público y Gestión de Finanzas Públicas',
    descripcion: 'Liderazgo y gestión del cambio en el sector público.',
    imagen: '/img/congreso-liderazgo.png',
    colorFondo: '#e3f2fd',
    colorTexto: '#1565c0',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: '2do. Congreso Internacional de Gerencia y Gestión De Finanzas Públicas',
    descripcion: 'Innovación en servicios públicos y atención al ciudadano.',
    imagen: '/img/congreso-servicios.png',
    colorFondo: '#e8f5e9',
    colorTexto: '#2e7d32',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  },
  {
    titulo: '1er. Congreso Nacional de Administración Financiera del Sector Publico',
    descripcion: 'Estrategias de comunicación efectiva en el sector público.',
    imagen: '/img/congreso-comunicacion.png',
    colorFondo: '#fff3e0',
    colorTexto: '#ef6c00',
    inicioClases: 'Agosto 2024',
    certificado: 'Certificado de Participación'
  }
];

const Congresos = () => (
  <div>
    <h2>Congresos</h2>
    <p>Instituto de Gerencia Intercontinental</p>
    <div className="diplomas-container">
      {congresos.map((congreso, idx) => (
        <DiplomaCard
          key={idx}
          titulo={congreso.titulo}
          //descripcion={congreso.descripcion}//
          imagen={congreso.imagen}
          colorFondo={congreso.colorFondo}
          colorTexto={congreso.colorTexto}
          inicioClases={congreso.inicioClases}
          certificado={congreso.certificado}
          style={((idx + 1) % 3 === 0) ? { marginRight: 0 } : {}}
        />
      ))}
    </div>
  </div>
);

export default Congresos;