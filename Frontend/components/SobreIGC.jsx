import React, { useState, useEffect , useRef} from 'react';
import { FaBullseye, FaEye } from "react-icons/fa";
import '../public/styles/SobreIGC.css'; 
import BotonConsultodo from '../props/BotonConsultodo';
import { MdOutlineStarBorder } from "react-icons/md";

export default function Sobreigc() {
  const textos = [
  "Fortalece tu perfil.",
  "Lidera cambios",
  "Impulsa tu potencial",
  "Domina el conocimiento",
];

  const [seccion5Visible, setSeccion5Visible] = useState(false);
  const seccion5Ref = useRef(null);
  const [indice, setIndice] = useState(0);
  const [textoAnimado, setTextoAnimado] = useState("");

  // Animación rotativa del texto
    useEffect(() => {
      const intervalo = setInterval(() => {
        setIndice((prev) => (prev + 1) % textos.length);
      }, 5000);
      return () => clearInterval(intervalo);
    }, []);
  
    useEffect(() => {
      setTextoAnimado(""); // Reiniciar texto
      let i = 0;
      const texto = textos[indice];
      const timeout = setInterval(() => {
        setTextoAnimado(texto.slice(0, i + 1));
        i++;
        if (i === texto.length) clearInterval(timeout);
      }, 60);
  
      return () => clearInterval(timeout);
    }, [indice]);
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
      {/* Texto animado centrado */}
        <div className="fondo-inicio-central">
          <h3>INSTITUTO DE GERENCIA INTERNACIONAL</h3>
          <h2>{textoAnimado}</h2>
          <p>Integrate para un futuro más exitoso con nuestros cursos especializados</p>
        </div>

      <div className='seccion-1'>
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

      <div className='seccion-2'>
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

      <div className='seccion-3'>
          <div className="seccion3-vision">
            <div className='caja-icon'>< FaBullseye className='icon'/></div>
            <h3>Visión</h3>
            <p>Ser líderes en la industria de la capacitación, consolidándonos como el aliado estratégico preferido de las organizaciones, promoviendo el desarrollo continuo del talento profesional y empresarial mediante programas innovadores, eficaces y adaptados a las exigencias del entorno global y competitivo.</p>
          </div>
          <div className="seccion3-mision">
            <div className='caja-icon'>< FaEye className='icon'/></div>
            <h3>Misión</h3>
            <p>Desarrollar Soluciones Estratégicas de Aprendizaje vanguardistas y orientadas a resultados para profesionales competentes bajo el desarrollo integral de conocimientos, habilidades, aptitudes y actitudes para potencializar la productividad individual y organizacional.</p>
          </div>
          <div className="seccion3-metodologia">
            <div className='caja-icon'>< MdOutlineStarBorder className='icon'/></div>
            <h3>Metodología</h3>
            <p>La metodología de la capacitación es con enfoque Andragógico, a través del cual se considera la enseñanza para adultos incorporando principios fundamentales como la participación, experiencia horizontalidad y flexibilidad. También se aplicará la metodología teórica y práctica, mediante el desarrollo de casos de aplicación de la Ley del Procedimiento Administrativo General con exposiciones de alto contenido en las que se propiciará el diálogo y el intercambio de experiencias entre el profesor y los participantes.</p>
          </div>
      </div>

      <div className='seccion-4'>
        <div className='seccion4-texto'>
          <h3>¿Que ofrecemos?</h3>
          <h2>Nuestros servicios</h2>
          <p>Brindamos programas de capacitación y especialización diseñados para fortalecer el desempeño profesional en sectores públicos y privados.</p>
        </div>

        <div className='seccion4-cajas'>
          <div className='cajas'>
              <div className='caja-contenedora1'>
                <div className='caja-logo'>
        
                </div>
              </div>
              <div className='caja-contenedora2'>
                <h3>Diplomas de Especializacion</h3>
              <p>Formación de nivel postgrado en áreas como administración, contabilidad, finanzas, logística, TI y habilidades blandas.</p>
              <ul>
                <li>1.</li>
                <li>2.</li>
                <li>3.</li>
              </ul>
              </div>   
          </div>
          <div className='cajas'>
              <div className='caja-contenedora1'>
                <div className='caja-logo'>
          
                </div>
              </div>
              <div className='caja-contenedora2'>
                <h3>Cursos de Especializacion</h3>
              <p>Programas técnicos y operativos en gestión administrativa, financiera y tecnológica para el sector público y privado</p>
              <ul>
                <li>1.</li>
                <li>2.</li>
                <li>3.</li>
              </ul>
              </div>   
          </div>
          <div className='cajas'>
              <div className='caja-contenedora1'>
                <div className='caja-logo'>
   
                </div>
              </div>
              <div className='caja-contenedora2'>
                <h3>Programa de Cursos In-House a Medida</h3>
              <p>Diseño personalizado de programas de capacitación adaptados a las necesidades específicas de empresas y entidades públicas.</p>
              <ul>
                <li>1.</li>
                <li>2.</li>
                <li>3.</li>
              </ul>
              </div>   
          </div>
          <div className='cajas'>
              <div className='caja-contenedora1'>
                <div className='caja-logo'>

                </div>
              </div>
              <div className='caja-contenedora2'>
                <h3>Congresos</h3>
              <p>Organización de congresos, foros y convenciones de alto impacto a nivel nacional e internacional.</p>
              <ul>
                <li>1.</li>
                <li>2.</li>
                <li>3.</li>
              </ul>
              </div>   
          </div>
          <div className='cajas'>
              <div className='caja-contenedora1'>
                <div className='caja-logo'>

                </div>
              </div>
              <div className='caja-contenedora2'>
                <h3>Consultores</h3>
              <p>Capacitación para profesionales en gestión pública y empresarial, fortaleciendo competencias administrativas y de liderazgo.</p>
              <ul>
                <li>1.</li>
                <li>2.</li>
                <li>3.</li>
              </ul>
              </div>   
          </div>

        </div>
      </div>
      <div
        className={`seccion5${seccion5Visible ? ' visible' : ''}`}
        ref={seccion5Ref}>
        <img src="/img/I-1.png" alt="1" /><img src="/img/I-2.png" alt="2" /><img src="/img/I-3.jpg" alt="3" /><img src="/img/I-4.jpg" alt="4" /><img src="/img/I-5.png" alt="5" />
      </div>
    </>
  );
}