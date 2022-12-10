import React , {useEffect} from 'react';

const Allcycles = () => {

    useEffect(() => {
        
        console.log('Componente creado ');

        const intervalID = setInterval(() => {
        document.title = `${new Date()}`
        console.log('actualizacion Componente');
        }, 1000);


        return () => {
            console.log('componente va a desaparecer');
            document.title = 'El tiempo se ha detenido';
            clearInterval(intervalID);
          };
    }, []);


    return (
        <div>
            
        </div>
    );
}

export default Allcycles;
