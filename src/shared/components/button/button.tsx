import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import Text from "../text/text";
import { theme } from "../themes/theme";
import { textTypes } from "../text/textTypes";
import LinearGradient from "react-native-linear-gradient";
import { Styles } from "styled-components/native/dist/types";
import React from "react";

interface ButtonProps extends TouchableOpacityProps{
   title:String;
   margin?: String;
   type?:string;
   disabled?: boolean;
   loading?:boolean;

}

const Button =({title,type ,loading, margin,...props} : ButtonProps)=>{
    const renderText =(color:string) => (
    <>
         <Text type={textTypes.BUTTON_REGULAR} color={color}>
            {title}
            </Text>
         )}

    </>
    );

switch (type) {
    case theme.buttons.buttonsTheme.primary:
        
    return(
        <ButtonContainer {...props}>
        {renderText(theme.colors.pinktheme.pink)}
    
        </ButtonContainer>
         
    
    );
       
        
case theme.buttons.buttonsTheme.secondary:
    default:
        return(
            <ButtonContainer {...props}>

            {renderText(theme.colors.pinktheme.pink)}
            </ButtonContainer>
        
        
        )
}

};
export default Button;