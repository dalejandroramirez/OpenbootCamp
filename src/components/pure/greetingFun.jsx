
// rfcp componentes funcionales

import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Greetingfun = (props) => {

  // useState estructura : const [variable, metodo actualizacion] = useState(objeto inicial)
  const [age, setage] = useState(29);
  
  const birthday = () =>{
    //actualizar el estado
    setage(age+1);

  }


    return (
        <div>
            <h1>Hola a {props.name} desde una función</h1>
                <h2>
                    Tu edad es de {age}
                </h2> 
                <div>
                  <button onClick={birthday}>
                    Cumplir Años
                  </button>
                </div>
        </div>
    );
};


Greetingfun.propTypes = {
    name : PropTypes.string,
};


export default Greetingfun;
