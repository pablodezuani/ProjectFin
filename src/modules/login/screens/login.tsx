import { SafeAreaView, Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
import { ButtonSecondary } from "../../../shared/components/button/button.style";
import { theme } from "../../../shared/components/themes/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Icon } from "react-native-vector-icons/Icon";

const login = () => {
const handleOnPress = () =>{
console.log ('Clicou');

};

return (
   <View>
    <ContainerLogin>
      <Input  placeholder="Digite Seu E-mail" title="Email: " />
      <Input  secureTextEntry placeholder="Digite Sua senha" title="Senha: "/>
        <Button

         type={theme.buttons.buttonsTheme.primary} 
        margin="16px"
         title="Acessar" 
        
       onPress={handleOnPress} 
      />

    </ContainerLogin>
   </View>
);
};
export default login;
