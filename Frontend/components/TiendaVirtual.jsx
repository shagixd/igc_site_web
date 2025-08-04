import React, { useState } from 'react';
import CardShop from '../props/PlantillaTienda';
import { FaShopify, FaGraduationCap } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { IoIosWallet } from "react-icons/io";
import { MdEvent } from "react-icons/md";
import { FcSimCardChip } from "react-icons/fc";
import '../public/styles/TiendaVirtual.css';

const inventario = [
  {
    titulo: 'CURSO DE PRUEBA OBRAS PUBLICAS POR ADMINISTRACION DIRECTA',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/pruebatienda.png',
    colorFondo: '#ffffffff',
    precio: '$/24.00',
    tipo: 'cursos'
  },
  {
    titulo: 'CUURSO DE PRUEBA REGISTROS CONTINENTALES',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/pruebatienda1.png',
    colorFondo: '#ffffffff',
    precio: '$/26.00',
    tipo: 'cursos'
  },
  {
    titulo: 'Curso de Prueba3',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/pruebatienda2.png',
    colorFondo: '#ffffffff',
    precio: '$/25.00',
    tipo: 'diplomas'
  },
  {
    titulo: 'Curso de Prueba4',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/pruebatienda3.png',
    colorFondo: '#ffffffff',
    precio: '$/29.00',
    tipo: 'congresos'
  },
  {
    titulo: 'Curso de Prueba5',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/pruebatienda4.png',
    colorFondo: '#ffffffff',
    precio: '$/26.00',
    tipo: 'diplomas'
  },
  {
    titulo: 'Curso de Prueba6',
    descripcion: 'Modalidad: Virtual',
    imagen: '/img/pruebatienda5.png',
    colorFondo: '#ffffffff',
    precio: '$/26.00',
    tipo: 'cursos'
  }
];

const TiendaVirtual = () => {
  const [filtroTipo, setFiltroTipo] = useState('');
  const [desplegado, setDesplegado] = useState(false);

  const tipos = ['todos', 'cursos', 'diplomas', 'congresos'];

  // Filtrar inventario
  const inventarioFiltrado = inventario.filter(item => {
    if (filtroTipo === '') return true;
    return item.tipo === filtroTipo;
  });

  // Función para obtener ícono según tipo
  const getIconoPorTipo = (tipo) => {
    switch (tipo) {
      case 'cursos':
        return <IoLibrarySharp style={{ marginRight: '8px' }} />;
      case 'diplomas':
        return <FaGraduationCap style={{ marginRight: '8px' }} />;
      case 'congresos':
        return <MdEvent style={{ marginRight: '8px' }} />;
      case 'todos':
      default:
        return <IoIosWallet style={{ marginRight: '8px' }} />;
    }
  };

  // Texto e ícono del botón principal
  const textoSeleccionado = filtroTipo ? (
    <>
      {getIconoPorTipo(filtroTipo)}
      {filtroTipo.charAt(0).toUpperCase() + filtroTipo.slice(1)}
    </>
  ) : (
    <>
      {getIconoPorTipo('todos')}
      Todos los productos
    </>
  );

  return (
    <>
      {/* Encabezado */}
      <div className='entrada-tienda'>
        <div className='texto-tienda'>
          <h2>Tienda de IGC</h2>
          <p>Instituto de Gerencia Intercontinental</p>
          <div className='espacio-icon'>
            <FcSimCardChip />
          </div>
        </div>
        <div className='img-tienda'>
          <img src="./img/tienda-igc.png" alt="Tienda IGC" />
        </div>
      </div>

      {/* Buscador y dropdown */}
      <div className='buscador-tienda'>
        <div className='texto-de-tienda'>
          <h3><FaShopify /> Tienda Virtual</h3>
          <p>texto de relleno para el subtitulo</p>
        </div>

        {/* Dropdown personalizado */}
        <div className="dropdown-tienda">
          <button
            type="button"
            onClick={() => setDesplegado(!desplegado)}
            style={{
              padding: '2% 4%',
              color: '#000000ff',
              fontSize: 'clamp(12px, 2vw, 24px)',
              border: '1px solid #ccc',
              background: '#fff',
              cursor: 'pointer',
              width: '100%',
              borderRadius: '6px',
              boxShadow: '0 2px 3px rgba(0, 0, 0, 0.29)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {textoSeleccionado}
            </span>
            <span
              style={{
                transform: desplegado ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              ▼
            </span>
          </button>

          {/* Opciones desplegables */}
          {desplegado && (
            <ul
              className="dropdown-content"
              style={{
                listStyle: 'none',
                padding: 0,
                color: '#222222ff',
                margin: 0,
                border: '1px solid #ccc',
                borderTop: 'none',
                borderRadius: '0 0 6px 6px',
                backgroundColor: '#fff',
                position: 'absolute',
                width: '28%',
                zIndex: 10,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              {tipos.map((tipo) => (
                <li key={tipo}>
                  <button
                    onClick={() => {
                      setFiltroTipo(tipo === 'todos' ? '' : tipo);
                      setDesplegado(false);
                    }}
                    style={{
                      fontSize: 'clamp(12px, 2vw, 24px)',
                      width: '100%',
                      textAlign: 'left',
                      padding: '2% 5%',
                      border: 'none',
                      background: filtroTipo === (tipo === 'todos' ? '' : tipo)
                        ? '#2240a0ff'
                        : 'transparent',
                      color: filtroTipo === (tipo === 'todos' ? '' : tipo)
                        ? 'white'
                        : 'black',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {getIconoPorTipo(tipo)}
                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Contenedor de productos */}
      <div className="tienda-contenedora">
        {inventarioFiltrado.length > 0 ? (
          inventarioFiltrado.map((objeto, index) => (
            <div
            className='card-tienda'
              key={objeto.titulo}
              style={{ '--color-fondo': objeto.colorFondo, animationDelay: `${index * 0.1}s` }}>
              <CardShop
                titulo={objeto.titulo}
                descripcion={objeto.descripcion}
                imagen={objeto.imagen}
                colorFondo={objeto.colorFondo}
                precio={objeto.precio}
              />
            </div>
          ))
        ) : (
          <p>No hay productos disponibles para este filtro.</p>
        )}
      </div>

      {/* Overlay para cerrar al hacer clic fuera */}
      {desplegado && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9,
            cursor: 'default',
          }}
          onClick={() => setDesplegado(false)}
        />
      )}
    </>
  );
};

export default TiendaVirtual;