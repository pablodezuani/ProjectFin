import {useState} from 'react';
import {RequestLogin} from '../types/requestLogin';
import {ConnectionAPIPost} from '../components/functions/connection/connectionsAPI';
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

export const useRequest = () => {
  const {reset} = useNavigation<NavigationProp<ParamListBase>>();
  const {setUser} = useUserReducer();
  const {setModal} = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    await ConnectionAPIPost<returnLogin>('http://172.26.80.1:8080/auth', body)
      .then(result => {
        setUser(result.user);
        reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      })
      .catch(() => {
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
  };
};
