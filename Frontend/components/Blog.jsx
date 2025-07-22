import React, { useState } from 'react';
import Todos from './sub_blog/Todos.jsx';
import Digital from './sub_blog/Digital.jsx';
import Educacion from './sub_blog/Educacion.jsx';
import Eventos from './sub_blog/Eventos.jsx';
import Innovacion from './sub_blog/Innovacion.jsx';
import SinCategoria from './sub_blog/SinCategoria.jsx';
import '../public/styles/Blog.css'; // Asegúrate de tener este archivo CSS

// Componente para mostrar el contenido según la categoría seleccionada
function BlogSectionContent({ section, onExpandChange }) {
    switch (section) {
        case 'Digital':
            return <Digital onExpandChange={onExpandChange} />;
        case 'Educación':
            return <Educacion onExpandChange={onExpandChange} />;
        case 'Eventos':
            return <Eventos onExpandChange={onExpandChange} />;
        case 'Innovación':
            return <Innovacion onExpandChange={onExpandChange} />;
        case 'Sin categoría':
            return <SinCategoria onExpandChange={onExpandChange} />;
        case 'Todos':
        default:
            return <Todos onExpandChange={onExpandChange} />;
    }
}

function Blog() {
    const [activeSection, setActiveSection] = useState('Todos');
    const [expandView, setExpandView] = useState(false);

    return (
        <>
            <div className='blog-titulo'>
                <h2>BLOG</h2>
                <p>Instituto de Gerencia Intercontinental</p>
            </div>
            <div className='blog-subtitulo'>
                <h4>NOTICIAS</h4>
                <h3>Últimas publicaciones y noticias</h3>
                <p>Bienvenido al blog del Instituto de Gerencia Intercontinental</p>
            </div>
           <nav className='blog-nav'>
                <button
                    className={activeSection === 'Todos' ? 'active' : ''}
                    onClick={() => setActiveSection('Todos')}>Todos</button>
                <button
                    className={activeSection === 'Digital' ? 'active' : ''}
                    onClick={() => setActiveSection('Digital')}>Digital</button>
                <button
                    className={activeSection === 'Educación' ? 'active' : ''}
                    onClick={() => setActiveSection('Educación')}>Educación</button>
                <button
                    className={activeSection === 'Eventos' ? 'active' : ''}
                    onClick={() => setActiveSection('Eventos')}>Eventos
                </button>
                <button
                    className={activeSection === 'Innovación' ? 'active' : ''}
                    onClick={() => setActiveSection('Innovación')}>Innovación</button>
                <button
                    className={activeSection === 'Sin categoría' ? 'active' : ''}
                    onClick={() => setActiveSection('Sin categoría')}>Sin categoría
                </button>
            </nav>
            <div className="blog-content-flex-container">
                <div className={`blog-content${expandView ? " expand" : ""}`}>
                    <BlogSectionContent section={activeSection} onExpandChange={setExpandView} />
                </div>
            </div>
        </>
    );
}

export default Blog;