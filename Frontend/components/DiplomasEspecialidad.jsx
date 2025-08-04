import React from 'react';
import {SlArrowRight} from 'react-icons/sl';
import CardCursos from '../props/PlantillaCursos.jsx';
import '../public/styles/DiplomasEspecialidad.css'; // Asegúrate de tener este archivo CSS

const diplomas = [
	{
		titulo: 'Diploma de Especialización Siaf Rp – Siga y Seace',
		descripcion: 'Aprende a crear aplicaciones web modernas con React.',
		imagen: '/img/react.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/siaf-rp-siga-seace'
	},
	{
		titulo: 'Diploma de Asistente Administrativa en Gestión Pública',
		descripcion: 'Domina el backend con Node.js y Express.',
		imagen: '/img/node.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/asistente-administrativa-gestion-publica'
	},
	{
		titulo: 'Diploma Redacción de documentos administrativos',
		descripcion: 'Automatiza y desarrolla con Python.',
		imagen: '/img/python.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/redaccion-documentos-administrativos'
	},
	{
		titulo: 'DIPLOMA DE PLANEAMIENTO Y PRESUPUESTO PÚBLICO',
		descripcion: 'Analiza datos y crea modelos predictivos.',
		imagen: '/img/data-science.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/planeamiento-presupuesto-publico'
	},
	{
		titulo: 'DIPLOMA DE GESTIÓN DOCUMENTAL Y ARCHIVOS',
		descripcion: 'Implementa CI/CD y automatización de infraestructuras.',
		imagen: '/img/devops.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/gestion-documental-archivos'
	},
	{
		titulo: 'Diploma de asistente de gerencia administrativa',
		descripcion: 'Diseña experiencias de usuario atractivas.',
		imagen: '/img/uxui.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/asistente-gerencia-administrativa'
	},
	{
		titulo: 'DIPLOMA DE SISTEMA NACIONAL DE ABASTECIMIENTO',
		descripcion: 'Protege sistemas y redes de amenazas.',
		imagen: '/img/cybersecurity.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/sistema-nacional-abastecimiento'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN EL SIAF-SP',
		descripcion: 'Desarrolla soluciones con IA y Machine Learning.',
		imagen: '/img/ai.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/siaf-sp'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN TRIBUTACIÓN',
		descripcion: 'Trabaja con servicios en la nube.',
		imagen: '/img/cloud.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/tributacion'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN PLANIFICACIÓN Y PRESUPUESTO PÚBLICO POR RESULTADOS',
		descripcion: 'Desarrolla aplicaciones descentralizadas.',
		imagen: '/img/blockchain.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/planificacion-presupuesto-publico-resultados'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN GESTIÓN FINANCIERA Y TESORERÍA GUBERNAMENTAL',
		descripcion: 'Crea aplicaciones robustas con Java.',
		imagen: '/img/java.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/gestion-financiera-tesoreria-gubernamental'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN ADMINISTRACIÓN FINANCIERA GUBERNAMENTAL',
		descripcion: 'Desarrolla sitios web dinámicos con PHP.',
		imagen: '/img/php.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/administracion-financiera-gubernamental'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN FINANZAS PÚBLICAS',
		descripcion: 'Desarrolla apps móviles modernas.',
		imagen: '/img/kotlin.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/finanzas-publicas'
	},
	{
		titulo: 'DIPLOMA DE REDACCIÓN DE DOCUMENTAS Y ORTOGRAFÍA EFICAZ',
		descripcion: 'Crea aplicaciones para iOS.',
		imagen: '/img/swift.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/redaccion-documentos-ortografia-eficaz'
	},
	{
		titulo: 'DIPLOMA DE SISTEMAS INFORMÁTICOS DE GESTIÓN PÚBLICA 2022',
		descripcion: 'Desarrolla aplicaciones SPA con Angular.',
		imagen: '/img/angular.png',
		colorFondo: '#00825f',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/sistemas-informaticos-gestion-publica-2022'
	}
];

const DiplomasEspecialidad = () => (
    <>
        <div className='titulo-diplomas'>
            <h2>DIPLOMAS DE ESPECIALIZACION</h2>
            <p>Instituto de gerencia Intercontinental</p>
        </div>
        <div className="diplomas-container">
            {diplomas.map((diploma, index) => (
                <div
                    key={diploma.link}
                    className="card-container"
                    style={{ '--color-fondo': diploma.colorFondo, animationDelay: `${index * 0.1}s` }}
                >
                    <CardCursos
                        /*titulo={diploma.titulo}*/
                        imagen={diploma.imagen}
                        /*descripcion={diploma.descripcion}*/
                        colorFondo={diploma.colorFondo}
                        inicioClases={diploma.inicioClases}
                        certificado={diploma.certificado}
                        boton={
                            <a
                                href={`${diploma.link}?titulo=${encodeURIComponent(diploma.titulo)}&inicioClases=${encodeURIComponent(diploma.inicioClases)}`}
                                className="btn">
                                Ver mas <SlArrowRight style={{ fontSize: 'clamp(8px, 0.8vw, 14px)', marginLeft: '4px' }} />
                            </a>
                        }
                    />
                </div>
            ))}
        </div>
    </>
);

export default DiplomasEspecialidad;