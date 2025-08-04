import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import HomeFilter from '../components/home/Filter';
import { carList } from '../utils/data';
import { HomeCarCardDetails, RootStackParamList } from '../utils/types';
import CarCards from '../components/home/CarCards';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Drawer'>;
const HomeScreen = ({ navigation }: { navigation: HomeScreenProps }) => {
  const [search, setSearch] = useState<string>('');
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<string[]>([
    'test',
    'text1',
    'noticed',
  ]);

  const slideAnim = useRef<Animated.Value>(
    new Animated.Value(SCREEN_HEIGHT),
  ).current;
  const overlayOpacity = useRef<Animated.Value>(new Animated.Value(0)).current;

  const openPanel = (): void => {
    setIsPanelOpen(true);
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT * 0.5,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0.5,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const closePanel = (): void => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start(() => setIsPanelOpen(false));
  };

  const removeFilter = (itemToRemove: string) => {
    setFilterOptions(prev => prev.filter(item => item !== itemToRemove));
  };

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingBottom: 300 }}
      >
        <View className="m-6 z-10">
          <View className="flex-row gap-4 justify-center items-center">
            <TextInput
              className="border border-gray-400 w-[90%] rounded-lg px-4 py-2 text-base text-black"
              placeholder="Search"
              keyboardType="default"
              autoCapitalize="none"
              placeholderTextColor="#999"
              value={search}
              onChangeText={(text: string): void => setSearch(text)}
            />
            <TouchableOpacity
              className="p-3 rounded-full border border-gray-300 bg-white"
              onPress={openPanel}
            >
              <MaterialDesignIcons name="filter" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row flex-wrap gap-2 mx-6">
          {filterOptions.map((item: string, index: number) => (
            <View
              key={index}
              className="relative px-3 py-2 pr-8 bg-blue-100 rounded-full"
            >
              <Text className="text-blue-700 font-medium capitalize">
                {item}
              </Text>
              <TouchableOpacity
                className="absolute right-2 top-2"
                onPress={() => removeFilter(item)}
              >
                <MaterialDesignIcons
                  name="close-circle"
                  size={16}
                  color="#3B82F6"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View className="mx-6">
          {carList.map((item: HomeCarCardDetails) => (
            <Pressable
              onPress={() => navigation.navigate('CarDetails', { car: item })}
              key={item.id}
            >
              <CarCards carDetails={item} />
            </Pressable>
          ))}
        </View>

        {isPanelOpen && (
          <Pressable
            onPress={closePanel}
            className="absolute top-0 bottom-0 left-0 right-0 z-10"
          >
            <Animated.View
              pointerEvents="box-only"
              style={{ opacity: overlayOpacity }}
              className="absolute top-0 bottom-0 left-0 right-0 bg-black"
            />
          </Pressable>
        )}

        <Animated.View
          style={{ top: slideAnim }}
          className="absolute left-0 right-0 h-1/2 bg-white border-t border-gray-200 rounded-t-2xl p-5 z-20"
        >
          <HomeFilter
            setFilterOptions={setFilterOptions}
            closePanel={closePanel}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
