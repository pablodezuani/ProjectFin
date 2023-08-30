import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './reducers/userReducers';
import  globalReducer  from './reducers/GlobalReducer';


export const store =  configureStore({
  reducer: {
    globalReducer,
    userReducer,
  
  },
});

export type RootState = ReturnType <typeof store.getState>;
export default store;