import styled from "styled-components/native";
import { theme } from "../themes/theme";
interface ButtonContainerPros {
    margin?:string;
}

export const ButtonContainer = styled.TouchableOpacity <ButtonContainerPros>`
width: 60%;
height: 32px;
border-radius: 8px;
margin-top: 16px;
background-color:${theme.colors.bluetheme.blue};
justify-content: center;
border-width: 1px;
border-color: ${theme.colors.pinktheme.pink};
align-items: center;
${(props)=> (props.margin ? `margin:${props.margin};`:'')}
`;


export const ButtonSecondary = styled(ButtonContainer) <ButtonContainerPros>`
${(props)=> (props.margin ? `margin:${props.margin};`:'')}

background-color:${theme.colors.neutralTheme.white};
border-width : 1px;
`;