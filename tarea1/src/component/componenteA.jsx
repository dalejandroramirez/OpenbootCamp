import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.model';
import ComponenteB from './componenteB';

function componenteA ({contact}) {
    return (
        <div>
            <p>My first name is {contact.nombre}</p>
            <p>My last name is {contact.apellido}</p>
            <p>My email is {contact.email}</p>
            {/* <p>I'm {contact.linked ? 'Online Contact': 'Contact Not Available'}</p> */}
            <ComponenteB estado={contact.linked} />
        </div>
    );
};


componenteA.propTypes = {
    contact :PropTypes.instanceOf(Contact),
    nombre :  PropTypes.string,
    apellido : PropTypes.string,
    email : PropTypes.string,
    linked : PropTypes.bool
};


export default componenteA;
