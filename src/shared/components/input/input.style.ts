import styled from "styled-components/native";
import { theme } from "../themes/theme";

export const ContainerInput = styled.TextInput`
width: 100%;
height: 48px;
padding: 16px;
background-color: ${theme.colors.neutralTheme.white};
color: #888;
border-radius: 8px;
border-width: 1px;
border-color: ${theme.colors.pinktheme.pink};

`;