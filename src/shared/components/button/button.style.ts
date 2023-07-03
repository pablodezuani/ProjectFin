import styled from "styled-components/native";
interface ButtonContainerPros {
    margin?:string;
}

export const ButtonContainer = styled.TouchableOpacity <ButtonContainerPros>`
width: 40%;
height: 48px;
border-radius: 8px;
margin-top: 16px;
background-color: #D2F7FA;
justify-content: center;
align-items: center;


${(props)=> (props.margin ? `margin:${props.margin};`

:'')}
`