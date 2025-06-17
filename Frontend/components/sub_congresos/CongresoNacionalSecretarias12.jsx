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
  "La secretaria y asistente de gerencia es la cara de la organización y la primera imagen que de ella tendrán sus clientes actuales y potenciales; lo cual demanda grandes responsabilidades de comunicación, toma de decisiones, objetividad, metas y planificación laboral. Sabemos la importancia que tiene una secretaria, por tratarse de una persona que generalmente asiste a integrantes claves de la institución sus conocimientos y habilidades deben ser tales que permitan a sus jefes optimizar sus tiempos y enfocarlos en los asuntos de suma importancia.",
  "Dar a conocer a los participantes la importancia de los sistemas administrativos que participan en la administración Publica a fin de cumplir con las metas previstas las diversas áreas administrativas, para lo cual hemos diseñado un congreso totalmente innovador dirigida especialmente a las secretarias y asistentes de gerencia de las entidades públicas, en la que se abordarán temas propios del quehacer diario principalmente la gestión operativa y administrativa de la administración pública, a través de la aplicación práctica de las herramientas prácticas y tecnológicas.",
  <>
  Es el evento más importante diseñado para que la Asistenta pueda:
    <ul>
      <li>Aprender como seguir aportando valor diferencial a su institución en un  entorno de constantes cambios.</li>
      <li>Adaptarse a las nuevas demandas exigencia del directivo y de la institución interesados en retener el talento que evoluciona y crece.</li>
      <li>Formar una red de contactos profesionales y de amplio espectro, muy útil para su institución.</li>
    </ul>
  </>
];

const CongresoNacionalSecretarias12 = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "12° Congreso Nacional de secretarias y Asistentes de Gerencia en Gestión Pública";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Nuevas estrategias en finanzas estatales."
          imagenSrc="/img/congreso-finanzas.png"
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
        <CursoPropSalida secciones={contenidoCongresos.congresoNacionalSecretarias12} />
      </section>
    </div>
  );
};

export default CongresoNacionalSecretarias12;
