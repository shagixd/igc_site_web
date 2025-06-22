import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa6";
import { MdGroups, MdOutlineHomeWork, MdSupportAgent } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { FaMedal, FaRegListAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

import '../public/styles/Nav.css';

function Nav() {
  const [open, setOpen] = useState('');
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleDropdown = (menu) => setOpen(open === menu ? '' : menu);
  const closeDropdowns = () => setOpen('');

  return (
    <nav className="nav-grid" onMouseLeave={closeDropdowns}>
      <div className="nav-logo">
        <img src="" alt="logo" />
      </div>
      <ul className="nav-list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', margin: 0, padding: 0, listStyle: 'none', fontSize: '1.1rem' }}>
        <li className="nav-item">
          <Link
            to="/"
            className={isActive('/') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
            onClick={closeDropdowns}
          >
            <IoHome />Inicio
          </Link>
        </li>
        <li
          className={`nav-item dropdown${open === 'cursos' ? ' open' : ''}`}
          style={{ position: 'relative' }}
          onMouseEnter={() => handleDropdown('cursos')}
          onMouseLeave={closeDropdowns}
        >
          <div className="dropdown-toggle" style={{ display: 'inline-block', width: '100%' }}>
            <Link
              to=""
              className={isActive('/cursos/especializados') || isActive('/cursos/catalogo') ? 'nav-link-active' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit', width: '100%' }}
              onClick={e => { e.preventDefault(); handleDropdown('cursos'); }}
              aria-expanded={open === 'cursos'}
            >
              <TbBooks />Cursos <SlArrowDown style={{ fontSize: '1.1rem' }} />
            </Link>
          </div>
          {open === 'cursos' && (
            <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 10 }}>
              <Link
                to="/cursos/especializados"
                onClick={closeDropdowns}
                className={isActive('/cursos/especializados') ? 'nav-link-active' : ''}
              >
                <TbBooks />Cursos Especializados
              </Link>
              <Link
                to="/cursos/catalogo"
                onClick={closeDropdowns}
                className={isActive('/cursos/catalogo') ? 'nav-link-active' : ''}
              >
                <FaRegListAlt />Catálogo de Cursos
              </Link>
            </div>
          )}
        </li>
        <li
          className={`nav-item dropdown${open === 'diplomas' ? ' open' : ''}`}
          style={{ position: 'relative' }}
          onMouseEnter={() => handleDropdown('diplomas')}
          onMouseLeave={closeDropdowns}
        >
          <div className="dropdown-toggle" style={{ display: 'inline-block', width: '100%' }}>
            <Link
              to=""
              className={isActive('/diplomas/especialidad') || isActive('/diplomas/catalogos') ? 'nav-link-active' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit', width: '100%' }}
              onClick={e => { e.preventDefault(); handleDropdown('diplomas'); }}
              aria-expanded={open === 'diplomas'}
            >
              <PiCertificateFill />Diplomas <SlArrowDown style={{ fontSize: '1.1rem' }} />
            </Link>
          </div>
          {open === 'diplomas' && (
            <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: 0, zIndex: 10 }}>
              <Link
                to="/diplomas/especialidad"
                onClick={closeDropdowns}
                className={isActive('/diplomas/especialidad') ? 'nav-link-active' : ''}
              >
                <FaMedal />Diplomas de Especialización
              </Link>
              <Link
                to="/diplomas/catalogos"
                onClick={closeDropdowns}
                className={isActive('/diplomas/catalogos') ? 'nav-link-active' : ''}
              >
                <FaRegListAlt />Catálogo de Diplomas
              </Link>
            </div>
          )}
        </li>
        <li className="nav-item">
          <Link
            to="/congresos"
            className={isActive('/congresos') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
            onClick={closeDropdowns}
          >
            <MdGroups />Congresos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/house"
            className={isActive('/house') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
            onClick={closeDropdowns}
          >
            <MdOutlineHomeWork />In House
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/asesoria"
            className={isActive('/asesoria') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
            onClick={closeDropdowns}
          >
            <MdSupportAgent />Asesoría y Consultoría
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blog"
            className={isActive('/blog') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
            onClick={closeDropdowns}
          >
            <FaBlogger />Blog
          </Link>
        </li>
        <li className="nav-item">{/* Espacio vacío para futuro contenido */}</li>
      </ul>
    </nav>
  );
}

export default Nav;