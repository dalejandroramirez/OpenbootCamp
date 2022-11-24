import { combineReducers } from "redux";
import locationSlice from "../slicers/locationSlice";
import { filterReducer } from "./filterReducer";
import { todosRuducer } from "./todosReducer";


export const rootReducer = combineReducers(
  {
    // State name: reducer that will control it
  todosState : todosRuducer,
  filterState :filterReducer,
  counterState: locationSlice
  // ...add more satets ad redcers to include then in the store
  }

)