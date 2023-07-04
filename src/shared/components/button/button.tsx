import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import Text from "../text/text";
import { theme } from "../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps{
   title:String;
   margin?: String;

}

const Button =({title,margin,...props} : ButtonProps)=>{
return(
    <ButtonContainer {...props}>
    <Text type={textTypes.BUTTON_REGULAR} color={theme.colors.neutralTheme.white}>Logar</Text>
    </ButtonContainer>


)

};
export default Button;