import styled from "styled-components/native";

interface ContainerTextProps{

color? : string;
size: string;

}
export const ContainerText  = styled.Text<ContainerTextProps>`
${(props) => props.color? `color: ${props.color}`:""}

size:${(props)=> props.size};

`;