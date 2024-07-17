// Slices/CartSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: [],
  loginIn: false,
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
    logIN: (state, action) => {
      return {
        ...state, // Копируем старый объект state
          loginIn: action.payload // Заменяем login на новый
      };
    },
  },
});

export const { addNewAuth, logIN } = Slice.actions;
export default Slice.reducer;
