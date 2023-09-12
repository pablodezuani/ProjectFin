import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import ConnectionAPI, {ConnectionAPIPost, MethodType} from '../components/functions/connection/connectionsAPI';
import {returnLogin} from '../types/returnLogin';
import {UserType} from '../types/userType';
import {useDispatch} from 'react-redux';
import {useUserReducer} from '../../store/reducers/userReducers/useUserReducer';
import {useGlobalReducer} from '../../store/reducers/GlobalReducer/useGlobalReducer';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { setAuthorizationToken } from '../components/functions/connection/auth';


interface requestProps <T>{
  url:string;
  method:MethodType;
  saveGlobal?:(object:T) =>void;
  body?: unknown;
  message?:string;
}

export const useRequest = () => {

  const {reset} = useNavigation<NavigationProp<ParamListBase>>();
  const {setUser} = useUserReducer();
  const {setModal} = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');


  const request = async <T> ({
    url,
    method,
    saveGlobal,
    body,
    message
  }:requestProps <T> ) : Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setModal({
            visible: true,
            title: 'Sucesso!',
            text: message,
          });
        }
        return result;
      })
      .catch((error: Error) => {
        setModal({
          visible: true,
          title: 'Erro',
          text: error.message,
        });
        return undefined;
      });

    setLoading(false);
    return returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    await ConnectionAPIPost<returnLogin>('http://172.26.80.1:8080/auth', body)
      .then(result => {
        setAuthorizationToken(result.acessToken);
        setUser(result.user);
        reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      })

      
  
      .catch((error) => {
        console.log(error)
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválidos',
        });
      });
    
    setLoading(false);
  };
  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
    request
  };
};
