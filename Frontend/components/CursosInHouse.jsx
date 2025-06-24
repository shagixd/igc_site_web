import React, { useState, useEffect } from 'react';
import FormularioCursosCatalogo from '../props/Formulario';
import '../public/styles/House.css'; // <-- Vincula el CSS aquí
import BotonConsultodo from '../props/BotonConsultodo';

const seccion2Data = [
  {
    icon: <span role="img" aria-label="Conferencia">🎤</span>,
    titulo: 'Soluciones prácticas actualizadas',
    descripcion: 'Proporcionamos herramientas actualizadas para soluciones prácticas que se ajustan a la realidad, permitiendo su aplicación directa en Organizaciones e Instituciones.'
  },
  {
    icon: <span role="img" aria-label="Curso">📚</span>,
    titulo: 'Conferencias personalizadas',
    descripcion: 'Ofrecemos conferencias y seminarios en entornos agradables, abordando temas relevantes para el sector institucional.'
  },
  {
    icon: <span role="img" aria-label="Diplomado">🎓</span>,
    titulo: 'Cursos a medida',
    descripcion: 'Adaptamos cursos a las necesidades de cada entidad, empresa, gremio o asociación.'
  },
  {
    icon: <span role="img" aria-label="Taller">🛠️</span>,
    titulo: 'Diagnóstico y ejecución eficaz',
    descripcion: 'Realizamos una evaluación exhaustiva para desarrollar programas de capacitación prácticos y efectivos, que pueden impartirse en las instalaciones del cliente, garantizando el logro de los objetivos de capacitación.'
  }
];

const images = [
  "/img/inhouse-banner.jpg",
  "/img/inhouse-banner2.jpg",
  "/img/inhouse-banner3.jpg"
];

function CursosInHouse() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='fondo'>
        <div className='fondo-texto'>
          <h1>Programas de Capacitación IN HOUSE</h1>
          <p>Ofrecemos una amplia gama de servicios que incluyen conferencias, cursos, diplomados, seminarios y talleres. Nuestros programas están diseñados para satisfacer las necesidades específicas de su institución o área en particular.</p>
          <BotonConsultodo texto="Contactanos" />
        </div>
      </div>

      <div className='seccion2-contenedor'>
        <div className='seccion2-main'>
          <div className='seccion2-list'>
            {seccion2Data.map((item, i) => (
              <div key={i} className='icon-block'>
                <div className="icon-block-content">
                  <span className="icon-block-icon">
                    {item.icon}
                  </span>
                  <div>
                    <h4 style={{ margin: 0 }}>{item.titulo}</h4>
                    <p style={{ margin: 0 }}>{item.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='seccion2-image'>
          <img src={images[current]} alt="IN HOUSE" className="seccion2-img"/>
        </div>
      </div>
      <h3 className='sub_titulo'>Completa el formulario y te ayudaremos a preparar la capacitación para tu entidad.</h3>
      <div className='formulario-cursos'>
        <FormularioCursosCatalogo />
      </div>
    </>
  );
}

export default CursosInHouse;