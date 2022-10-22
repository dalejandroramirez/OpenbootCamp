
import React, {useRef} from 'react';
import { Contact } from '../../../models/contact.class';
import { LEVELS } from '../../../models/levels.enum';


const Contactform = ({add}) => {
  

  const nameRef  = useRef('')
  const apellidoRef = useRef('')
  const emailRef = useRef('')
  const linkedRef = useRef(false)


  function addContact(e) {
    console.log("Agregar contacto");
    e.preventDefault();


    const newContact = new Contact(
      nameRef.current.value,
      apellidoRef.current.value,
      emailRef.current.value,
      linkedRef.current.value === "Linked" ? true : false 
    );

    add(newContact)

  }


    return (
      <form onSubmit={addContact} 
            className='d-flex justify-content-center align-items-center mb-4'> 
      <div className='form-outline flex-fill'>
      <input ref={nameRef} id="inputName" placeholder='  Nombre' className='form-control form-control-lg' required autoFocus></input>  
      <input ref={apellidoRef} id="inputLastName" placeholder='  Apellido' className='form-control form-control-lg' required ></input>
      <input ref={emailRef} id="inputEmail" placeholder='  Email' className='' type="text"></input>
      <select ref={linkedRef} id='selectLinked'>
        <option  value={"Unlinked"}>Unlinked </option>
        <option  value={"Linked"} >linked </option>

      </select>
      </div>

      <button type='submit'
              className='btn btn-success btn-lg ms-2' 
           
      >
        Add Contact
      </button>
      </form>
    );
}

export default Contactform;
