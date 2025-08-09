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
  "Este congreso se centra en el desarrollo sostenible y las políticas públicas, dirigido a profesionales de presupuesto y finanzas públicas. Se abordarán estrategias innovadoras para la gestión eficiente de recursos.",
  "El evento está dirigido a funcionarios y especialistas en finanzas públicas, brindando herramientas y conocimientos para enfrentar los retos actuales del sector.",
  "Participar te permitirá actualizarte en tendencias, fortalecer tus competencias y establecer redes con expertos y colegas del área."
];

const CongresoNacionalPresupuestoIV = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "IV congreso nacional de presupuesto y finanzas públicos.";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Desarrollo sostenible y políticas públicas."
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
        <CursoPropSalida secciones={contenidoCongresos.congresoNacionalPresupuestoIV} />
      </section>
    </div>
  );
};

export default CongresoNacionalPresupuestoIV;
