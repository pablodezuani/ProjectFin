import styled from 'styled-components/native';

import {theme} from '../themes/theme';
import {Icon} from '../icon/icon';

export const ContainerModal = styled.View`
  position: absolute;
  top: 20px;
  background-color: ${theme.colors.bluetheme.azul};
  height: 60px;
  width: 400px;
  margin-left: 5px;
  margin-right: 0px;
  text-align: center;
  

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-left-radius:16px;
  border-bottom-right-radius: 16px;
  padding: 16px;
  z-index: 9;

  shadow-color: ${theme.colors.pinktheme.pink};
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-opacity: 1;
  shadow-radius: 1px;
  elevation: 10;
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
