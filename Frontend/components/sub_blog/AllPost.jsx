import React from 'react';
import PropsVariados from '../../props/PropBlog.jsx';
import posts from '../../props/posts.js';

function AllPost() {
  // Obtener categorías únicas
  const categorias = [...new Set(posts.map(post => post.categoria))];

  return (
    <div>
      {categorias.map(categoria => (
        <div key={categoria}>
          <h2 style={{ textTransform: 'capitalize', marginTop: 30 }}>{categoria}</h2>
          {posts
            .filter(post => post.categoria === categoria)
            .map(post => (
              <PropsVariados
                key={post.id}
                {...post}
              />
            ))}
        </div>
      ))}
    </div>
  );
}

export default AllPost;