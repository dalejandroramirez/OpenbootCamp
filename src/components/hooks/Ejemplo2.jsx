// Ejemplo de uso de :
// useState() 
// useRef()
// useEffect()

import React, {useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {
    //crear dos contadores distintos en un estado diferente
    const [contador1,setContador1] = useState(0);
    const [contador2,setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // Con un elemento de Dom

    const miRef = useRef();

    function incrementarContador1(){
        setContador1(contador1 +1)
    }

    function incrementarContador2(){
        setContador2(contador2 +1)
    }

////////////////////////////////////////////////////////////////////////////

    // Trabajar con UseEffect
    // ? Caso1: Ejecutar siempre un snippet de codigo
    // Cada vez que hay un cambio en el estado del componente se ejeuta
    // lo que esta dentro del useEffect()


    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    //     console.log("Mostrando Referencia a elemnto del Dom:");
    //     console.log(miRef);

    // });

///////////////////////////////////////////////////////////////////////////////////////

    // Caso 2: Ejecutar solo cuando cambie el contador 1, en caso que cambie contador 2 
    //          no ocurre nada

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
    //     console.log("Mostrando Referencia a elemnto del Dom:");
    //     console.log(miRef);
    // }, [contador1]);

//////////////////////////////////////////////////////////////////////////////////////


    // Caso 3: Ejecutar solo cuando cambie el contador 1, o contador 2 

    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2");
        console.log("Mostrando Referencia a elemnto del Dom:");
        console.log(miRef);
    }, [contador1,contador2]);



    return (
        <div>
            <h1>Ejemplo de useEffect y useRef</h1>
            <h2> CONTADOR1: {contador1}</h2>
            <h2> CONTADOR2: {contador2}</h2>
            {/* elemento referenciado */}
            <h4 ref = {miRef}> 
                Elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementarContador1}>Incrementar 1</button>
                <button onClick={incrementarContador2}>Incrementar 2</button>
            </div>


        </div>
    );
}

export default Ejemplo2;
