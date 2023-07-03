
import {Text, TextProps as TextPropsNative} from"react-native/types";
import { ContainerText } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";
interface TextProps extends TextPropsNative{
    color?: String;
    type?:String;
  
}
const text = ({color,type,...props}:TextProps) =>{
const handlefontsize = useMemo(() =>{
    switch (type) {
        case textTypes.TITLE:
            return '32px';
            default:
            return'16px';
    }
},[type]);
    
return <ContainerText fontsize ={handlefontsize}{...props}/>;
};
export default text;