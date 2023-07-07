import { Text, TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumm } from "../../../modules/globalStyles/globalView.styles";
import { textTypes } from "../text/textTypes";
import { theme } from "../themes/theme";


interface InputProps extends TextInputProps {
  title: string;
  errorMessage? : string;
}

const Input = ({ title,errorMessage, ...props }: InputProps) => {
  return (
    <DisplayFlexColumm>
      {title && (
        <Text style={{ color: theme.colors.graytheme.gray100, marginLeft: 5, marginBottom: 8, }}>
          {title}
        </Text>
      )}
      <ContainerInput iserror ={!!errorMessage} {...props} />
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
