import React, {useState} from "react";

function Barra (propiedad) {
    let [mensaje, setMensaje] = useState("")
    let iniciar = () => {
        setMensaje(mensaje= "Inicio")               
    }
    let logear = () => {
        setMensaje(mensaje="Login") 
    }
    let registrar = () => {
        setMensaje(mensaje="Registrar")
    }
    let contactar = () => {
        setMensaje(mensaje="Contactar")
    }
    return(
        <div>
            <div className="blockBarra">
                <button onClick={iniciar}> {propiedad.mess1} </button>
                <button onClick ={logear}> {propiedad.mess2} </button>
                <button onClick={registrar}> {propiedad.mess3}  </button>
                <button onClick={contactar}> {propiedad.mess4} </button>
            </div>
            <div>
                <h1> {mensaje} </h1>
            </div>            
        </div> 
    )
}

export default Barra