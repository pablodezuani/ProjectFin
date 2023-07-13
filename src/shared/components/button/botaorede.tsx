import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../text/text';

interface ButtonWithIconProps {
  title: string;
  iconName: string;
  onPress: () => void;
  style?: object;
}

const ButtonWithIcon = ({ title, iconName, onPress, style }: ButtonWithIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor: '#edfefe', margin: 5, height: 45, width: 300 ,borderColor:'#8C2A96'}, style]}>
      <Icon name={iconName} size={25} color="#0f0050" />
      <Text style={{alignItems:'center',textAlign:'center'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
