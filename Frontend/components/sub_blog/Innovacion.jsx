import React from 'react';
import PropsVariados from '../../props/PropBlog.jsx';
import Datos from '../../props/ContenidoBlog.js';

function Innovacion() {
  // Filtra los posts por categoría, por ejemplo 'educacion'
  const categoriaSeleccionada = 'innovacion'; // Cambia esto según la categoría que quieras mostrar
  const postsFiltrados = Datos.filter(post => post.categoria === categoriaSeleccionada);

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

export default Innovacion;