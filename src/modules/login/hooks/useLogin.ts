import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import ConnectionAPI, { ConnectionAPIPost } from "../../../shared/components/functions/connection/connectionsAPI";
import { useRequest } from "../../../shared/hooks/useRequest";

export const useLogin =() =>{


    const [email,setEmail] = useState <string>('');
  const [password,setPassword] = useState <string>('');
  const{authRequest,errorMassage,loading,user} =useRequest();
  const [errorMessage,setErrorMessage]= useState <string>('');

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