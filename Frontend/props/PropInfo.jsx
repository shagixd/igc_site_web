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
    <div className='cuboo0'>
    <img style={{width: '100%', height: 'auto'}} src={imagen} alt={titulo}/>
    </div>
    <div className='cubo1'>
      <p>{descripcion}</p>
      {certificado && <p className='p2'>Certificado: {certificado}</p>}
      {boton}
    </div>
    <div className='cubo2'>
      {inicioClases && <p className='p1'>Inicio<br />{inicioClases}</p>}
    </div>
  </div>
);

export default DiplomaCard;