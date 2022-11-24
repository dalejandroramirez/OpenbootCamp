import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux'



const counterSlice = createSlice({
  name: "counterState",
  initialState: {
    counter: 0,
    // value: "counterState"
  },
  reducers: {
    increment: state => {
      state.counter = state.counter + 1;
    },
    decrement: state => {
      state.counter = state.counter - 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;