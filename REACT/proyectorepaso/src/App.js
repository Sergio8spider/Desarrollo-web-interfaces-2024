import React, { useState } from 'react';
import Nombre from './Componentes/Nombre';
import Edad from './Componentes/Edad';
import Saludar from './Componentes/Saludar';
import Boton from './Componentes/Boton';
import Foto from './Componentes/Foto';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [rango, setRango] = useState('');
  const [mostrarSaludo, setMostrarSaludo] = useState(false);

  const activarMostrarSaludo = () => {
    setMostrarSaludo(true);
  };

  const comparar = () => {
    if (edad < 12) {
      setRango("niño");
    } else if (edad >= 12 && edad < 20) {
      setRango("joven");
    } else if (edad >= 20 && edad < 40) {
      setRango("mayor");
    } else {
      setRango("viejo");
    }
  }

  let saludar = null;
  if (mostrarSaludo) {
    saludar = <Saludar nombre={nombre} edad={edad} rango={rango} comparar={comparar} />;
  }

  return (
    <div>
      <Nombre nombre={nombre} setNombre={setNombre} />
      <Edad edad={edad} setEdad={setEdad} />
      <Boton activarMostrarSaludo={activarMostrarSaludo}></Boton>
      <Foto></Foto>
      {saludar}
    </div>
  );
}

export default App;