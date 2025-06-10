import React from 'react';
import DiplomaCard from '../props/PropInfo';

const diplomas = [
  {
    titulo: 'Diploma de Especialización Siaf Rp – Siga y Seace',
    descripcion: 'Aprende a crear aplicaciones web modernas con React.',
    imagen: '/img/react.png',
    colorFondo: '#e3f2fd',
    colorTexto: '#1565c0',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/siaf-rp-siga-seace'
  },
  {
    titulo: 'Diploma de Asistente Administrativa en Gestión Pública',
    descripcion: 'Domina el backend con Node.js y Express.',
    imagen: '/img/node.png',
    colorFondo: '#e8f5e9',
    colorTexto: '#2e7d32',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/asistente-administrativa-gestion-publica'
  },
  {
    titulo: 'Diploma Redacción de documentos administrativos',
    descripcion: 'Automatiza y desarrolla con Python.',
    imagen: '/img/python.png',
    colorFondo: '#fff3e0',
    colorTexto: '#ef6c00',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/redaccion-documentos-administrativos'
  },
  {
    titulo: 'DIPLOMA DE PLANEAMIENTO Y PRESUPUESTO PÚBLICO',
    descripcion: 'Analiza datos y crea modelos predictivos.',
    imagen: '/img/data-science.png',
    colorFondo: '#f3e5f5',
    colorTexto: '#6a1b9a',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/planeamiento-presupuesto-publico'
  },
  {
    titulo: 'DIPLOMA DE GESTIÓN DOCUMENTAL Y ARCHIVOS',
    descripcion: 'Implementa CI/CD y automatización de infraestructuras.',
    imagen: '/img/devops.png',
    colorFondo: '#e0f7fa',
    colorTexto: '#00838f',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/gestion-documental-archivos'
  },
  {
    titulo: 'Diploma de asistente de gerencia administrativa',
    descripcion: 'Diseña experiencias de usuario atractivas.',
    imagen: '/img/uxui.png',
    colorFondo: '#fce4ec',
    colorTexto: '#ad1457',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/asistente-gerencia-administrativa'
  },
  {
    titulo: 'DIPLOMA DE SISTEMA NACIONAL DE ABASTECIMIENTO',
    descripcion: 'Protege sistemas y redes de amenazas.',
    imagen: '/img/cybersecurity.png',
    colorFondo: '#ede7f6',
    colorTexto: '#4527a0',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/sistema-nacional-abastecimiento'
  },
  {
    titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN EL SIAF-SP',
    descripcion: 'Desarrolla soluciones con IA y Machine Learning.',
    imagen: '/img/ai.png',
    colorFondo: '#fffde7',
    colorTexto: '#f9a825',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/siaf-sp'
  },
  {
    titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN TRIBUTACIÓN',
    descripcion: 'Trabaja con servicios en la nube.',
    imagen: '/img/cloud.png',
    colorFondo: '#e1f5fe',
    colorTexto: '#0277bd',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/tributacion'
  },
  {
    titulo: 'DIPLOMA DE ESPECIALIZACIÓN PLANIFICACIÓN Y PRESUPUESTO PÚBLICO POR RESULTADOS',
    descripcion: 'Desarrolla aplicaciones descentralizadas.',
    imagen: '/img/blockchain.png',
    colorFondo: '#f9fbe7',
    colorTexto: '#827717',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/planificacion-presupuesto-publico-resultados'
  },
  {
    titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN GESTIÓN FINANCIERA Y TESORERÍA GUBERNAMENTAL',
    descripcion: 'Crea aplicaciones robustas con Java.',
    imagen: '/img/java.png',
    colorFondo: '#fbe9e7',
    colorTexto: '#d84315',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/gestion-financiera-tesoreria-gubernamental'
  },
  {
    titulo: 'DIPLOMA DE ESPECIALIZACIÓN ADMINISTRACIÓN FINANCIERA GUBERNAMENTAL',
    descripcion: 'Desarrolla sitios web dinámicos con PHP.',
    imagen: '/img/php.png',
    colorFondo: '#e1bee7',
    colorTexto: '#6d4c41',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/administracion-financiera-gubernamental'
  },
  {
    titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN FINANZAS PÚBLICAS',
    descripcion: 'Desarrolla apps móviles modernas.',
    imagen: '/img/kotlin.png',
    colorFondo: '#f3e5f5',
    colorTexto: '#512da8',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/finanzas-publicas'
  },
  {
    titulo: 'DIPLOMA DE REDACCIÓN DE DOCUMENTAS Y ORTOGRAFÍA EFICAZ',
    descripcion: 'Crea aplicaciones para iOS.',
    imagen: '/img/swift.png',
    colorFondo: '#fff8e1',
    colorTexto: '#ff6f00',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/redaccion-documentos-ortografia-eficaz'
  },
  {
    titulo: 'DIPLOMA DE SISTEMAS INFORMÁTICOS DE GESTIÓN PÚBLICA 2022',
    descripcion: 'Desarrolla aplicaciones SPA con Angular.',
    imagen: '/img/angular.png',
    colorFondo: '#ffebee',
    colorTexto: '#b71c1c',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/diplomas/sistemas-informaticos-gestion-publica-2022'
  }
];

const Diplomas_Especialidad = () => (
  <div>
    <h2>Diplomas de Especializacion</h2>
    <p>Instituto de gerencia Intercontinental</p>
    <div className="diplomas-container">
      {diplomas.map((diploma, idx) => (
        <DiplomaCard
          key={diploma.link}
          titulo={diploma.titulo}
          //descripcion={diploma.descripcion}//
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

export default Diplomas_Especialidad;