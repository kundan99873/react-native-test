import { useColorScheme } from 'react-native';
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
import MyWallet from './src/pages/user/MyWallet';
import AddWallet from './src/pages/user/AddWallet';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

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
        </Stack.Navigator>
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import {
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import './global.css';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Login from './src/pages/Login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import Login from './src/pages/Login';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Screen name='Login' component={Login} />
//     </NavigationContainer>
//   );
// }

// export default App;
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import {
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import './global.css';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Login from './src/pages/Login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import Login from './src/pages/Login';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   const Stack = createNativeStackNavigator();

//   return (
//     // <SafeAreaProvider>
//     //   <SafeAreaView>
//     //     <StatusBar
//     //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//     //       // className="bg-blue-700 text-white"
//     //     />
//     //     <Login />
//     //   </SafeAreaView>
//     // </SafeAreaProvider>
//     <NavigationContainer>
//       <Stack.Screen name='Login' component={Login} />
//     </NavigationContainer>
//   );
// }

// export default App;
