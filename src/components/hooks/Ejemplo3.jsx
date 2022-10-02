// Ejemplo Hooks
//  - useState()
//  -useContext

import React ,{useState,useContext} from 'react';

// @return Componente 1
// Dispone de un contexto que va a tener un valor
// que recibe desde el padre

const miContexto =React.createContext(null)

const Component1 = () => {
    // Inicializamoe un estado vacio que va arellenarse con los
    // datos del contexto del padre
    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El token es : {state.token}
            </h1>
            {/* Pintar componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}



const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesión es : {state.sesion}
            </h2>
        </div>
    );
}


const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: "1234564",
        sesion:1,
    }

    // Creemos el estado de esta componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token : "dasfgadsada",
                sesion : sessionData.sesion + 1          
            }
        )
    }

    return (
        <miContexto.Provider value= {sessionData}>
            {/* Todo esto puede leer los datos de sesionData */}
            {/* Si se actualizan los componentes de aqui, tambien lo actualizan */}
            <h1>Ejemplo de UseState y useContext</h1>
            <Component1></Component1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;


