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
        <div className="footer-contenedor">
          <div className='cuerpo1'>
            <img src="/img/logoigc.png" alt="logo empresa" />
            <p>Centro de  altos estudios ejecutivos y gerenciales
                23 años  contribuyendo con al educación ejecutiva</p>
          </div>
          <div className='cuerpo2'>
            <h3>CERTIFICADO</h3>
            <p>Verifica la validez de tu certificado
              Verificación de Certificado</p>
          </div>
          <div className='cuerpo3'>
            <h3>CONTACTENOS</h3>
            <p>Telefonos: 945504555 - 972628566</p>
            <h3>CORREOS</h3>
            <ul>
              <li>igcinstituto@gmail.com</li>
              <li>capacita@escuelag.com</li>
              <li>www.escuelag.com</li>
            </ul>
          </div>
        </div>
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
        <div className='zona-abajo'>
          <p>Copyright © 2022 Instituto de Gerencia Intercontinental. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
}