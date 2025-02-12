import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignInScreen from "./screens/SignInScreen"
import DashboardScreen from "./screens/DashboardScreen"
import BookingScreen from "./screens/BookingScreen"
import { Colors } from "react-native/Libraries/NewAppScreen"

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#4CAF50",
              },
              headerTintColor: "black",
              headerTitleStyle: "bold",
            }}
          >
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: "Welcome to Booking App",
              }}
            />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Booking" component={BookingScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
})
