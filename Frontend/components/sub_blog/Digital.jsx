import React from 'react';
import PropBlog from '../../props/PropBlog.jsx';
import Datos from '../../props/ContenidoBlog.js';
import '../../public/styles/Sub_Blogs.css';

function Digital() {
  const categoriaSeleccionada = 'digital'; // Cambia esto según la categoría que quieras mostrar
  const postsFiltrados = Datos.filter(post => post.categoria === categoriaSeleccionada);

  return (
    <div className="sub-blog-container">
      {postsFiltrados.map(post => (
        <div className="sub-blog-item" key={post.id}>
          <PropBlog {...post}/>
        </div>
      ))}
    </div>
  );
}

export default Digital;