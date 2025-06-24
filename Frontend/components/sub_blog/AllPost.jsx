// AllPost.jsx
import React, { useState } from 'react';
import PropsVariados from '../../props/PropBlog.jsx';
import Datos from '../../props/ContenidoBlog.js';

function AllPost({ onExpandChange }) {
  const [expandedId, setExpandedId] = useState(null);

  const categorias = [...new Set(Datos.map(post => post.categoria))];

  const handleClick = (id) => {
    const newId = expandedId === id ? null : id;
    setExpandedId(newId);
    if (onExpandChange) onExpandChange(newId !== null);
  };

  return (
    <div>
      {categorias.map(categoria => (
        <div key={categoria} style={{ textAlign: 'center', marginBottom: 40 }}>
          {/* Contenedor con líneas a los lados */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}
          >
            <hr
              style={{
                flex: 1,
                border: '0',
                borderTop: '2px solid #0015a1', // Línea gris clara
                margin: 0
              }}
            />
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#0015a1',
                margin: '0 10px',
                textTransform: 'capitalize'
              }}
            >
              {categoria}
            </h2>
            <hr
              style={{
                flex: 1,
                border: '0',
                borderTop: '2px solid #0015a1',
                margin: 0
              }}
            />
          </div>

          <div className="blog-section-list">
            {Datos
              .filter(post => post.categoria === categoria)
              .map(post => (
                <div
                  className={`blog-section-card ${expandedId === post.id ? 'expanded' : ''}`}
                  key={post.id}
                  onClick={() => handleClick(post.id)}
                >
                  <PropsVariados {...post} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPost;