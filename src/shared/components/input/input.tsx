import { Text, TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumm } from "../../../modules/globalStyles/globalView.styles";
import { textTypes } from "../text/textTypes";
import { theme } from "../themes/theme";

interface InputProps extends TextInputProps {
  title: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumm>
      {title && (
        <Text margin =" 0px 0px 4px 16px "style={{ color: theme.colors.graytheme.gray100 }}>
          {title}
        </Text>
      )}
      <ContainerInput {...props} />
    </DisplayFlexColumm>
  );
};

export default Input;
