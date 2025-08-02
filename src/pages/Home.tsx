import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View>
      <Text className="text-center underline text-lg">Home Screen</Text>
      <MaterialDesignIcons color={'red'} name="home-outline" />
    </View>
  );
}

export default HomeScreen;
