import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Sobreigc from './SobreIGC.jsx';
import DiplomasEspecialidad from './DiplomasEspecialidad.jsx';
import CursosEspecialidad from './CursosEspecialidad.jsx';
import Congresos from './Congresos.jsx';
import Blog from './Blog.jsx'
import Consultoria from './Consultoria.jsx';
import BotonWhatssap from './BotonWhatssap.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Sobreigc />} />
        <Route path="/diplomasespecialidad" element={<DiplomasEspecialidad />} />
        <Route path="/cursosespecialidad" element={<CursosEspecialidad />} />
        <Route path="/congresos" element={<Congresos />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <BotonWhatssap />
      <Footer />
    </BrowserRouter>
  );
}

export default App;