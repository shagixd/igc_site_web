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
  "Este congreso se enfoca en las nuevas tecnologías en la administración pública, dirigido a asistentes de gerencia y secretarias. Se presentarán herramientas y tendencias tecnológicas para la gestión eficiente.",
  "El evento está dirigido a asistentes de gerencia y secretarias del sector público y privado, brindando recursos para potenciar su desarrollo profesional.",
  "Participar te permitirá actualizarte en tecnología y buenas prácticas, mejorar tus competencias y establecer redes con expertos y colegas."
];

const CongresoNacionalAsistentesXIV = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "XIV congreso nacional de asistentes de gerencia y secretaria";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Nuevas tecnologías en la administración pública."
          imagenSrc="/img/congreso-tecnologia.png"
        />
      </section>
      <section>
        <CursoPropCuerpo2
          texto="Selecciona una opción:"
          contenidos={contenidos}
        />
      </section>
      <section>
        <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '48px 0 16px 0' }} />
        <h3 style={{
          fontSize: '2em',
          fontWeight: 'bold',
          color: '#888',
          marginBottom: '2rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          textAlign: 'center',
          textShadow: '1px 2px 8px #bbb'
        }}>
          Temario
        </h3>
        <CursoPropSalida secciones={contenidoCongresos.congresoNacionalAsistentesXIV} />
      </section>
    </div>
  );
};

export default CongresoNacionalAsistentesXIV;
