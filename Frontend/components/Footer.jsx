import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { SiTiktok } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer style={{ background: '#222', color: '#fff', padding: '2rem 0' }}>
      <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className="footer-logo">
          {/* Coloca la ruta real de tu logo */}
          <img src="/img/logo.png" alt="logo empresa" style={{ width: 120, marginBottom: 10 }} />
          <p>Capacitación para Funcionarios y Servidores Públicos</p>
          {/* Si tienes iconos de redes sociales, pon sus rutas */}
          <div>
            <FaFacebook />
            <RiWhatsappFill />
            <BiLogoInstagramAlt />
            <SiTiktok />
            <IoLogoYoutube />
          </div>
        </div>
        <div className="footer-programs">
          <h3>Programas</h3>
          <ul>
            <li><a href="#">Cursos Especiales</a></li>
            <li><a href="#">Diplomas</a></li>
            <li><a href="#">In-House</a></li>
            <li><a href="#">Catálogo de Diplomas</a></li>
            <li><a href="#">Catálogo de Cursos</a></li>
          </ul>
        </div>
        <div className="footer-about">
          <h3>Bienvenidos a IGC</h3>
          <ul>
            <li>Asesoría y Consultoría</li>
            <li>Convenios Realizados</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contáctanos</h3>
          <p>Visítanos en: Av. Gral. Juan Antonio Álvarez de Arenales 2081, Lince 15046</p>
          <p>Teléfono: 945 504 555</p>
        </div>
      </div>
      <div className="copyright" style={{ textAlign: 'center', marginTop: 20 }}>
        <p>Copyright © 2022 Instituto de Gerencia Intercontinental. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}