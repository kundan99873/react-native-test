import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MyWalletScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyWallet'
>;

export default function MyWallet({
  navigation,
}: {
  navigation: MyWalletScreenProp;
}) {
  const transactionHistory = [
    {
      id: '1',
      amount: 50.0,
      date: '2023-10-01',
      time: '10:00 AM',
      type: 'credit',
      description: 'Added money',
    },
    {
      id: '2',
      amount: 20.0,
      date: '2023-10-02',
      time: '11:00 AM',
      type: 'debit',
      description: 'Paid for service',
    },
    {
      id: '3',
      amount: 30.0,
      date: '2023-10-03',
      time: '12:00 PM',
      type: 'credit',
      description: 'Refund received',
    },
  ];

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

      <View className="p-4 bg-blue-100 rounded-lg shadow-md m-4">
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="font-medium">Wallet Balance</Text>
            <Text className="text-2xl font-bold">Rs. 100.00</Text>
          </View>
          <MaterialDesignIcons name="wallet" size={30} color="#000" />
        </View>
        <TouchableOpacity
          className="mt-4 p-3 bg-blue-500 rounded-lg"
          onPress={() => navigation.navigate('AddWallet')}
        >
          <Text className="text-white text-center font-semibold">
            Add Money
          </Text>
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-lg font-semibold mb-2">Transaction History</Text>
        {/* Transaction items would go here */}
        {transactionHistory.map(transaction => (
          <View
            key={transaction.id}
            className={`p-3 mb-3 rounded-lg flex flex-row justify-between items-center ${
              transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <View>
              <Text className="font-medium">{transaction.description}</Text>
              <Text className="text-sm text-gray-600">
                {transaction.date} | {transaction.time}
              </Text>
            </View>
            <Text className="text-lg font-bold">
              {transaction.type === 'credit' ? '+' : '-'} Rs.{' '}
              {transaction.amount.toFixed(2)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
