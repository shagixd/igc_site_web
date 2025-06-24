import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Sobreigc from './SobreIGC.jsx';
import CursosInHouse from './CursosInHouse.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Sobreigc />} />
        <Route path="/cursos-in-house" element={<CursosInHouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;