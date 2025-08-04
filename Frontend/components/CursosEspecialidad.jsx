import React from 'react';
import CardCursos from '../props/PlantillaCursos.jsx';
import '../public/styles/CursosEspecialidad.css';
import { SlArrowRight } from "react-icons/sl";

const cursos = [
  {
    titulo: 'GESTION PUBLICA Y MODERNIZACION DEL ESTADO',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerGestionPublica.png',
    colorFondo: '#1565c0',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-publica-y-modernizacion-del-estado'
  },
  {
    titulo: 'PLANEAMIENTO ESTRATEGICO',
    descripcion: 'Modalidad: Presencial',
    imagen: '/img/BannerPlaneamientoEstrategico.png',
    colorFondo: '#2e7d32',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/planeamiento-estrategico'
  },
  {
    titulo: 'SISTEMA NACIONAL DE INVERSIONES INVIERTE.PE',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerInviertePE.png',
    colorFondo: '#ef6c00',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/sistema-nacional-de-inversiones-invierte-pe'
  },
  {
    titulo: 'OBRAS PUBLICAS POR ADMINISTRACION DIRECTA',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerObrasPublicasDirecta.png',
    colorFondo: '#404040',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/obras-publicas-por-administracion-directa'
  },
  {
    titulo: 'OFIMATICA PROFESIONAL 2025',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerOfimaticaProfesional.png',
    colorFondo: '#1200a1',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/ofimatica-profesional-2025'
  },
  {
    titulo: 'GESTION DE CONTRATACIONES DEL ESTADO',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerGestiondecontratacionesdelestado.png',
    colorFondo: '#910000',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-de-contrataciones-del-estado'
  },
  {
    titulo: 'GESTION DE PRESUPUESTO PUBLICO',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerPresupuestopublico.png',
    colorFondo: '#00825f',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-de-presupuesto-publico'
  },
  {
    titulo: 'CURSO ESPECIALIZADO: GESTIÓN DOCUMENTAL Y ARCHIVOS ELECTRÓNICOS',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerGestionDocumental.png',
    colorFondo: '#a16000',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/gestion-documental-y-archivos-electronicos'
  },
  {
    titulo: 'ASISTENTE DE GERENCIA Y SECRETARIAS',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/BannerAsistentedeGerencia.png',
    colorFondo: '#b302bd',
    inicioClases: 'Julio 2024',
    certificado: 'Diploma de Especialidad',
    link: '/cursos/asistente-de-gerencia-y-secretarias'
  }
];

const CursosEspecialidad = () => (
  <>
    <div className='titulo-cursos'>
      <h2>CURSOS DE GESTION PUBLICA</h2>
      <p>Instituto de gerencia Intercontinental</p>
    </div>
    <div className="cursos-container">
        {cursos.map((cursos, index) => (
          <div key={cursos.link} className="card-container" style={{ '--color-fondo': cursos.colorFondo, animationDelay: `${index * 0.1}s`  }}>
            <CardCursos
              /*titulo={diploma.titulo}*/
              imagen={cursos.imagen}
              descripcion={cursos.descripcion}
              colorFondo={cursos.colorFondo}
              inicioClases={cursos.inicioClases}
              certificado={cursos.certificado}
              boton={
                <a href={`${cursos.link}?titulo=${encodeURIComponent(cursos.titulo)}&inicioClases=${encodeURIComponent(cursos.inicioClases)}`}
                  className="btn">
                  Ver mas <SlArrowRight style={{fontSize: 'clamp(8px, 0.8vw, 14px)', justifyContent: 'center'}}/></a> 
              }
            />
          </div>
        ))}
    </div>
  </>
);

export default CursosEspecialidad;