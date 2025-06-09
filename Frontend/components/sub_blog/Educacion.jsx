import React from 'react';
import PropBlog from '../../props/PropBlog.jsx';
import posts from '../../props/posts.js';

function Educacion() {
  // Filtra los posts por categoría, por ejemplo 'educacion'
  const categoriaSeleccionada = 'educacion'; // Cambia esto según la categoría que quieras mostrar
  const postsFiltrados = posts.filter(post => post.categoria === categoriaSeleccionada);

  return (
    <div>
      {postsFiltrados.map(post => (
        <PropBlog
          key={post.id}
          {...post}
        />
      ))}
    </div>
  );
}

export default Educacion;