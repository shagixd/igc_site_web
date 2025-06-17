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
import DiplomaSiafRp from './sub_diplomas/DiplomaSiafRp.jsx';
import DiplomaAsistenteAdministrativa from './sub_diplomas/DiplomaAsistenteAdministrativa.jsx';
import DiplomaRedaccionDocumentos from './sub_diplomas/DiplomaRedaccionDocumentos.jsx';
import DiplomaPlaneamientoPresupuesto from './sub_diplomas/DiplomaPlaneamientoPresupuesto.jsx';
import DiplomaGestionDocumental from './sub_diplomas/DiplomaGestionDocumental.jsx';
import DiplomaAsistenteGerenciaAdmin from './sub_diplomas/DiplomaAsistenteGerenciaAdmin.jsx';
import DiplomaSistemaNacionalAbastecimiento from './sub_diplomas/DiplomaSistemaNacionalAbastecimiento.jsx';
import DiplomaSiafSp from './sub_diplomas/DiplomaSiafSp.jsx';
import DiplomaTributacion from './sub_diplomas/DiplomaTributacion.jsx';
import DiplomaPlanificacionPresupuestoResultados from './sub_diplomas/DiplomaPlanificacionPresupuestoResultados.jsx';
import DiplomaGestionFinancieraTesoreria from './sub_diplomas/DiplomaGestionFinancieraTesoreria.jsx';
import DiplomaAdministracionFinanciera from './sub_diplomas/DiplomaAdministracionFinanciera.jsx';
import DiplomaFinanzasPublicas from './sub_diplomas/DiplomaFinanzasPublicas.jsx';
import DiplomaRedaccionOrtografia from './sub_diplomas/DiplomaRedaccionOrtografia.jsx';
import DiplomaSistemasInformaticos from './sub_diplomas/DiplomaSistemasInformaticos.jsx';
import CongresoInternacionalAsistentesGerencia from './sub_congresos/CongresoInternacionalAsistentesGerencia.jsx';
import CongresoInnovacionSecretarial from './sub_congresos/CongresoInnovacionSecretarial.jsx';
import CongresoNacionalSecretarias12 from './sub_congresos/CongresoNacionalSecretarias12.jsx';
import CongresoGerenciaFinanzasPublicas from './sub_congresos/CongresoGerenciaFinanzasPublicas.jsx';
import CongresoNacionalSecretarias11 from './sub_congresos/CongresoNacionalSecretarias11.jsx';
import CongresoNacionalAsistentesXIV from './sub_congresos/CongresoNacionalAsistentesXIV.jsx';
import CongresoNacionalPresupuestoIV from './sub_congresos/CongresoNacionalPresupuestoIV.jsx';
import CongresoNacionalPresupuesto3er from './sub_congresos/CongresoNacionalPresupuesto3er.jsx';
import CongresoInternacionalGerencia2do from './sub_congresos/CongresoInternacionalGerencia2do.jsx';
import CongresoNacionalAdministracion1er from './sub_congresos/CongresoNacionalAdministracion1er.jsx';

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
        <Route path="/diplomas/siaf-rp-siga-seace" element={<DiplomaSiafRp />} />
        <Route path="/diplomas/asistente-administrativa-gestion-publica" element={<DiplomaAsistenteAdministrativa />} />
        <Route path="/diplomas/redaccion-documentos-administrativos" element={<DiplomaRedaccionDocumentos />} />
        <Route path="/diplomas/planeamiento-presupuesto-publico" element={<DiplomaPlaneamientoPresupuesto />} />
        <Route path="/diplomas/gestion-documental-archivos" element={<DiplomaGestionDocumental />} />
        <Route path="/diplomas/asistente-gerencia-administrativa" element={<DiplomaAsistenteGerenciaAdmin />} />
        <Route path="/diplomas/sistema-nacional-abastecimiento" element={<DiplomaSistemaNacionalAbastecimiento />} />
        <Route path="/diplomas/siaf-sp" element={<DiplomaSiafSp />} />
        <Route path="/diplomas/tributacion" element={<DiplomaTributacion />} />
        <Route path="/diplomas/planificacion-presupuesto-publico-resultados" element={<DiplomaPlanificacionPresupuestoResultados />} />
        <Route path="/diplomas/gestion-financiera-tesoreria-gubernamental" element={<DiplomaGestionFinancieraTesoreria />} />
        <Route path="/diplomas/administracion-financiera-gubernamental" element={<DiplomaAdministracionFinanciera />} />
        <Route path="/diplomas/finanzas-publicas" element={<DiplomaFinanzasPublicas />} />
        <Route path="/diplomas/redaccion-documentos-ortografia-eficaz" element={<DiplomaRedaccionOrtografia />} />
        <Route path="/diplomas/sistemas-informaticos-gestion-publica-2022" element={<DiplomaSistemasInformaticos />} />
        <Route path="/congresos/congreso-internacional-asistentes-gerencia" element={<CongresoInternacionalAsistentesGerencia />} />
        <Route path="/congresos/congreso-innovacion-secretarial" element={<CongresoInnovacionSecretarial />} />
        <Route path="/congresos/congreso-nacional-secretarias-12" element={<CongresoNacionalSecretarias12 />} />
        <Route path="/congresos/congreso-gerencia-finanzas-publicas" element={<CongresoGerenciaFinanzasPublicas />} />
        <Route path="/congresos/congreso-nacional-secretarias-11" element={<CongresoNacionalSecretarias11 />} />
        <Route path="/congresos/congreso-nacional-asistentes-xiv" element={<CongresoNacionalAsistentesXIV />} />
        <Route path="/congresos/congreso-nacional-presupuesto-iv" element={<CongresoNacionalPresupuestoIV />} />
        <Route path="/congresos/congreso-nacional-presupuesto-3er" element={<CongresoNacionalPresupuesto3er />} />
        <Route path="/congresos/congreso-internacional-gerencia-2do" element={<CongresoInternacionalGerencia2do />} />
        <Route path="/congresos/congreso-nacional-administracion-1er" element={<CongresoNacionalAdministracion1er />} />
      </Routes>
      <Footer />
      <BotonWhatssap />
    </BrowserRouter>
  );
}

export default App;