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
        <img src={imagen} alt={titulo}/>
    </div>
    <div className='parte-2'>
      <h2 className='titulo-tienda'>{titulo}</h2>
      <p className='p-descripcion'>{descripcion}</p>
      <p className='p-precio'>{precio}</p>
      <button className='buton-shop'><FaShoppingCart /> Añadir al carrito</button>
    </div>
  </div>
);

export default CardShop;
