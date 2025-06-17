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
  "Este congreso aborda el liderazgo y la gestión del cambio en el sector público, dirigido a profesionales de presupuesto y finanzas públicas. Se explorarán herramientas para la transformación institucional.",
  "El evento está dirigido a funcionarios y especialistas en gestión financiera, brindando recursos para enfrentar los desafíos actuales.",
  "Asistir te permitirá actualizarte en tendencias, mejorar tus habilidades y conectar con expertos y colegas del sector."
];

const CongresoNacionalPresupuesto3er = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "3er. Congreso Nacional de Presupuesto Público y Gestión de Finanzas Públicas";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Liderazgo y gestión del cambio en el sector público."
          imagenSrc="/img/congreso-liderazgo.png"
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
        <CursoPropSalida secciones={contenidoCongresos.congresoNacionalPresupuesto3er} />
      </section>
    </div>
  );
};

export default CongresoNacionalPresupuesto3er;
