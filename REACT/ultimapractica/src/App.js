import { useState } from 'react';
import Reiniciar from "./Componentes/Reiniciar"
import NumeroSecreto from "./Componentes/NumeroSecreto"
import Formulario from "./Componentes/Formulario"
import Puntuacion from "./Componentes/Puntuacion"
import './App.css';

function App() {
  const generarNumSecreto = () => {
    return Math.trunc(Math.random() * 20 + 1);
  }

  const reiniciar = () => {
    setNumSecreto(generarNumSecreto);
    setMensaje("Empiece a adivinar...");
    setPuntuacion(20);
    document.body.style.backgroundColor = "";
  }

  const comparar = (numero) => {
    if (!numero) {
      setMensaje("Pon un numero");
    } else if (Number(numero) == numSecreto) {
      setMensaje("Ganaste");
      document.body.style.backgroundColor = "green";
      if (puntuacionMaxima < puntuacion) {
        setPuntuacionMaxima(puntuacion);
      }
      if (score > puntuacion) {
        setScore(puntuacion);
      }
    } else if (Number(numero) < numSecreto) {
      setMensaje("Tu numero es bajo");
      setPuntuacion(puntuacion - 1);
    } else {
      setMensaje("Tu numero es alto");
      setPuntuacion(puntuacion - 1);
    }
    if (puntuacion == 0) {
      setMensaje("Perdiste");
      document.body.style.backgroundColor = "red";
      setPuntuacion(0);
    }
  }

  const [numSecreto, setNumSecreto] = useState(generarNumSecreto);
  const [mensaje, setMensaje] = useState("Empiece a adivinar...");
  const [puntuacion, setPuntuacion] = useState(20);
  const [score, setScore] = useState(0);
  const [puntuacionMaxima, setPuntuacionMaxima] = useState(0)

  return (
    <div className="container">
      <Reiniciar reiniciar={reiniciar} />{/*Boton reiniciar*/}
      <h1>¡Adivina mi número!{numSecreto}</h1>
      <NumeroSecreto />
      <br />
      <Formulario comparar={comparar} />
      <Puntuacion msj={mensaje} puntuacion={puntuacion} score={score} puntuacionMaxima={puntuacionMaxima} />
    </div>
  );
}

export default App;