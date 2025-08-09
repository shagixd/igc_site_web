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
  "El curso ofrece una visión integral sobre la gestión pública y los procesos de modernización del Estado, abordando estrategias para mejorar la eficiencia, transparencia e innovación en la administración pública. Se enfoca en herramientas de digitalización, gestión del cambio y formulación de políticas públicas efectivas.",
  "Capacitar a los participantes en el diseño e implementación de estrategias para la modernización del Estado, fortaleciendo sus conocimientos en gestión pública, transformación digital y gobernanza eficiente.",
  "El curso combina sesiones teóricas y prácticas mediante estudios de caso, análisis de políticas públicas y aplicación de herramientas digitales. Se fomentará la participación activa a través de debates, foros y resolución de problemas reales",
  "Funcionarios públicos, gestores de políticas, profesionales del sector gubernamental y privado interesados en la modernización del Estado y la mejora de la administración pública.",
  "La evaluación del participante será constante y acumulativa, teniendo un examen al iniciar y finalizar el curso con la mínima nota aprobatorio de 14, ya que se deberá considerar la participación y trabajos prácticos realizados en cada sesión, la asistencia con puntos extras sumados al promedio final."
];

const CursoGestionPublica = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "GESTIÓN PÚBLICA";
  const fechaInicio = query.get('inicioClases') || "Julio 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="La gestión de contrataciones del Estado asegura procesos eficientes y transparentes en la adquisición de bienes, servicios y obras públicas."
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
        <CursoPropSalida secciones={contenidoCursos.gestionPublica} />
      </section>
    </div>
  );
};

export default CursoGestionPublica;
