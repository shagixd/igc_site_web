import React from 'react';
import DiplomaCard from '../props/PropInfo';
import '../public/styles/Diplomas_Especialidad.css'; // Asegúrate de tener este archivo CSS

const diplomas = [
	{
		titulo: 'Diploma de Especialización Siaf Rp – Siga y Seace',
		descripcion: 'Aprende a crear aplicaciones web modernas con React.',
		imagen: '/img/react.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/siaf-rp-siga-seace'
	},
	{
		titulo: 'Diploma de Asistente Administrativa en Gestión Pública',
		descripcion: 'Domina el backend con Node.js y Express.',
		imagen: '/img/node.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/asistente-administrativa-gestion-publica'
	},
	{
		titulo: 'Diploma Redacción de documentos administrativos',
		descripcion: 'Automatiza y desarrolla con Python.',
		imagen: '/img/python.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/redaccion-documentos-administrativos'
	},
	{
		titulo: 'DIPLOMA DE PLANEAMIENTO Y PRESUPUESTO PÚBLICO',
		descripcion: 'Analiza datos y crea modelos predictivos.',
		imagen: '/img/data-science.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/planeamiento-presupuesto-publico'
	},
	{
		titulo: 'DIPLOMA DE GESTIÓN DOCUMENTAL Y ARCHIVOS',
		descripcion: 'Implementa CI/CD y automatización de infraestructuras.',
		imagen: '/img/devops.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/gestion-documental-archivos'
	},
	{
		titulo: 'Diploma de asistente de gerencia administrativa',
		descripcion: 'Diseña experiencias de usuario atractivas.',
		imagen: '/img/uxui.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/asistente-gerencia-administrativa'
	},
	{
		titulo: 'DIPLOMA DE SISTEMA NACIONAL DE ABASTECIMIENTO',
		descripcion: 'Protege sistemas y redes de amenazas.',
		imagen: '/img/cybersecurity.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/sistema-nacional-abastecimiento'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN EL SIAF-SP',
		descripcion: 'Desarrolla soluciones con IA y Machine Learning.',
		imagen: '/img/ai.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/siaf-sp'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN TRIBUTACIÓN',
		descripcion: 'Trabaja con servicios en la nube.',
		imagen: '/img/cloud.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/tributacion'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN PLANIFICACIÓN Y PRESUPUESTO PÚBLICO POR RESULTADOS',
		descripcion: 'Desarrolla aplicaciones descentralizadas.',
		imagen: '/img/blockchain.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/planificacion-presupuesto-publico-resultados'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN GESTIÓN FINANCIERA Y TESORERÍA GUBERNAMENTAL',
		descripcion: 'Crea aplicaciones robustas con Java.',
		imagen: '/img/java.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/gestion-financiera-tesoreria-gubernamental'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN ADMINISTRACIÓN FINANCIERA GUBERNAMENTAL',
		descripcion: 'Desarrolla sitios web dinámicos con PHP.',
		imagen: '/img/php.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/administracion-financiera-gubernamental'
	},
	{
		titulo: 'DIPLOMA DE ESPECIALIZACIÓN EN FINANZAS PÚBLICAS',
		descripcion: 'Desarrolla apps móviles modernas.',
		imagen: '/img/kotlin.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/finanzas-publicas'
	},
	{
		titulo: 'DIPLOMA DE REDACCIÓN DE DOCUMENTAS Y ORTOGRAFÍA EFICAZ',
		descripcion: 'Crea aplicaciones para iOS.',
		imagen: '/img/swift.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/redaccion-documentos-ortografia-eficaz'
	},
	{
		titulo: 'DIPLOMA DE SISTEMAS INFORMÁTICOS DE GESTIÓN PÚBLICA 2022',
		descripcion: 'Desarrolla aplicaciones SPA con Angular.',
		imagen: '/img/angular.png',
		inicioClases: 'Julio 2024',
		certificado: 'Diploma de Especialidad',
		link: '/diplomas/sistemas-informaticos-gestion-publica-2022'
	}
];

const Diplomas_Especialidad = () => (
	<div>
		<div className="diplomas-titulo">
			<h2>Diplomas de Especializacion</h2>
			<p>Instituto de gerencia Intercontinental</p>
		</div>
		<div className="diplomas-container">
			{diplomas.map((diploma) => (
				<DiplomaCard 
					imagen={diploma.imagen}
					key={diploma.link}
					titulo={diploma.titulo}
					//descripcion={diploma.descripcion}//
					inicioClases={diploma.inicioClases}
					certificado={diploma.certificado}
					boton={
						<a
							href={`${diploma.link}?titulo=${encodeURIComponent(
								diploma.titulo
							)}&inicioClases=${encodeURIComponent(
								diploma.inicioClases
							)}`}
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