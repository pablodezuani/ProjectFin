
import {Text, TextProps as TextPropsNative} from"react-native/types";
import { ContainerText } from "./text.style";
interface TextProps extends TextPropsNative{
    color?: String;
  
}
const text = ({color,...props}:TextProps) =>{
return <ContainerText color={color} {...props}/>;
};
export default text;