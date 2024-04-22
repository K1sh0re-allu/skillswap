import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SkillListingScreen from './SkillListingScreen';
import SkillRequestScreen from './SkillRequestScreen';
import CreateAccountScreen from './CreateAccountScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SkillListingScreen" component={SkillListingScreen} />
        <Stack.Screen name="SkillRequestScreen" component={SkillRequestScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
