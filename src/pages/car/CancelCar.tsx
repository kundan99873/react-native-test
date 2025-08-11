import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

type CancelBookingRouteProp = RouteProp<RootStackParamList, 'CancelBooking'>;
type CancelBookingScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'CancelBooking'
>;

export default function CancelCar({
  navigation,
}: {
  navigation: CancelBookingScreenProp;
}) {
  const route = useRoute<CancelBookingRouteProp>();
  const cancellationReasons: string[] = [
    'Schedule Change',
    'Book Another Car',
    'Found a Better Alternative',
    'Want to Book Another Car',
    'I Found a Better Price',
    'Other',
  ];

  const [selectedReason, setSelectedReason] = useState<number | null>(null);
  const [reason, setReason] = useState<string>('');
  return (
    <View className="relative h-screen">
      <View className="sticky top-0 z-10 p-4 bg-white flex-row justify-center items-center shadow-md">
        <Text className="text-xl font-bold">Cancel Booking</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-2 rounded-full bg-gray-100 absolute top-2 left-5 z-50"
      >
        <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View className="mx-6 mt-4">
        <Text className="text-sm font-medium">
          Please select reason for cancellations:
        </Text>
        <View className="border-b pb-8 border-[#808080]">
          {cancellationReasons.map((item: string, index: number) => (
            <TouchableOpacity
              className="flex flex-row items-center gap-2 mt-3"
              key={index}
              onPress={() => setSelectedReason(index)}
            >
              <View className="h-6 w-6 rounded-full border-2 border-[#236BFE] justify-center items-center">
                {selectedReason === index && (
                  <View className="h-3 w-3 bg-[#236BFE] rounded-full"></View>
                )}
              </View>
              <Text className="text-black">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-5">
          <Text>Reasons</Text>
          <TextInput
            className="border border-[#808080] rounded-lg"
            numberOfLines={4}
            multiline
            value={reason}
            onChangeText={text => setReason(text)}
          />
        </View>
      </View>
      <View className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-md rounded-t-2xl flex-row justify-between items-center">
        <TouchableOpacity className="bg-[#236BFE] w-full py-3 rounded-full">
          <Text className="text-white text-base font-bold text-center">
            Cancel Booking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
