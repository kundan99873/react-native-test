import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { ReviewDetails } from '../../utils/types';

export default function ReviewCard({ review }: { review: ReviewDetails }) {
  return (
    <View className="p-4 bg-white rounded-xl shadow-sm">
      <View className="flex-row items-center gap-3 mb-2">
        <Image
          source={{
            uri:
              review.image ||
              'https://icon-library.com/images/small-user-icon/small-user-icon-13.jpg',
          }}
          className="h-10 w-10 rounded-full"
        />
        <View>
          <Text className="font-semibold">{review.name}</Text>
          <View className="flex-row">
            {Array(review.rating)
              .fill(null)
              .map((_, idx) => (
                <MaterialDesignIcons
                  key={idx}
                  name="star"
                  color="#f59e0b"
                  size={16}
                />
              ))}
          </View>
        </View>
      </View>
      <Text className="text-gray-700">{review.comment}</Text>
    </View>
  );
}
