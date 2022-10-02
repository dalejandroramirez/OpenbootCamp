// Ejemplo del uso del método componentWillUnmount para componente clase
// Ejemplo del uso del método componentWillUnmount para componente funcion
// Cunaod la componente va a desaparecer
import React, { Component ,useEffect} from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamietno antes que el componente desaparezca');

    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}


export const WillunmountHook = () => {

    useEffect(() => {
        // no ponemos nada aqui; todo va dentro del return
        return () => {
            console.log('Comportamietno antes que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}


