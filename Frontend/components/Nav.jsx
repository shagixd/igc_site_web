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

  return (
    <nav>
      <Link to="/"><IoHome style={{ verticalAlign: 'middle', marginRight: 4 }} />Inicio</Link>
      <Link to="/cursos"><TbBooks style={{ verticalAlign: 'middle', marginRight: 4 }} />Cursos</Link>
      <Link to="/congresos"><MdGroups style={{ verticalAlign: 'middle', marginRight: 4 }} />Congresos</Link>
      <Link to="/blog"><FaBlogger style={{ verticalAlign: 'middle', marginRight: 4 }} />Blog</Link>
      <Link to="/house"><MdOutlineHomeWork style={{ verticalAlign: 'middle', marginRight: 4 }} />House</Link>
      <Link to="/asesoria"><MdSupportAgent style={{ verticalAlign: 'middle', marginRight: 4 }} />Asesoría</Link>
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <PiCertificateFill style={{ verticalAlign: 'middle', marginRight: 4 }} />
          Diplomas ▼
        </button>
        {open && (
          <div style={{ position: 'absolute', background: 'white', border: '1px solid #ccc', zIndex: 1 }}>
            <Link to="/diplomas/especialidad" onClick={() => setOpen(false)}>
            <FaMedal style={{ verticalAlign: 'middle', marginRight: 4 }} />Diplomas de Especialización</Link>
            <Link to="/diplomas/catalogos" onClick={() => setOpen(false)}>
            <FaRegListAlt style={{ verticalAlign: 'middle', marginRight: 4 }} />Catálogo de Diplomas</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;