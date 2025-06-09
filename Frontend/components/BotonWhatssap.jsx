import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

const whatsappNumber = '51945504555'; // Cambia por el número de la empresa (incluye código de país)
const message = 'Hola, deseo más información sobre sus servicios.'; // Mensaje opcional

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const style = {
  position: 'fixed',
  bottom: 24,
  right: 24,
  zIndex: 9999,
  background: '#25D168',
  color: '#fff',
  borderRadius: 30,
  width: 'auto',
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  padding: '0 20px',
  gap: 10,
};

const textStyle = {
  color: '#fff', // Mismo color que el icono
  fontWeight: 'bold',
  fontSize: 18,
  marginRight: 10,
  whiteSpace: 'nowrap',
};

export default function BotonWhatssap() {
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={style} title="Contáctanos por WhatsApp">
      <span style={textStyle}>Contáctanos</span>
      <RiWhatsappFill size={36} />
    </a>
  );
}