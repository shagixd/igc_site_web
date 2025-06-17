import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa6";
import { MdGroups, MdOutlineHomeWork, MdSupportAgent } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { FaMedal, FaRegListAlt } from "react-icons/fa";
import '../public/styles/Nav.css';

function Nav() {
  const [open, setOpen] = useState(false);
  const [openCursos, setOpenCursos] = useState(false);
  const [active, setActive] = useState('');
  const location = useLocation();

  // Solo activa el efecto si fue por click, no por hover
  const isActive = (path) => active === path || location.pathname === path;

  // Cierra ambos menús
  const closeAllMenus = () => {
    setOpen(false);
    setOpenCursos(false);
  };

  // Handler para click en enlaces principales
  const handleNavClick = (path) => {
    setActive(path);
    closeAllMenus();
  };

  return (
    <nav className="nav-grid">
      <div className="nav-logo">
        {/* Aquí puedes poner tu logo */}
        <img src="../img/LOGO-IGC-1.png" alt="logo" style={{ height: 40 }} />
      </div>
      {/* 1. Inicio */}
      <div className="nav-item">
        {/* Línea editada: el enlace está dentro de un button */}
        <button
          type="button"
          style={{ background: 'none', border: 'none', padding: 0 }}
          onClick={() => handleNavClick('/')}
        >
          <Link
            to="/"
            className={isActive('/') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
          >
            <IoHome />Inicio
          </Link>
        </button>
      </div>
      {/* 2. Cursos */}
      <div
        className="nav-item"
        onMouseEnter={() => { setOpenCursos(true); setOpen(false); }}
        onMouseLeave={() => setOpenCursos(false)}
      >
        <div style={{ display: 'inline-block', position: 'relative' }}>
          {/* Línea editada: el enlace está dentro de un button */}
          <button
            type="button"
            onClick={() => { setOpenCursos((prev) => !prev); setOpen(false); setActive('/cursos'); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            aria-expanded={openCursos}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <TbBooks />
              Cursos ▼
            </span>
          </button>
          {openCursos && (
            <div style={{ position: 'absolute', background: 'white', zIndex: 1 }}>
              {/* Línea editada: el enlace está dentro de un button */}
              <button type="button" style={{ background: 'none', border: 'none', padding: 0, width: '100%' }}>
                <Link
                  to="/cursos/especializados"
                  onClick={() => handleNavClick('/cursos/especializados')}
                  className={isActive('/cursos/especializados') ? 'nav-link-active' : ''}
                  style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <TbBooks />Cursos Especializados
                </Link>
              </button>
              {/* Línea editada: el enlace está dentro de un button */}
              <button type="button" style={{ background: 'none', border: 'none', padding: 0, width: '100%' }}>
                <Link
                  to="/cursos/catalogo"
                  onClick={() => handleNavClick('/cursos/catalogo')}
                  className={isActive('/cursos/catalogo') ? 'nav-link-active' : ''}
                  style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <FaRegListAlt />Catálogo de Cursos
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* 3. Diplomas */}
      <div
        className="nav-item"
        onMouseEnter={() => { setOpen(true); setOpenCursos(false); }}
        onMouseLeave={() => setOpen(false)}
      >
        <div style={{ display: 'inline-block', position: 'relative' }}>
          {/* Línea editada: el enlace está dentro de un button */}
          <button
            type="button"
            onClick={() => { setOpen((prev) => !prev); setOpenCursos(false); setActive('/diplomas'); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            aria-expanded={open}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <PiCertificateFill />
              Diplomas ▼
            </span>
          </button>
          {open && (
            <div style={{ position: 'absolute', background: 'white', zIndex: 1 }}>
              {/* Línea editada: el enlace está dentro de un button */}
              <button type="button" style={{ background: 'none', border: 'none', padding: 0, width: '100%' }}>
                <Link
                  to="/diplomas/especialidad"
                  onClick={() => handleNavClick('/diplomas/especialidad')}
                  className={isActive('/diplomas/especialidad') ? 'nav-link-active' : ''}
                  style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <FaMedal />Diplomas de Especialización
                </Link>
              </button>
              {/* Línea editada: el enlace está dentro de un button */}
              <button type="button" style={{ background: 'none', border: 'none', padding: 0, width: '100%' }}>
                <Link
                  to="/diplomas/catalogos"
                  onClick={() => handleNavClick('/diplomas/catalogos')}
                  className={isActive('/diplomas/catalogos') ? 'nav-link-active' : ''}
                  style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <FaRegListAlt />Catálogo de Diplomas
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* 4. Congresos */}
      <div className="nav-item">
        {/* Línea editada: el enlace está dentro de un button */}
        <button
          type="button"
          style={{ background: 'none', border: 'none', padding: 0 }}
          onClick={() => handleNavClick('/congresos')}
        >
          <Link
            to="/congresos"
            className={isActive('/congresos') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
          >
            <MdGroups />Congresos
          </Link>
        </button>
      </div>
      {/* 5. In House */}
      <div className="nav-item">
        {/* Línea editada: el enlace está dentro de un button */}
        <button
          type="button"
          style={{ background: 'none', border: 'none', padding: 0 }}
          onClick={() => handleNavClick('/house')}
        >
          <Link
            to="/house"
            className={isActive('/house') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
          >
            <MdOutlineHomeWork />In House
          </Link>
        </button>
      </div>
      {/* 6. Asesoría y Consultoría */}
      <div className="nav-item">
        {/* Línea editada: el enlace está dentro de un button */}
        <button
          type="button"
          style={{ background: 'none', border: 'none', padding: 0 }}
          onClick={() => handleNavClick('/asesoria')}
        >
          <Link
            to="/asesoria"
            className={isActive('/asesoria') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
          >
            <MdSupportAgent />Asesoría y Consultoría
          </Link>
        </button>
      </div>
      {/* 7. Blog */}
      <div className="nav-item">
        {/* Línea editada: el enlace está dentro de un button */}
        <button
          type="button"
          style={{ background: 'none', border: 'none', padding: 0 }}
          onClick={() => handleNavClick('/blog')}
        >
          <Link
            to="/blog"
            className={isActive('/blog') ? 'nav-link-active' : ''}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: 'inherit' }}
          >
            <FaBlogger />Blog
          </Link>
        </button>
      </div>
      <div className="nav-item">{/* Espacio vacío para futuro contenido */}</div>
    </nav>
  );
}

export default Nav;