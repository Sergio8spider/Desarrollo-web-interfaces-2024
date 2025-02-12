import React from 'react';

function Saludar({ nombre, edad, rango, comparar }) {
  { comparar() }
  return <h2>Hola {nombre}, tienes {edad} años, eres {rango}.</h2>;
}

export default Saludar;