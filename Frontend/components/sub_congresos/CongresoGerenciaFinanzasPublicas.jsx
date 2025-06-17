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
  "Este congreso internacional aborda las tendencias en gestión de talento en el sector público, dirigido a gerentes y gestores de finanzas públicas. Se presentarán estrategias para la gestión eficiente del capital humano.",
  "El evento está dirigido a gerentes, funcionarios y especialistas en finanzas públicas, brindando recursos para potenciar su desarrollo profesional.",
  "Participar te permitirá actualizarte en gestión de talento y finanzas públicas, mejorar tus competencias y establecer redes con expertos y colegas internacionales."
];

const CongresoGerenciaFinanzasPublicas = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "Congreso Internacional de Gerencia y Gestión de finanzas públicas";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Tendencias en gestión de talento en el sector público."
          imagenSrc="/img/congreso-rrhh.png"
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
        <CursoPropSalida secciones={contenidoCongresos.congresoGerenciaFinanzasPublicas} />
      </section>
    </div>
  );
};

export default CongresoGerenciaFinanzasPublicas;
