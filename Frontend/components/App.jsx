import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Sobreigc from './SobreIGC.jsx';
import DiplomasEspecialidad from './DiplomasEspecialidad.jsx';

import DiplomaAdministracionFinanciera from './sub_diplomas/DiplomaAdministracionFinanciera.jsx';
import DiplomaAsistenteAdministrativa from './sub_diplomas/DiplomaAsistenteAdministrativa.jsx';
import DiplomaAsistenteGerenciaAdmin from './sub_diplomas/DiplomaAsistenteGerenciaAdmin.jsx';
import DiplomaFinanzasPublicas from './sub_diplomas/DiplomaFinanzasPublicas.jsx';
import DiplomaGestionDocumental from './sub_diplomas/DiplomaGestionDocumental.jsx';
import DiplomaGestionFinancieraTesoreria from './sub_diplomas/DiplomaGestionFinancieraTesoreria.jsx';
import DiplomaPlaneamientoPresupuesto from './sub_diplomas/DiplomaPlaneamientoPresupuesto.jsx';
import DiplomaPlanificacionPresupuestoResultados from './sub_diplomas/DiplomaPlanificacionPresupuestoResultados.jsx';
import DiplomaRedaccionDocumentos from './sub_diplomas/DiplomaRedaccionDocumentos.jsx';
import DiplomaRedaccionOrtografia from './sub_diplomas/DiplomaRedaccionOrtografia.jsx';
import DiplomaSiafRp from './sub_diplomas/DiplomaSiafRp.jsx';
import DiplomaSiafRpSp from './sub_diplomas/DiplomaSiafSp.jsx';
import DiplomaSistemaNacionalAbastecimiento from './sub_diplomas/DiplomaSistemaNacionalAbastecimiento.jsx';
import DiplomaSistemasInformaticos from './sub_diplomas/DiplomaSistemasInformaticos.jsx';
import DiplomaTributacion from './sub_diplomas/DiplomaTributacion.jsx';

import CursosEspecialidad from './CursosEspecialidad.jsx';

import CursoAsistenteGerencia from './sub_cursos/CursoAsistenteGerencia.jsx';
import CursoContratacionesEstado from './sub_cursos/CursoContratacionesEstado.jsx';
import CursoGestionDocumental from './sub_cursos/CursoGestionDocumental.jsx';
import CursoGestionPublica from './sub_cursos/CursoGestionPublica.jsx';
import CursoInviertePE from './sub_cursos/CursoInviertePE.jsx';
import CursoObrasPublicas from './sub_cursos/CursoObrasPublicas.jsx';
import CursoOfimatica2025 from './sub_cursos/CursoOfimatica2025.jsx';
import CursoPlaneamientoEstrategico from './sub_cursos/CursoPlaneamientoEstrategico.jsx';
import CursoPresupuestoPublico from './sub_cursos/CursoPresupuestoPublico.jsx';

import Congresos from './Congresos.jsx';

import CongresoGerenciaFinanzasPublicas from './sub_congresos/CongresoGerenciaFinanzasPublicas.jsx';
import CongresoInnovacionSecretarial from './sub_congresos/CongresoInnovacionSecretarial.jsx';
import CongresoInternacionalAsistentesGerencia from './sub_congresos/CongresoInternacionalAsistentesGerencia.jsx';
import CongresoInternacionalGerencia2do from './sub_congresos/CongresoInternacionalGerencia2do.jsx';
import CongresoNacionalAdministracion1er from './sub_congresos/CongresoNacionalAdministracion1er.jsx';
import CongresoNacionalAsistentesXIV from './sub_congresos/CongresoNacionalAsistentesXIV.jsx';
import CongresoNacionalPresupuesto3er from './sub_congresos/CongresoNacionalPresupuesto3er.jsx';
import CongresoNacionalPresupuestoIV from './sub_congresos/CongresoNacionalPresupuestoIV.jsx';
import CongresoNacionalSecretarias11 from './sub_congresos/CongresoNacionalSecretarias11.jsx';
import CongresoNacionalSecretarias12 from './sub_congresos/CongresoNacionalSecretarias12.jsx';

import Blog from './Blog.jsx'
import CursosalaMedida from './CursosalaMedida.jsx';
import Consultoria from './Consultoria.jsx';
import Instituto from './Instituto.jsx';
import NuestrosProgramas from './NuestrosProgramas.jsx';
import TiendaVirtual from './TiendaVirtual.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/instituto" element={<Instituto />} />
        <Route path="/nuestrosprogramas" element={<NuestrosProgramas />} />
        <Route path="/consultoria" element={<Consultoria />} />

        <Route path="/" element={<Sobreigc />} />
        
        <Route path="/diplomasespecialidad" element={<DiplomasEspecialidad />} />
        <Route path="/cursosespecialidad" element={<CursosEspecialidad />} />
        <Route path="/congresos" element={<Congresos />} />
        <Route path="/cursosalamedida" element={<CursosalaMedida />} />
        <Route path="/congresos" element={<Congresos />} />
        <Route path="/tiendavirtual" element={<TiendaVirtual />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/cursos/obras-publicas-por-administracion-directa" element={<CursoObrasPublicas />} />
        <Route path="/cursos/gestion-publica-y-modernizacion-del-estado" element={<CursoGestionPublica />} />
        <Route path="/cursos/planeamiento-estrategico" element={<CursoPlaneamientoEstrategico />} />
        <Route path="/cursos/sistema-nacional-de-inversiones-invierte-pe" element={<CursoInviertePE />} />
        <Route path="/cursos/ofimatica-profesional-2025" element={<CursoOfimatica2025 />} />
        <Route path="/cursos/gestion-de-contrataciones-del-estado" element={<CursoContratacionesEstado />} />
        <Route path="/cursos/gestion-de-presupuesto-publico" element={<CursoPresupuestoPublico />} />
        <Route path="/cursos/gestion-documental-y-archivos-electronicos" element={<CursoGestionDocumental />} />
        <Route path="/cursos/asistente-de-gerencia-y-secretarias" element={<CursoAsistenteGerencia />} />

        <Route path="/congresos/congreso-internacional-de-gerencia-y-finanzas-publicas" element={<CongresoGerenciaFinanzasPublicas />} />
        <Route path="/congresos/congreso-internacional-asistentes-gerencia" element={<CongresoInternacionalAsistentesGerencia />} />
        <Route path="/congresos/congreso-internacional-gerencia-2do" element={<CongresoInternacionalGerencia2do />} />
        <Route path="/congresos/congreso-nacional-administracion-1er" element={<CongresoNacionalAdministracion1er />} />
        <Route path="/congresos/congreso-nacional-asistentes-xiv" element={<CongresoNacionalAsistentesXIV />} />
        <Route path="/congresos/congreso-nacional-presupuesto-3er" element={<CongresoNacionalPresupuesto3er />} />
        <Route path="/congresos/congreso-nacional-presupuesto-iv" element={<CongresoNacionalPresupuestoIV />} />
        <Route path="/congresos/congreso-nacional-secretarias-11" element={<CongresoNacionalSecretarias11 />} />
        <Route path="/congresos/congreso-nacional-secretarias-12" element={<CongresoNacionalSecretarias12 />} />
        <Route path="/congresos/congreso-innovacion-secretarial" element={<CongresoInnovacionSecretarial />} />

        <Route path="/diplomas/administracion-financiera-gubernamental" element={<DiplomaAdministracionFinanciera />} />
        <Route path="/diplomas/asistente-administrativa-gestion-publica" element={<DiplomaAsistenteAdministrativa />} />
        <Route path="/diplomas/asistente-gerencia-administrativa" element={<DiplomaAsistenteGerenciaAdmin />} />
        <Route path="/diplomas/finanzas-publicas" element={<DiplomaFinanzasPublicas />} />
        <Route path="/diplomas/gestion-documental-archivos" element={<DiplomaGestionDocumental />} />
        <Route path="/diplomas/gestion-financiera-tesoreria-gubernamental" element={<DiplomaGestionFinancieraTesoreria />} />
        <Route path="/diplomas/planeamiento-presupuesto-publico" element={<DiplomaPlaneamientoPresupuesto />} />
        <Route path="/diplomas/planificacion-presupuesto-publico-resultados" element={<DiplomaPlanificacionPresupuestoResultados />} />
        <Route path="/diplomas/redaccion-documentos-administrativos" element={<DiplomaRedaccionDocumentos />} />
        <Route path="/diplomas/redaccion-documentos-ortografia-eficaz" element={<DiplomaRedaccionOrtografia />} />
        <Route path="/diplomas/siaf-rp" element={<DiplomaSiafRp />} />
        <Route path="/diplomas/siaf-sp" element={<DiplomaSiafRpSp />} />
        <Route path="/diplomas/sistema-nacional-abastecimiento" element={<DiplomaSistemaNacionalAbastecimiento />} />
        <Route path="/diplomas/sistemas-informaticos-gestion-publica-2022" element={<DiplomaSistemasInformaticos />} />
        <Route path="/diplomas/tributacion" element={<DiplomaTributacion />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;