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
  "Este congreso aborda estrategias de comunicación efectiva en el sector público, dirigido a profesionales de la administración financiera. Se presentarán herramientas para mejorar la gestión y la comunicación institucional.",
  "El evento está dirigido a administradores financieros y funcionarios públicos, brindando recursos para potenciar su desarrollo profesional.",
  "Participar te permitirá actualizarte en comunicación y gestión, mejorar tus competencias y establecer redes con expertos y colegas."
];

const CongresoNacionalAdministracion1er = () => {
  const query = useQuery();
  const titulo = query.get('titulo') || "1er. Congreso Nacional de Administración Financiera del Sector Publico";
  const fechaInicio = query.get('inicioClases') || "Agosto 2024";

  return (
    <div>
      <section>
        <CursoPropEntrada
          titulo={titulo}
          fechaInicio={fechaInicio}
          descripcion="Estrategias de comunicación efectiva en el sector público."
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
        <CursoPropSalida secciones={contenidoCongresos.congresoNacionalAdministracion1er} />
      </section>
    </div>
  );
};

export default CongresoNacionalAdministracion1er;
