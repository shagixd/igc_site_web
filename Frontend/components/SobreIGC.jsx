import React, { useState, useEffect , useRef} from 'react';
import '../public/styles/SobreIGC.css'; 
import BotonConsultodo from '../props/BotonConsultodo';

export default function Sobreigc() {
  const [seccion5Visible, setSeccion5Visible] = useState(false);
  const seccion5Ref = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeccion5Visible(true);
          observer.disconnect(); // Solo una vez
        }
      },
      { threshold: 0.3 }
    );
    if (seccion5Ref.current) {
      observer.observe(seccion5Ref.current);
    }
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
    
      <div className='seccion1'>
        <div className="seccion1-texto">
          <h2>Sobre Nosotros</h2>
          <p>Desde 2003, el IGC ofrece programas de especialización y capacitación en gestión pública, 
              actividad empresarial, áreas administrativas, financieras y tecnología de la información, 
              impulsando el desarrollo profesional y fortaleciendo la creación de valor en las organizaciones</p>
        </div>
        <div className="seccion1-img">
          <img src="/img/INICIO1.jpg" alt="imagen referencial" />
        </div>
      </div>

      <div className='seccion2'>
        <div className="seccion2-img">
          <img src="/img/INICIO2.jpg" alt="imagen referencial" />
        </div>
        <div className="seccion2-texto">
          <h3>OBJETIVO</h3>
          <h2>Impulsa tu desarrollo profesional con excelencia.</h2>
          <p>A través de nuestros programas buscamos:</p>
          <ul>
            <li>Perfeccionar a profesionales, técnicos y administrativos en su sector.</li>
            <li>Fortalecer la práctica profesional mediante estrategias de gestión.</li>
            <li>Actualizar conocimientos en ciencias administrativas, contables, económicas y tecnología.</li>
          </ul>
          < BotonConsultodo texto="Contactanos"/>
        </div>
      </div>

      <div className='seccion3'>
        <div className="seccion3-superior">
          <div className="seccion3-caja">
            <div style={{ fontSize: '2.5rem', textAlign: 'center', width: '100%', border: 'none', background: 'none', boxShadow: 'none' }}>🌟</div>
            <h3>Visión</h3>
            <p>Ser líderes en la industria de la capacitación convirtiéndonos en el aliado estratégico de las organizaciones y en el desarrollo del talento profesional y empresarial.</p>
          </div>
          <div className="seccion3-caja">
            <div style={{ fontSize: '2.5rem', textAlign: 'center', width: '100%', border: 'none', background: 'none', boxShadow: 'none' }}>🎯</div>
            <h3>Misión</h3>
            <p>Desarrollar Soluciones Estratégicas de Aprendizaje vanguardistas y orientadas a resultados para profesionales competentes bajo el desarrollo integral de conocimientos, habilidades, aptitudes y actitudes para potencializar la productividad individual y organizacional.</p>
          </div>
        </div>
        <div className="seccion3-metodologia">
          <h3>Metodología</h3>
          <p>La metodología de la capacitación es con enfoque Andragógico, a través del cual se considera la enseñanza para adultos incorporando principios fundamentales como la participación, experiencia horizontalidad y flexibilidad. También se aplicará la metodología teórica y práctica, mediante el desarrollo de casos de aplicación de la Ley del Procedimiento Administrativo General con exposiciones de alto contenido en las que se propiciará el diálogo y el intercambio de experiencias entre el profesor y los participantes.</p>
        </div>
      </div>

      <div className='seccion4'>
        <div className='seccion4-texto'>
          <h3>¿Que ofrecemos?</h3>
          <h2>Nuestros servicios</h2>
          <p>Brindamos programas de capacitación y especialización diseñados para fortalecer el desempeño profesional en sectores públicos y privados.</p>
        </div>
        <div className='seccion4-cajas'>
          <div className='caja-1'>
              <img src="/img/i1.png" alt="img" />
              <h3>Programas de Educación Ejecutiva</h3>
              <p>Capacitación para profesionales en gestión pública y empresarial, fortaleciendo competencias administrativas y de liderazgo.</p>
          </div>
          <div className='caja-2'>
              <img src="/img/i2.png" alt="img" />
              <h3>Congresos</h3>
              <p>Organización de congresos, foros y convenciones de alto impacto a nivel nacional e internacional.</p>
          </div>
          <div className='caja-3'>
              <img src="/img/i3.png" alt="img" />
              <h3>Cursos de Especializacion</h3>
              <p>Programas técnicos y operativos en gestión administrativa, financiera y tecnológica para el sector público y privado</p>
          </div>
          <div className='caja-4'>
              <img src="/img/i4.png" alt="img" />
              <h3>Cursos In-House a Medida</h3>
              <p>Diseño personalizado de programas de capacitación adaptados a las necesidades específicas de empresas y entidades públicas.</p>
          </div>
          <div className='caja-5'>
              <img src="/img/i5.png" alt="img" />
              <h3>Diplomas de Especializacion</h3>
              <p>Formación de nivel postgrado en áreas como administración, contabilidad, finanzas, logística, TI y habilidades blandas.</p>
          </div>
        </div>
        <div
          className={`seccion5${seccion5Visible ? ' visible' : ''}`}
          ref={seccion5Ref}>
          <img src="/img/I-1.png" alt="1" /><img src="/img/I-2.png" alt="2" /><img src="/img/I-3.jpg" alt="3" /><img src="/img/I-4.jpg" alt="4" /><img src="/img/I-5.png" alt="5" />
        </div>
      </div>
    </>
  );
}