import React , {useRef} from 'react';

const Contactform = ({onAddContact}) => {

  const nameRef = useRef('');
  const emailRef = useRef('');

  function addContact(e) {

    e.preventDefault()

    const newContact = { nombre: nameRef.current.value, email: emailRef.current.value, state: true };

    onAddContact(newContact);
    nameRef.current.value = '';
    emailRef.current.value = '';
  }
  



  return (
    <form onSubmit={addContact} className='contact-component'>
      <h2>Agregar Contacto</h2>
      <input ref={nameRef} name='name' placeholder='Nombre Contacto' autoFocus/> 
      <input ref={emailRef} name='email' placeholder='correo' type='email'/>

      <button 
        type='submit'
        onClick={addContact}
        className="submit-button">
        Add Contact
      </button>
    </form>
  );
}

export default Contactform;
