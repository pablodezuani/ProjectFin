import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from './reducers/userReducers';
import  globalReducer  from './reducers/userReducers';


export const store =  configureStore({
  reducer: {
    globalReducer,
    useReducer,
  
  },
});

export type RootState = ReturnType <typeof store.getState>;
export default store;