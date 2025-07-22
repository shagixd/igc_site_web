import React from 'react';

const CardCursos = ({
  titulo,
  descripcion,
  imagen,
  inicioClases,
  certificado,
  style = {},
  boton
}) => (
  <div
    className="card-cursos"
    style={{
      ...style
    }}
  >
    <div className='card-1'>
    <img style={{ width: '100%', height:'auto', margin: '0' }} src={imagen} alt={titulo}/>
    </div>
    <div className='card-2'>
      <p className='parrafo-3'>{descripcion}</p>
      {certificado && <p>Certificado: {certificado}</p>}
      {boton}
    </div>
    <div className='card-3'>
      <p className='parrafo-4'>Inicio:</p>
      {inicioClases && <p>{inicioClases}</p>}
    </div>
  </div>
);

export default CardCursos;