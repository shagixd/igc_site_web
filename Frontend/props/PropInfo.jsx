import React from 'react';

const DiplomaCard = ({
  titulo,
  descripcion,
  imagen,
  inicioClases,
  certificado,
  style = {},
  boton
}) => (
  <div
    className="diploma-card"
    style={{
      ...style
    }}
  >
    <img src={imagen} alt={titulo} className="diploma-card-img" />
    <h2>{titulo}</h2>
    <p>{descripcion}</p>
    {inicioClases && <p>Inicio de clases: {inicioClases}</p>}
    {certificado && <p>Certificado: {certificado}</p>}
    {boton}
    <p>Contáctanos</p>
  </div>
);

export default DiplomaCard;