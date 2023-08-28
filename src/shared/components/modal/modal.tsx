import { Modal as ModalReact, ModalProps as ModalPropsReact } from 'react-native';
import {theme} from '../themes/theme'
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { modalTestId } from '.././modal/__mocks__/modal.tesid'
import { ContainerModal, IconCloseModal } from './modal.style';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact animationType="slide" 
    transparent={true}
     onRequestClose={onCloseModal} {...props}>
      
          <ContainerModal>
    
        <Text
    
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={theme.colors.graytheme.gray100}
        >
          {title}
       
        </Text>
      </ContainerModal>
    </ModalReact>

  );
};

export default Modal;