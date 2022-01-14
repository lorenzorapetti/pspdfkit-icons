/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform} from 'react-native';

import Home from './home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => {
            if (Platform.OS === 'android') {
              return {
                // Since the PSPDFKitView provides it's own toolbar and back button we don't need a header in Android.
                headerShown: false,
              };
            }

            return {};
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
