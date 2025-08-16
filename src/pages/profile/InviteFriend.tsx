import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  Text,
  View,
  Alert,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function InviteFriend() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAndRequestPermission = async () => {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );

      if (!granted) {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Access Required',
            message: 'We need access to your contacts to invite friends.',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        );

        if (result === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permission granted');
        } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          Alert.alert(
            'Permission Blocked',
            'You have permanently denied contacts permission. Open settings to enable it.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => navigation.goBack(),
              },
              {
                text: 'Open Settings',
                onPress: () => Linking.openSettings(),
              },
            ],
          );
        } else {
          Alert.alert(
            'Permission Denied',
            'Contacts permission is required to continue.',
            [
              {
                text: 'OK',
                onPress: () => navigation.goBack(),
              },
            ],
          );
        }
      }
    };

    if (Platform.OS === 'android') {
      checkAndRequestPermission();
    }
  }, [navigation]);

  return (
    <View>
      <Text>Invite Friend Page</Text>
    </View>
  );
}
