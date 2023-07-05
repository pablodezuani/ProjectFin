
import { TextInputProps } from "react-native/types";
import { ContainerInput } from "./input.style";


interface InputProps extends TextInputProps{
title?:string
}
 const Input =({title,...props}:InputProps) =>{

return <ContainerInput {...props}/>;
};
export default Input;