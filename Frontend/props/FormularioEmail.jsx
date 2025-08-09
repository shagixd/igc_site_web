import React, { useState } from 'react';
import '../public/styles/FormularioEmail.css';
import emailjs from 'emailjs-com';

const FormularioEmail = ({
  opciones = [],
  placeholderSelect = "Seleccione una opción"
}) => {

  // Estado para el select personalizado
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para limpiar el valor
  const limpiarValor = (valor) => {
    return valor
      .normalize('NFKD') // Elimina tildes
      .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
      .replace(/\s+/g, '_') // Reemplaza espacios por guiones bajos
      .replace(/[^a-zA-Z0-9_]/g, ''); // Solo letras, números y guiones bajos
  };

  // Cuando se selecciona una opción
  const handleSeleccion = (valor) => {
    setOpcionSeleccionada(valor);
    setMenuAbierto(false);
  };

  // Envío del formulario
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

    // Limpiar errores previos
    ["correo-error", "telefono-error", "comentario-error"].forEach(id => {
      const elem = document.getElementById(id);
      if (elem) elem.remove();
    });

    // Validaciones
    if (!nombre || !apellido || !catalogo || !correo || !telefono) {
      alert("⚠️ Todos los campos obligatorios deben estar llenos.");
      isValid = false;
    }

    if (!emailRegex.test(correo)) {
      const mensajeError = document.createElement("div");
      mensajeError.id = "correo-error";
      mensajeError.className = "error-message";
      mensajeError.textContent = "Por favor, ingresa un correo electrónico válido.";
      form.correo.parentNode.appendChild(mensajeError);
      isValid = false;
    }

    if (telefono && (telefono.length < 8 || telefono.length > 10)) {
      const mensajeError = document.createElement("div");
      mensajeError.id = "telefono-error";
      mensajeError.className = "error-message";
      mensajeError.textContent = "El número debe tener entre 8 y 10 dígitos.";
      form.telefono.parentNode.appendChild(mensajeError);
      isValid = false;
    }

    if (comentario && comentario.length > 200) {
      const mensajeError = document.createElement("div");
      mensajeError.id = "comentario-error";
      mensajeError.className = "error-message";
      mensajeError.textContent = "El comentario no puede superar los 200 caracteres.";
      form.comentario.parentNode.appendChild(mensajeError);
      isValid = false;
    }

    if (!isValid) return;

    // Enviar con emailjs
    emailjs.sendForm(
      'prueba_form',
      'template_o8a98tu',
      form,
      'QkZedkW_eGonzsh21'
    )
      .then(() => {
        alert('✅ Solicitud enviada correctamente');
        form.reset();
        setOpcionSeleccionada(""); // Resetea el select
      })
      .catch((error) => {
        console.error('Error al enviar:', error.text);
        alert('❌ Hubo un error al enviar el formulario.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-catalogo">
      {/* Nombre */}
      <div className="form-group">
        <input type="text" name="nombre" required className="form-input" placeholder="Nombre" />
      </div>

      {/* Apellido */}
      <div className="form-group">
        <input type="text" name="apellido" required className="form-input" placeholder="Apellido" />
      </div>

      {/* SELECT PERSONALIZADO */}
<div className="form-group custom-select">
  <div
    className="selected-option"
    onClick={() => setMenuAbierto(!menuAbierto)}
  >
    {opcionSeleccionada.trim() !== "" ? opcionSeleccionada : placeholderSelect}
    <span className="arrow">&#9662;</span>
  </div>

  {menuAbierto && (
    <ul className="options-list">
      {opciones.map((opcion, idx) => {
        const valorLimpio = limpiarValor(opcion);
        return (
          <li
            key={idx}
            onClick={(e) => {
              e.stopPropagation(); // Evita que el clic cierre el menú antes de asignar
              handleSeleccion(valorLimpio);
              setMenuAbierto(false); // Cierra el menú después de seleccionar
            }}
          >
            {opcion}
          </li>
        );
      })}
    </ul>
  )}

  {/* Input hidden para envío en formulario */}
  <input
    type="hidden"
    name="catalogo"
    value={opcionSeleccionada}
  />
</div>


      {/* Teléfono */}
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

      {/* Correo */}
      <div className="form-group">
        <input type="email" name="correo" required className="form-input" placeholder="Correo electrónico" />
      </div>

      {/* Comentario */}
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
        <div style={{ fontSize: "clamp(14px, 1.1vw, 24px)", color: "black", textAlign: "right" }}>
          <span id="contador-comentario">0/200</span>
        </div>
      </div>

      {/* Botón */}
      <button type="submit" className="form-btn">Enviar solicitud</button>
    </form>
  );
};

export default FormularioEmail;
