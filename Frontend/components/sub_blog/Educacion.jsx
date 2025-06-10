import React from 'react';
import PropBlog from '../../props/PropBlog.jsx';
import Datos from '../../props/ContenidoBlog.js';

function Educacion() {
  // Filtra los posts por categoría, por ejemplo 'educacion'
  const categoriaSeleccionada = 'educacion'; // Cambia esto según la categoría que quieras mostrar
  const postsFiltrados = Datos.filter(post => post.categoria === categoriaSeleccionada);

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