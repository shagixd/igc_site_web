import React from 'react';
import {SlArrowRight} from 'react-icons/sl';
import CardCursos from '../props/PlantillaCursos.jsx';
import '../public/styles/Congresos.css'; // Asegúrate de tener este archivo CSS

const congresos = [
  {
    titulo: 'CONGRESO INTERNACIONAL DE ASISTENTES DE GERENCIA Y SECRETARIAS',
    descripcion: 'Actualízate en normativas y tendencias tributarias.',
    imagen: '/img/congreso-tributacion.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-internacional-asistentes-gerencia'
  },
  {
    titulo: 'CONGRESO DE INNOVACION SECRETARIAL Y TECNOLOGIA',
    descripcion: 'Innovación y buenas prácticas en la gestión pública.',
    imagen: '/img/congreso-gestion.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-innovacion-secretarial'
  },
  {
    titulo: '12° Congreso Nacional de secretarias y Asistentes de Gerencia en Gestión Pública',
    descripcion: 'Nuevas estrategias en finanzas estatales.',
    imagen: '/img/congreso-finanzas.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-nacional-secretarias-12'
  },
  {
    titulo: 'Congreso Internacional de Gerencia y Gestión de finanzas públicas',
    descripcion: 'Tendencias en gestión de talento en el sector público.',
    imagen: '/img/congreso-rrhh.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-gerencia-finanzas-publicas'
  },
  {
    titulo: '11° congreso nacional de secretarias y asistentes de gerencia en gestión pública',
    descripcion: 'Ética y transparencia en la función pública.',
    imagen: '/img/congreso-etica.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-nacional-secretarias-11'
  },
  {
    titulo: 'XIV congreso nacional de asistentes de gerencia y secretaria',
    descripcion: 'Nuevas tecnologías en la administración pública.',
    imagen: '/img/congreso-tecnologia.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-nacional-asistentes-xiv'
  },
  {
    titulo: 'IV congreso nacional de presupuesto y finanzas públicos.',
    descripcion: 'Desarrollo sostenible y políticas públicas.',
    imagen: '/img/congreso-sostenible.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-nacional-presupuesto-iv'
  },
  {
    titulo: '3er. Congreso Nacional de Presupuesto Público y Gestión de Finanzas Públicas',
    descripcion: 'Liderazgo y gestión del cambio en el sector público.',
    imagen: '/img/congreso-liderazgo.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-nacional-presupuesto-3er'
  },
  {
    titulo: '2do. Congreso Internacional de Gerencia y Gestión De Finanzas Públicas',
    descripcion: 'Innovación en servicios públicos y atención al ciudadano.',
    imagen: '/img/congreso-servicios.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-internacional-gerencia-2do'
  },
  {
    titulo: '1er. Congreso Nacional de Administración Financiera del Sector Publico',
    descripcion: 'Estrategias de comunicación efectiva en el sector público.',
    imagen: '/img/congreso-comunicacion.png',
    inicioClases: 'Agosto 2024',
    colorFondo: '#00825f',
    certificado: 'Participación',
    link: '/congresos/congreso-nacional-administracion-1er'
  }
];

const Congresos = () => (
  <>
      <div className='titulo-congresos'>
          <h2>CONGRESOS Y EVENTOS</h2>
          <p>Instituto de gerencia Intercontinental</p>
      </div>
        <div className="congresos-container">
            {congresos.map((congreso, index) => (
                <div
                    key={congreso.link}
                    className="card-container"
                    style={{ '--color-fondo': congreso.colorFondo, animationDelay: `${index * 0.1}s` }}>
                    <CardCursos
                        /*titulo={congreso.titulo}*/
                        imagen={congreso.imagen}
                        /*descripcion={congreso.descripcion}*/
                        colorFondo={congreso.colorFondo}
                        inicioClases={congreso.inicioClases}
                        certificado={congreso.certificado}
                        boton={
                            <a href={`${congreso.link}?titulo=${encodeURIComponent(congreso.titulo)}&inicioClases=${encodeURIComponent(congreso.inicioClases)}`}
                               className="btn">
                                Ver mas <SlArrowRight style={{ fontSize: 'clamp(8px, 0.8vw, 14px)', marginLeft: '4px' }} /> </a>
                        }/>
                </div>
            ))}
        </div>
    </>
);

export default Congresos;