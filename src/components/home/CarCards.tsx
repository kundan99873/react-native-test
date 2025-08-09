import { Image, Text, View } from 'react-native';
import { HomeCarCardDetails } from '../../utils/types';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export default function CarCards({
  carDetails,
}: {
  carDetails: HomeCarCardDetails;
}) {
  return (
    <View className="bg-white rounded-2xl p-3 shadow-md shadow-black/10 my-2 mx-3">
      {/* Car Image with overlay */}
      <View className="relative overflow-hidden rounded-xl">
        <Image
          source={{
            uri: "https://di-uploads-pod1.dealerinspire.com/earlstewarttoyota/uploads/2025/01/img11.jpg",
          }}
          className="w-full h-52 rounded-xl"
          resizeMode="cover"
        />

        {/* Rating Badge */}
        <View className="absolute top-3 left-3 flex-row items-center bg-white px-2 py-1 rounded-full shadow-sm">
          <MaterialDesignIcons name="star" size={16} color="#FACC15" />
          <Text className="ml-1 font-semibold text-gray-800">
            {carDetails.ratings}
          </Text>
        </View>

        {/* Favorite Button */}
        <View className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm">
          <MaterialDesignIcons name="heart-outline" size={18} color="#444" />
        </View>
      </View>

      {/* Car Info */}
      <View className="flex-row justify-between items-center mt-4">
        <View>
          <Text className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md max-w-fit mb-1">
            {carDetails.type.toUpperCase()}
          </Text>
          <Text className="text-lg font-bold text-gray-900">
            {carDetails.name}
          </Text>
        </View>
        <Text className="text-blue-600 font-bold text-xl">
          ₹{carDetails.price}
          <Text className='text-xs text-gray-600'>/ hours</Text>
        </Text>
      </View>

      {/* Car Specs */}
      <View className="flex-row justify-between items-center mt-4">
        <View className="flex-row items-center gap-1">
          <MaterialDesignIcons name="car-shift-pattern" size={20} color="#2563EB" />
          <Text className="text-sm text-gray-700 capitalize">
            {carDetails.type}
          </Text>
        </View>
        <View className="flex-row items-center gap-1">
          <MaterialDesignIcons name="fuel" size={20} color="#2563EB" />
          <Text className="text-sm text-gray-700 capitalize">
            {carDetails.fuel_type}
          </Text>
        </View>
        <View className="flex-row items-center gap-1">
          <MaterialDesignIcons name="car-seat" size={20} color="#2563EB" />
          <Text className="text-sm text-gray-700">
            {carDetails.number_of_seats} Seats
          </Text>
        </View>
      </View>
    </View>
  );
}





// import { Image, Text, View } from 'react-native';
// import { HomeCarCardDetails } from '../../utils/types';
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// export default function CarCards({
//   carDetails,
// }: {
//   carDetails: HomeCarCardDetails;
// }) {
//   return (
//     <View className="bg-white p-4 shadow-lg my-4 rounded-lg">
//       <View className="relative">
//         <Image
//           source={{
//             uri: 'https://di-uploads-pod1.dealerinspire.com/earlstewarttoyota/uploads/2025/01/img11.jpg',
//           }}
//           height={200}
//           resizeMode="cover"
//           className="rounded-lg"
//         />
//         <View className="absolute top-2 left-2 p-1 bg-white flex flex-row items-center justify-center gap-1 rounded-xl">
//           <MaterialDesignIcons name="star" size={20} color={'#888888'} />
//           <Text className="text-2xl text-gray-800 font-medium">
//             {carDetails.ratings}
//           </Text>
//         </View>
//         <View className="absolute top-2 right-2 p-2 py-1 h-10 w-10 flex justify-center items-center rounded-full bg-white">
//           <MaterialDesignIcons name="heart" size={20} color={'#888888'} />
//         </View>
//       </View>
//       <View className="flex justify-between items-center flex-row mt-4 border-b pb-2">
//         <View className="">
//           <Text className="bg-blue-200 max-w-fit text-blue-700 px-3 rounded-lg text-sm font-medium">
//             SUV
//           </Text>
//           <Text className="text-xl  font-bold">{carDetails.name}</Text>
//         </View>
//         <Text className="text-2xl font-bold text-blue-600">
//           Rs. {carDetails.price}
//         </Text>
//       </View>

//       <View className="flex justify-between py-2 items-center flex-row">
//         <View className="flex justify-center items-center flex-row gap-2">
//           <MaterialDesignIcons name="pump" size={24} color="blue" />
//           <Text className="text-base text-gray-800 font-medium capitalize">
//             {carDetails.type}
//           </Text>
//         </View>
//         <View className="flex justify-center items-center flex-row gap-2">
//           <MaterialDesignIcons name="pump" size={24} color="blue" />
//           <Text className="text-base text-gray-800 font-medium capitalize">
//             {carDetails.fuel_type}
//           </Text>
//         </View>
//         <View className="flex justify-center items-center flex-row gap-2">
//           <MaterialDesignIcons name="pump" size={24} color="blue" />
//           <Text className="text-base text-gray-800 font-medium capitalize">
//             {carDetails.number_of_seats} Seats
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// }

