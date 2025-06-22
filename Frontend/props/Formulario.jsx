import React from 'react';
import '../public/styles/Formulario.css';

const FormularioCatalogo = ({
  opciones = [],
  placeholderSelect = "Seleccione una opción"
}) => (
  <form
    method="post"
    action=""
    className="formulario-catalogo"
  >
    <div className="form-group">
      <input type="text" name="nombre" required className="form-input" placeholder="Nombre" />
    </div>
    <div className="form-group">
      <input type="text" name="apellido" required className="form-input" placeholder="Apellido" />
    </div>
    <div className="form-group">
      <select name="catalogo" required defaultValue="" className="form-input">
        <option value="" disabled>{placeholderSelect}</option>
        {opciones.map((opcion, idx) => (
          <option key={idx} value={opcion}>{opcion}</option>
        ))}
      </select>
    </div>
    <div className="form-group">
      <input type="email" name="correo" required className="form-input" placeholder="Correo electrónico" />
    </div>
    <div className="form-group">
      <textarea name="comentario" rows="3" className="form-input" placeholder="Comentario (opcional)"></textarea>
    </div>
    <button type="submit" className="form-btn">Enviar solicitud</button>
  </form>
);

export default FormularioCatalogo;
