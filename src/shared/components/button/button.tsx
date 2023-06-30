import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import Text from "../text/text";
import { theme } from "../themes/theme";

interface ButtonProps extends TouchableOpacityProps{
   title:String;
   margin?: String;

}

const Button =({title,margin,...props} : ButtonProps)=>{
return(
    <ButtonContainer {...props}>
    
    </ButtonContainer>


)

};
export default Button;