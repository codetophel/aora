import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({
  text,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`rounded-xl bg-secondary min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50': ''}`}
      onPress={handlePress}
    >
      <View>
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
