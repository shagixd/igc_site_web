import React from 'react';
import FormularioEmail from '../props/FormularioEmail';
import BotonConsultodo from '../props/BotonConsultodo';
import '../public/styles/Consultoria.css'; // Asegúrate de tener este archivo CSS

function Consultoria() {
  return (
    <>
      <div className='asesoria-titulo'>
        <div className='asesoria-titulo-texto'>
          <h2>Asesoría y Consultoría</h2>
          <p>Proporcionamos consultorías en todos los ámbitos de la gestión pública y empresarial, con el objetivo de ofrecer las estrategias más efectivas para el crecimiento y desarrollo de instituciones y empresas. </p>
          < BotonConsultodo texto="Consulte al Whatssap" />
        </div>
      </div>


      <div className='contenedor-de-asesoria'>
        <div className="caja-flex">
          <div className='cubo-flex'>
            <span role="img">📋</span>
            <h3>Consultoría en sistemas administrativos</h3>
            <p>Brindamos asesoría integral en áreas clave de la gestión administrativa, incluyendo administración general, finanzas, logística y control de inventarios. Nuestro enfoque permite optimizar recursos, mejorar la eficiencia operativa y garantizar el cumplimiento de las normativas vigentes en el sector público y privado.</p>
          </div>
          <div className='cubo-flex'>
            <span role="img">🏛️</span>
            <h3>Asesoría en gestión pública</h3>
            <p>Ofrecemos acompañamiento especializado en procesos relacionados con la administración del Estado, normativas públicas, políticas institucionales y gestión por resultados. Nuestra asesoría permite a entidades estatales y mixtas cumplir sus objetivos de forma efectiva, ética y alineada con el marco legal peruano.</p>
          </div>
          <div className='cubo-flex'>
            <span role="img">💻</span>
            <h3>Consultorías informáticas</h3>
            <p>Apoyamos a organizaciones en la implementación, mantenimiento y optimización de soluciones tecnológicas. Desde sistemas de información hasta plataformas digitales personalizadas, brindamos estrategias modernas de transformación digital adaptadas a las necesidades de cada cliente, asegurando escalabilidad y seguridad en cada proyecto.</p>
          </div>
          <div className='cubo-flex'>
            <span role="img">📦</span>
            <h3>Inventario de bienes</h3>
            <p>Realizamos levantamientos, actualización y control de inventarios de bienes muebles e inmuebles, utilizando metodologías técnicas y herramientas digitales. Garantizamos la trazabilidad, clasificación adecuada y valorización conforme a estándares institucionales, contribuyendo a una gestión patrimonial ordenada y transparente.</p>
          </div>
        </div>
        <div className='asesoria-formulario'>
          <h3>¡Solicita una cotización sin costo y compromiso!</h3>
          <FormularioEmail 
                  opciones={["Diplomado en Gestión Pública", "Diplomado en Gerencia de Proyectos", "Diplomado en Gerencia de Obras Públicas"]}
                  placeholderSelect="Seleccione un Diplomado"/>
        </div>
      </div>
    </>
  );
}

export default Consultoria;