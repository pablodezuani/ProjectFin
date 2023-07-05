import {TouchableOpacityProps } from "react-native";
import { ActivityIndicatorButton, ButtonContainer, ButtonDisabled, ButtonSecondary } from "./button.style";
import Text from "../text/text";
import { theme } from "../themes/theme";
import { textTypes } from "../text/textTypes";
import LinearGradient from "react-native-linear-gradient";
import { Styles } from "styled-components/native/dist/types";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
  }


  const Button = ({ title, type, disabled, loading, margin, onPress, ...props }: ButtonProps) => {
    const handleOnPress = () => {
      if (!loading && !disabled && onPress) {
        onPress();
      }
    };


    const renderText = (color: string) => (
        <>
            <Text type={textTypes.BUTTON_REGULAR} color={color}>
                {title}
            </Text>
            {loading && <ActivityIndicatorButton color={theme.colors.pinktheme.pink} />}
        </>
    );

    if (disabled) {
        return (
            <ButtonDisabled {...props} >
                 {renderText(theme.colors.pinktheme.pink)}

            </ButtonDisabled>
        );
    }
    switch (type) {
        case theme.buttons.buttonsTheme.primary:

            return (
                <ButtonContainer {...props} onPress={handleOnPress}>
                    {renderText(theme.colors.pinktheme.pink)}

                </ButtonContainer>


            );


        case theme.buttons.buttonsTheme.secondary:
        default:
            return (
                <ButtonSecondary {...props} onPress={handleOnPress}>

                    {renderText(theme.colors.pinktheme.pink)}
                </ButtonSecondary>


            )
    }

};
export default Button;