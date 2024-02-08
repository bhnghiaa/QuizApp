import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quiz from './src/screens/Quiz';
import Result from './src/screens/Result';
import RuleQuiz from './src/screens/RuleQuiz';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ animation: 'slide_from_left' }} />
        <Stack.Screen name="RuleQuiz" component={RuleQuiz} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Quiz" component={Quiz} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Result" component={Result} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default App;
