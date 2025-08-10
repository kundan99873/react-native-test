import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import type { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  Share,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  ScrollView,
  Text,
} from 'react-native-gesture-handler';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ReviewCard from '../../components/home/ReviewCard';
import { carList, reviews } from '../../utils/data';
import CarCards from '../../components/home/CarCards';

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

  const [activeTab, setActiveTab] = React.useState<'about' | 'review' | 'cars'>(
    'cars',
  );

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

  type rentalTypes = {
    name: string;
    value: number;
    icon: MaterialDesignIconsIconName;
  };

  const rentalDetails: rentalTypes[] = [
    { name: 'customers', value: 345, icon: 'car' },
    { name: 'cars', value: 345, icon: 'car' },
    { name: 'ratings', value: 345, icon: 'star' },
    { name: 'reviews', value: 345, icon: 'message' },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Fixed Section */}
      <View>
        {/* Top Bar */}
        <View className="sticky top-0 z-10 px-4 pt-4 pb-4 bg-white flex-row justify-between items-center shadow-md">
          {/* back btn */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full bg-gray-100"
          >
            <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>

          <Text className="text-xl font-bold">Partner Details</Text>

          <View className="flex-row gap-3">
            <TouchableOpacity className="p-2 rounded-full bg-gray-100">
              <MaterialDesignIcons
                name="heart-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2 rounded-full bg-gray-100"
              onPress={handleShare}
            >
              <MaterialDesignIcons
                name="share-variant"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile */}
        <View className="mx-4 border-b border-gray-400 py-2">
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

        {/* Stats */}
        <View className="flex flex-row justify-between items-center px-4 py-2 mt-4 mx-5">
          {rentalDetails.map(item => (
            <View
              key={item.name}
              className="flex items-center justify-between gap-1"
            >
              <View className="flex flex-row items-center justify-center bg-gray-300 h-12 w-12 rounded-full">
                <MaterialDesignIcons
                  name={item.icon}
                  size={28}
                  color="#007DFC"
                />
              </View>
              <View className="flex justify-center items-center">
                <Text className="text-base p-0 font-medium text-[#007DFC]">{item.value}</Text>
                <Text className="text-xs p-0 text-black font-medium capitalize">{item.name}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Tabs */}
        <View className="flex-row justify-around my-4 bg-blue-100 p-1 rounded-xl">
          {(['cars', 'about', 'review'] as const).map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl ${
                activeTab === tab ? 'bg-[#007DFC]' : ''
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  activeTab === tab ? 'text-white' : 'text-[#007DFC]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Scrollable Content */}
      <View style={{ flex: 1 }}>
        {activeTab === 'cars' && (
          <ScrollView>
            <View className="mx-2 mb-10">
              {carList.map(item => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('CarDetails', { car: item })
                  }
                  key={item.id}
                >
                  <CarCards carDetails={item} />
                </Pressable>
              ))}
            </View>
          </ScrollView>
        )}

        {activeTab === 'review' && (
          <ScrollView>
            {reviews.map((item, index: number) => (
              <View key={index} className="mb-3 mx-3">
                <ReviewCard review={item} />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </GestureHandlerRootView>
  );
}
