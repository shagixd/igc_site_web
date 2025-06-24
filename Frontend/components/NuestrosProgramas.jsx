import CajaConLinks from './components/CajaConLinks';

function NuestrosProgramas() {
  const misEnlaces = [
    { texto: "Curso de Finanzas", href: "/cursos/finanzas" },
    { texto: "Gestión Pública", href: "/cursos/gestion-publica" },
    { texto: "Marketing Digital", href: "/cursos/marketing" }
  ];
  const misEnlaces2 = [
    { texto: "Curso de Finanzas", href: "/cursos/finanzas" },
    { texto: "Gestión Pública", href: "/cursos/gestion-publica" },
    { texto: "Marketing Digital", href: "/cursos/marketing" }
  ];

  return (
    <div>
      {/* Caja con título y enlaces */}
      <CajaConLinks
        titulo="Modelos" enlaces={misEnlaces}/>

      {/* Caja sin enlaces */}
      <CajaConLinks
        titulo="Autoridades Academicas" enlaces={misEnlaces2} />
    </div>
  );
}
export default NuestrosProgramas;