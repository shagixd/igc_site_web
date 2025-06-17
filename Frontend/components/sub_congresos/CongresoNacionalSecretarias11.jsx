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
  "Este congreso aborda la ética y transparencia en la función pública, dirigido a secretarias y asistentes de gerencia. Se tratarán temas fundamentales para la gestión administrativa y operativa en el sector público.",
  "El evento está dirigido a secretarias y asistentes de gerencia del sector público y privado, brindando herramientas y redes de apoyo para su desarrollo profesional.",
  "Asistir a este congreso te permitirá actualizarte en tendencias y mejores prácticas en gestión pública, fortalecer tus habilidades y establecer contactos con profesionales del sector."
];

const CongresoNacionalSecretarias11 = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "11° congreso nacional de secretarias y asistentes de gerencia en gestión pública";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Ética y transparencia en la función pública."
          imagenSrc="/img/congreso-etica.png"
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
        <CursoPropSalida secciones={contenidoCongresos.congresoNacionalSecretarias11} />
      </section>
    </div>
  );
};

export default CongresoNacionalSecretarias11;
