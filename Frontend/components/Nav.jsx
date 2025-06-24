import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../public/styles/Nav.css';

// Iconos
import { IoHome } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa6";
import { MdOutlineHomeWork, MdSupportAgent } from "react-icons/md";

const textos = [
  "Fortalece tu perfil.",
  "Lidera cambios",
  "Impulsa tu potencial",
  "Domina el conocimiento",
];

function Nav() {
  const [indice, setIndice] = useState(0);
  const [textoAnimado, setTextoAnimado] = useState("");

  // Animación de texto rotativo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % textos.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    setTextoAnimado(""); // Reiniciar texto
    let i = 0;
    const texto = textos[indice];
    const timeout = setInterval(() => {
      setTextoAnimado(texto.slice(0, i + 1));
      i++;
      if (i === texto.length) clearInterval(timeout);
    }, 60);

    return () => clearInterval(timeout);
  }, [indice]);

  return (
    <nav className="fondo-nav">
      {/* Imagen con filtro */}
      <div className="fondo-imagen"></div>

      {/* Contenido encima */}
      <div className="contenido-nav">
        {/* Logo y menú */}
        <div className="nav-container">
          <ul className="nav-list">
            <li>
              <img src="/img/logoigc.png" alt="Logo IGC" style={{ width: '200px', height: 'auto' }} />
            </li>
            <li className="nav-item">
              <Link to="/">
                <IoHome /> Sobre IGC
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nuestrosprogramas">
                <TbBooks /> Nuestros Programas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cursos-in-house">
                <MdOutlineHomeWork /> Cursos - InHouse
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/consultoria">
                <MdSupportAgent /> Consultoría
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tiendavirtual">
                <MdSupportAgent /> Tienda Virtual
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">
                <FaBlogger /> Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <MdSupportAgent /> Aula Virtual
              </Link>
            </li>
          </ul>
        </div>

        {/* Texto animado centrado */}
        <div className="texto-nav">
          <h3>INSTITUTO DE GERENCIA INTERNACIONAL</h3>
          <h2>{textoAnimado}</h2>
          <p>Integrate para un futuro más exitoso con nuestros cursos especializados</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;