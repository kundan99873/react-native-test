module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'react-native-reanimated/plugin', // Make sure this is included
    // 'tailwindcss-react-native/babel', // Add if using Tailwind with NativeWind
  ],
  // plugins: ['nativewind/babel']
};
