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
        <div className="footer-flex">
          <div className='cuerpo1'>
            <img src="/img/logoigc.png" alt="logo empresa" />
            <p>Capacitación para Funcionarios y Servidores Públicos</p>
            <div className='footer-enlaces'>
            <a href="https://www.facebook.com/IGCinstituto/" target="_blank" rel="noopener noreferrer" className="footer-icon facebook">
              <FaFacebook color="#fff" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=51945504555&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="footer-icon whatsapp">
              <RiWhatsappFill color="#fff" />
            </a>
            <a href="https://www.instagram.com/igcintercontinental/#" target="_blank" rel="noopener noreferrer" className="footer-icon instagram">
              <BiLogoInstagramAlt color="#fff" />
            </a>
            <a href="https://www.tiktok.com/@institutodegerenciaigc" target="_blank" rel="noopener noreferrer" className="footer-icon tiktok">
              <SiTiktok color="#fff" />
            </a>
            <a href="https://www.youtube.com/@intercontinentaligcsac7674" target="_blank" rel="noopener noreferrer" className="footer-icon youtube">
              <IoLogoYoutube color="#fff" />
            </a>
            </div>
          </div>
          <div className='cuerpo2'>
            <h3>Programas</h3>
          <ul>
            <li>Cursos Especiales</li>
            <li>Diplomas</li>
            <li>In-House</li>
            <li>Catálogo de Diplomas</li>
            <li>Catálogo de Cursos</li>
          </ul>
          </div>
          <div className='cuerpo3'>
            <h3>Bienvenidos a IGC</h3>
          <ul>
            <li>Asesoría y Consultoría</li>
            <li>Convenios Realizados</li>
          </ul>
          </div>
          <div className='cuerpo4'>
            <h3>Contáctanos</h3>
            <p>Teléfono: 945 504 555</p>
            <p>Correos: </p>
          </div>
        </div>
        <div className='zona-abajo'>
          <p>Copyright © 2022 Instituto de Gerencia Intercontinental. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
}