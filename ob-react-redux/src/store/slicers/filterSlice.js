import {createSlice} from '@reduxjs/toolkit'

let initialState = {filter: 'SHOW_ALL'}


export const filterSlice = createSlice({
  name: 'filterState',
  initialState,
  reducers : {
    setVisibilityFilter : (state=initialState , action) => {
      return action.payload.filter 
      
      // action.payload.filter = state 
       
    }
  }
})

export const {setVisibilityFilter} = filterSlice.actions

export default filterSlice.reducer