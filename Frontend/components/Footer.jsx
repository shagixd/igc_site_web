import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { SiTiktok } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import '../public/styles/Footer.css'; // Asegúrate de tener este archivo CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content grid-footer">
        <div className="footer-logo">
          {/* Ruta real de tu logo */}
          <img src="../img/LOGO-IGC-1.png" alt="logo empresa" style={{ width: 120, marginBottom: 10 }} />
          <p>Capacitación para Funcionarios y Servidores Públicos</p>
          {/* Iconos de redes sociales con enlaces personalizables */}
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/IGCinstituto/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaFacebook color="#fff" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=51945504555&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <RiWhatsappFill color="#fff" />
            </a>
            <a href="https://www.instagram.com/igcintercontinental/#" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <BiLogoInstagramAlt color="#fff" />
            </a>
            <a href="https://www.tiktok.com/@institutodegerenciaigc" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <SiTiktok color="#fff" />
            </a>
            <a href="https://www.youtube.com/@intercontinentaligcsac7674" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <IoLogoYoutube color="#fff" />
            </a>
          </div>
        </div>
        <div className="footer-programs">
          <h3>Programas</h3>
          <ul>
            <li>Cursos Especiales</li>
            <li>Diplomas</li>
            <li>In-House</li>
            <li>Catálogo de Diplomas</li>
            <li>Catálogo de Cursos</li>
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
      <div className="copyright">
        <p>Copyright © 2022 Instituto de Gerencia Intercontinental. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}