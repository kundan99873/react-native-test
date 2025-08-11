// // // import MultiSlider from '@ptomasroos/react-native-multi-slider';
// // // import React, { useState } from 'react';
// // // import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
// // // type FilterOptions = {
// // //   setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
// // //   closePanel: () => void;
// // // };

// // // export default function HomeFilter({
// // //   setFilterOptions,
// // //   closePanel,
// // // }: FilterOptions) {
// // //   const carTypes: CarType[] = [
// // //     'All',
// // //     'SUV',
// // //     'Sedan',
// // //     'Hatchback',
// // //     'Convertible',
// // //     'Truck',
// // //     'Van',
// // //   ];

// // //   type CarType =
// // //     | 'All'
// // //     | 'SUV'
// // //     | 'Sedan'
// // //     | 'Hatchback'
// // //     | 'Convertible'
// // //     | 'Truck'
// // //     | 'Van';

// // //   type ratingTypes = 'All' | '1' | '2' | '3' | '4' | '5';

// // //   const ratings: ratingTypes[] = ['All', '1', '2', '3', '4', '5'];

// // //   type BrandType = 'Toyota' | 'Hyundai' | 'Tata' | 'Ford' | 'Honda';
// // //   const brands: BrandType[] = ['Toyota', 'Hyundai', 'Tata', 'Ford', 'Honda'];

// // //   type FuelType = 'All' | 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
// // //   const fuels: FuelType[] = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];
// // //   const [selecetedType, setSelectedType] = useState<CarType>('All');
// // //   const [selectedRating, setSelectedRating] = useState<ratingTypes>('All');
// // //   const [selectedFuel, setSelectedFuel] = useState<FuelType>('All');
// // //   const [selectedBrand, setSelectedBrand] = useState<BrandType | null>(null);

// // //   const [priceRange, setPriceRange] = useState([0, 200000]);

// // //   return (
// // //     <View className="bg-white relative h-full mx-4">
// // //       {/* Scrollable content */}
// // //       <ScrollView
// // //         showsVerticalScrollIndicator={false}
// // //         contentContainerStyle={{ paddingBottom: 120 }} // space for bottom buttons
// // //       >
// // //         <Text className="text-2xl font-bold text-center underline ">
// // //           Add Filter
// // //         </Text>

// // //         {/* Car Type */}
// // //         <View>
// // //           <Text className="text-lg font-medium mb-2">Type</Text>
// // //           <ScrollView
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             contentContainerStyle={{ gap: 8 }}
// // //           >
// // //             {carTypes.map((type, index) => (
// // //               <TouchableOpacity
// // //                 key={index}
// // //                 className={`${
// // //                   selecetedType == type ? 'bg-[#236BFE] ' : 'bg-[#F4F6F6]'
// // //                 } px-4 py-2 rounded-full`}
// // //                 onPress={(): void => setSelectedType(type)}
// // //               >
// // //                 <Text
// // //                   className={`${
// // //                     selecetedType === type ? 'text-white' : 'text-black'
// // //                   } font-medium`}
// // //                 >
// // //                   {type}
// // //                 </Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </ScrollView>
// // //         </View>

// // //         <View className="mt-2">
// // //           <Text className="text-lg font-medium mb-2">Reviews</Text>
// // //           <ScrollView
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             contentContainerStyle={{ gap: 8 }}
// // //           >
// // //             {ratings.map((type: ratingTypes, index: number) => (
// // //               <TouchableOpacity
// // //                 key={index}
// // //                 className={`${
// // //                   selectedRating == type ? 'bg-[#236BFE] ' : 'bg-[#F4F6F6]'
// // //                 } px-4 py-2 rounded-full`}
// // //               >
// // //                 <Text
// // //                   className={`${
// // //                     selectedRating === type ? 'text-white' : 'text-black'
// // //                   } font-medium`}
// // //                 >
// // //                   {type} Star
// // //                 </Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </ScrollView>
// // //         </View>

// // //         {/* Fuel Type */}
// // //         <View>
// // //           <Text className="text-lg font-medium mb-2 mt-4">Fuel Type</Text>
// // //           <ScrollView
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             contentContainerStyle={{ gap: 8 }}
// // //           >
// // //             {fuels.map((fuel, index) => (
// // //               <TouchableOpacity
// // //                 key={index}
// // //                 className={`${
// // //                   selecetedType == fuel ? 'bg-[#236BFE] ' : 'bg-[#F4F6F6]'
// // //                 } px-4 py-2 rounded-full`}
// // //               >
// // //                 <Text
// // //                   className={`${
// // //                     selectedFuel == fuel ? 'text-white' : 'text-black'
// // //                   } font-medium`}
// // //                 >
// // //                   {fuel}
// // //                 </Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </ScrollView>
// // //         </View>

// // //         {/* Price Filter */}
// // //         <View className="mt-3">
// // //           <Text className="text-lg font-medium">Price</Text>
// // //           <View className="min-w-full mx-4">
// // //             <MultiSlider
// // //               values={priceRange}
// // //               min={0}
// // //               max={200000}
// // //               step={1000}
// // //               markerOffsetY={0}
// // //               sliderLength={300}
// // //               onValuesChange={values => setPriceRange(values)}
// // //               selectedStyle={{ backgroundColor: '#000' }}
// // //               unselectedStyle={{ backgroundColor: '#ccc' }}
// // //               customMarker={e => (
// // //                 <View style={{ alignItems: 'center' }}>
// // //                   <Text style={{ fontSize: 12, fontWeight: '600' }}>
// // //                     ₹{e.currentValue}
// // //                   </Text>
// // //                   <View
// // //                     style={{
// // //                       height: 10,
// // //                       width: 10,
// // //                       borderRadius: 10,
// // //                       backgroundColor: '#000',
// // //                       marginBottom: 15
// // //                     }}
// // //                   />
// // //                 </View>
// // //               )}
// // //             />
// // //             <Text className="text-base font-medium mb-2 -mt-4 text-center">
// // //               Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
// // //             </Text>
// // //           </View>
// // //         </View>

// // //         <View>
// // //           <Text className="text-lg font-medium mb-2 mt-4">Brands</Text>
// // //           <ScrollView
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             contentContainerStyle={{ gap: 8 }}
// // //           >
// // //             {brands.map((brand, index) => (
// // //               <TouchableOpacity
// // //                 key={index}
// // //                 className={`${
// // //                   selectedBrand == brand ? 'bg-[#236BFE] ' : 'bg-[#F4F6F6]'
// // //                 } px-4 py-2 rounded-full`}
// // //               >
// // //                 <Text
// // //                   className={`${
// // //                     selectedBrand == brand ? 'text-white' : 'text-black'
// // //                   } font-medium`}
// // //                 >
// // //                   {brand}
// // //                 </Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </ScrollView>
// // //         </View>
// // //       </ScrollView>

// // //       {/* Fixed bottom buttons */}
// // //       <View className=" bg-white p-4 shadow-md rounded-t-2xl flex-row gap-3 justify-between items-center">
// // //         <TouchableOpacity className="bg-[#F6F6F6] w-1/2 py-3 rounded-full">
// // //           <Text className="text-black text-base font-bold text-center">
// // //             Reset Filter
// // //           </Text>
// // //         </TouchableOpacity>
// // //         <TouchableOpacity className="bg-[#236BFE] w-1/2 py-3 rounded-full">
// // //           <Text className="text-white text-base font-bold text-center">
// // //             Apply Filter
// // //           </Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // import MultiSlider from '@ptomasroos/react-native-multi-slider';
// // import React, { useState } from 'react';
// // import { Text, TouchableOpacity, View, ScrollView } from 'react-native';

// // type FilterOptions = {
// //   setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
// //   closePanel: () => void;
// // };

// // export default function HomeFilter({
// //   setFilterOptions,
// //   closePanel,
// // }: FilterOptions) {
// //   type CarType =
// //     | 'All'
// //     | 'SUV'
// //     | 'Sedan'
// //     | 'Hatchback'
// //     | 'Convertible'
// //     | 'Truck'
// //     | 'Van';
// //   const carTypes: CarType[] = [
// //     'All',
// //     'SUV',
// //     'Sedan',
// //     'Hatchback',
// //     'Convertible',
// //     'Truck',
// //     'Van',
// //   ];

// //   type RatingType = 'All' | '1' | '2' | '3' | '4' | '5';
// //   const ratings: RatingType[] = ['All', '1', '2', '3', '4', '5'];

// //   type BrandType = 'Toyota' | 'Hyundai' | 'Tata' | 'Ford' | 'Honda';
// //   const brands: BrandType[] = ['Toyota', 'Hyundai', 'Tata', 'Ford', 'Honda'];

// //   type FuelType = 'All' | 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
// //   const fuels: FuelType[] = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];

// //   // MULTI-SELECT STATES
// //   const [selectedTypes, setSelectedTypes] = useState<CarType[]>([]);
// //   const [selectedRatings, setSelectedRatings] = useState<RatingType[]>([]);
// //   const [selectedFuels, setSelectedFuels] = useState<FuelType[]>([]);
// //   const [selectedBrands, setSelectedBrands] = useState<BrandType[]>([]);
// //   const [priceRange, setPriceRange] = useState([0, 200000]);

// //   // TOGGLE HELPER
// //   const toggleSelection = <T,>(
// //     value: T,
// //     list: T[],
// //     setList: (v: T[]) => void,
// //   ) => {
// //     if (list.includes(value)) {
// //       setList(list.filter(item => item !== value));
// //     } else {
// //       setList([...list, value]);
// //     }
// //   };

// //   return (
// //     <View className="bg-white relative h-full mx-4">
// //       <ScrollView
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={{ paddingBottom: 120 }}
// //       >
// //         <Text className="text-2xl font-bold text-center underline">
// //           Add Filter
// //         </Text>

// //         {/* Car Type */}
// //         <View>
// //           <Text className="text-lg font-medium mb-2">Type</Text>
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={{ gap: 8 }}
// //           >
// //             {carTypes.map((type, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 className={`${
// //                   selectedTypes.includes(type) ? 'bg-[#236BFE]' : 'bg-[#F4F6F6]'
// //                 } px-4 py-2 rounded-full`}
// //                 onPress={() =>
// //                   toggleSelection(type, selectedTypes, setSelectedTypes)
// //                 }
// //               >
// //                 <Text
// //                   className={`${
// //                     selectedTypes.includes(type) ? 'text-white' : 'text-black'
// //                   } font-medium`}
// //                 >
// //                   {type}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>

// //         {/* Reviews */}
// //         <View className="mt-2">
// //           <Text className="text-lg font-medium mb-2">Reviews</Text>
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={{ gap: 8 }}
// //           >
// //             {ratings.map((rating, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 className={`${
// //                   selectedRatings.includes(rating)
// //                     ? 'bg-[#236BFE]'
// //                     : 'bg-[#F4F6F6]'
// //                 } px-4 py-2 rounded-full`}
// //                 onPress={() =>
// //                   toggleSelection(rating, selectedRatings, setSelectedRatings)
// //                 }
// //               >
// //                 <Text
// //                   className={`${
// //                     selectedRatings.includes(rating)
// //                       ? 'text-white'
// //                       : 'text-black'
// //                   } font-medium`}
// //                 >
// //                   {rating} Star
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>

// //         {/* Fuel Type */}
// //         <View>
// //           <Text className="text-lg font-medium mb-2 mt-4">Fuel Type</Text>
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={{ gap: 8 }}
// //           >
// //             {fuels.map((fuel, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 className={`${
// //                   selectedFuels.includes(fuel) ? 'bg-[#236BFE]' : 'bg-[#F4F6F6]'
// //                 } px-4 py-2 rounded-full`}
// //                 onPress={() =>
// //                   toggleSelection(fuel, selectedFuels, setSelectedFuels)
// //                 }
// //               >
// //                 <Text
// //                   className={`${
// //                     selectedFuels.includes(fuel) ? 'text-white' : 'text-black'
// //                   } font-medium`}
// //                 >
// //                   {fuel}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>

// //         {/* Price Filter */}
// //         <View className="mt-3">
// //           <Text className="text-lg font-medium">Price</Text>
// //           <View style={{ alignItems: 'center' }}>
// //             <MultiSlider
// //               values={priceRange}
// //               min={0}
// //               max={200000}
// //               step={1000}
// //               sliderLength={300}
// //               onValuesChange={values => setPriceRange(values)}
// //               selectedStyle={{ backgroundColor: '#000' }}
// //               unselectedStyle={{ backgroundColor: '#ccc' }}
// //               customMarker={e => (
// //                 <View style={{ alignItems: 'center' }}>
// //                   <Text style={{ fontSize: 12, fontWeight: '600' }}>
// //                     ₹{e.currentValue}
// //                   </Text>
// //                   <View
// //                     style={{
// //                       height: 10,
// //                       width: 10,
// //                       borderRadius: 10,
// //                       backgroundColor: '#000',
// //                       marginBottom: 15,
// //                     }}
// //                   />
// //                 </View>
// //               )}
// //             />
// //             <Text className="text-base font-medium mb-2 -mt-4 text-center">
// //               Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
// //             </Text>
// //           </View>
// //         </View>

// //         {/* Brands */}
// //         <View>
// //           <Text className="text-lg font-medium mb-2 mt-4">Brands</Text>
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={{ gap: 8 }}
// //           >
// //             {brands.map((brand, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 className={`${
// //                   selectedBrands.includes(brand)
// //                     ? 'bg-[#236BFE]'
// //                     : 'bg-[#F4F6F6]'
// //                 } px-4 py-2 rounded-full`}
// //                 onPress={() =>
// //                   toggleSelection(brand, selectedBrands, setSelectedBrands)
// //                 }
// //               >
// //                 <Text
// //                   className={`${
// //                     selectedBrands.includes(brand) ? 'text-white' : 'text-black'
// //                   } font-medium`}
// //                 >
// //                   {brand}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>
// //       </ScrollView>

// //       {/* Bottom Buttons */}
// //       <View className="bg-white p-4 shadow-md rounded-t-2xl flex-row gap-3 justify-between items-center">
// //         <TouchableOpacity
// //           className="bg-[#F6F6F6] w-1/2 py-3 rounded-full"
// //           onPress={() => {
// //             setSelectedTypes([]);
// //             setSelectedRatings([]);
// //             setSelectedFuels([]);
// //             setSelectedBrands([]);
// //             setPriceRange([0, 200000]);
// //           }}
// //         >
// //           <Text className="text-black text-base font-bold text-center">
// //             Reset Filter
// //           </Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           className="bg-[#236BFE] w-1/2 py-3 rounded-full"
// //           onPress={() => {
// //             setFilterOptions([
// //               ...selectedTypes,
// //               ...selectedRatings,
// //               ...selectedFuels,
// //               ...selectedBrands,
// //               `₹${priceRange[0]} - ₹${priceRange[1]}`,
// //             ]);
// //             closePanel();
// //           }}
// //         >
// //           <Text className="text-white text-base font-bold text-center">
// //             Apply Filter
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // }

// import React, { useState } from 'react';
// import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// type FilterOptions = {
//   setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
//   closePanel: () => void;
// };

// export default function HomeFilter({
//   setFilterOptions,
//   closePanel,
// }: FilterOptions) {
//   const carTypes = [
//     'All',
//     'SUV',
//     'Sedan',
//     'Hatchback',
//     'Convertible',
//     'Truck',
//     'Van',
//   ];
//   const ratings = ['All', '1', '2', '3', '4', '5'];
//   const brands = ['Toyota', 'Hyundai', 'Tata', 'Ford', 'Honda'];
//   const fuels = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];

//   const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
//   const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
//   const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState([0, 200000]);

//   const toggleSelection = (
//     value: string,
//     setState: React.Dispatch<React.SetStateAction<string[]>>,
//   ) => {
//     setState(prev =>
//       prev.includes(value)
//         ? prev.filter(item => item !== value)
//         : [...prev, value],
//     );
//   };

//   const renderSelectableChips = (
//     data: string[],
//     selectedState: string[],
//     setState: React.Dispatch<React.SetStateAction<string[]>>,
//   ) => (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={{ gap: 8 }}
//     >
//       {data.map((item, index) => {
//         const isSelected = selectedState.includes(item);
//         return (
//           <TouchableOpacity
//             key={index}
//             className={`px-4 py-2 rounded-full relative ${
//               isSelected ? 'bg-blue-600' : 'bg-gray-200'
//             }`}
//             onPress={() => toggleSelection(item, setState)}
//           >
//             <Text
//               className={`${
//                 isSelected ? 'text-white' : 'text-black'
//               } font-medium`}
//             >
//               {item}
//             </Text>
//             {isSelected && (
//               <TouchableOpacity
//                 onPress={() => toggleSelection(item, setState)}
//                 className="absolute -top-4 -right-2 bg-white rounded-full p-1 shadow-lg"
//                 style={{ elevation: 4 }} // Android shadow
//               >
//                 <MaterialDesignIcons name="close" size={16} color="#000" />
//               </TouchableOpacity>
//             )}
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   );

//   return (
//     <View className="bg-white h-full mx-4">
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 120 }}
//       >
//         <Text className="text-2xl font-bold text-center underline">
//           Add Filter
//         </Text>

//         <View className="mt-4">
//           <Text className="text-lg font-medium mb-2">Type</Text>
//           {renderSelectableChips(carTypes, selectedTypes, setSelectedTypes)}
//         </View>

//         <View className="mt-4">
//           <Text className="text-lg font-medium mb-2">Reviews</Text>
//           {renderSelectableChips(ratings, selectedRatings, setSelectedRatings)}
//         </View>

//         <View className="mt-4">
//           <Text className="text-lg font-medium mb-2">Fuel Type</Text>
//           {renderSelectableChips(fuels, selectedFuels, setSelectedFuels)}
//         </View>

//         <View className="mt-4">
//           <Text className="text-lg font-medium">Price</Text>
//           <View className="mx-4">
//             <MultiSlider
//               values={priceRange}
//               min={0}
//               max={200000}
//               step={1000}
//               sliderLength={300}
//               onValuesChange={values => setPriceRange(values)}
//               selectedStyle={{ backgroundColor: '#2563eb' }} // Tailwind blue-600
//               unselectedStyle={{ backgroundColor: '#d1d5db' }} // Tailwind gray-300
//               customMarker={e => (
//                 <View className="items-center">
//                   <Text className="text-xs font-semibold">
//                     ₹{e.currentValue}
//                   </Text>
//                   <View className="h-2.5 w-2.5 rounded-full bg-blue-600 mb-3" />
//                 </View>
//               )}
//             />
//             <Text className="text-base font-medium mb-2 -mt-4 text-center">
//               Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
//             </Text>
//           </View>
//         </View>

//         <View className="mt-4">
//           <Text className="text-lg font-medium mb-2">Brands</Text>
//           {renderSelectableChips(brands, selectedBrands, setSelectedBrands)}
//         </View>
//       </ScrollView>

//       {/* Bottom buttons */}
//       <View className="bg-white p-4 shadow-md rounded-t-2xl flex-row gap-3 justify-between items-center">
//         <TouchableOpacity
//           className="bg-gray-100 w-1/2 py-3 rounded-full"
//           onPress={() => {
//             setSelectedTypes([]);
//             setSelectedRatings([]);
//             setSelectedFuels([]);
//             setSelectedBrands([]);
//             setPriceRange([0, 200000]);
//           }}
//         >
//           <Text className="text-black text-base font-bold text-center">
//             Reset Filter
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity className="bg-blue-600 w-1/2 py-3 rounded-full">
//           <Text className="text-white text-base font-bold text-center">
//             Apply Filter
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }



import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

type CarType = 'All' | 'SUV' | 'Sedan' | 'Hatchback' | 'Convertible' | 'Truck' | 'Van';
type RatingType = 'All' | '1' | '2' | '3' | '4' | '5';
type BrandType = 'Toyota' | 'Hyundai' | 'Tata' | 'Ford' | 'Honda';
type FuelType = 'All' | 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';

type FilterOptions = {
  setFilterOptions: React.Dispatch<React.SetStateAction<string[]>>;
  closePanel: () => void;
};

export default function HomeFilter({ setFilterOptions, closePanel }: FilterOptions) {
  const carTypes: CarType[] = ['All', 'SUV', 'Sedan', 'Hatchback', 'Convertible', 'Truck', 'Van'];
  const ratings: RatingType[] = ['All', '1', '2', '3', '4', '5'];
  const brands: BrandType[] = ['Toyota', 'Hyundai', 'Tata', 'Ford', 'Honda'];
  const fuels: FuelType[] = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];

  const [selectedTypes, setSelectedTypes] = useState<CarType[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<RatingType[]>([]);
  const [selectedFuels, setSelectedFuels] = useState<FuelType[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<BrandType[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200000]);

  const toggleSelection = <T,>(item: T, state: T[], setState: React.Dispatch<React.SetStateAction<T[]>>) => {
    if (state.includes(item)) {
      setState(state.filter(i => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  const renderChip = <T extends string>(
    item: T,
    state: T[],
    setState: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    const isSelected = state.includes(item);
    return (
      <View key={item} className="relative ">
        <TouchableOpacity
          onPress={() => toggleSelection(item, state, setState)}
          className={`px-4 py-2 rounded-full ${
            isSelected ? 'bg-[#236BFE]' : 'bg-[#F4F6F6]'
          }`}
        >
          <Text className={`${isSelected ? 'text-white' : 'text-black'} font-medium`}>
            {item}
          </Text>
        </TouchableOpacity>
        {isSelected && (
          <TouchableOpacity
            onPress={() => toggleSelection(item, state, setState)}
            className="absolute -top-2.5 -right-2.5 bg-[#F4F6F6] rounded-full p-1 shadow-lg"
          >
            <MaterialDesignIcons name="close" size={14} color="#000" />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View className="bg-white relative h-full mx-4">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <Text className="text-2xl font-bold text-center underline mb-4">Add Filter</Text>

        {/* Car Type */}
        <Text className="text-lg font-medium mb-2">Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }} className='overflow-visible'>
          {carTypes.map(type => renderChip(type, selectedTypes, setSelectedTypes))}
        </ScrollView>

        {/* Reviews */}
        <Text className="text-lg font-medium mb-2 mt-4">Reviews</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }} className='overflow-visible'>
          {ratings.map(rating => renderChip(rating, selectedRatings, setSelectedRatings))}
        </ScrollView>

        {/* Fuel Type */}
        <Text className="text-lg font-medium mb-2 mt-4">Fuel Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }} className='overflow-visible'>
          {fuels.map(fuel => renderChip(fuel, selectedFuels, setSelectedFuels))}
        </ScrollView>

        {/* Price Filter */}
        <View className="mt-4">
          <Text className="text-lg font-medium mb-2">Price</Text>
          <View className="mx-4">
            <MultiSlider
              values={priceRange}
              min={0}
              max={200000}
              step={1000}
              sliderLength={300}
              onValuesChange={values => setPriceRange(values)}
              selectedStyle={{ backgroundColor: '#000' }}
              unselectedStyle={{ backgroundColor: '#ccc' }}
              customMarker={e => (
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ fontSize: 12, fontWeight: '600' }}>₹{e.currentValue}</Text>
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 10,
                      backgroundColor: '#000',
                      marginBottom: 15
                    }}
                  />
                </View>
              )}
            />
            <Text className="text-base font-medium mb-2 -mt-4 text-center">
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </Text>
          </View>
        </View>

        {/* Brands */}
        <Text className="text-lg font-medium mb-2 mt-4">Brands</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }} className='overflow-visible'>
          {brands.map(brand => renderChip(brand, selectedBrands, setSelectedBrands))}
        </ScrollView>
      </ScrollView>

      {/* Fixed bottom buttons */}
      <View className="bg-white p-4 shadow-md rounded-t-2xl flex-row gap-3 justify-between items-center">
        <TouchableOpacity
          onPress={() => {
            setSelectedTypes([]);
            setSelectedRatings([]);
            setSelectedFuels([]);
            setSelectedBrands([]);
            setPriceRange([0, 200000]);
          }}
          className="bg-[#F6F6F6] w-1/2 py-3 rounded-full"
        >
          <Text className="text-black text-base font-bold text-center">Reset Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#236BFE] w-1/2 py-3 rounded-full">
          <Text className="text-white text-base font-bold text-center">Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
