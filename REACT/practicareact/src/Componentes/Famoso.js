import React from "react";

export default function Famoso({ mandoDatos, nombre, apellido, color, precio }) {
    const boton = (e) => {
        mandoDatos(nombre, apellido, precio)
        e.target.parentNode.style.display = "none";
    }
    return (
        <div style={{ backgroundColor: color, width: "250px", height: "150px" }}>
            <h2>{nombre} {apellido}</h2>
            <br /><br />
            <button onClick={boton}>Seleccionar</button>
        </div>
    )
}