import React, { useRef } from 'react';
import { View } from 'react-native';

type FilterOptions = {
  setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
  closePanel: () => void;
};

export default function HomeFilter({
  setFilterOptions,
  closePanel,
}: FilterOptions) {
  return <View className="bg-white"></View>;
}
