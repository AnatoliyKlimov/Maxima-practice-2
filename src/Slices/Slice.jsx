// Slices/CartSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: 0,
  auth: [],
  loginIn: JSON.parse(localStorage.getItem('loginIn')) || false,
};

const Slice = createSlice({
  name: 'Info',
  initialState,
  reducers: {
    addNewAuth: (state, action) => {
      const item = [];
      item.push(action.payload[0]);
      item.push(action.payload[1]);
      item.push(action.payload[2]);
      if (state.auth.find((element) => item[0] === element[0])) return;
      state.auth.push(item);
    },
  },
});

export const { addNewAuth } = Slice.actions;
export default Slice.reducer;
