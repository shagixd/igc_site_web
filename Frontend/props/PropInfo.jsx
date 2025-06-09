import React from 'react';

const DiplomaCard = ({
  titulo,
  descripcion,
  imagen,
  colorFondo,
  colorTexto,
  inicioClases,
  certificado,
  style = {},
  boton
}) => (
  <div
    className="diploma-card"
    style={{
      backgroundColor: colorFondo,
      color: colorTexto,
      display: 'inline-block',
      width: '31.33%',
      marginRight: '1%',
      marginBottom: '24px',
      verticalAlign: 'top',
      ...style
    }}
  >
    <img src={imagen} alt={titulo} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
    {inicioClases && <p>Inicio de clases: {inicioClases}</p>}
    {certificado && <p>Certificado: {certificado}</p>}
    {boton}
    <p>Contáctanos para más detalles</p>
  </div>
);

export default DiplomaCard;