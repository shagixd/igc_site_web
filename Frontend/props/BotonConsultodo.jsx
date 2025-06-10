import React from 'react';

function BotonConsultodo({ texto, style = {}, ...props }) {
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
      style={{
        padding: '0.85em 2.5em',
        fontSize: '1.15rem',
        borderRadius: '8px',
        fontWeight: 700,
        background: '#fff',
        color: '#005ec9',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 2px 10px 0 rgba(67, 132, 206, 0.5)',
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
