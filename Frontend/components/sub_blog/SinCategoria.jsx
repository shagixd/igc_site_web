import React from 'react';
import PropsVariados from '../../props/PropBlog.jsx';
import posts from '../../props/posts.js';

function SinCategoria() {
  // Filtra los posts por categoría, por ejemplo 'educacion'
  const categoriaSeleccionada = 'sincategoria'; // Cambia esto según la categoría que quieras mostrar
  const postsFiltrados = posts.filter(post => post.categoria === categoriaSeleccionada);

  return (
    <div>
      {postsFiltrados.map(post => (
        <PropsVariados
          key={post.id}
          {...post}
        />
      ))}
    </div>
  );
}

export default SinCategoria;