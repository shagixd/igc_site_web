import '../public/styles/NuestrosProgramas.css';
import React, { useState } from 'react';

function NuestrosProgramas() {
  const [imagenGrande, setImagenGrande] = useState(null);

  // Imágenes comunes para todas las secciones (puedes personalizar por sección si quieres)
  const imagenesDiplomas = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg'
  ];

  const imagenesCursos = [
    'img/curso1.jpg',
    'img/curso2.jpg',
    'img/curso3.jpg',
    'img/curso4.jpg',
    'img/curso5.jpg',
    'img/curso6.jpg',
    'img/curso7.jpg',
    'img/curso8.jpg'
  ];

  const imagenesCongresos = [
    'img/congreso1.jpg',
    'img/congreso2.jpg',
    'img/congreso3.jpg',
    'img/congreso4.jpg',
    'img/congreso5.jpg',
    'img/congreso6.jpg',
    'img/congreso7.jpg',
    'img/congreso8.jpg'
  ];

  const imagenesInHouse = [
    'img/inhouse1.jpg',
    'img/inhouse2.jpg',
    'img/inhouse3.jpg',
    'img/inhouse4.jpg',
    'img/inhouse5.jpg',
    'img/inhouse6.jpg',
    'img/inhouse7.jpg',
    'img/inhouse8.jpg'
  ];

  return (
    <>
      <div className="programas-titulo">
        <h2>Nuestros Programas</h2>
        <p>Instituto de Gerencia Intercontinental</p>
      </div>
      <div className='programas-intro-container'>
        <div className='programas-intro'>
          <h4>PROGRAMA DE EDUCACIÓN EJECUTIVA IGC</h4>
          <p>El Instituto de Gerencia Intercontinental-IGC, ha diseñado cinco (05) líneas de
            acción a través de programas académicos y mediante los cuales capacita a
            profesionales de los diversos sistemas administrativos del sector del Estado y la
            actividad Empresarial en temas relacionados con gestión pública y desarrollo de
            competencias según detalle.</p>
        </div>
        <div className='imagen-intro'>
          <img src="/img/1.jpg" alt="imagen" />
        </div>
      </div>

      <div className='caja-programas-padre'>

        {/* DIPLOMAS DE ESPECIALIZACION */}
        <div className='caja-programas'>
          <h2>DIPLOMAS DE ESPECIALIZACION</h2>
          <p>Programa diseñados para contribuir a la especialización técnica y profesional en las áreas administrativas, contables, tributarios, financieros, recursos humanos, gestión logística, tecnología y habilidades blandas en el sector público y la gestión empresarial desde 12 horas a 90 horas de duración</p>

          <div className='galeria-imagenes'>
            {imagenesDiplomas.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Diploma ${index + 1}`}
                onClick={() => setImagenGrande(src)}
              />
            ))}
          </div>

          {imagenGrande && (
            <div className="modal-imagen-grande" onClick={() => setImagenGrande(null)}>
              <span className="cerrar-modal">&times;</span>
              <img src={imagenGrande} alt="Ampliada" onClick={(e) => e.stopPropagation()} />
            </div>
          )}
        </div>

        {/* CURSOS ESPECIALIZADOS */}
        <div className='caja-programas'>
          <h2>CURSOS DE GESTION PUBLICA</h2>
          <p>Programa diseñados para contribuir a la especialización técnica y profesional en las áreas administrativas, contables, tributarios, financieros, recursos humanos, gestión logística, tecnología y habilidades blandas en el sector público y la gestión empresarial desde 12 horas a 90 horas de duración.</p>

          <div className='galeria-imagenes'>
            {imagenesCursos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Curso ${index + 1}`}
                onClick={() => setImagenGrande(src)}
              />
            ))}
          </div>

          {imagenGrande && (
            <div className="modal-imagen-grande" onClick={() => setImagenGrande(null)}>
              <span className="cerrar-modal">&times;</span>
              <img src={imagenGrande} alt="Ampliada" onClick={(e) => e.stopPropagation()} />
            </div>
          )}
        </div>

        {/* CONGRESOS O EVENTOS ESPECIALES */}
        <div className='caja-programas'>
          <h2>CONGRESOS O EVENTOS ESPECIALES</h2>
          <p>Desarrollamos y realizamos eventos de alto impacto como congresos nacionales e internacionales tales como:</p>
          <ul>
            <li>CONGRESO INTERNACIONAL DE FINANZAS PÚBLICAS - CADEFIN-PERÚ (2015 - 2019)</li>
            <li>CONGRESO NACIONAL DE PRESUPUESTO PÚBLICO Y FINANZAS</li>
            <li>CONGRESO NACIONAL DE SECRETARIAS Y ASISTENTES DE GERENCIA</li>
            <li>CONGRESO NACIONAL DE DERECHO ADMINISTRATIVO</li>
          </ul>

          <div className='galeria-imagenes'>
            {imagenesCongresos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Congreso ${index + 1}`}
                onClick={() => setImagenGrande(src)}
              />
            ))}
          </div>

          {imagenGrande && (
            <div className="modal-imagen-grande" onClick={() => setImagenGrande(null)}>
              <span className="cerrar-modal">&times;</span>
              <img src={imagenGrande} alt="Ampliada" onClick={(e) => e.stopPropagation()} />
            </div>
          )}
        </div>

        {/* PROGRAMA IN-HOUSE */}
        <div className='caja-programas'>
          <h2>PROGRAMA DE CURSOS A LA MEDIDA IN-HOUSE</h2>
          <p>Desarrollamos cursos a la medida de cada entidad según su PDP, empresa, gremio o asociación a través de una exhaustiva evaluación de la entidad o empresa y atendiendo las necesidades más urgentes se desarrolla un programa de capacitación para una aplicación práctica, directa y efectiva en las organizaciones públicas y privadas, estos cursos son desarrollados en infraestructuras agradables ya sea en sus propias instalaciones o en las nuestras y abordando siempre temas de interés y tendencias a la necesidad Institucional del sector.</p>

          <div className='galeria-imagenes'>
            {imagenesInHouse.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`In-House ${index + 1}`}
                onClick={() => setImagenGrande(src)}
              />
            ))}
          </div>

          {imagenGrande && (
            <div className="modal-imagen-grande" onClick={() => setImagenGrande(null)}>
              <span className="cerrar-modal">&times;</span>
              <img src={imagenGrande} alt="Ampliada" onClick={(e) => e.stopPropagation()} />
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default NuestrosProgramas;