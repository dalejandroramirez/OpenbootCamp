import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todosSlice = createSlice({
  name : 'todoState',
  initialState : []
  ,
  reducers: {
    todoAdded(state,action){
    state.push({
      id: nextTodoId++,
      text: action.payload.text,
      completed : false
    })
  },
   todoToggled(state,action){
    state.map((todo)=>
    (todo.id === action.payload.id)
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