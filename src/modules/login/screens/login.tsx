import { SafeAreaView, Text, View } from "react-native";
import { ContainerLogin, Imagelogo } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
import { ButtonSecondary } from "../../../shared/components/button/button.style";
import { theme } from "../../../shared/components/themes/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useState } from "react";
import {Icon} from '../../../shared/components/icon/icon';
import axios from "axios";
import { NativeSyntheticEvent } from "react-native";
import { TextInputChangeEventData } from "react-native";
import { useLogin } from "../hooks/useLogin";

const login = () => {
  const{
    email,
    password,
    loading,
errorMessage,
handleOnPress,
handleOnChangeEmail,
handleOnChangeSenha,

  } = useLogin();
return (
   <View>

    
    <ContainerLogin>
    <Imagelogo  source={require('../../../assets/images/logo.png')} />
    
    
      <Input 
      value={email}
      errorMessage={errorMessage} 
      margin="0px 0px 8px 0px"
       placeholder="Digite Seu E-mail" 
       title="Email:" 
       onChange={handleOnChangeEmail}/>
   
      <Input   
      value={password}
      errorMessage={errorMessage} 
      margin ="0px 0px 16px 0px" 
      secureTextEntry 
      placeholder="Digite Sua senha" 
      title="Senha: "
      onChange={handleOnChangeSenha}/>
      
  <Text style={{fontSize:10,marginTop:8,justifyContent:"flex-end"}}> Esqueceu a sua senha? </Text>


        <Button

         type={theme.buttons.buttonsTheme.primary}
         loading ={loading}
        margin="16px"
         title="Acessar" 
      
       onPress={handleOnPress} 
      />

<View>
<Text
 style={{fontSize:16,marginTop:36}}> Acesse com </Text>


</View>
<View style={{flexDirection: 'row'}}>

  <Icon name="instagram"  size={32} color="#1877F2" style={{marginRight: 36, marginTop: 36}} />
  <Icon name="facebook"  size={32} color="#1877F2" style={{marginRight: 36, marginTop: 36}} />
  <Icon name="google"  size={32} color="#4285F4" style={{marginTop: 36}} />
</View>
<View>
<Text style = {{marginTop: 90}}>
  Não possui acesso ?{' '}
  <Text style={{color: 'orange', textDecorationLine: 'underline'}}>
    Cadastre-se
  </Text>
</Text>
</View>



    </ContainerLogin>
   </View>
   
);
};
export default login;
