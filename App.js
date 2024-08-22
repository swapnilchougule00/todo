import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
