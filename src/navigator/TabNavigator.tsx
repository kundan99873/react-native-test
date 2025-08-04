// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text, View } from 'react-native';
// import { RootTabParamList } from '../utils/types';
// import HomeScreen from '../pages/Home';
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// function SettingsScreen() {
//   return (
//     <View>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator<RootTabParamList>();

// function TabNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="Home">
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => (
//             <MaterialDesignIcons
//               name="home-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
        
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           headerShown: false,

//           tabBarIcon: ({ color, size }) => (
//             <MaterialDesignIcons
//               name="microphone-settings"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default TabNavigator;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { RootTabParamList } from '../utils/types';
import HomeScreen from '../pages/Home';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName =
              route.name === 'Home'
                ? focused ? 'home' : 'home-outline'
                : focused ? 'eye-settings' : 'eye-settings-outline';
            return <MaterialDesignIcons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: '#1f2937', // dark gray
            height: 70,
            borderTopWidth: 0,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarActiveTintColor: '#10b981', // green
          tabBarInactiveTintColor: '#9ca3af', // gray
          headerShown: false,
        })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   headerShown: false,
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialDesignIcons
        //       name="home-outline"
        //       color={color}
        //       size={size}
        //     />
        //   ),
        // }}
        
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        // options={{
        //   headerShown: false,

        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialDesignIcons
        //       name="microphone-settings"
        //       color={color}
        //       size={size}
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
