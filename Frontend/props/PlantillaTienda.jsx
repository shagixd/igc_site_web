import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const CardShop = ({
  titulo,
  descripcion,
  imagen,
  precio,
  colorFondo = '#fff',  // valor por defecto por si no se pasa color
  style = {},
}) => (
  <div
    className="tienda-card"
    style={{
      backgroundColor: colorFondo,  // Aplica el color de fondo recibido
      ...style                      // Combina con cualquier estilo extra
    }}
  >
    <div className='parte-1'>
        <h2>{titulo}</h2>
        <img src={imagen} alt={titulo}/>
    </div>
    <div className='parte-2'>
      <p className='p-descripcion'>{descripcion}</p>
      <p className='p-precio'>Precio: {precio}</p>
      <button className='buton-shop'><FaShoppingCart /> Añadir al carrito</button>
    </div>
  </div>
);

export default CardShop;
