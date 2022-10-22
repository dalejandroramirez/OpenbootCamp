import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Contactcomponent from './components/contactComponent';
import Contactform from './components/contactForm';



function App() {

  const defaultContact = [
    { nombre: 'Jose', email: 'Fernandez', state: false },
    { nombre: 'Maria', email: 'Gómez', state: true },
  ];

  const [newContact, setNewContact] = useState(defaultContact);

  function changeState(contact) {
    const index = newContact.indexOf(contact);
    const tempContact = [...newContact];

    tempContact[index].state = !tempContact[index].state
    setNewContact(tempContact)

  }

  function remove(contact) {
    const index = newContact.indexOf(contact);
    const tempContact = [...newContact];
    
    tempContact.splice(index,1);
    setNewContact(tempContact)
  }

  function addContact(contact) {
    const tempContact = [...newContact];
    tempContact.push(contact);
    setNewContact(tempContact);
  }


  return (
    <div className="App">
      <h1>Contactos</h1>
      <div className='card-container'>
        {newContact.map((contact,index) =>{
          return(
           <Contactcomponent
          contact={contact}  
          changeState={changeState}
          remove={remove}
          >  
          </Contactcomponent>
          );
        })} 
      </div>
      <div>
        <Contactform
          onAddContact = {addContact} 
        ></Contactform>

      </div>

      
    </div>
  );
}

export default App;
