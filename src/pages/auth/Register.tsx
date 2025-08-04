import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../utils/types';

type RegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type RegisterScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

function Register({ navigation }: { navigation: RegisterScreenProps }) {
  const [data, setData] = useState<RegisterData>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  return (
    <View className="flex justify-center h-screen p-6">
      <View className="bg-white p-4 rounded">
        <Text className="text-3xl text-center font-bold m-4 underline text-black">
          Register
        </Text>

        <View className="mb-6">
          <Text className="text-base font-medium text-black mb-2">
            Enter Your Name
          </Text>
          <View className="flex flex-row gap-3 w-full">
            <TextInput
              className="flex-1 border border-gray-400 rounded-lg px-4 py-3 text-base text-black"
              placeholder="First Name"
              value={data?.first_name}
              onChangeText={text => setData({ ...data, first_name: text })}
            />
            <TextInput
              className="flex-1 border border-gray-400 rounded-lg px-4 py-3 text-base text-black"
              placeholder="Last Name"
              value={data?.last_name}
              onChangeText={text => setData({ ...data, last_name: text })}
            />
          </View>
        </View>
        <View className="mb-6">
          <Text className="text-base font-medium text-black mb-2">
            Enter Email Address
          </Text>
          <TextInput
            className="border border-gray-400 rounded-lg px-4 py-3 text-base text-black"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
            value={data?.email}
            onChangeText={text => setData({ ...data, email: text })}
          />
        </View>

        <View className="mb-6">
          <Text className="text-base font-medium text-black mb-2">
            Enter Password
          </Text>
          <TextInput
            className="border border-gray-400 rounded-lg px-4 py-3 text-base text-black"
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#999"
            value={data?.password}
            onChangeText={text => setData({ ...data, password: text })}
          />
        </View>

        <TouchableOpacity
          className="bg-blue-600 py-4 rounded-lg mt-2 active:bg-blue-700"
          onPress={() => console.log('Login pressed', data)}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Register
          </Text>
        </TouchableOpacity>

        <View className="mt-4 flex-row gap-1 justify-center">
          <Text className="text-black">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-blue-600">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Register;
