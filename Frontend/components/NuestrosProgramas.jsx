import Cajaconlinks from '../props/Cajaconlinks.jsx'
import '../public/styles/NuestrosProgramas.css'

function NuestrosProgramas() {
  const educacionEjecutiva = [
    { texto: "Marketing Digital", href: "" }
  ];
  const diplomasEspecializacion = [
    { texto: "Marketing Digital", href: "" }
  ];
  const cursosEspecializacion = [
    { texto: "Marketing Digital", href: "" }
  ];
  const cursosInhouse = [
    { texto: "Marketing Digital", href: "" }
  ];
  const eventosEspeciales = [
    { texto: "Marketing Digital", href: "" }
  ];
  const asesoriaConsultoria = [
    { texto: "Marketing Digital", href: "" }
  ];

  return (
    <div className='caja-central'>
      {/* Caja con título y enlaces */}
      <div>
        <Cajaconlinks
        titulo="Programa de educacion ejecutiva IGC" enlaces={educacionEjecutiva}/>
      </div>
      <div>
        <Cajaconlinks
        titulo="Programas y diplomas de especializacion" enlaces={diplomasEspecializacion} />
      </div>
      <div>
        <Cajaconlinks
        titulo="Programas de cursos de especializacion" enlaces={cursosEspecializacion} />
      </div>
      <div>
        <Cajaconlinks
        titulo="Programas de cursos a la medida / In-House" enlaces={cursosInhouse} />
      </div>
      <div>
        <Cajaconlinks
        titulo="Congresos o eventos especiales" enlaces={eventosEspeciales} />
      </div>
      <div>
        <Cajaconlinks
        titulo="Asesoria y consultoria" enlaces={asesoriaConsultoria} />
      </div>
    </div>
  );
}
export default NuestrosProgramas;