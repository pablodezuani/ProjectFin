import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from './reducers/userReducers';

export const store =  configureStore({
  reducer: {
    useReducer,
  },
});

export type RootState = ReturnType <typeof store.getState>;
export default store;