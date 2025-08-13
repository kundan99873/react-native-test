import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';

export default function MyProfile() {
  type ProfileProps = {
    name: string;
    email: string;
    phone_number: string;
    dob: string;
    gender: string;
  };
  const [data, setData] = useState<ProfileProps>({
    name: '',
    email: '',
    phone_number: '',
    dob: '',
    gender: '',
  });
  return (
    <View>
      <View className="flex justify-center items-center mt-4">
        <Image
          source={{
            uri: 'https://icon-library.com/images/small-user-icon/small-user-icon-13.jpg',
          }}
          className="h-40 w-40 rounded-full"
        />
        <Text className="font-medium">Kundan Chaudhary</Text>
      </View>

      <View className="mx-6 mb-4 mt-14">
        <Text className="text-base font-medium text-black mb-2">Name</Text>
        <TextInput
          className="border border-gray-400 rounded-lg px-4 py-3 text-base text-black bg-[#F6F6F6]"
          placeholder="Name"
          placeholderTextColor="#999"
          value={data?.name}
          onChangeText={text => setData({ ...data, name: text })}
        />
      </View>
      <View className="mx-6 mb-4">
        <Text className="text-base font-medium text-black mb-2">
          Enter Email Address
        </Text>
        <TextInput
          className="border border-gray-400 rounded-lg px-4 py-3 text-base text-black bg-[#F6F6F6]"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
          value={data?.email}
          onChangeText={text => setData({ ...data, email: text })}
        />
      </View>
      <View className="mx-6 mb-4">
        <Text className="text-base font-medium text-black mb-2">
          Enter Phone Number
        </Text>
        <TextInput
          className="border border-gray-400 rounded-lg px-4 py-3 text-base text-black bg-[#F6F6F6]"
          placeholder="Phone Number"
          keyboardType="phone-pad"
          autoCapitalize="none"
          returnKeyType='done'
          maxLength={10}
          placeholderTextColor="#999"
          value={data?.phone_number}
          onChangeText={text => setData({ ...data, phone_number: text })}
        />
      </View>
    </View>
  );
}

