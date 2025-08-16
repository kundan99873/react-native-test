import { PermissionsAndroid, Platform, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import Login from './src/pages/auth/Login';
import Register from './src/pages/auth/Register';
import { RootStackParamList } from './src/utils/types';
import Forgot from './src/pages/auth/Forgot';
import IntroScreen from './src/pages/Intro';
import CarDetails from './src/pages/car/CarDetails';
import BookCar from './src/pages/car/BookCar';
import RentalPartner from './src/pages/rental/RentalPartner';
import CancelCar from './src/pages/car/CancelCar';
import MyProfile from './src/pages/profile/MyProfile';
import MyWallet from './src/pages/profile/MyWallet';
import AddWallet from './src/pages/profile/AddWallet';
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import NoInternetConnection from './src/pages/common/NoInternetConnection';
import InviteFriend from './src/pages/profile/InviteFriend';
// import InviteFriend from './src/pages/profile/';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [isConnectedInternet, setIsConnectedInternet] =
    useState<boolean>(false);

  useEffect(() => {
    const checkInternetConnection = NetInfo.addEventListener(state => {
      setIsConnectedInternet(state.isConnected ?? false);
    });
    return () => checkInternetConnection();
  }, []);

  console.log({ isConnectedInternet }, 678);

  useEffect(() => {
    const requestPermission = async () => {
      const alreadyGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (!alreadyGranted) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Rental Car App Contacts Access',
            message: 'This app needs access to your contact list',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
            buttonNeutral: 'Ask Me Later',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the contact');
        } else {
          console.log('Contact Permission Denied');
        }
      }
    };

    if (Platform.OS == 'android') {
      requestPermission();
    }
  }, []);

  // Define the Stack Navigator
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Login: 'login',
        Register: 'register',
        Drawer: 'home',
        Forgot: 'forgot',
        Intro: 'intro',
      },
    },
  };
  return (
    <SafeAreaProvider>
      {isConnectedInternet ? (
        <NavigationContainer linking={linking}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Intro"
              component={IntroScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarDetails"
              component={CarDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CancelBooking"
              component={CancelCar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RentalPartner"
              component={RentalPartner}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookCar"
              component={BookCar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyProfile"
              component={MyProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forgot"
              component={Forgot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyWallet"
              component={MyWallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddWallet"
              component={AddWallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InviteFriend"
              component={InviteFriend}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NoInternetConnection />
      )}
      {/* <DrawerNavigator /> */}
    </SafeAreaProvider>
  );
}

export default App;
