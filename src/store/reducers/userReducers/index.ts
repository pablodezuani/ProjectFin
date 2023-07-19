import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserType } from '../../../shared/types/userType'

interface UserStore {
    user?: UserType;
}
const initialState:any =
{
    user:undefined
}

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,

  reducers: {
    setUserAction: (state, action:PayloadAction <UserType>) => {
      state.user = action.payload;
    },
  },
})


export const {setUserAction } = userSlice.actions

export default userSlice.reducer