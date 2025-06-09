import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa6";
import { MdGroups, MdOutlineHomeWork, MdSupportAgent } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { FaMedal, FaRegListAlt } from "react-icons/fa";

function Nav() {
  const [open, setOpen] = useState(false);
  const [openCursos, setOpenCursos] = useState(false);

  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link to="/"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><IoHome />Inicio</span></Link>
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <button
            type="button"
            onClick={() => setOpenCursos((prev) => !prev)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {/* Aquí va el icono de cursos */}
              {/* <TuIconoCursos /> */}
              Cursos ▼
            </span>
          </button>
          {openCursos && (
            <div style={{ position: 'absolute', background: 'white', border: '1px solid #ccc', zIndex: 1 }}>
              <Link to="/cursos/especializados" onClick={() => setOpenCursos(false)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {/* Aquí va el icono de cursos especializados */}
                  {/* <TuIconoEspecializados /> */}
                  Cursos Especializados
                </span>
              </Link>
              <Link to="/cursos/catalogo" onClick={() => setOpenCursos(false)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {/* Aquí va el icono de catálogo de cursos */}
                  {/* <TuIconoCatalogo /> */}
                  Catálogo de Cursos
                </span>
              </Link>
            </div>
          )}
        </div>
        <Link to="/congresos"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MdGroups />Congresos</span></Link>
        <Link to="/blog"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FaBlogger />Blog</span></Link>
        <Link to="/house"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MdOutlineHomeWork />House</span></Link>
        <Link to="/asesoria"><span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MdSupportAgent />Asesoría</span></Link>
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
            <div style={{ position: 'absolute', background: 'white', border: '1px solid #ccc', zIndex: 1 }}>
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
    </nav>
  );
}

export default Nav;