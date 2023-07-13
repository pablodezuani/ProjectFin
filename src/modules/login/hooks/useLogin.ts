import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export const useLogin =() =>{


    const [email,setEmail] = useState <string>('');
  const [password,setPassword] = useState <string>('');
  const [loading,setLoading]= useState <boolean>(false);
  const [errorMessage,setErrorMessage]= useState <string>('');

const handleOnPress = async () =>{
  setLoading (true)
const resultAxios = await axios.post('http://172.26.80.1:8080/auth',{
  email,
  password,
}).catch(() => {
  setErrorMessage('Usuário ou senha incorreta')
});
setLoading(false)
console.log ('Clicou');
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