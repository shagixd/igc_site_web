import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../public/styles/Nav.css';

// Iconos
import { IoHome } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa6";
import { MdOutlineHomeWork, MdSupportAgent } from "react-icons/md";
import { SlArrowDown, SlArrowUp } from "react-icons/sl"; // Íconos de flecha

function Nav() {
  const [submenuAbierto, setSubmenuAbierto] = useState(false);

  return (
    <nav className="fondo-nav">
      <div className='espacio-logo'>
        <img src="/img/logoigc.png" alt="Logo IGC" style={{ width: '200px', height: 'auto' }} />
      </div>
      <div className="espacio-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">
              <IoHome /> Sobre IGC
            </Link>
          </li>

          {/* Menú desplegable */}
          <li 
            className={`nav-item ${submenuAbierto ? 'open' : ''}`} 
            onMouseLeave={() => setSubmenuAbierto(false)}>
            <span 
              className="nav-enlace-desplegable" 
              onClick={() => setSubmenuAbierto(!submenuAbierto)} 
              style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <TbBooks style={{fontSize: '30px'}}/> Educación Ejecutiva {submenuAbierto ? <SlArrowUp /> : <SlArrowDown />}
            </span>
            <ul className="submenu-links">
              <li><Link to="/diplomasespecialidad">Diplomas de Especializacion</Link></li>
              <li><Link to="/cursosespecialidad">Cursos de Especializacion</Link></li>
              <li><Link to="#">Cursos In-House</Link></li>
              <li><Link to="congresos">Congresos</Link></li>
            </ul>
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
    </nav>
  );
}

export default Nav;
