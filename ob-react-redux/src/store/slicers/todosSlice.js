import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todosSlice = createSlice({
  name : 'todosState',
  initialState : []
  ,
  reducers: {
    todoAdded : (state, payload) => {

    state.push(
      {
        id: nextTodoId++,
        text: payload.text,
        completed : false
      }
    )
  },
   todoToggled: (state,payload) => {
    state.map((todo)=>
    (todo.id === payload.id)
      ?
    {
      ...todo,
      completed: !todo.completed
    }
    :
    todo
  )
    // const todo = state.find(todo => todo.id === action.payload.id)
    // todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions

export default todosSlice.reducer