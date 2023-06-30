import { SafeAreaView, Text } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/button";
const login = () => {
const handleOnPress = () =>{
console.log ('Clicou');

};

return (
   <SafeAreaView>
    <ContainerLogin>
        <Text>Login:</Text>
        <Input/>
        <Button margin="16px" title="ENTRAR" onPress={handleOnPress}/>
    
    </ContainerLogin>
   </SafeAreaView>
)
}
export default login;



