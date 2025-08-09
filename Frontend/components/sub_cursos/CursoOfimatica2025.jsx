import React from 'react';
import { useLocation } from 'react-router-dom';
import CursoPropEntrada from '../../props/CursoPropEntrada';
import CursoPropCuerpo from '../../props/CursoPropCuerpo';
import CursoPropSalida from '../../props/CursoPropSalida';
import contenidoCursos from '../../props/ContenidoCursos.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const contenidos = [
  "El diplomado Ofimática Profesional apuesta a la optimización de estrategias y metodologías informáticas, a fin de alcanzar un manejo exitoso de las tareas y proyectos laborales dentro de la oficina; mediante sistemas operativos actualizados, y también gubernamentales, que contribuyan con el registro, comunicación y organización en el entorno laboral. La ofimática incluye un conglomerado de aplicaciones y elementos de carácter informático, manejados en la ejecución de las funciones administrativas. Todo ello, con el objetivo de automatizar, corregir, actualizar, gestionar y organizar la información, registros de datos, sistematizar las actividades dentro del espacio de trabajo.",
  "Apropósito de esto, se ha diseñado un amplio contenido temático, donde se estudiarán los elementos más relevantes que conlleva la ofimática, como el manejo de Windows e Internet, los programas del paquete de Microsoft Office, como Power Point, Word, Excel; y otros aspectos actualizados, que son claves para el cumplimiento de tareas en el contexto profesional.",
  <>
    <p>Las clases se desarrollarán en la modalidad virtual con exposiciones con soporte audiovisual en un entorno dinámico, analítico y participativo en el que los docentes y participantes interactúan para una retroalimentación eficaz mediante prácticas, chat, foros y debates.</p>
    <p>Las clases se dan en vivo por la plataforma Zoom y aula virtual.</p>
    <p>Se fortalece el trabajo en equipo para el desarrollo de ejercicios bajo supervisión de los docentes.</p>
    <p>Se cuenta, además, con selección de casos y lecturas de estudio para reforzar la comprensión de los participantes.</p>
  </>,
  <>
  <p>Funcionarios y servidores públicos que desean optimizar su desempeño en actividades administrativas mediante herramientas de ofimática.</p>
  <p>Personal administrativo, técnico y operativo que emplea software de ofimática en sus labores diarias.</p>
  <p>Profesionales de diversas áreas que necesitan fortalecer sus habilidades digitales para la gestión pública.</p>
  <p>Practicantes y jóvenes profesionales que buscan prepararse para las exigencias tecnológicas del entorno laboral en instituciones del sector público.</p>
  <p>Miembros de equipos técnicos encargados de la elaboración de reportes, análisis de datos y presentaciones dentro de entidades estatales.</p>
  </>,
  "La evaluación del participante será constante y acumulativa, teniendo un examen al iniciar y finalizar el curso con la mínima nota aprobatorio de 14, ya que se deberá considerar la participación y trabajos prácticos realizados en cada sesión, la asistencia con puntos extras sumados al promedio final."
];

const CursoOfimatica2025 = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "OFIMÁTICA 2025";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";


  return (    
    <div>
         <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Domina las herramientas de ofimática esenciales para el entorno laboral moderno."
          imagenSrc="/img/1.jpg"
        />
      </section>
      <section>
        <CursoPropCuerpo
          texto="Selecciona una opción:"
          contenidos={contenidos}
        />
      </section>
      <section>
        <CursoPropSalida secciones={contenidoCursos.ofimatica2025} />
      </section>
    </div>
  );
};

export default CursoOfimatica2025;