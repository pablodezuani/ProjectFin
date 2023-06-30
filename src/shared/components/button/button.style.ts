import styled from "styled-components/native";
interface ButtonContainerPros {
    margin?:string;
}

export const ButtonContainer = styled.TouchableOpacity <ButtonContainerPros>`
width: 50%;
height: 48px;
border-radius: 4px;
background-color: #9850a0;
justify-content: center;
align-items: center;


${(props)=> (props.margin ? `margin:${props.margin};`

:'')}
`