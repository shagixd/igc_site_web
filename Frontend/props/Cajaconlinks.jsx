import React from 'react';

const Cajaconlinks = ({ titulo, enlaces = [] }) => {
  return (
    <div style={{border: 'none', color: 'darkblue', fontSize: '12px'}}>
      {/* Título */}
      <h3 style={{textAlign: 'center'}}>
        {titulo || "Título no definido"}
      </h3>

      {/* Lista de enlaces */}
      {enlaces.length > 0 ? (
        <ul>
          {enlaces.map((link, index) => (
            <li key={index}>
              <a style={{color: 'darkblue', fontSize: '10px'}}
                href={link.href}
                onMouseOver={(e) => e.target.style.color = '#007bff'}
                onMouseOut={(e) => e.target.style.color = '#333'}
              >
                {link.texto || "Texto sin definir"}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay enlaces disponibles</p>
      )}
    </div>
  );
};

export default Cajaconlinks;