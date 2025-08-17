import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Text, View } from 'react-native';

export default function NoInternetConnection() {
  return (
    <View className="h-screen flex justify-center gap-8 items-center bg-[#f6f4f4]">
      <MaterialDesignIcons name="wifi-off" size={50} color="#000" />
      <View >
        <Text className="text-2xl font-bold text-center mb-2">
          No Internet Connection
        </Text>
        <Text className="text-center text-lg font-medium">
          Please Check Your Internet Connection {'\n'} and Try Again
        </Text>
      </View>
    </View>
  );
}
