import React from 'react';
import { FaClipboardList, FaUniversity, FaLaptopCode, FaBoxes } from 'react-icons/fa';
import FormularioSimple from '../props/FormularioSimple';

function Asesoria_Consultoria() {
  return (
    <>
      <div className='fondo'>
        <div>
          <h1>Programas de Capacitación IN HOUSE</h1>
          <p>Ofrecemos una amplia gama de servicios que incluyen conferencias, cursos, diplomados, seminarios y talleres. Nuestros programas están diseñados para satisfacer las necesidades específicas de su institución o área en particular.</p>
          <button>Consulte al whatssap</button>
        </div>
        <div>
          <div className='1'>
            <FaClipboardList style={{ fontSize: '2rem', color: '#007bff' }} />
            <h3>Consultoría en sistemas administrativos</h3>
            <p>Brindamos asesoría integral en áreas clave de la gestión administrativa, incluyendo administración general, finanzas, logística y control de inventarios. Nuestro enfoque permite optimizar recursos, mejorar la eficiencia operativa y garantizar el cumplimiento de las normativas vigentes en el sector público y privado.</p>
          </div>
        </div>
        <div className='2'>
          <FaUniversity style={{ fontSize: '2rem', color: '#007bff' }} />
          <h3>Asesoría en gestión pública</h3>
          <p>Ofrecemos acompañamiento especializado en procesos relacionados con la administración del Estado, normativas públicas, políticas institucionales y gestión por resultados. Nuestra asesoría permite a entidades estatales y mixtas cumplir sus objetivos de forma efectiva, ética y alineada con el marco legal peruano.</p>
        </div>
        <div className='3'>
          <FaLaptopCode style={{ fontSize: '2rem', color: '#007bff' }} />
          <h3>Consultorías informáticas</h3>
          <p>Apoyamos a organizaciones en la implementación, mantenimiento y optimización de soluciones tecnológicas. Desde sistemas de información hasta plataformas digitales personalizadas, brindamos estrategias modernas de transformación digital adaptadas a las necesidades de cada cliente, asegurando escalabilidad y seguridad en cada proyecto.</p>
        </div>
        <div className='4'>
          <FaBoxes style={{ fontSize: '2rem', color: '#007bff' }} />
          <h3>Inventario de bienes</h3>
          <p>Realizamos levantamientos, actualización y control de inventarios de bienes muebles e inmuebles, utilizando metodologías técnicas y herramientas digitales. Garantizamos la trazabilidad, clasificación adecuada y valorización conforme a estándares institucionales, contribuyendo a una gestión patrimonial ordenada y transparente.</p>
        </div>
      </div>
      <div>
        <h3>¡Solicita una cotización sin costo y compromiso!</h3>
        <FormularioSimple />
      </div>
    </>
  );
}

export default Asesoria_Consultoria;