import React, { useState } from 'react';
import AllPost from './sub_blog/AllPost.jsx';
import Digital from './sub_blog/Digital.jsx';
import Educacion from './sub_blog/Educacion.jsx';
import Eventos from './sub_blog/Eventos.jsx';
import Innovacion from './sub_blog/Innovacion.jsx';
import SinCategoria from './sub_blog/SinCategoria.jsx';
import '../public/styles/Blog.css'; // Asegúrate de tener este archivo CSS

// Componente para mostrar el contenido según la categoría seleccionada
function BlogSectionContent({ section }) {
    switch (section) {
        case 'Digital':
            return <Digital />;
        case 'Educación':
            return <Educacion />;
        case 'Eventos':
            return <Eventos />;
        case 'Innovación':
            return <Innovacion />;
        case 'Sin categoría':
            return <SinCategoria />;
        case 'AllPost':
        default:
            return <AllPost />;
    }
}

function Blog() {
    const [activeSection, setActiveSection] = useState('AllPost');

    return (
        <>
            <div className='blog-titulo'>
                <h2>NOTICIAS</h2>
                <p>Bienvenido al blog del Instituto de Gerencia Intercontinental</p>
            </div>
            <nav className='blog-nav'>
                <button onClick={() => setActiveSection('AllPost')}>All Post</button>
                <button onClick={() => setActiveSection('Digital')}>Digital</button>
                <button onClick={() => setActiveSection('Educación')}>Educación</button>
                <button onClick={() => setActiveSection('Eventos')}>Eventos</button>
                <button onClick={() => setActiveSection('Innovación')}>Innovación</button>
                <button onClick={() => setActiveSection('Sin categoría')}>Sin categoría</button>
            </nav>
            <BlogSectionContent section={activeSection} />
        </>
    );
}

export default Blog;