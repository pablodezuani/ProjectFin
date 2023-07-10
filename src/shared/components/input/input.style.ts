import styled from "styled-components/native";
import { theme } from "../themes/theme";
import { Icon } from "../icon/icon";


interface ContainerInputProps {
iserror?: boolean;
secureTextEntry?: boolean;

}
export const ContainerInput = styled.TextInput <ContainerInputProps>`
width:100%;
height: 48px;
padding: 16px;
background-color: ${theme.colors.neutralTheme.white};
color: ${theme.colors.pinktheme.pink};
border-radius: 8px;
border-width: 1px;
border-color: ${(props)=> props.iserror ? theme.colors.redtheme.rederro : theme.colors.pinktheme.pink};


`;

export const IconEye =styled(Icon)`
position: absolute;
right: 16px;
top:12px


`
