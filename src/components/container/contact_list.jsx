import React , {useEffect,useState} from "react";
import { Contact } from "../../models/contact.class"
import Contacto from "../pure/contacto";
import Contactform from "../pure/forms/contactForm";



// Mostraremos todos los contactacto en el momento

const ContactListComponent = () => {
    
    const contacto1 = new Contact('Alejo','Ramirez','correo1',false);
    const contacto2 = new Contact('Daniel','Gomez','correo2',true);
    const contacto3 = new Contact('Lalo','Landa','correo3',false)

    const [contacts, setcontacts] = useState([contacto1,contacto2,contacto3]);

    useEffect(() => {
        console.log("El estado de los contactos será modificado",contacts);
        return () => {
        };
    }, [contacts]);


    function contactIsConected(contact) {
      console.log("Contacto que se va a conectar es: ",contact);
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts[index].linked = !tempContacts[index].linked ;
      setcontacts(tempContacts)
    }

    function contactIsadded(contact) {
      console.log("this task will be add",contact);
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts.push(contact)
      setcontacts(tempContacts)
    }

    function removeContact(contact) 
    {
      console.log("this task will be add",contact);
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts.splice(index,1)
      setcontacts(tempContacts)   
    }


    return (
      <div>
        <div className="col-12">
          <div className="card">
            <div className="card-header p-3">
              <h5 style={{textAlign: "center"}}> Mis Contactos</h5>
            </div>
            <div className='card-body' data-mdb-perfect-scrollbar= "true" style = { {position: 'relative', height: 'auto'} }>
            <table style={{margin:"0 auto"}}>
              <thead style={{ textAlign:"center" ,border:"2px"}}>
                <tr>
                  <th > Nombre </th>
                  <th > Apellido </th>
                  <th> Correo  </th>
                  <th> Conectado </th>
                  <th> </th>
                </tr>    
              </thead>
              <tbody >
                {contacts.map((contact,index)=>{
                  return(
                    <Contacto
                      key={index}
                      contact={contact}
                      conected = {contactIsConected}
                      remove={removeContact}
                    />
                    
                  )}
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        </div>
        <Contactform add= {contactIsadded}> </Contactform>
      </div>
    );
}

export default ContactListComponent;

