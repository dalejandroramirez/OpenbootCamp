

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'


//**Este contenedor se va a comunicar con redux (rfcredux)
// Debemos conectar la informacion de redax con TodoLis


// Filtrar  Todo List

const filterTodos = (todos,filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter((todo)=> !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter((todo)=> todo.completed);
    default:
      return todos;
  }
}


// OJO: Debe tener el mismo nombre que en el store es decir el todosState y el filterState

const mapStateToProps = (state) => {
  return {
    todos : filterTodos(state.todosState, state.filterState)
  }
}


// Controlar el cambio del estado (toggle)
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    } 
  }
}



// Estamos conectando State y Dispach to TodoList's Props
const TodosContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default TodosContainer;