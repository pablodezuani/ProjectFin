import styled from "styled-components/native";

interface ContainerTextProps{

color? : string;
fontsize: string;
fontFamily: 'Poppins-Bold' |'Poppins-Light' |'Poppins-Regular';

}
export const ContainerText  = styled.Text<ContainerTextProps>`
${(props) => props.color? `color: ${props.color}`:""}

font-family:${(props) => props.fontFamily  };
color:#8C2A96;
font-size:${(props)=> props.fontsize};

`;