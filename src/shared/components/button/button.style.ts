import styled from "styled-components/native";
import { theme } from "../themes/theme";
interface ButtonContainerPros {
    margin?:string;
}

export const ButtonContainer = styled.TouchableOpacity <ButtonContainerPros>`
width: 75%;
height: 45px;
border-radius: 32px;
margin-top: 16px;
flex-direction: row;
background-color:${theme.colors.bluetheme.blue};
justify-content: center;
border-width: 2px;
border-color: ${theme.colors.pinktheme.pink};
align-items: center;
${(props)=> (props.margin ? `margin:${props.margin};`:'')}
`;


export const ButtonSecondary = styled(ButtonContainer) <ButtonContainerPros>`
${(props)=> (props.margin ? `margin:${props.margin};`:'')}

background-color:${theme.colors.neutralTheme.white};
border-width : 1px;
`;


export const ActivityIndicatorButton = styled.ActivityIndicator `

margin-left: 8px;
`;


export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerPros>`
background-color: ${theme.colors.graytheme.gray100};
`