import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Inicio from './Inicio.jsx';
import Cursos_Especializados from './Cursos_Especializados.jsx';
import Cursos_Catalogos from './Cursos_Catalogos.jsx';
import Congresos from './Congresos.jsx';
import Blog from './Blog.jsx';
import House from './House.jsx';
import Asesoria_Consultoria from './Asesoria_Consultoria.jsx';
import Diplomas_Especialidad from './Diplomas_Especialidad.jsx';
import Diplomas_Catalogos from './Diplomas_Catalogos.jsx';
import BotonWhatssap from './BotonWhatssap.jsx';
import CursoGestionPublica from './sub_cursos/CursoGestionPublica.jsx';
import CursoPlaneamientoEstrategico from './sub_cursos/CursoPlaneamientoEstrategico.jsx';
import CursoInviertePE from './sub_cursos/CursoInviertePE.jsx';
import CursoObrasPublicas from './sub_cursos/CursoObrasPublicas.jsx';
import CursoOfimatica2025 from './sub_cursos/CursoOfimatica2025.jsx';
import CursoContratacionesEstado from './sub_cursos/CursoContratacionesEstado.jsx';
import CursoPresupuestoPublico from './sub_cursos/CursoPresupuestoPublico.jsx';
import CursoGestionDocumental from './sub_cursos/CursoGestionDocumental.jsx';
import CursoAsistenteGerencia from './sub_cursos/CursoAsistenteGerencia.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cursos/especializados" element={<Cursos_Especializados />} />
        <Route path="/cursos/catalogo" element={<Cursos_Catalogos />} />
        <Route path="/congresos" element={<Congresos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/house" element={<House />} />
        <Route path="/asesoria" element={<Asesoria_Consultoria />} />
        <Route path="/diplomas/especialidad" element={<Diplomas_Especialidad />} />
        <Route path="/diplomas/catalogos" element={<Diplomas_Catalogos />} />
        <Route path="/cursos/gestion-publica-y-modernizacion-del-estado" element={<CursoGestionPublica />} />
        <Route path="/cursos/planeamiento-estrategico" element={<CursoPlaneamientoEstrategico />} />
        <Route path="/cursos/sistema-nacional-de-inversiones-invierte-pe" element={<CursoInviertePE />} />
        <Route path="/cursos/obras-publicas-por-administracion-directa" element={<CursoObrasPublicas />} />
        <Route path="/cursos/ofimatica-profesional-2025" element={<CursoOfimatica2025 />} />
        <Route path="/cursos/gestion-de-contrataciones-del-estado" element={<CursoContratacionesEstado />} />
        <Route path="/cursos/gestion-de-presupuesto-publico" element={<CursoPresupuestoPublico />} />
        <Route path="/cursos/gestion-documental-y-archivos-electronicos" element={<CursoGestionDocumental />} />
        <Route path="/cursos/asistente-de-gerencia-y-secretarias" element={<CursoAsistenteGerencia />} />
      </Routes>
      <Footer />
      <BotonWhatssap />
    </BrowserRouter>
  );
}

export default App;