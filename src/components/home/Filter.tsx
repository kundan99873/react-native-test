import React, { useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type FilterOptions = {
  setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
  closePanel: () => void;
};

export default function HomeFilter({
  setFilterOptions,
  closePanel,
}: FilterOptions) {
  return (
    <View className="bg-white relative h-full">
      
      <View className="absolute bottom-14 left-0 right-0 bg-white p-4 shadow-md rounded-t-2xl flex-row gap-3 justify-between items-center">
        <TouchableOpacity className="bg-[#b1b5bc] w-1/2 py-3 rounded-full">
          <Text className="text-white text-base font-bold text-center">
            Reset Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#236BFE] w-1/2  py-3 rounded-full">
          <Text className="text-white text-base font-bold text-center">
            Apply Filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
