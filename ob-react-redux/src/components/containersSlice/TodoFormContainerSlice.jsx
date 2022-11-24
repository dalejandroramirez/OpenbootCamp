import React from 'react'
import { connect } from 'react-redux'
import {todoAdded } from '../../store/slicers/todosSlice'
import Todoform from '../pure/todoForm'
// rfcredux

const mapStateToProps = (state) => ({
  // no es requerido en este caso

})

const mapDispatchToProps =  (dispatch) => {
  return {
    submit : (text) => 
      dispatch(todoAdded(text))
    }
}


const TodoFormContainerSlice = connect(mapStateToProps, mapDispatchToProps)(Todoform)

export default TodoFormContainerSlice