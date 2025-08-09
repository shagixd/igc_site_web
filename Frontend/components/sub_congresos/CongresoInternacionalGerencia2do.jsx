import React from 'react';
import { useLocation } from 'react-router-dom';
import CursoPropEntrada from '../../props/CursoPropEntrada';
import CursoPropCuerpo2 from '../../props/CursoPropCuerpo2';
import CursoPropSalida from '../../props/CursoPropSalida';
import contenidoCongresos from '../../props/ContenidoCongresos.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const contenidos = [
  "El programa de especialización tiene por objetivo dar a conocer a los participantes la importancia del proceso y tendencias de Gerencia y Administración para Asistentes de Gerencia y Secretarias proporcionando herramientas de aplicación práctica de gestión, principalmente de los Sistemas Administrativos que participan en las organizaciones públicas y privadas a fin de cumplir con las metas previstas de las diversas áreas y responsabilidades administrativas, para lo cual, presentamos el presente programa dirigido para el personal de apoyo Gerencial y Administrativo en la que se abordarán temas coyunturales cuidadosamente seleccionados como: perfil profesional, protocolo de eventos, gestión documental y archivos electrónicos, habilidades blandas y gestión de la felicidad donde potenciaras y aplicarás herramientas para optimizar las gestiones laborales diarias con un plantel de docentes de primera línea.",
  "El evento está dirigido a gerentes, funcionarios y especialistas en finanzas públicas, brindando recursos para potenciar su desarrollo profesional.",
  "Participar te permitirá actualizarte en innovación y gestión, mejorar tus competencias y establecer redes con expertos y colegas internacionales."
];

const CongresoInternacionalGerencia2do = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "2do. Congreso Internacional de Gerencia y Gestión De Finanzas Públicas";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Innovación en servicios públicos y atención al ciudadano."
          imagenSrc="/img/1.jpg"
        />
      </section>
      <section>
        <CursoPropCuerpo2
          texto="Selecciona una opción:"
          contenidos={contenidos}
        />
      </section>
      <section>
        <CursoPropSalida secciones={contenidoCongresos.congresoInternacionalGerencia2do} />
      </section>
    </div>
  );
};

export default CongresoInternacionalGerencia2do;
