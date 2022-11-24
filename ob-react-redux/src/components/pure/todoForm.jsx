import React, {useRef} from 'react'
import Proptypes from 'prop-types'

/**
 *
 * @param {submit} , submit es la encargada crear una nueva tarea
 *                   encargada de despachar una accion del contenedor que será accion llamada
 * @returns
 */

export default function Todoform({submit}) {

  const newText =useRef();

  return (
    <div>
      <h2>Create Your Todos</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        submit(newText.current.value);
        newText.current.value= '';
        }}>
        <input type='text' ref={newText}/>
        <button type='submit'>
          Create Todo
        </button>

      </form>
    </div>
  );
}

Todoform.propTypes = {
  submit: Proptypes.func.isRequired
}

