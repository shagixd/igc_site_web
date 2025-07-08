import React, { useState, useEffect } from 'react';
import '../public/styles/CursosalaMedida.css';

function CursosalaMedida() {
  const imagenes = [
    "/img/1.jpg",
    "/img/foto2.jpg",
    "/img/foto3.jpg",
    "/img/foto4.jpg",
    "/img/foto5.jpg",
    "/img/foto6.jpg",
    "/img/foto7.jpg",
    "/img/foto8.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [index]);

  const siguienteImagen = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anteriorImagen = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };


  const [imagenSrc1, setImagenSrc1] = useState('');
  const [imagenSrc2, setImagenSrc2] = useState('');


  const items1 = [
    { text: 'TALLERES', img: '/img/1.jpg' },
    { text: 'SEMINARIOS', img: '/img/2.jpg' },
    { text: 'CURSOS', img: 'cursos.jpg' },
    { text: 'CURSOS DE ESPECIALIZACION', img: 'especializacion.jpg' },
    { text: 'DIPLOMAS DE ESPECIALIZACIÓN', img: 'diplomas.jpg' },
    { text: 'CONGRESOS NACIONALES E INTERNACIONALES', img: 'congresos.jpg' },
  ];
  const items2 = [
    { text: 'PRESENCIAL', img: 'talleres.jpg' },
    { text: 'HIBRIDAD', img: 'seminarios.jpg' },
    { text: 'VIRTUAL SICRONICO', img: 'cursos.jpg' },
    { text: 'VIRTUAL ASINCRONICO', img: 'especializacion.jpg' },
  ];

  return (
    <>
      <div className="cursosalamedida-titulo">
        <h2>Cursos a la Medida Institucional</h2>
        <p>Instituto de Gerencia Intercontinental</p>
      </div>

      <div className="zona-1">
        <div className="zona1-imagen">
          <img src="/img/3.jpg" alt="Ejemplo" />
        </div>
        <div className="zona1-texto">
          <h3>PLAN DE DESARROLLO DE PERSONAS – PDP 2025-2026</h3>
          <p className='parrafo-1'>Gestiona estratégicamente tus necesidades de capacitación, maximizando el valor de la inversión pública.</p>
          <p className='parrafo-2'>El Instituto de Gerencia Intercontinental, con más de 23 años de experiencia, es una institución privada que brinda servicios de capacitación a entidades públicas de los tres niveles de gobierno —nacional, regional y local— en diversos contextos organizacionales y territoriales, así como a empresas y organizaciones del sector privado. <br />
            <br />
            Entendemos que los procesos logísticos para la adquisición de bienes y servicios representan un desafío constante para las instituciones. Por ello, nos consolidamos como un aliado estratégico confiable, flexible y adaptable, orientado a simplificar y agilizar tus procesos de selección, asegurando la identificación de proveedores que cumplan con los criterios de calidad, oportunidad y competitividad en los costos que demanda. <br />
            <br />
            Brindamos asesoría especializada en la planificación y elaboración de requerimientos y cotizaciones para tus acciones de capacitación, garantizando su alineamiento con el PDP 2025-2026 y el cumplimiento de los Términos de Referencia (TDR) y Expedientes Técnicos (EET) establecidos por tu institución. <br />
            <br />
            Encuentra aquí los cursos más requeridos  de los  11 sistemas administrativos de la Gestión Pública a si como de la  TICS y Habilidades blandas.
        </p>
        </div>
      </div>

      <div className="carrusel">
        <div className="carrusel-texto">
          <h3>CURSOS Y DIPLOMAS DE ESPECIALIZACIÓN</h3>
          <ul>
            <li>PÓLITICAS PÚBLICAS Y GESTIÓN PÚBLICA </li>
            <li>PLANEAMIENTO ESTRATÉGICO</li>
            <li>SISTEMA NACIONAL DE INVERSIONES INVIERTE.PE</li>
            <li>GESTIÓN DE OBRAS PÚBLICAS</li>
            <li>FINANZAS PÚBLICAS</li>
            <li>CONTROL GUBERNAMENTAL Y SISTEMA DE CONTROL INTERNO</li> 
            <li>SISTEMAS ELECTRÓNICOS DE GESTIÓN PÚBLICA</li>
            <li>SISTEMAS NACIONAL DE ABASTECIMIENTO</li>
            <li>GESTIÓN DE LA CONTRATACIÓN PÚBLICA</li>
            <li>GESTIÓN DE RECURSOS HUMANOS Y SERVICIO CIVIL</li>
            <li>DERECHO ADMINISTRATIVO</li>
            <li>GESTIÓN DOCUMENTAL Y ARCHIVOS DIGITALES</li>
            <li>GESTIÓN PÚBLICA EN SALUD </li>
            <li>GESTIÓN DE BIBLIOTECA</li>
            <li>TASACIÓN Y VALORIZACIÓN DEL LIBRO</li>
            <li>PREVENCIÓN Y SEGURIDAD VIAL</li> 
            <li>OFIMÁTICA -MICROSOFT OFFICE Y OTROS</li>
            <li>HABILIDADES BLANDAS</li>
          </ul>
        </div>
        <div className="carrusel-imagenes">
          <img
            src={imagenes[index]}
            alt={`Imagen ${index}`}
            className="carrusel-img"
          />
          <button className="btn-carrusel anterior" onClick={anteriorImagen}>‹</button>
          <button className="btn-carrusel siguiente" onClick={siguienteImagen}>›</button>
        </div>
      </div>
        <div className="zona3-carta">
            <div className='carta-cuerpo'>
                <div className='carta-cuerpo-texto'>
                        <h4>NUESTRA EXPERIENCIA</h4>
                        <p>Durante nuestra trayectoria hemos capacitado muchas instituciones del Gobierno Nacional, Regional, 
                            Local y Organismos Autónomos, los mismos que están publicado en el SEACE
                            que fueron registrados por las instituciones  a quienes desarrollamos las capacitaciones de acuerdo al Buscador de Proveedores del Estado del OSCE,  allí se acreditan nuestra experiencia como proveedores de capacitación.
                        </p>
                    </div>
                    <div className='carta-cuerpo-icon'>
                        emoji
                    </div>
                </div>
                <div className='carta-cuerpo'>
                    <div className='carta-cuerpo-texto'>
                        <h4>SERVICIOS DE ACORDE A SUS REQUERIMIENTOS DE CAPACITACIÓN ESPECIALIZADA</h4>
                        <p>Contamos con un Staff de Consultores, para brindarte una asesoría especializada, para elaborar 
                            tu PDP y Priorizar las Acciones de Capacitación respectivas.
                        </p>
                    </div>
                    <div className='carta-cuerpo-icon'>
                        emoji
                    </div>
                </div>
                <div className='carta-cuerpo'>
                    <div className='carta-cuerpo-texto'>
                        <h4>PLANIFICACION DE PDP ANUAL</h4>
                        <p>Asesoramos en la planificación estratégica de las acciones de capacitación que debe incluir el
                            PDP ANUAL de tu institución. Brindamos orientación sobre los contenidos mínimos requeridos, los
                            ejes temáticos, la metodología de cada acción formativa, así como la modalidad, duración e 
                            inversión estimada del programa, entre otros aspectos clave.
                        </p>
                    </div>
                    <div className='carta-cuerpo-icon'>
                        emoji
                    </div>
                </div>
                <div className='carta-cuerpo'>
                    <div className='carta-cuerpo-texto'>
                        <h4>Ejecutar tu PDP ANUAL</h4>
                        <p>Te asesoramos en los contenidos mínimos para planificar estratégicamente las acciones de capacitación que debe contener el PDP ANUAL de tu institución, en los ejes temáticos y metodología de cada acción de capacitación, inversión aproximada del programa, modalidad, duración, entre otros.
                        </p>
                    </div>
                    <div className='carta-cuerpo-icon'>
                        emoji
                    </div>
                </div>
            </div>
        <div className="minicarruseles">
            <div className="carrusel-1">
              <h3>DIVERSIDAD DE PROGRAMAS DE ESTUDIOS</h3>
              <div className="carrusel-1-texto">
                <ul>
                  {items1.map((item, idx) => (
                    <li
                      key={idx}
                      onMouseEnter={() => setImagenSrc1(item.img)}
                      onMouseLeave={() => setImagenSrc1('')}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="carrusel-1-imagen">
                {imagenSrc1 && <img src={imagenSrc1} alt="Vista previa" />}
              </div>
            </div>
            <div className="carrusel-1">
              <h3>MODALIDADES</h3>
              <div className="carrusel-1-texto">
                <ul>
                  {items2.map((item, idx) => (
                    <li
                      key={idx}
                      onMouseEnter={() => setImagenSrc2(item.img)}
                      onMouseLeave={() => setImagenSrc2('')}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="carrusel-1-imagen">
                {imagenSrc2 && <img src={imagenSrc2} alt="Vista previa" />}
              </div>
            </div>
        </div>
        <div className="texto-de-salida">
            <h4>SOLICITA  AHORA MISMO  TUS REQUERIMIENTOS  A AL MEDIDA AHORA MISMO.</h4>
            <p>El Instituto de Gerencia Intercontinental cuenta con un área especializada en la elaboración de 
                Programas Corporativos a la Medida, donde su institución es el eje central de nuestras acciones. 
                Nuestros programas trascienden la formación tradicional en gestión pública, ya que diseñamos 
                soluciones de desarrollo orientadas a alcanzar sus objetivos institucionales, 
                incorporando un enfoque innovador basado en competencias.
            </p>
        </div>
        </>
    );
}
export default CursosalaMedida;