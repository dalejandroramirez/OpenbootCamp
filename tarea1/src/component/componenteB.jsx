import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ComponenteB(estado) {
    const [linked, setConectado] = useState(estado);

    return (
        <div>
          <h3> {linked === false ? 'Contacto no disponible' : 'Contacto en linea'}</h3>  
          <button type="button" onClick={() => setConectado(!linked)}>{linked === false ? 'Conectado' : 'Desconectado'}</button>
         
        </div>
    );
};


ComponenteB.propTypes = {
    estado : PropTypes.bool,

};


export default ComponenteB;
