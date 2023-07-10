import { Text, TextInputProps, View } from "react-native";
import { ContainerInput, IconEye } from "./input.style";
import { DisplayFlexColumm } from "../../../modules/globalStyles/globalView.styles";
import { textTypes } from "../text/textTypes";
import { theme } from "../themes/theme";
import { useState } from "react";
import { Icon } from "../icon/icon";

interface InputProps extends TextInputProps {
  title: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?:string;
}

const Input = ({ margin,secureTextEntry, title, errorMessage, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = ()=>{
    setCurrentSecure((current)=> !current );

  }

  return (
    <DisplayFlexColumm CustomMargin={margin}>
      {title && (
        <Text
          style={{
  
            color: theme.colors.graytheme.gray100,
            marginLeft: 10,
            marginBottom: 8,
            marginTop: 8,
          }}
        >
          {title}
        </Text>
      )}
      <View>
      <ContainerInput secureTextEntry={currentSecure} iserror={!!errorMessage} {...props} />

      {secureTextEntry &&  <IconEye  onPress={handleOnPressEye} name={currentSecure ? 'eye':'eye-blocked'}  size={20} color={theme.colors.pinktheme.pink}/>}
     
      </View>
      {errorMessage && (
        <Text
          style={{
            color: theme.colors.redtheme.rederro,
            marginTop: 16,
            marginLeft: 8,
          }}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumm>
  );
};

export default Input;
