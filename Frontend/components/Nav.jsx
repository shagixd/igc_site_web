import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../public/styles/Nav.css';
import { IoHome } from "react-icons/io5";
import { FaBlogger, FaGraduationCap, FaPuzzlePiece} from "react-icons/fa6";
import { MdSupportAgent, MdLibraryBooks, MdComputer, MdContactMail, MdInfo, MdEvent, MdShoppingCart} from "react-icons/md";
import { IoLibrarySharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  // Efecto para manejar el menú móvil
  useEffect(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  const handleClick = (e) => {
    // Si se hace clic en el botón del menú, alternar
    if (menuToggle.contains(e.target)) {
      mobileMenu.classList.toggle('activo');
    }
    // Si se hace clic en un enlace dentro del menú, cerrar
    else if (mobileMenu.contains(e.target) && e.target.closest('a')) {
      mobileMenu.classList.remove('activo');
    }
    // Si se hace clic fuera del menú y fuera del botón, cerrar
    else if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
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
            <li className="nav-item"><Link to="/nuestrosprogramas"><MdLibraryBooks /> Nuestros Programas</Link></li>
            <li className="nav-item"><Link to="/consultoria"><MdSupportAgent /> Consultoría</Link></li>
            <li className="nav-item"><Link to="campusvirtual"><MdComputer /> Campus Virtual</Link></li>
            <li className="nav-item"><Link to=""><MdContactMail /> Contáctenos</Link></li>
          </ul>
          <ul className="nav-list2">
            <li className="nav-item"><Link to="/"><MdInfo /> Sobre IGC</Link></li>  
            <li className="nav-item"><Link to="/cursosespecialidad"><IoLibrarySharp /> Cursos Gestión Pública</Link></li>
            <li className="nav-item"><Link to="/diplomasespecialidad"><FaGraduationCap /> Diplomas de Especializacion</Link></li>
            <li className="nav-item"><Link to="/congresos"><MdEvent /> Congresos y Eventos</Link></li>
            <li className="nav-item"><Link to="/cursosalamedida"><FaPuzzlePiece /> Cursos Hechos a la Medida</Link></li>
            <li className="nav-item"><Link to="/tiendavirtual"><MdShoppingCart /> Tienda Virtual</Link></li>
            <li className="nav-item"><Link to="/blog"><FaBlogger />Blog</Link></li>
          </ul>
        </div>
      </nav>

      {/* --- NAV MOBILE --- */}
      <nav className="nav-mobile">
        <div className="mobile-header">
          <div className="espacio-logo-mobile">
            <img src="/img/logoigc.png" alt="Logo IGC" />
          </div>
          <button className="menu-toggle">
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            <li><Link to="/instituto"><IoHome /> Instituto</Link></li>
            <li><Link to="/nuestrosprogramas"><MdLibraryBooks /> Nuestros Programas</Link></li>
            <li><Link to="/consultoria"><MdSupportAgent /> Consultoría</Link></li>
            <li><Link to=""><MdComputer /> Campus Virtual</Link></li>
            <li><Link to=""><MdContactMail /> Contáctenos</Link></li>

            <li><Link to="/"><MdInfo /> Sobre IGC</Link></li>  
            <li><Link to="/cursosespecialidad"><IoLibrarySharp /> Cursos Gestión Pública</Link></li>
            <li><Link to="/diplomasespecialidad"><FaGraduationCap /> Diplomas de Especializacion</Link></li>
            <li><Link to="/congresos"><MdEvent /> Congresos y Eventos</Link></li>
            <li><Link to="/cursosalamedida"><FaPuzzlePiece /> Cursos Hechos a la Medida</Link></li>
            <li><Link to="/blog"><FaBlogger />Blog</Link></li>
            <li><Link to="/tiendavirtual"><MdShoppingCart /> Tienda Virtual</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;