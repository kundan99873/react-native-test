import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, Share, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RentalPartnerRouteProp = RouteProp<RootStackParamList, 'RentalPartner'>;
type RentalPartnerScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'RentalPartner'
>;

export default function RentalPartner({
  navigation,
}: {
  navigation: RentalPartnerScreenProps;
}) {
  const route = useRoute<RentalPartnerRouteProp>();
  const { id } = route.params;
  console.log({ id });

  const [activeTab, setActiveTab] = React.useState<'about' | 'review' | 'cars'>('cars');

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this app!',
        title: 'Check out this app!',
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View className="sticky top-0 z-10 px-4 pt-10 pb-4 bg-white flex-row justify-between items-center shadow-md">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-gray-100"
        >
          <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        <Text className="text-xl font-bold">Partner Details</Text>

        <View className="flex-row gap-3">
          <TouchableOpacity className="p-2 rounded-full bg-gray-100">
            <MaterialDesignIcons name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-2 rounded-full bg-gray-100"
            onPress={handleShare}
          >
            <MaterialDesignIcons name="share-variant" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-8 mx-4 border-b border-gray-400 pb-4">
        <View className="flex flex-row items-center gap-5  rounded-full">
          <Image
            source={{
              uri: 'https://icon-library.com/images/small-user-icon/small-user-icon-13.jpg',
            }}
            className="h-40 w-40 rounded-full"
          />
          <View className="ml-4">
            <Text className="text-2xl font-bold">Kundan Chaudhary</Text>
            <Text className="font-medium">Mumbai, India</Text>
            <Text className="font-medium">+91 98765 43210</Text>
          </View>
        </View>
      </View>

      <View className="flex flex-row justify-between items-center px-4 py-2 mt-4">
        <View className="flex items-center justify-between gap-2">
          <View className="flex flex-row items-center justify-center px-4 py-2 bg-gray-300 h-20 w-20 rounded-full">
            <MaterialDesignIcons name="car" size={32} color="#084f8d" />
          </View>
          <Text className="text-lg font-bold">Customers</Text>
        </View>
        <View className="flex items-center justify-between gap-2">
          <View className="flex flex-row items-center justify-center px-4 py-2 bg-gray-300 h-20 w-20 rounded-full">
            <MaterialDesignIcons name="car" size={32} color="#084f8d" />
          </View>
          <Text className="text-lg font-bold">Cars</Text>
        </View>
        <View className="flex items-center justify-between gap-2">
          <View className="flex flex-row items-center justify-center px-4 py-2 bg-gray-300 h-20 w-20 rounded-full">
            <MaterialDesignIcons name="star" size={32} color="#084f8d" />
          </View>
          <Text className="text-lg font-bold">Ratings</Text>
        </View>
        <View className="flex items-center justify-between gap-2">
          <View className="flex flex-row items-center justify-center px-4 py-2 bg-gray-300 h-20 w-20 rounded-full">
            <MaterialDesignIcons name="message" size={32} color="#084f8d" />
          </View>
          <Text className="text-lg font-bold">Reviews</Text>
        </View>
      </View>

      <View className="flex-row justify-around my-4 bg-blue-100 p-1 rounded-xl">
        {(['cars', 'about', 'review'] as const).map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl ${
              activeTab === tab ? 'bg-blue-600' : ''
            }`}
          >
            <Text
              className={`text-sm font-medium ${
                activeTab === tab ? 'text-white' : 'text-blue-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
