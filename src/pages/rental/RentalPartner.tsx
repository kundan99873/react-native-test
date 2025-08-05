import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert, Share, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RentalPartnerRouteProp = RouteProp<RootStackParamList, 'RentalPartner'>;
type RentalPartnerScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'RentalPartner'
>;

export default function RentalPartner({
  navigation,
}: {
  navigation: RentalPartnerScreenProps;
}) {
  const route = useRoute<RentalPartnerRouteProp>();
  const { id } = route.params;
  console.log({ id });
  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this app!',
        title: 'Check out this app!',
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View className="sticky top-0 z-10 px-4 pt-10 pb-4 bg-white flex-row justify-between items-center shadow-md">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-gray-100"
        >
          <MaterialDesignIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>

        <Text className="text-xl font-bold">Car Details</Text>

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
    </View>
  );
}
