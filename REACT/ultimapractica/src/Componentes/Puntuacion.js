import React from "react"
import Mensaje from "./Mensaje"
import LineaPuntuacion from "./LineaPuntuacion"

export default function Puntuacion({msj, puntuacion, puntuacionMaxima}) {
    return (
        <div className="score-section">
            <br />
            <Mensaje msj={msj}/>
            <br />
            <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero={puntuacion}/>
            <LineaPuntuacion etiqueta="Puntuaje alto:" id="highscore" numero={puntuacionMaxima}/>
        </div>
    )
}