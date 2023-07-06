
import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumm } from "../../../modules/globalStyles/globalView.styles";
import { textTypes } from "../text/textTypes";
import { theme } from "../themes/theme";


interface InputProps extends TextInputProps{
title?:string;
}
 const Input =({title,...props}:InputProps) =>{

return (
<DisplayFlexColumm>
    {title &&(
    <text color={theme.colors.graytheme.gray100}type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>{title}</text>)}
<ContainerInput {...props}/>
</DisplayFlexColumm>
);
 };
export default Input;