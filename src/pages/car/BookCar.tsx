import { RouteProp, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Linking,
  Share,
} from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { HomeCarCardDetails, RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

type CarDetailsRouteProp = RouteProp<RootStackParamList, 'CarDetails'>;
type CarDetailsScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

export default function BookCar({
  navigation,
}: {
  navigation: CarDetailsScreenProps;
}) {
  const route = useRoute<CarDetailsRouteProp>();
  const { car } = route.params;
  const [activeTab, setActiveTab] = useState<'about' | 'review'>('about');
  const [driverType, setDriverType] = useState<'self_driver' | 'with_driver'>(
    'self_driver',
  );
  const [date, setDate] = useState(new Date());
  const [returnDate, setReurnDate] = useState(new Date());

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

  // State

  // Open Date Picker
  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: 'date',
      is24Hour: true,
      onChange: (_, selectedDate) => {
        if (selectedDate) setDate(selectedDate);
      },
    });
  };

  // Open Time Picker
  const openTimePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      mode: 'time',
      is24Hour: true,
      onChange: (_, selectedTime) => {
        if (selectedTime) setDate(selectedTime);
      },
    });
  };

  return (
    <View className="flex-1 bg-gray-100">
      {/* Top Bar */}
      <View className="sticky top-0 z-10 p-4 bg-white flex-row justify-between items-center shadow-md">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-gray-100"
        >
          <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        <Text className="text-xl font-bold">Book Car</Text>

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

      {/* Scrollable Content */}
      <ScrollView className="mb-28">
        <Image
          source={{
            uri: 'https://di-uploads-pod1.dealerinspire.com/earlstewarttoyota/uploads/2025/01/img11.jpg',
          }}
          className="w-full h-64"
          resizeMode="cover"
        />

        {/* Details */}
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

          <Text className="text-gray-700 mb-4">Book a Car</Text>
          <View className="mb-4">
            <Text className="text-black text-xl font-medium mb-2">
              Rent Type
            </Text>
            <View className="flex justify-center items-center flex-row gap-4">
              <TouchableOpacity
                className={`${
                  driverType === 'self_driver' ? 'bg-[#236BFE]' : 'bg-[#aaa8a8]'
                } px-12 py-3 rounded-full w-44`}
                onPress={() => setDriverType('self_driver')}
              >
                <Text className="text-white text-base font-bold">
                  Self Driver
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`${
                  driverType === 'with_driver' ? 'bg-[#236BFE]' : 'bg-[#aaa8a8]'
                } px-12 py-3 rounded-full w-44`}
                onPress={() => setDriverType('with_driver')}
              >
                <Text className="text-white text-base font-bold">
                  With Driver
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="mb-4">
            <Text className="text-black text-xl font-medium mb-2">
              Pick Up Date and Time
            </Text>
            <View className="flex flex-row gap-4 justify-center">
              <TouchableOpacity
                onPress={openDatePicker}
                className="bg-blue-500 w-44 px-4 py-2 rounded-full flex flex-row items-center justify-between"
              >
                <Text className="text-white font-semibold text-center py-1">{dayjs(date).format("MMM D, YYYY")}</Text>
                <MaterialDesignIcons name="calendar" size={20} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={openTimePicker}
                className="bg-blue-500 w-44 px-4 py-1 rounded-full flex flex-row items-center justify-between"
              >
                <Text className="text-white text-center font-semibold py-2">{dayjs(date).format("hh:mm")}</Text>
                <MaterialDesignIcons name="clock" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

          </View>
          <View className="mb-4">
            <Text className="text-black text-xl font-medium mb-2">
              Return Date and Time
            </Text>
            <View className="flex flex-row gap-4 justify-center">
              <TouchableOpacity
                onPress={openDatePicker}
                className="bg-blue-500 w-44 px-4 py-2 rounded-full flex flex-row items-center justify-between"
              >
                <Text className="text-white font-semibold text-center py-1">{dayjs(date).format("MMM D, YYYY")}</Text>
                <MaterialDesignIcons name="calendar" size={20} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={openTimePicker}
                className="bg-blue-500 w-44 px-4 py-1 rounded-full flex flex-row items-center justify-between"
              >
                <Text className="text-white text-center font-semibold py-2">{dayjs(date).format("hh:mm")}</Text>
                <MaterialDesignIcons name="clock" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <View className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-md rounded-t-2xl flex-row justify-between items-center">
        <TouchableOpacity className="bg-[#236BFE] w-full py-3 rounded-full">
          <Text className="text-white text-base font-bold text-center">Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
