// Componente que va a contener un formulario para autenticacion de user


import React , {useState} from 'react';

const Loginform = () => {

    const inicialCredentials = [
        {
            user: "",
            pasword: ""
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default Loginform;
