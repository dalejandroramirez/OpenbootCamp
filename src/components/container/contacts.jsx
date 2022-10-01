import React from 'react';
import {Contact} from   "../../models/contact.class"
import Contacto from "../pure/contacto"

const ContactComponent = () => {

    const defaulContact = new Contact("Alejo","Ramirez","correo",false)

    return (
        <div>
            <Contacto contact = {defaulContact}> </Contacto>   
        </div>
    );
}

export default ContactComponent;
