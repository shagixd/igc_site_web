import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../public/styles/Nav.css';
import { IoHome } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa6";
import { MdOutlineHomeWork, MdSupportAgent } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  // Efecto para manejar el menú móvil
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    const handleClick = (e) => {
      if (menuToggle.contains(e.target)) {
        mobileMenu.classList.toggle('activo');
      } else if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('activo');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* --- NAV DESKTOP --- */}
      <nav className="nav-desktop">
        <div className='espacio-logo'>
          <img src="/img/logoigc.png" alt="Logo IGC" />
        </div>
        <div className="espacio-nav">
          <ul className='nav-list1'>
            <li className="nav-item"><Link to="/instituto"><IoHome /> Instituto</Link></li>
            <li className="nav-item"><Link to="/consultoria">Consultoría</Link></li>
            <li className="nav-item"><Link to="">Campus Virtual</Link></li>
            <li className="nav-item"><Link to="">Contáctenos</Link></li>
          </ul>
          <ul className="nav-list2">
            <li className="nav-item"><Link to="/">Sobre IGC</Link></li>  
            <li className="nav-item"><Link to="/nuestrosprogramas">Nuestros Programas</Link></li> 
            <li className="nav-item"><Link to="/cursosespecialidad">Cursos Gestión Pública</Link></li>
            <li className="nav-item"><Link to="/diplomasespecialidad">Cursos Empresariales</Link></li>
            <li className="nav-item"><Link to="/cursosalamedida">Cursos Hechos a la Medida</Link></li>
            <li className="nav-item"><Link to="/tiendavirtual"><MdSupportAgent />Tienda Virtual</Link></li>
            <li className="nav-item"><Link to="/blog"><FaBlogger />Blog</Link></li>
          </ul>
        </div>
      </nav>

      {/* --- NAV MOBILE --- */}
      <nav className="nav-mobile">
        <div className="mobile-header">
          <div className="espacio-logo">
            <img src="/img/logoigc.png" alt="Logo IGC" />
          </div>
          <button className="menu-toggle">
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="mobile-menu">
          <button className="close-btn">×</button>
          <ul className="mobile-nav-list">
            <li><Link to="/instituto">Instituto</Link></li>
            <li><Link to="/consultoria">Consultoría</Link></li>
            <li><Link to="">Campus Virtual</Link></li>
            <li><Link to="">Contáctenos</Link></li>
            <li><Link to="/">Sobre IGC</Link></li>  
            <li><Link to="/nuestrosprogramas">Nuestros Programas</Link></li> 
            <li><Link to="/cursosespecialidad">Cursos Gestión Pública</Link></li>
            <li><Link to="/diplomasespecialidad">Cursos Empresariales</Link></li>
            <li><Link to="/cursosalamedida">Cursos Hechos a la Medida</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/tiendavirtual">Tienda Virtual</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;