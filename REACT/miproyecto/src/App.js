import "./App.css";
import Iterador from "./iterador";

import React, { useRef, useState } from "react";

function App() {
  const [numero, setNumero] = useState();

  const seleccionar = (e) => {
    setNumero(e.tarjet.value);
  }

  return (
    <>
      <Iterador/>
      <select value={numero} onChange={seleccionar}>
        <option value="cero">0</option>
        <option value="uno">1</option>
        <option value="tres">2</option>
        <option value="cuatro">3</option>
      </select>
      <p>La opcion seleccionada es {numero}</p>
    </>
  );
}

export default App;