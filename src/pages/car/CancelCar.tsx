import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function CancelCar() {
  const cancellationReasons: string[] = [
    'Schedule Change',
    'Book Another Car',
    'Found a Better Alternative',
    'Want to Book Another Car',
    'I Found a Better Price',
    'Other',
  ];

  const [selectedReason, setSelectedReason] = useState<number | null>(null);
  return (
    <View>
      <Text>Please select reason for cancellations:</Text>
      <View>
        {cancellationReasons.map((item: string, index: number) => (
          <TouchableOpacity
            className="flex flex-row items-center gap-2 mt-3"
            key={index}
            onPress={() => setSelectedReason(index)}
          >
            <View className="h-6 w-6 rounded-full border-2 border-black justify-center items-center">
              {selectedReason === index && <View className="h-3 w-3 bg-black rounded-full"></View>}
            </View>
            <Text className="text-black">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
