import { RouteProp, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Share,
  ScrollView,
} from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import ReviewCard from '../../components/home/ReviewCard';
import { reviews } from '../../utils/data';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type CarDetailsRouteProp = RouteProp<RootStackParamList, 'CarDetails'>;
type CarDetailsScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

export default function CarDetails({
  navigation,
}: {
  navigation: CarDetailsScreenProps;
}) {
  const route = useRoute<CarDetailsRouteProp>();
  const { car } = route.params;
  const [activeTab, setActiveTab] = useState<'about' | 'review'>('about');

  const handleShare = async () => {
    const shareText = `Check out this car: ${car.name}`;
    try {
      await Share.share({
        message: shareText,
        title: 'Share Car Details',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Top Bar */}
      <View className="p-4 bg-white flex-row justify-between items-center shadow-md">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-gray-100"
        >
          <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        <Text className="text-xl font-bold">Car Details</Text>

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

      {/* Fixed Content */}
      <View>
        {/* Car Image */}
        <Image
          source={{
            uri: 'https://di-uploads-pod1.dealerinspire.com/earlstewarttoyota/uploads/2025/01/img11.jpg',
          }}
          className="w-full h-64"
          resizeMode="cover"
        />

        {/* Car Details */}
        <View className="p-6">
          {/* Car Name & Rating */}
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-2xl font-bold">{car.name}</Text>
            <View className="flex-row items-center gap-1">
              <MaterialDesignIcons name="star" size={20} color="#facc15" />
              <Text className="text-base text-gray-800 font-semibold">
                {car.ratings}
              </Text>
            </View>
          </View>

          {/* Info Icons */}
          <View className="flex-row justify-around mb-4 bg-white py-3 rounded-xl shadow-sm">
            <View className="items-center">
              <MaterialDesignIcons name="steering" size={26} color="#2563eb" />
              <Text className="mt-1 text-gray-700 capitalize">{car.type}</Text>
            </View>
            <View className="items-center">
              <MaterialDesignIcons
                name="gas-station"
                size={26}
                color="#2563eb"
              />
              <Text className="mt-1 text-gray-700 capitalize">
                {car.fuel_type}
              </Text>
            </View>
            <View className="items-center">
              <MaterialDesignIcons name="car-seat" size={26} color="#2563eb" />
              <Text className="mt-1 text-gray-700">
                {car.number_of_seats} Seats
              </Text>
            </View>
          </View>

          {/* Tabs */}
          <View className="flex-row justify-around mb-4 bg-blue-50 p-1 rounded-xl">
            {(['about', 'review'] as const).map(tab => (
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

          {/* Scrollable Tab Content */}
        </View>
      </View>

      <View style={{ flex: 1 }} className='mx-6 mb-20'>
        {activeTab === 'about' && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="space-y-4">
              {/* Partner */}
              <View className="p-4 bg-white rounded-xl shadow-sm">
                <Text className="text-lg font-semibold mb-3">
                  Rental Partner
                </Text>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row gap-3 items-center">
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('RentalPartner', { id: 123 })
                      }
                    >
                      <Image
                        source={{
                          uri: 'https://icon-library.com/images/small-user-icon/small-user-icon-13.jpg',
                        }}
                        className="h-12 w-12 rounded-full"
                      />
                    </TouchableOpacity>
                    <View>
                      <Text className="text-base font-medium">
                        Elite Car Rentals
                      </Text>
                      <Text className="text-gray-600">+91 98765 43210</Text>
                    </View>
                  </View>
                  <View className="flex-row gap-3">
                    <TouchableOpacity
                      className="p-2 rounded-full bg-gray-100"
                      onPress={() => Linking.openURL('tel:+919876543210')}
                    >
                      <MaterialDesignIcons name="phone" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="p-2 rounded-full bg-gray-100"
                      onPress={() => Linking.openURL('sms:+919876543210')}
                    >
                      <MaterialDesignIcons name="message" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Description */}
              <View>
                <Text className="text-lg font-semibold mb-1 mt-4">
                  Description
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  The {car.name} is a comfortable and reliable vehicle with a
                  sleek design and powerful engine. Perfect for city drives and
                  long road trips. Enjoy advanced safety features and modern
                  technology.
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
        {activeTab === 'review' && (
          <ScrollView>
            <View className="space-y-4">
              {reviews.map((item, index: number) => (
                <View key={index} className="mb-3">
                  <ReviewCard review={item} />
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>

      {/* Sticky Footer */}
      <View className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-md rounded-t-2xl flex-row justify-between items-center">
        <View>
          <Text className="text-sm font-semibold text-gray-500">Price</Text>
          <View className="flex-row items-end gap-1">
            <Text className="text-xl font-bold text-blue-600">
              Rs. {car.price.toLocaleString()}
            </Text>
            <Text className="text-sm text-blue-600">/hr</Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-blue-600 px-12 py-3 rounded-xl"
          onPress={() => navigation.navigate('BookCar', { car })}
        >
          <Text className="text-white text-base font-bold">Book Now</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}
