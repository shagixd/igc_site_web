import FormularioEmail from "../props/FormularioEmail";
import '../public/styles/Instituto.css'
import { FcRatings, FcMultipleDevices } from "react-icons/fc";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import { LiaAccusoft, LiaAdSolid, LiaAddressCard } from "react-icons/lia";
import { PiAddressBook, PiAirplay  } from "react-icons/pi";

function Instituto() {
  return (
    <>
    <div className="instituto-titulo">
      <h2>Instituto</h2>
      <p>Instituto de Gerencia Intercontinental</p>
    </div>

    <div className="contenedor-instituto">
        <div className="imagen-grande">
            <img src="/img/10.jpg" alt="imagen1" />
        </div>
        <div className="texto-grande">
            <h3>EDUCACION EJECUTIVA Y GERENCIAL A TRAVEZ DE PROGRAMAS DE ESPECIALIZACION EN GESTIÓN PUBLICA Y ACTIVIDAD EMPRESARIAL</h3>
        </div>
    </div>
    
    <div className="panel-formulario">
        <div className="texto-relleno">
            <div className="relleno-texto">
                <p>ESCUELA Y CENTRO DE ESTUDIOS DE GESTIÓN PUBLICA CON MAS 23 AÑOS IMPARTIENDO CONOCIMIENTOS PARA EL EXITO</p>
            </div>
            <div className="relleno-icon">
                <LiaAccusoft />
                <LiaAdSolid />
                <LiaAddressCard />
                <PiAddressBook />
                <PiAirplay />
            </div>
        </div>
        <div className="espacio-form">
            <FormularioEmail 
                opciones={["Curso de asistentes de Gerencia", "Curso de contrataciones del Estado", "Curso de Gestion Documental", "Curso de Gestion Publica", "Curso invierte PE.", "Curso de obras Publicas", "Curso de Ofimatica 2025", "Curso de planteaminto Estrategico", "Curso de presupuesto Publico",
                            "Diplomado de Administracion Financiera", "Diplomado de Asistente Administrativa", "Diplomado de Asistente de Gerencia Administrativa", "Diplomado de Finanzas Publicas", "Diplomado de Gestion Documental", "Diplomado de gestion Financiera y Tesoreria", "Diplomado de planeamiento y presupuesto", "Diplomado de planificacion de presupuesto de resultados", "Diplomado de redaccin de Documentos", "Diplomado de redaccion Ortografica", "Diplomado de Siaf-RP", "Diplomado de Siaf-SP", "Diplomado de Sistema Nacional de Abastecimiento", "Diplomado de Sistemas Informaticos", "Diplomado de Tributacion",
                            "Congreso de Gerencia Finanzas Publicas", "Congreso de Innovacion Secretarial", "Congreso Internacional de Asistentes de Gerencia", "Congreso Internacional Gerencial 2do.", "Congreso Nacional de Administracion 1er.", "Congreso de Nacional de Asistentes XIV", "Congreso Nacional de Presupuesto 3er.", "Congreso Nacional Presupuesto IV", "Congreso Nacional de Secretarias 11", "Congreso Nacional de Secretarias 12"]}
                placeholderSelect="Seleccione un Curso"/>
        </div>
    </div>
    <div className="espacio-instituto">
    </div>
    <div className="cajas-de-opciones">
        <div className="caja-opcion">
            <div className="caja-opciones">
                <div className="caja-opcion-1"> <FcRatings/> </div>
                <div className="caja-opcion-2"> <h5>FLEXIBILIDAD</h5> </div>
            </div>
            <div className="caja-opciones">
                <div className="caja-opcion-1"> <FcRatings/> </div>
                <div className="caja-opcion-2"> <h5>EDUCACION ADNDRAGOGICO DINAMICO</h5> </div>
            </div>
            <div className="caja-opciones">
                <div className="caja-opcion-1"> <FcRatings/> </div>
                <div className="caja-opcion-2"> <h5>CAMBIA TU FORMA DE APRENDER, PERO NO TU AGENDA DIARIA</h5> </div>
            </div>
        </div>
        <div className="caja-opcion">
            <div className="caja-opciones">
                <div className="caja-opcion-1"> <FcMultipleDevices/> </div>
            <div className="caja-opcion-2"> <h5>VIRTUAL</h5> </div>
            </div>
            <div className="caja-opciones">
                <div className="caja-opcion-1"> <FcMultipleDevices/> </div>
            <div className="caja-opcion-2"> <h5>HIBRIDA</h5> </div>
            </div>
            <div className="caja-opciones">
                <div className="caja-opcion-1"> <FcMultipleDevices/> </div>
            <div className="caja-opcion-2"> <h5>PRESENCIAL</h5> </div>
            </div> 
        </div>
    </div>

    <div className="letras-cierres">
        <h6>Destaca en el mundo laboral con  tu  educacion ejecutiva y certificaciones</h6>
        <p>Requisitos para llevar nuestros programas <br />
            Grado académico de Bachiller <br />
            experiencia profesional  en egestiuón públcia o empresarial <br />
        </p>
    </div>
    <div className="publicidad-instituto">
        <h4>INSTITUCIONES QUE CONFIARON EN NUESTROS SERVICIOS</h4>
        <HiOutlineChevronDoubleDown className="icono-flecha" />
        <img src="/img/11.jpg" alt="imagen" />
        <p>NUESTROS  WHATSAP  AQUI  Y  COMUNICATE  AHORA MISMOS  AL <br />
                        945504555 - 972628566</p>
    </div>
    </>
  );
}
export default Instituto;