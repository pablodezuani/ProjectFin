import  Styled, { styled }  from 'styled-components/native';

interface DisplayProps{
    CustomMargin?:string;

}

export const DisplayFlexColumm = styled.View <DisplayProps>`
width: 100%;
flex-direction: column;
display: flex;
margin: ${(props) => props.CustomMargin ? props.CustomMargin : '0px'};


`