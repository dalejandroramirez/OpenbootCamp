//  Ejemplo de de uso  del método 
// de ciclo de vida en componente clase y el hook de ciclo de vida
// en componente funcional

import React, { Component, useEffect} from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM");
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}




export const DidmountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM con hooks");
    }, []);

    return (
        <div>
            <h1>DidMount Con Hooks</h1>
        </div>
    );
}
