import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../utils/types';

type IntroScreenProps = NativeStackNavigationProp<RootStackParamList, 'Intro'>;

function IntroScreen({ navigation }: { navigation: IntroScreenProps }) {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  const phoneHeight = height - insets.top - insets.bottom;
  return (
    <View>
      <ImageBackground resizeMode='cover'
        source={{
          uri: 'https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        className="object-cover"
      >
        <View className="flex justify-between h-full border-2">
          <View className="p-8">
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
              }}
              className="w-[60px] h-6"
            />
          </View>
          <View className="bg-white p-8">
            <Text className="text-3xl font-extrabold">Get Started With Uber</Text>
            <TouchableOpacity className="bg-black py-4  rounded-lg mt-4 active:bg-black" onPress={() => navigation.navigate("Login")}>
              <Text className="text-white text-center text-2xl font-semibold">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default IntroScreen;
