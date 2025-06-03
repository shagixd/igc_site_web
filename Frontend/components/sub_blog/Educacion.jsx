import React from 'react';
import PropsVariados from '../props/propsblog';
import posts from '../props/posts.js';

function Educacion() {
  // Filtra los posts por categoría, por ejemplo 'educacion'
  const categoriaSeleccionada = 'educacion'; // Cambia esto según la categoría que quieras mostrar
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

export default Educacion;