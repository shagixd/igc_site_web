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
        padding: '0.85em 2.5em',
        fontSize: '1.15rem',
        borderRadius: '8px',
        fontWeight: 700,
        background: isActive
          ? '#e6f0fa'
          : isHovered
            ? '#001ec9'
            : '#fff',
        color: isActive
          ? '#005ec9'
          : isHovered
            ? '#fff'
            : '#003ec9',
        border: 'none',
        cursor: 'pointer',
        boxShadow: isActive
          ? '0 1px 4px 0 rgba(67, 132, 206, 0.3)'
          : '0 2px 10px 0 rgba(67, 132, 206, 0.5)',
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
        letterSpacing: '0.5px',
        transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
        outline: 'none',
        ...style
      }}
      className="boton-consultodo"
    >
      {texto}
    </button>
  );
}

export default BotonConsultodo;
