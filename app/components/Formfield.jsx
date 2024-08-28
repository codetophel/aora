import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../../constants';

const Formfield = ({
  text,
  otherStyles,
  value,
  placeholder,
  handleChangeText,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{text}</Text>
      <View className='border-2 border-black-200 w-full flex-row rounded-2xl h-16 px-4 focus:border-secondary items-center'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={text === 'Password' && !showPassword}
        />

        {text === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Formfield;
