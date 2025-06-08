// filepath: c:\project_web_igc\igc_site_web\Frontend\components\App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Inicio from './Inicio.jsx';
import Cursos from './Cursos.jsx';
import Congresos from './Congresos.jsx';
import Blog from './Blog.jsx';
import House from './House.jsx';
import Asesoria_Consultoria from './Asesoria_Consultoria.jsx';
import Diplomas_Especialidad from './Diplomas_Especialidad.jsx';
import Diplomas_Catalogos from './Diplomas_Catalogos.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/congresos" element={<Congresos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/house" element={<House />} />
        <Route path="/asesoria" element={<Asesoria_Consultoria />} />
        <Route path="/diplomas/especialidad" element={<Diplomas_Especialidad />} />
        <Route path="/diplomas/catalogos" element={<Diplomas_Catalogos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;