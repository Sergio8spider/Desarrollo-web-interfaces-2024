import React from 'react';

function Nombre({ nombre, setNombre }) {
    return (
        <div>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
        </div>
    );
}

export default Nombre;