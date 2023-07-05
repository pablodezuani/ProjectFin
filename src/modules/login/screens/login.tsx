import { SafeAreaView, Text } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
import { ButtonSecondary } from "../../../shared/components/button/button.style";
import { theme } from "../../../shared/components/themes/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
const login = () => {
const handleOnPress = () =>{
console.log ('Clicou');

};

return (
   <SafeAreaView>
    <ContainerLogin>
        <Text>Login:</Text>
      <Input />
        <Button type={theme.buttons.buttonsTheme.primary} 
        margin="16px"
         title="Acessar" 
    
      onPress={handleOnPress} />

    </ContainerLogin>
   </SafeAreaView>
)
}
export default login;
