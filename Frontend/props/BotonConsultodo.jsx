import React, { useState } from 'react';

function BotonConsultodo({ texto, style = {}, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    if (props.onClick) props.onClick(e);
    window.open(
      'https://api.whatsapp.com/send/?phone=51945504555&text=Hola%2C+deseo+m%C3%A1s+informaci%C3%B3n+sobre+sus+servicios.&type=phone_number&app_absent=0',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={{
        padding: '0.75em 2.2em',               
        fontSize: 'clamp(7px, 2vw, 18px)',        // texto responsivo con clamp
        borderRadius: '8px',
        fontWeight: 700,
        background: isActive
          ? '#0059ffff'
          : isHovered
            ? '#0051ffff'
            : '#fff',
        color: isActive
          ? '#005ec9'
          : isHovered
            ? '#fff'
            : '#003ec9',
        border: isActive
          ? '1px solid #ffffffff'
          : isHovered
            ? '1px solid #0041a3ff'
            : '1px solid #003c97ff',
        cursor: 'pointer',
        display: 'inline-block',                   // para que la caja se ajuste al contenido
        margin: '0 auto',
        textAlign: 'center',
        letterSpacing: '0.5px',
        transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
        outline: 'none',
        ...style
      }}
      className="boton-consultodo">
      {texto}
    </button>
  );
}

export default BotonConsultodo;
