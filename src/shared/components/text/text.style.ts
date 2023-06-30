import styled from "styled-components/native";

interface ContainerTextProps{

color?: string;

}
export const ContainerText  = styled.Text<ContainerTextProps>`
${(props) => props.color? `color: ${props.color}`:""}

`;