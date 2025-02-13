import "./App.css";
import Texto from "./Componentes/Texto";
import Famoso from "./Componentes/Famoso";

import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("nadie");
  const [precio, setPrecio] = useState(0);

  let famosos = [
    {
      nombre: "Pablo",
      apellido: "Alboran",
      color: "red",
      precio: 100
    },
    {
      nombre: "Aitana",
      apellido: "",
      color: "purple",
      precio: 120
    },
    {
      nombre: "Abraham",
      apellido: "Mateo",
      color: "blue",
      precio: 140
    },
    {
      nombre: "Ana",
      apellido: "Mena",
      color: "violet",
      precio: 150
    },
    {
      nombre: "Manuel",
      apellido: "Carrasco",
      color: "green",
      precio: 125
    },
    {
      nombre: "Rosalia",
      apellido: "",
      color: "orange",
      precio: 180
    }
  ]

  const mandoDatos = (nombreRecibido, apellidoRecibido, precioRecibido) => {
    if (nombre === "nadie") {
      setNombre(nombreRecibido + " " + apellidoRecibido);
    } else {
      setNombre(nombreRecibido + " " + apellidoRecibido + ", " + nombre);
    }
    setPrecio(precioRecibido + precio);
  }

  return (
    <>
      <Texto nombre={nombre} precio={precio} />
      <Famoso mandoDatos={mandoDatos} nombre={famosos[0].nombre} apellido={famosos[0].apellido} color={famosos[0].color} precio={famosos[0].precio} />
      <Famoso mandoDatos={mandoDatos} nombre={famosos[1].nombre} apellido={famosos[1].apellido} color={famosos[1].color} precio={famosos[1].precio} />
      <Famoso mandoDatos={mandoDatos} nombre={famosos[2].nombre} apellido={famosos[2].apellido} color={famosos[2].color} precio={famosos[2].precio} />
      <Famoso mandoDatos={mandoDatos} nombre={famosos[3].nombre} apellido={famosos[3].apellido} color={famosos[3].color} precio={famosos[3].precio} />
      <Famoso mandoDatos={mandoDatos} nombre={famosos[4].nombre} apellido={famosos[4].apellido} color={famosos[4].color} precio={famosos[4].precio} />
    </>
  );
}

export default App;