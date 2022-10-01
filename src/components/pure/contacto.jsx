import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const Contacto = ({contact}) => {
    return (
        <div>
            <p>
                First Name : { contact.nombre }
            </p>
            <p>
                Last Name : { contact.apellido } 
            </p>
            <h4>
                Email : { contact.email }
            </h4>
            <h5>
                Linked: { contact.linked ? 'Online Contact': 'Contact Not Available' }
            </h5>
        </div>
    );
};


Contacto.propTypes = {
    
    name :  PropTypes.string,
    apellido : PropTypes.string,
    email : PropTypes.string,
    linked : PropTypes.bool
};


export default Contacto;
