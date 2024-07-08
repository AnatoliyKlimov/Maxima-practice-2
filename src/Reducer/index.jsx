import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from '../Slices/Slice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
