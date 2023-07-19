
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import ConnectionAPI, { ConnectionAPIPost } from "../../../shared/components/functions/connection/connectionsAPI";
import { useRequest } from "../../../shared/hooks/useRequest";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useUserReducer } from "../../../store/reducers/userReducers/useUserReducer";

export const useLogin =() =>{

    const [email,setEmail] = useState <string>('');
  const [password,setPassword] = useState <string>('');
  const{authRequest,errorMessage,loading,setErrorMessage} = useRequest();


const handleOnPress = async () =>{
  authRequest({
  email,
  password,  
  })
};

const handleOnChangeEmail =(event:NativeSyntheticEvent<TextInputChangeEventData>) =>{
  setErrorMessage('');
setEmail(event.nativeEvent.text);
};
const handleOnChangeSenha =(event:NativeSyntheticEvent<TextInputChangeEventData>) =>{
  setErrorMessage('');
  setPassword(event.nativeEvent.text);
};
 return{
    email,
    password,
    loading,
    errorMessage,
handleOnPress,
handleOnChangeEmail,
handleOnChangeSenha,

 }
}