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
  <>
    <p>El presente curso se justifica según la modernización del sistema de gestión documental en el sector público que consiste en convertir los documentos físicos al formato digital optimizando la gestión en un proceso ágil y manejable búsqueda y archivamiento en tiempo real y oportuna.</p>
    <p>La digitalización de documentos consiste en migrar cantidad de archivos físicos al sistema digital, permitiendo el uso de las ventajas de la tecnología y se destacan en: El uso del espacio no físico, facilitar las consultas electrónicas de documentos, su conservación y protección. Asimismo, una vez realizado este proceso, la institución obtendrá una gran ventaja competitiva, que se verá reflejada en una importante reducción de tiempos y espacios en un escenario de la modernización del estado por resultados.</p>
  </>,
  "Brindar a los participantes conocimientos y herramientas para el procedimiento y gestión de la digitalización de archivos físicos, para obtener una imagen digital, los equipos a utilizarse así mismo se desarrollará temas cómo gestionar electrónicamente los documentos y conservación en micro archivos y firma digital, las normas que lo regulan, se analizará de manera integral las características de las imágenes digitales para ello el curso de desarrollará de manera teórica y práctica con desarrollo de casos.",
  <>
    <ul>
      <li>Las clases se desarrollarán en la modalidad virtual con exposiciones con soporte audiovisual en un entorno dinámico, analítico y participativo en el que los docentes y participantes interactúan para una retroalimentación eficaz mediante prácticas, chat, foros y debates.</li>
      <li>Las clases se dan en vivo por la plataforma Zoom y aula virtual.</li>
      <li>Se fortalece el trabajo en equipo para el desarrollo de ejercicios bajo supervisión de los docentes.</li>
      <li>Se cuenta, además, con selección de casos y lecturas de estudio para reforzar la comprensión de los participantes.</li>
    </ul>
  </>,
  <>
    <ul>
      <li>Funcionarios y servidores públicos responsables de la gestión documental y archivo en sus instituciones.</li>
      <li>Personal administrativo y técnico que maneja información y documentación en soporte físico o digital.</li>
      <li>Profesionales encargados de implementar sistemas de archivos electrónicos y de optimizar procesos documentales.</li>
      <li>Miembros de áreas relacionadas con la conservación, organización y digitalización de archivos en entidades públicas.</li>
      <li>Consultores y especialistas interesados en mejorar la gestión documental en el ámbito gubernamental.</li>
    </ul>
  </>,
  "La evaluación del participante será constante y acumulativa, teniendo un examen al iniciar y finalizar el curso con la mínima nota aprobatorio de 14, ya que se deberá considerar la participación y trabajos prácticos realizados en cada sesión, la asistencia con puntos extras sumados al promedio final."
];

const CursoGestionDocumental = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "GESTIÓN DOCUMENTAL";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Aprende a gestionar documentos físicos y digitales de manera eficiente y segura."
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
        <CursoPropSalida secciones={contenidoCursos.gestionDocumental} />
      </section>
    </div>
  );
};

export default CursoGestionDocumental;