import "./App.css";

import React, { useRef, useState } from "react";

function App() {
  const miDiv = useRef();
  const [valorReinicio, setVAlorReinicio] = useState("33");

  const iterar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  }
  const iniciar = () => {
    miDiv.current.innerHTML = "1";
  }
  const cambiar = (e) => {
    miDiv.current.innerHTML = e.target.value;
  }
  return (
    <>
      <div ref={miDiv} onClick={iterar}>1</div>
      <button onClick={iniciar}>Reiniciar</button>
      <input onChange={cambiar} type="number" />
    </>
  );
}

export default App;