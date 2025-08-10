import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../utils/types';

type LoginData = {
  email: string;
  password: string;
};

type LoginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

function Login({ navigation }: { navigation: LoginScreenProps }) {
  const [data, setData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    console.log(data);
    navigation.navigate('Drawer');
  };

  return (
    <View className="flex justify-center h-screen p-6">
      <View className="bg-white p-4 rounded">
        <Text className="text-3xl text-center font-bold m-4 underline text-black">
          Login
        </Text>

        <View className="mb-6">
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

        <View className="mb-6">
          <Text className="text-base font-medium text-black mb-2">
            Enter Password
          </Text>
          <TextInput
            className="border border-gray-400 rounded-lg px-4 py-3 bg-[#F6F6F6] text-base text-black"
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#999"
            value={data?.password}
            onChangeText={text => setData({ ...data, password: text })}
          />
        </View>

        <TouchableOpacity
          className="bg-black py-4  rounded-lg mt-4 active:bg-black"
          onPress={handleLogin}
        >
          <Text className="text-white text-center text-2xl font-semibold">
            Login
          </Text>
        </TouchableOpacity>

        <View className="mt-4 flex-row justify-end">
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text className="text-blue-600">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex-row gap-1 justify-center">
          <Text className="text-black">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-blue-600">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
