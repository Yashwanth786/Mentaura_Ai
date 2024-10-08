import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Updated import
import SplashScreen from './SplashScreen'; // Adjust path as necessary
import EntryPage from './EntryPage'; // Your other screen components
import HomePage from './HomePage'; // Your other screen components
import Login from './Login';
import SignUp from './SignUp';
import MainActivity from './MainActivity';

const Stack = createNativeStackNavigator(); // Updated to use native stack

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="EntryPage" component={EntryPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="MainActivity" component={MainActivity} options={{ headerShown:false }} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
