import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ComponenteB(estado) {
    
    const [linked, setConectado] = useState(estado);
    const [Estado, setEstado] = useState(linked.estado === true ? 'Contacto en Linea': 'Contacto no disponible');
    const [EstadoBoton, setEstadoBoton] = useState(linked.estado === true ? 'Conectado': 'Desconectado');
   
    const Cambio = () => {
        setConectado(!linked)
        setEstado( linked === true ? 'Contacto no disponible': 'Contacto en Linea');
        setEstadoBoton(linked === true ? 'Desconectado': 'Conectado')
    }

    return (
        <div>
        
          <h6> {Estado}</h6>  
          <button type="button" onClick={Cambio}>{EstadoBoton}</button>
         
        </div>
    );
};


ComponenteB.propTypes = {
    estado : PropTypes.bool,

};


export default ComponenteB;
