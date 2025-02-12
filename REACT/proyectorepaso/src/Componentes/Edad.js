import React from 'react';

function Edad({ edad, setEdad }) {
    return (
        <div>
            <input
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
        </div>
    );
}

export default Edad;