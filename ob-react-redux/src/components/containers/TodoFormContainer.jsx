import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import Todoform from '../pure/todoForm'
// rfcredux

const mapStateToProps = (state) => ({
  // no es requerido en este caso

})

const mapDispatchToProps =  (dispatch) => {
  return {
    submit : (text) => 
      dispatch(addTodo(text))
    }
}


const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(Todoform)

export default TodoFormContainer