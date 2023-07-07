import styled from "styled-components/native";

interface ContainerTextProps{

color? : string;
fontsize: string;
CustomMargin?:string;
fontFamily: 'Poppins-Bold' |'Poppins-Light' |'Poppins-Regular';

}
export const ContainerText  = styled.Text<ContainerTextProps>`
${(props) => (props.color? `color: ${props.color};`:'')}
${(props) => (props.CustomMargin? `margin: ${props.CustomMargin};`:'')}
padding-top:3px;
font-family:${(props) => props.fontFamily  };
color:#8C2A96;
font-size:${(props)=> props.fontsize};

`;