import React from 'react';
import PropsVariados from '../../props/PropBlog.jsx';
import Datos from '../../props/ContenidoBlog.js';

function SinCategoria({ onExpandChange }) {
  // Filtra los posts por categoría, por ejemplo 'educacion'
  const categoriaSeleccionada = 'sincategoria'; // Cambia esto según la categoría que quieras mostrar
  const postsFiltrados = Datos.filter(post => post.categoria === categoriaSeleccionada);

  return (
    <div>
      {postsFiltrados.map(post => (
        <PropsVariados
          key={post.id}
          {...post}
          onExpandChange={onExpandChange}
        />
      ))}
    </div>
  );
}

export default SinCategoria;