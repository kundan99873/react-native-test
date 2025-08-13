import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../utils/types';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Drawer'
>;
export default function ProfileScreen({
  navigation,
}: {
  navigation: ProfileScreenProps;
}) {
  const profileOptions = [
    {
      icon: '',
      title: 'My Profile',
      navigation: 'Profile',
    },
    {
      icon: 'wallet',
      title: 'My Wallet',
      navigation: 'Profile',
    },
    {
      icon: 'order-bool-ascending',
      title: 'My Bookings',
      navigation: 'Profile',
    },
    {
      icon: '',
      title: 'Settings',
      navigation: 'Profile',
    },
    {
      icon: '',
      title: 'Privacy Policy',
      navigation: 'Profile',
    },
    {
      icon: '',
      title: 'Invites Friends',
      navigation: 'Profile',
    },
  ];
  return (
    <View className="px-4 bg-white h-screen">
      <View className="flex justify-center items-center mt-4">
        <Image
          source={{
            uri: 'https://icon-library.com/images/small-user-icon/small-user-icon-13.jpg',
          }}
          className="h-40 w-40 rounded-full"
        />
        <Text className="font-medium">Kundan Chaudhary</Text>
      </View>

      <View className="mt-6">
        {profileOptions.map(item => {
          return (
            <TouchableOpacity
              key={item.title}
              onPress={() => {
                navigation.navigate('MyProfile');
              }}
              className="border-b border-[#F4F6F6] pb-2"
            >
              <View className="flex flex-row items-center justify-between px-2">
                <View className="flex flex-row gap-5 items-center mt-4">
                  <MaterialDesignIcons name="wallet" size={20} />
                  <Text className="text-lg font-medium">{item.title}</Text>
                </View>
                <MaterialDesignIcons name="arrow-right" size={20} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
