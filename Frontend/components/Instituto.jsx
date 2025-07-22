import FormularioEmail from "../props/FormularioEmail";
import '../public/styles/Instituto.css'
import { FcRatings, FcMultipleDevices } from "react-icons/fc";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";

function Instituto() {
  return (
    <>
    <div className="instituto-titulo">
      <h2>Instituto</h2>
      <p>Instituto de Gerencia Intercontinental</p>
    </div>

    <div className="contenedor-instituto">
        <div className="imagen-grande">
            <img src="/img/1.jpg" alt="imagen1" />
        </div>
        <div className="texto-grande">
            <h3>EDUCACION EJECUTIVA Y GERENCIAL A TRAVEZ DE PROGRAMAS DE ESPECIALIZACION EN GESTIÓN PUBLICA Y ACTIVIDAD EMPRESARIAL</h3>
        </div>
    </div>
    
    <div className="panel-formulario">
        <div className="texto-relleno">
            <p>ESCUELA Y CENTRO DE ESTUDIOS DE GESTIÓN PUBLICA CON MAS 23 AÑOS IMPARTIENDO CONOCIMIENTOS PARA EL EXITO</p>
        </div>
        <div className="espacio-form">
            <FormularioEmail 
                opciones={["Diplomado en Gestión Pública", "Diplomado en Gerencia de Proyectos", "Diplomado en Gerencia de Obras Públicas"]}
                placeholderSelect="Seleccione un Diplomado"/>
        </div>
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
        <img src="/img/1.jpg" alt="imagen" />
        <p>NUESTROS  WHATSAP  AQUI  Y  COMUNICATE  AHORA MISMOS  AL <br />
                        945504555 - 972628566</p>
    </div>
    </>
  );
}
export default Instituto;