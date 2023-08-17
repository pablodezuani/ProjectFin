import { useState } from "react";
import { RequestLogin } from "../types/requestLogin";
import { ConnectionAPIPost } from "../components/functions/connection/connectionsAPI";
import { returnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducers";
import { useUserReducer } from "../../store/reducers/userReducers/useUserReducer";

export const useRequest =()=>{
const {setUser} =useUserReducer();
    const[loading,setLoading] = useState <boolean> (false);
    const[errorMessage,setErrorMessage] = useState <string> ('');


    const authRequest =async(body:RequestLogin) =>{
        setLoading(true);

  await ConnectionAPIPost<returnLogin>('http://172.26.80.1:8080/auth',body)
      .then((result) => {
       setUser(result.user);

      })
      .catch(() => {
            setErrorMessage('Usuário ou senha incorreta');
          });

        setLoading(false);
    }
        return{
            loading,
            errorMessage,
            authRequest,
            setErrorMessage
        }
        
    }
