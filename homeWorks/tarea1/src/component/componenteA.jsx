import React,  {useState} from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB';
import { Contact } from '../models/contact.model';

function ComponenteA ({contact}) {

        return (
        <div>
            <p>My first name is {contact.nombre}</p>
            <p>My last name is {contact.apellido}</p>
            <p>My email is {contact.email}</p>
 
            {/* <p>I'm {contact.linked ? 'Online Contact': 'Contact Not Available'}</p> */}
            {console.log(contact.state)}
            <ComponenteB estado ={contact.linked} />
        </div>
    );
};


ComponenteA.propTypes = {

    nombre :  PropTypes.string,
    apellido : PropTypes.string,
    email : PropTypes.string,
    linked : PropTypes.bool
};


export default ComponenteA;
