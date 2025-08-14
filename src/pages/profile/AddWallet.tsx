import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MyWalletScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddWallet'
>;

export default function AddWallet({
  navigation,
}: {
  navigation: MyWalletScreenProp;
}) {
  const addWalletAmount = [100, 200, 500, 1000, 2000, 5000];
  const [selectedAmount, setselectedAmount] = useState<number | null>(null);
  return (
    <View>
      <View>
        <View className="sticky top-0 z-10 p-4 bg-white flex-row justify-center items-center shadow-md">
          <Text className="text-xl font-bold">My Wallet</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-gray-100 absolute top-2 left-5 z-50"
        >
          <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View className="p-4 bg-blue-100 rounded-lg shadow-md mx-4 my-6">
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="font-medium">Wallet Balance</Text>
            <Text className="text-2xl font-bold">Rs. 100.00</Text>
          </View>
          <MaterialDesignIcons name="wallet" size={30} color="#000" />
        </View>
        <Text className="mt-4 text-gray-600">
          Add money to your wallet for quick and easy payments.
        </Text>
        <View className="mt-6 flex flex-wrap flex-row">
          {addWalletAmount.map((amount, index) => (
            <TouchableOpacity
              key={index}
              className={`w-[30%] m-[1.5%] p-3  bg-white rounded-lg shadow-md mb-3 ${
                selectedAmount === amount ? 'border-2 border-blue-500' : ''
              }`}
              onPress={() => setselectedAmount(amount)}
            >
              <Text className="text-lg text-center font-semibold">
                Rs. {amount}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          className="mt-4 p-3 bg-blue-500 rounded-lg"
          // onPress={() => navigation.navigate('AddMoney')}
        >
          <Text className="text-white text-lg text-center font-semibold">
            Add Money
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
