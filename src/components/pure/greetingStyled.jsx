import React, { useState } from 'react';

// Definiendo estilos en constantes


// ? Estilo para usuario no logeado
const loggedStyle = {
    color: 'blue'
}

// ? Estilo para usuario no logeado
const unloggedStyle = {
    color : 'salmon',
    fontWeigh: 'bold'
}

const Greetingstyled = (props) => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no logueado

    const [logged, setLogged] = useState(props.estado);

    return (
        <div style={logged ? 
                    loggedStyle :
                    unloggedStyle }>
            {logged ? (<p>Hola, {props.name}</p>) : (<p>Please Login</p>) }
            <button onClick={() => {
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>

        </div>
    );
}

export default Greetingstyled;
