const CuerpoBasico = ({ titulo, enlaces }) => {
  return (
    <div>
      <p>
        {titulo}
      </p>
      <ul>
        {enlaces && enlaces.length > 0 ? (
          enlaces.map((link, index) => (
            <li key={index}>
              <a href={link.href || '#'}>
                {link.texto || 'Enlace sin nombre'}
              </a>
            </li>
          ))
        ) : (
          <li>No hay enlaces disponibles</li>
        )}
      </ul>
    </div>
  );
};

export default CuerpoBasico;