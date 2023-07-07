import { Text, TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumm } from "../../../modules/globalStyles/globalView.styles";
import { textTypes } from "../text/textTypes";
import { theme } from "../themes/theme";
import { useState } from "react";
import { Icon } from "react-native-vector-icons/Icon";


interface InputProps extends TextInputProps {
  title: string;
  errorMessage? : string;
  secureTextEntry?: boolean;
  
}

const Input = ({ secureTextEntry,title,errorMessage, ...props }: InputProps) => {

const [currentSecure,setCurrentSecure] = useState <Boolean> (!! secureTextEntry);

  return (
    <DisplayFlexColumm>
      {title && (
        <Text style={{ color: theme.colors.graytheme.gray100, marginLeft: 5, marginBottom: 8, marginTop: 8,}}>
          {title}
        </Text>
      )}
      <Icon name="Eye"/>
      <ContainerInput secureTextEntry ={currentSecure} iserror ={!!errorMessage} {...props} />
      {errorMessage && (
        <Text 
        style={{ color: theme.colors.redtheme.rederro,
        
             marginTop : 16,
             marginLeft: 8,
        
        }}>
            {errorMessage}
        </Text>
      )}
    </DisplayFlexColumm>
  );
};

export default Input;
