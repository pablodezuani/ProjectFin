import styled from "styled-components/native";

interface ContainerTextProps{

color? : string;
fontsize: string;

}
export const ContainerText  = styled.Text<ContainerTextProps>`
${(props) => props.color? `color: ${props.color}`:""}

font-family:Poppins-Light;
font-size:${(props)=> props.fontsize};

`;