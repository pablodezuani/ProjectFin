import styled from "styled-components/native";
interface ButtonContainerPros {
    margin?:string;
}

export const ButtonContainer = styled.TouchableOpacity <ButtonContainerPros>`
width: 100%;
height: 48px;
border-radius: 8px;
margin-top: 16px;
background-color: #9850a0;
justify-content: center;
align-items: center;


${(props)=> (props.margin ? `margin:${props.margin};`

:'')}
`