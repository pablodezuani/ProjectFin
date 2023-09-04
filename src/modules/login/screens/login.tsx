import { SafeAreaView, Text, View } from "react-native";
import { ContainerLogin, Imagelogo } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
import { ButtonSecondary } from "../../../shared/components/button/button.style";
import { theme } from "../../../shared/components/themes/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useEffect, useState } from "react";
import {Icon} from '../../../shared/components/icon/icon';
import axios from "axios";
import { NativeSyntheticEvent } from "react-native";
import { TextInputChangeEventData } from "react-native";
import { useLogin } from "../hooks/useLogin";
import { bluetheme } from "../../../shared/components/themes/colors";
import ButtonWithIcon from "../../../shared/components/button/botaorede";
import ConnectionAPI, { ConnectionAPIGet } from "../../../shared/components/functions/connection/connectionsAPI";
import { URL_USER } from "../../../shared/components/constants/urls";
import { UserType } from "../../../shared/types/userType";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

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
      
  <Text style={{fontSize:12,marginTop:8,marginStart:200,fontWeight:"bold"}}> Esqueceu a sua senha? </Text>

        <Button

         type={theme.buttons.buttonsTheme.primary}
         loading ={loading}
        margin="16px"
         title="Acessar" 
      
       onPress={handleOnPress} 
      />

<View style={{flexDirection: 'row'}}>
  <Text style={{fontSize:16,marginTop: 36,color:'#8C2A96', fontWeight:"bold"}}>__________________    </Text>
  <Text style={{fontSize:16,marginTop: 41,color:'#8C2A96', fontWeight:"bold"}}>Acesse com</Text>
  <Text style={{fontSize:16,marginTop: 36,color:'#8C2A96', fontWeight:"bold"}}>    __________________</Text>
</View>

<View style={{flexDirection: 'row'}}>

  <Icon name="instagram"  size={32} color="#FF007f" style={{marginRight: 36, marginTop: 36}} />
  <Icon name="facebook"  size={32} color="#3b5998" style={{marginRight: 36, marginTop: 36}} />
  <Icon name="google"  size={32} color="#db4a39" style={{marginTop: 36}} />
</View>



<View>
<Text style = {{marginTop: 50}}>
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
