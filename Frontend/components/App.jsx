import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Sobreigc from './SobreIGC.jsx';
import DiplomasEspecialidad from './DiplomasEspecialidad.jsx';
import CursosEspecialidad from './CursosEspecialidad.jsx';
import Congresos from './Congresos.jsx';
import Blog from './Blog.jsx'
import CursosalaMedida from './CursosalaMedida.jsx';
import Consultoria from './Consultoria.jsx';
import BotonWhatssap from './BotonWhatssap.jsx';
import CursoObrasPublicas from './sub_cursos/CursoObrasPublicas.jsx';
import Instituto from './Instituto.jsx';
import NuestrosProgramas from './NuestrosProgramas.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/instituto" element={<Instituto />} />
        <Route path="/consultoria" element={<Consultoria />} />

        <Route path="/" element={<Sobreigc />} />
        <Route path="/nuestrosprogramas" element={<NuestrosProgramas />} />
        <Route path="/diplomasespecialidad" element={<DiplomasEspecialidad />} />
        <Route path="/cursosespecialidad" element={<CursosEspecialidad />} />
        <Route path="/cursosalamedida" element={<CursosalaMedida />} />
        <Route path="/congresos" element={<Congresos />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/cursos/obras-publicas-por-administracion-directa" element={<CursoObrasPublicas />} />
        
      </Routes>
      <BotonWhatssap />
      <Footer />
    </BrowserRouter>
  );
}

export default App;