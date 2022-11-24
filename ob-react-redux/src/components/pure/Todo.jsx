import React from 'react';
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, id}) => {
  return (
    <li onClick={onClick}
       style={
         {textDecoration : completed ? 'line-through' :'none' ,
          textDecorationColor: completed ? 'green': 'red',
          color: completed ? 'green': 'white',
          cursor: 'pointer'
         }
         }>
      { id } -- { text }      
    </li>
 );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  text:PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}



export default Todo;
