import { Link } from 'react-router-dom';
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

  return (
    <nav className="nav-grid">
      <div className="nav-logo">
        {/* Aquí puedes poner tu logo */}
        <img src="../img/LOGO-IGC-1.png" alt="logo" style={{ height: 40 }} />
      </div>
      <div className="nav-item">
        <Link to="/"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><IoHome />Inicio</span></Link>
      </div>
      <div className="nav-item">
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <button
            type="button"
            onClick={() => setOpenCursos((prev) => !prev)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <TbBooks />
              Cursos ▼
            </span>
          </button>
          {openCursos && (
            <div style={{ position: 'absolute', background: 'white', zIndex: 1 }}>
              <Link to="/cursos/especializados" onClick={() => setOpenCursos(false)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <TbBooks />Cursos Especializados
                </span>
              </Link>
              <Link to="/cursos/catalogo" onClick={() => setOpenCursos(false)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <FaRegListAlt />Catálogo de Cursos
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="nav-item">
        <Link to="/congresos"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MdGroups />Congresos</span></Link>
      </div>
      <div className="nav-item">
        <Link to="/blog"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FaBlogger />Blog</span></Link>
      </div>
      <div className="nav-item">
        <Link to="/house"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MdOutlineHomeWork />House</span></Link>
      </div>
      <div className="nav-item">
        <Link to="/asesoria"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MdSupportAgent />Asesoría</span></Link>
      </div>
      <div className="nav-item">
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <PiCertificateFill />
              Diplomas ▼
            </span>
          </button>
          {open && (
            <div style={{ position: 'absolute', background: 'white', zIndex: 1 }}>
              <Link to="/diplomas/especialidad" onClick={() => setOpen(false)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <FaMedal />Diplomas de Especialización
                </span>
              </Link>
              <Link to="/diplomas/catalogos" onClick={() => setOpen(false)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <FaRegListAlt />Catálogo de Diplomas
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="nav-item">{/* Espacio vacío para futuro contenido */}</div>
    </nav>
  );
}

export default Nav;