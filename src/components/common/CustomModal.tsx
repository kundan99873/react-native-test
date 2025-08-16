import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

type CustomModalProps = {
  visible: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
};

const CustomModal = ({
  visible,
  title = 'Modal',
  message,
  onConfirm,
  onCancel,
  confirmText = 'OK',
  cancelText = 'Cancel',
}: CustomModalProps) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-4/5 bg-white rounded-lg p-6 shadow-lg">
          <Text className="text-lg font-semibold text-center mb-4">
            {title}
          </Text>
          <Text className="text-base text-gray-700 text-center mb-6">
            {message}
          </Text>

          <View className="flex-row justify-end space-x-4">
            {onCancel && (
              <TouchableOpacity onPress={onCancel}>
                <Text className="text-red-500 font-medium">{cancelText}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={onConfirm}>
              <Text className="text-blue-600 font-medium">{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
