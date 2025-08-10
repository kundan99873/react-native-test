// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import React, { useRef, useState } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

// type FilterOptions = {
//   setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
//   closePanel: () => void;
// };

// export default function HomeFilter({
//   setFilterOptions,
//   closePanel,
// }: FilterOptions) {
//   const carTypes: string[] = [
//     'SUV',
//     'Sedan',
//     'Hatchback',
//     'Convertible',
//     'Truck',
//     'Van',
//   ];

//   const [priceRange, setPriceRange] = useState([0, 200000]);
//   return (
//     <View className="bg-white relative h-full mx-2">
//       <Text className="text-2xl font-bold text-center p-4">Filter</Text>
//       <View>
//         <Text className="text-lg font-medium mb-2">Type</Text>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
//         >
//           {carTypes.map((type, index) => (
//             <TouchableOpacity
//               key={index}
//               className="bg-gray-200 px-4 py-2 rounded-full"
//               // onPress={() => {
//               //   setFilterOptions(prev => [...prev, type]);
//               //   closePanel();
//               // }}
//             >
//               <Text className="text-black font-medium">{type}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>

//       <View>
//         <Text className="text-lg font-medium mb-2 mt-4">Fuel Type</Text>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
//         >
//           {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map((fuel, index) => (
//             <TouchableOpacity
//               key={index}
//               className="bg-gray-200 px-4 py-2 rounded-full"
//               // onPress={() => {
//               //   setFilterOptions(prev => [...prev, fuel]);
//               //   closePanel();
//               // }}
//             >
//               <Text className="text-black font-medium">{fuel}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>

//       <View>
//         <Text className='text-lg font-medium mt-2'>Price</Text>
//         <View className="mx-6">
//           <MultiSlider
//             values={priceRange}
//             min={0}
//             max={20000}
//             step={1000}
//             onValuesChange={values => setPriceRange(values)}
//             selectedStyle={{ backgroundColor: '#000' }}
//             unselectedStyle={{ backgroundColor: '#ccc' }}
//             markerStyle={{ backgroundColor: '#000' }}
//           />
//           <Text className="text-base font-medium mb-2">
//             ₹{priceRange[0]} - ₹{priceRange[1]}
//           </Text>
//         </View>
//       </View>

//       <View className="absolute bottom-14 left-0 right-0 bg-white p-4 shadow-md rounded-t-2xl flex-row gap-3 justify-between items-center">
//         <TouchableOpacity className="bg-[#b1b5bc] w-1/2 py-3 rounded-full">
//           <Text className="text-white text-base font-bold text-center">
//             Reset Filter
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity className="bg-[#236BFE] w-1/2  py-3 rounded-full">
//           <Text className="text-white text-base font-bold text-center">
//             Apply Filter
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import CancelCar from '../../pages/car/CancelCar';

type FilterOptions = {
  setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
  closePanel: () => void;
};

export default function HomeFilter({
  setFilterOptions,
  closePanel,
}: FilterOptions) {
  const carTypes: string[] = [
    'SUV',
    'Sedan',
    'Hatchback',
    'Convertible',
    'Truck',
    'Van',
  ];

  const [priceRange, setPriceRange] = useState([0, 200000]);

  return (
    <View className="bg-white relative h-full mx-4">
      {/* Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }} // space for bottom buttons
      >
        <Text className="text-2xl font-bold text-center underline">
          Add Filter
        </Text>

        {/* Car Type */}
        {/* <View>
          <Text className="text-lg font-medium mb-2">Type</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          >
            {carTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                className="bg-gray-200 px-4 py-2 rounded-full"
              >
                <Text className="text-black font-medium">{type}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className='mt-2'>
          <Text className="text-lg font-medium mb-2">Reviews</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          >
            {[1, 2, 3, 4, 5].map((type, index) => (
              <TouchableOpacity
                key={index}
                className="bg-gray-200 px-4 py-2 rounded-full"
              >
                <Text className="text-black font-medium">{type} Star</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View> */}

        {/* Fuel Type */}
        <View>
          <Text className="text-lg font-medium mb-2 mt-4">Fuel Type</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          >
            {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map((fuel, index) => (
              <TouchableOpacity
                key={index}
                className="bg-gray-200 px-4 py-2 rounded-full"
              >
                <Text className="text-black font-medium">{fuel}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Price Filter */}
        <View className="mt-3">
          <Text className="text-lg font-medium">Price</Text>
          <View className="min-w-full mx-4">
            <MultiSlider
              values={priceRange}
              min={0}
              max={200000}
              step={1000}
              markerOffsetY={0}
              onValuesChange={values => setPriceRange(values)}
              selectedStyle={{ backgroundColor: '#000' }}
              unselectedStyle={{ backgroundColor: '#ccc' }}
              markerStyle={{ backgroundColor: '#000' }}
            />
            <Text className="text-base font-medium mb-2 -mt-4 text-center">
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </Text>
          </View>
        </View>

        <CancelCar />
      </ScrollView>

      {/* Fixed bottom buttons */}
      <View className=" bg-white p-4 shadow-md rounded-t-2xl flex-row gap-3 justify-between items-center">
        <TouchableOpacity className="bg-[#F6F6F6] w-1/2 py-3 rounded-full">
          <Text className="text-black text-base font-bold text-center">
            Reset Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#236BFE] w-1/2 py-3 rounded-full">
          <Text className="text-white text-base font-bold text-center">
            Apply Filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
