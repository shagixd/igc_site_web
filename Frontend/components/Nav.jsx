import { useState } from 'react';
import Inicio from './Inicio.jsx';
import Diploma_Especialidad from './Diplomas_Especialidad.jsx';
import Diploma_Catalogos from './Diplomas_Catalogos.jsx';
import Blog from './Blog.jsx';

// Componentes para cada sección
function Cursos() {
  return <div>Aquí puedes ver nuestros cursos.</div>;
}
function Congresos() {
  return <div>Próximos congresos y eventos.</div>;
}
function House() {
  return <div>Información sobre House.</div>;
}
function Asesoria_Consultoria() {
  return <div>Servicios de asesoría.</div>;
}

const sections = [
  { key: 'inicio', label: 'Inicio', component: <Inicio /> },
  { key: 'cursos', label: 'Cursos', component: <Cursos /> },
  // Diplomas tendrá submenú, así que no se agrega aquí
  { key: 'congresos', label: 'Congresos', component: <Congresos /> },
  { key: 'blog', label: 'Blog', component: <Blog /> },
  { key: 'house', label: 'House', component: <House /> },
  { key: 'asesoria', label: 'Asesoría', component: <Asesoria_Consultoria /> },
];

const diplomasOptions = [
  { key: 'diplomaA', label: 'Diploma Tipo A', component: <Diploma_Especialidad /> },
  { key: 'diplomaB', label: 'Diploma Tipo B', component: <Diploma_Catalogos /> },
];

function Nav() {
  const [active, setActive] = useState('inicio');
  const [showDiplomas, setShowDiplomas] = useState(false);

  const handleDiplomasClick = () => {
    setShowDiplomas(!showDiplomas);
  };

  const handleDiplomaOptionClick = (key) => {
    setActive(key);
    setShowDiplomas(false);
  };

  return (
    <div>
      <nav>
        {sections.map(section => (
          <button
            key={section.key}
            onClick={() => setActive(section.key)}
            style={{
              fontWeight: active === section.key ? 'bold' : 'normal',
              background: active === section.key ? '#eee' : 'white'
            }}
          >
            {section.label}
          </button>
        ))}
        {/* Botón de diplomas con submenú */}
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <button
            onClick={handleDiplomasClick}
            style={{
              fontWeight: active.startsWith('diploma') ? 'bold' : 'normal',
              background: active.startsWith('diploma') ? '#eee' : 'white'
            }}
          >
            Diplomas ▼
          </button>
          {showDiplomas && (
            <div style={{
              position: 'absolute',
              background: 'white',
              border: '1px solid #ccc',
              zIndex: 1,
              minWidth: '150px'
            }}>
              {diplomasOptions.map(option => (
                <div
                  key={option.key}
                  onClick={() => handleDiplomaOptionClick(option.key)}
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                    background: active === option.key ? '#eee' : 'white'
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </span>
      </nav>
      <div>
        {/* Renderiza la sección activa o el diploma seleccionado */}
        {sections.find(section => section.key === active)?.component ||
          diplomasOptions.find(option => option.key === active)?.component}
      </div>
    </div>
  );
}

export default Nav;