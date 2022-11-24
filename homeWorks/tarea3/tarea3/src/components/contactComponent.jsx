import React from 'react';


const Contactcomponent = ({contact , changeState,remove}) => {
  return (
    <div className='contact-component'>
      
      <div> {contact.nombre}</div>
      <span>{contact.email}</span>

      <div>
      <button 
      className='state-button'
      style={{ backgroundColor: contact.state ? 'green' : 'black' }}
      onClick={()=> changeState(contact)}>
      {contact.state ? 'Conectado' : 'Desconectado'}
       </button>

       <button
       className='remove-button' 
       onClick={()=> remove(contact)}>
       Remove 

       </button>

      </div>
    </div>
  );
}

export default Contactcomponent;
