import React from 'react';

function FormularioSimple() {
  return (
    <form
      style={{
        width: '50%',
        height: '80%',
        margin: '10px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2% 4%',
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
      }}
    >
      <div style={{ width: '100%' }}>
        <label htmlFor="nombre" style={{ display: 'block', marginBottom: '1%' }}>Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          style={{ width: '100%', padding: '2% 0', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '3%' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="apellido" style={{ display: 'block', marginBottom: '1%' }}>Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
          style={{ width: '100%', padding: '2% 0', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '3%' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '1%' }}>Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={{ width: '100%', padding: '2% 0', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '3%' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="telefono" style={{ display: 'block', marginBottom: '1%' }}>Número telefónico:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
          style={{ width: '100%', padding: '2% 0', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '3%' }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <label htmlFor="comentario" style={{ display: 'block', marginBottom: '1%' }}>Comentario:</label>
        <textarea
          id="comentario"
          name="comentario"
          rows="3"
          required
          style={{ width: '100%', padding: '2% 0', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical', marginBottom: '3%'  }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: '100%',
          height: 'auto',
          padding: '1% 3%',
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
