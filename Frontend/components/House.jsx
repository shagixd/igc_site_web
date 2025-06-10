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

function House() {
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
        <div>
          <h1>Programas de Capacitación IN HOUSE</h1>
          <p>Ofrecemos una amplia gama de servicios que incluyen conferencias, cursos, diplomados, seminarios y talleres. Nuestros programas están diseñados para satisfacer las necesidades específicas de su institución o área en particular.</p>
          <BotonConsultodo texto="Contactanos" />
        </div>
      </div>

      <div
        className='seccion2-main'
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '32px',
          marginTop: '24px',
          alignItems: 'center'
        }}>
        <div
          className='seccion2-list'
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            flex: 1
          }}>
          {seccion2Data.map((item, i) => (
            <div key={i} className='icon-block'>
              <div className="icon-block-content">
                <span className="icon-block-icon">{item.icon}</span>
                <div>
                  <h4>{item.titulo}</h4>
                  <p>{item.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='seccion2-image' style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={images[current]}
            alt="IN HOUSE"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', objectFit: 'cover', transition: 'all 0.5s' }}
          />
        </div>
      </div>
      <h3>Completa el formulario y te ayudaremos a preparar la capacitación para tu entidad.</h3>
      <div className='formulario-cursos'>
        <FormularioCursosCatalogo />
      </div>
    </>
  );
}

export default House;