import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full px-4 justify-center items-center min-h-[90vh]'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[130px] h-[84px]'
          />
          <Image
            source={images.cards}
            resizeMode='contain'
            className='max-w-[380px] h-[300px] w-full'
          />

          <View className='mt-5 relative'>
            <Text className='text-white text-3xl font-pbold capitalize text-center'>
              Discover endless possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode='contain'
              className='absolute -bottom-2 -right-8 w-[136px] h-[15px]'
            />
          </View>

          <CustomButton
            text='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyle='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar style='light' backgroundColor='#161622' />
    </SafeAreaView>
  );
}
