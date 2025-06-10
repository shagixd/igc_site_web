import React from 'react';

function FormularioSimple() {
  return (
    <form
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '2rem',
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
      }}
    >
      <div style={{ width: '100%' }}>
        <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.3rem' }}>Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="apellido" style={{ display: 'block', marginBottom: '0.3rem' }}>Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.3rem' }}>Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="telefono" style={{ display: 'block', marginBottom: '0.3rem' }}>Número telefónico:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="comentario" style={{ display: 'block', marginBottom: '0.3rem' }}>Comentario:</label>
        <textarea
          id="comentario"
          name="comentario"
          rows="3"
          required
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.7rem',
          borderRadius: '4px',
          border: 'none',
          background: '#007bff',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Enviar
      </button>
    </form>
  );
}

export default FormularioSimple;
