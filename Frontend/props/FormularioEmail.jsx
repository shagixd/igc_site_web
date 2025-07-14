import React from 'react';
import '../public/styles/Formulario.css';
import emailjs from 'emailjs-com';

const FormularioEmail = ({
  opciones = [],
  placeholderSelect = "Seleccione una opción"
}) => {

  // Función para limpiar cualquier cadena de texto
  const limpiarValor = (valor) => {
    return valor
      .normalize('NFKD') // Elimina tildes
      .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
      .replace(/\s+/g, '_') // Reemplaza espacios por guiones bajos
      .replace(/[^a-zA-Z0-9_]/g, ''); // Solo letras, números y guiones bajos
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const catalogo = form.catalogo.value.trim();
    const correo = form.correo.value.trim();
    const telefono = form.telefono.value.trim();
    const comentario = form.comentario.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Limpiar mensajes anteriores
    const errorCorreo = document.getElementById("correo-error");
    const errorTelefono = document.getElementById("telefono-error");
    const errorComentario = document.getElementById("comentario-error");

    if (errorCorreo) errorCorreo.remove();
    if (errorTelefono) errorTelefono.remove();
    if (errorComentario) errorComentario.remove();

    // Validaciones
    if (!nombre || !apellido || !catalogo || !correo || !telefono) {
      alert("⚠️ Todos los campos obligatorios deben estar llenos.");
      isValid = false;
    }

    if (!emailRegex.test(correo)) {
      const mensajeError = document.createElement("div");
      mensajeError.id = "correo-error";
      mensajeError.className = "error-message";
      mensajeError.style.color = "red";
      mensajeError.style.fontSize = "0.85rem";
      mensajeError.style.marginTop = "-10px";
      mensajeError.textContent = "Por favor, ingresa un correo electrónico válido.";
      form.correo.parentNode.appendChild(mensajeError);
      isValid = false;
    }

    if (telefono && (telefono.length < 8 || telefono.length > 10)) {
      const mensajeError = document.createElement("div");
      mensajeError.id = "telefono-error";
      mensajeError.className = "error-message";
      mensajeError.style.color = "red";
      mensajeError.style.fontSize = "0.85rem";
      mensajeError.style.marginTop = "-10px";
      mensajeError.textContent = "El número debe tener entre 8 y 10 dígitos.";
      form.telefono.parentNode.appendChild(mensajeError);
      isValid = false;
    }

    if (comentario && comentario.length > 200) {
      const mensajeError = document.createElement("div");
      mensajeError.id = "comentario-error";
      mensajeError.className = "error-message";
      mensajeError.style.color = "red";
      mensajeError.style.fontSize = "0.85rem";
      mensajeError.style.marginTop = "-10px";
      mensajeError.textContent = "El comentario no puede superar los 200 caracteres.";
      form.comentario.parentNode.appendChild(mensajeError);
      isValid = false;
    }

    if (!isValid) return;

    console.log('Datos a enviar:', { nombre, apellido, catalogo, correo, telefono, comentario });

    emailjs.sendForm(
      'prueba_form',
      'template_o8a98tu',
      form,
      'QkZedkW_eGonzsh21'
    )
    .then(() => {
      alert('✅ Solicitud enviada correctamente');
      form.reset(); // Limpiar formulario
    })
    .catch((error) => {
      console.error('Error al enviar:', error.text);
      alert('❌ Hubo un error al enviar el formulario.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-catalogo">
      <div className="form-group">
        <input type="text" name="nombre" required className="form-input" placeholder="Nombre" />
      </div>
      <div className="form-group">
        <input type="text" name="apellido" required className="form-input" placeholder="Apellido" />
      </div>
      <div className="form-group">
        <select name="catalogo" required defaultValue="" className="form-input">
          <option value="" disabled>{placeholderSelect}</option>
          {opciones.map((opcion, idx) => {
            const valorLimpio = limpiarValor(opcion);
            return (
              <option key={idx} value={valorLimpio}>
                {opcion}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="telefono"
          required
          className="form-input"
          placeholder="Número telefónico"
          maxLength="9"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
          }}
        />
      </div>
      <div className="form-group">
        <input type="email" name="correo" required className="form-input" placeholder="Correo electrónico" />
      </div>
      <div className="form-group">
        <textarea
          name="comentario"
          rows="3"
          maxLength="200"
          className="form-input"
          placeholder="Comentario (opcional)"
          onInput={(e) => {
            const count = e.target.value.length;
            const counter = document.getElementById("contador-comentario");
            if (counter) counter.textContent = `${count}/200`;
          }}
        ></textarea>
        <div style={{ fontSize: "25px", color: "black", textAlign: "right" }}>
          <span id="contador-comentario">0/200</span>
        </div>
      </div>
      <button type="submit" className="form-btn">Enviar solicitud</button>
    </form>
  );
};

export default FormularioEmail;