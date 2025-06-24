import React, { useState } from 'react';
import PropBlog from '../../props/PropBlog.jsx';
import Datos from '../../props/ContenidoBlog.js';

function SinCategoria({ onExpandChange }) {
  const [expandedId, setExpandedId] = useState(null); // Controla cuál está expandido

  const categoriaSeleccionada = 'sincategoria';
  const postsFiltrados = Datos.filter(post => post.categoria === categoriaSeleccionada);

  const handleClick = (id) => {
    const newId = expandedId === id ? null : id;
    setExpandedId(newId);
    if (onExpandChange) onExpandChange(newId !== null);
  };

  return (
    <div className="blog-section-list">
      {postsFiltrados.map(post => (
        <div
          className={`blog-section-card ${expandedId === post.id ? 'expanded' : ''}`}
          key={post.id}
          onClick={() => handleClick(post.id)}
        >
          <PropBlog {...post} />
        </div>
      ))}
    </div>
  );
}

export default SinCategoria;