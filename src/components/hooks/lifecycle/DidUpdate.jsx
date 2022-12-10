import React, { Component ,useEffect} from 'react';
//  Ejemplo de de uso  del método 
// de ciclo de vida en componente clase DidUpdate y el hook de ciclo de vida
// en componente funcional


export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privadp');
    };

    render() {
        return (
            <div>
              <h1> DidUpdate con Clases</h1>  
            </div>
        );
    }
}


export const DidupdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privadp');
        return () => {
            cleanup
        };
    });

    return (
        <div>
            <h1> DidUpdate con Hooks</h1>  
        </div>
    );
}



