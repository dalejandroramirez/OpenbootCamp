import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/contact.scss'



const Contacto = ({contact,conected,remove}) => {

    function contactIsConectedIcon() {
      if (contact.linked) {
        return(
          <i onClick={()=> conected(contact)}
            className='badge bg-primary task-action' 
            style={{color:"white",width:"55px"}}>Linked</i>
              )
      }else
      {
        return (<i onClick={()=>conected(contact)} className='badge bg-danger task-action' style={{color:"white" ,width:"55px"}}>Unliked</i>)
      }
    }

    return (
        <tr className='fw-normal'style={{ textAlign:"center"}}  >
        <td >
            <span className='ms-2'>{contact.nombre}</span> 
        </td>
        <td className='align-middle'>
            <span>{contact.apellido}</span> 
        </td>
        <td className='align-middle'>
            <span>{contact.email}</span>
        </td>
        <td className='align-middle contact-action'>
        {contactIsConectedIcon()}        
        </td>
        <td>
        <i className='bi-trash contact-action' 
                style={{color:"gray"}}
                onClick={()=> remove(contact)}
                ></i> 
        </td>
    </tr>
    
    


    );
};


Contacto.propTypes = {
    
    name :  PropTypes.string,
    apellido : PropTypes.string,
    email : PropTypes.string,
    linked : PropTypes.bool
};


export default Contacto;
