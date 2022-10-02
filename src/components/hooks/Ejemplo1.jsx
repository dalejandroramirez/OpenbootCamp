// Ejemplo del uso del Hook useState

// Crear un componente de tipo función y acceder a su estado
// privado a través de un hook, y ademas, poder modificarlo.

import React, {useState} from 'react';

import style from "../../../src/App.module.css"


const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre : "Alejandro",
        email : "dalejandro.ramirez@udea.edu.co"
    }

    // Queremos que los valores iniciales sean parte del estado del componente
    // para asi poder gestioanr su cambio y que este se vea reflejado en la vista del 
    // componente

    // const [nombre_variable, funcionPara cambiar] = useState(valor inicial)
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //funcion para actualizar el estado privado que tiene el contador y la persona

    function incrementarContador (){
        setContador(contador +1);
    }

    function actualizarPersona(){
    setPersona(
        {
            nombre: "Lalo",
            email: "daleja@"
        }

    )    
    }



    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2> CONTADOR: {contador}</h2>
            <h3> Persona Data:</h3>
            <p> Nombre de la persona es  {persona.nombre}</p>
            <p> email de la persona es  {persona.email}</p>
            {/*  Bloque de botones para actualizar los estados*/}
            <div className={style.container_buttom}>
            <button onClick={incrementarContador}> Contador</button>
            <button onClick={actualizarPersona}> Cambiar persona</button>
            </div>

        </div>
    );
}

export default Ejemplo1;
