import { Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';
import {theme} from '../themes/theme'
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { modalTestId } from '.././modal/__mocks__/modal.tesid'
import { ContainerModal, IconCloseModal } from './modal.style';
import { Icon } from '../icon/icon';
import { useEffect } from 'react';
import { pinktheme } from '../themes/colors';
import { Imagelogo } from '../../../modules/login/styles/login.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseModal();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onCloseModal]);

  return (
    <ModalReact animationType="slide" transparent={true} onRequestClose={onCloseModal} {...props}>
      <ContainerModal>
        <Text color={theme.colors.pinktheme.pink}style={{textAlign:'center'}}>   Login ou senha Incorreta </Text>
        
      </ContainerModal>
    </ModalReact>

  );
};

export default Modal;