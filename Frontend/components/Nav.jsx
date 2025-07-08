import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../public/styles/Nav.css';
import { IoHome } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa6";
import { MdOutlineHomeWork, MdSupportAgent } from "react-icons/md";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [submenuMovilAbierto, setSubmenuMovilAbierto] = useState(false);


  return (
    <>
      {/* --- NAV DESKTOP --- */}
      <nav className="nav-desktop">
        <div className='espacio-logo'>
          <img src="/img/logoigc.png" alt="Logo IGC" />
        </div>
        <div className="espacio-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/"><IoHome /> Sobre IGC</Link></li>

            <li className="nav-item submenu">
              <span className="nav-enlace-desplegable">
                <TbBooks /> Educación Ejecutiva <SlArrowDown />
              </span>
              <ul className="submenu-links">
                <li><Link to="/diplomasespecialidad">Diplomas de Especialización</Link></li>
                <li><Link to="/cursosespecialidad">Cursos de Especialización</Link></li>
                <li><Link to="/cursosalamedida">Cursos a la Medida Institucional</Link></li>
                <li><Link to="/congresos">Congresos</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/cursos-in-house"><MdOutlineHomeWork /> Cursos - InHouse</Link></li>
            <li className="nav-item"><Link to="/consultoria"><MdSupportAgent /> Consultoría</Link></li>
            <li className="nav-item"><Link to="/tiendavirtual"><MdSupportAgent /> Tienda Virtual</Link></li>
            <li className="nav-item"><Link to="/blog"><FaBlogger /> Blog</Link></li>
            <li className="nav-item"><Link to="/"><MdSupportAgent /> Aula Virtual</Link></li>
          </ul>
        </div>
      </nav>

      {/* --- NAV MOBILE --- */}
      <nav className="nav-mobile">
        <div className="nav-mobile-header">
          <img src="/img/logoigc.png" alt="Logo IGC" />
          <button className="menu-hamburguesa" onClick={() => setMenuMovilAbierto(true)}>
            <GiHamburgerMenu size={28} />
          </button>
        </div>

        {/* Menú lateral móvil */}
        <div className={`menu-movil-panel ${menuMovilAbierto ? 'activo' : ''}`}>
          <button className="cerrar-menu" onClick={() => setMenuMovilAbierto(false)}>✖</button>
          <ul className="nav-list-movil">
            <li><Link to="/" onClick={() => setMenuMovilAbierto(false)}>Sobre IGC</Link></li>

            {/* Educación Ejecutiva con Submenú */}
            <li className="submenu-movil">
              <button className="submenu-toggle" onClick={() => setSubmenuMovilAbierto(!submenuMovilAbierto)}>
                Educación Ejecutiva {submenuMovilAbierto ? <SlArrowUp /> : <SlArrowDown />}
              </button>
              <ul className={`submenu-movil-links ${submenuMovilAbierto ? 'activo' : ''}`}>
                <li><Link to="/diplomasespecialidad" onClick={() => setMenuMovilAbierto(false)}>Diplomas de Especializacion</Link></li>
                <li><Link to="/cursosespecialidad" onClick={() => setMenuMovilAbierto(false)}>Cursos de Especializacion</Link></li>
                <li><Link to="/congresos" onClick={() => setMenuMovilAbierto(false)}>Congresos</Link></li>
                <li><Link to="#" onClick={() => setMenuMovilAbierto(false)}>Cursos a la Medida Institucional</Link></li>
              </ul>
            </li>

            <li><Link to="/cursos-in-house" onClick={() => setMenuMovilAbierto(false)}>Cursos InHouse</Link></li>
            <li><Link to="/consultoria" onClick={() => setMenuMovilAbierto(false)}>Consultoría</Link></li>
            <li><Link to="/tiendavirtual" onClick={() => setMenuMovilAbierto(false)}>Tienda Virtual</Link></li>
            <li><Link to="/blog" onClick={() => setMenuMovilAbierto(false)}>Blog</Link></li>
            <li><Link to="/" onClick={() => setMenuMovilAbierto(false)}>Aula Virtual</Link></li>
          </ul>
        </div>

      </nav>
    </>
  );
}

export default Nav;
