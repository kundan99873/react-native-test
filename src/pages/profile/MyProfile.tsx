import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../utils/types';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import DropDownPicker from 'react-native-dropdown-picker';

type RentalPartnerRouteProp = RouteProp<RootStackParamList, 'RentalPartner'>;
type RentalPartnerScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MyProfile'
>;

export default function MyProfile({
  navigation,
}: {
  navigation: RentalPartnerScreenProps;
}) {
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

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]);
  return (
    <View>
      <View className="relative">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-gray-100 absolute top-2 left-4 z-20"
        >
          <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View className="sticky top-0 z-10 px-4 pt-4 pb-4 bg-white flex-row justify-center items-center shadow-md">
          <Text className="text-xl font-bold">My Profile</Text>
        </View>
      </View>
      <View className="flex justify-center items-center mt-4 relative">
        <Image
          source={{
            uri: 'https://icon-library.com/images/small-user-icon/small-user-icon-13.jpg',
          }}
          className="h-40 w-40 rounded-full"
        />
        <View className="absolute bottom-0 left-1/2">

        <MaterialDesignIcons
          name="account-edit"
          size={34}
          color="#000"
        />
        </View>
      </View>

      <View className="mx-6 mb-4 mt-10">
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
          returnKeyType="done"
          maxLength={10}
          placeholderTextColor="#999"
          value={data?.phone_number}
          onChangeText={text => setData({ ...data, phone_number: text })}
        />
      </View>
      <View className="mx-6 mb-4 z-50">
        <Text className="text-base font-medium text-black mb-2">
          Select Gender
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select Gender"
          style={{ backgroundColor: '#f6f6f6', borderColor: '#ccc' }}
          dropDownContainerStyle={{ backgroundColor: '#f6f6f6' }}
        />
      </View>

      <TouchableOpacity>
        <View className="mx-auto m-4 w-[90%] bg-[#236BFE] border border-gray-400 rounded-lg px-4 py-3 flex-row justify-center items-center">
          <Text className="text-lg font-semibold text-white">Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


// https://www.youtube.com/watch?v=5ESPY2MBQy0