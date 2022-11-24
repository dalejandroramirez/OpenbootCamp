import {composeWithDevTools} from 'redux-devtools-extension' 
import { rootReducer } from '../reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit'

//
import todosSlice from '../slicers/todosSlice';
import filterSlice from '../slicers/filterSlice';
import counterSlice from '../slicers/locationSlice';

export const store = configureStore({
  reducer: {
      todosState: todosSlice,
      filterState: filterSlice,
      counterState : counterSlice
  }
})