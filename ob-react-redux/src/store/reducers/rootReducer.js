
import { combineReducers } from "redux";
import locationSlice from "../slicers/locationSlice";
import { filterReducer } from "./filterReducer";
import { todosRuducer } from "./todosReducer";
import { userRuducer } from "./userReducer";


export const rootReducer = combineReducers(
  {
    // State name: reducer that will control it
  todosState: todosRuducer,
  filterState: filterReducer,
  counterState: locationSlice,

  // Async Example (LOGIN USER)
  userState: userRuducer
  // ...add more satets ad redcers to include then in the store
  }

)