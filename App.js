import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Screens
import StartUpPage from "./src/screens/StartUpPage";
import SignUpPage from "./src/screens/SignUpPage";
import HomePage from "./src/screens/HomePage";

import ApiPage from "./src/screens/ExplorePage";
import LoginPage from "./src/screens/LoginPage";
import AccountScreen from "./src/screens/AccountScreen";
import TripsPage from "./src/screens/TripsPage";
import DetailsPage from "./src/screens/Details";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FindTrips from "./src/screens/FindTrips";
import Users from "./src/screens/Users";
import DetailTrips from "./src/screens/DetailTrips";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={StartUpPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ApiPage"
        component={ApiPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Trips"
        component={TripsPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FindTrips"
        component={FindTrips}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Leaderboard"
        component={Users}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpecTrip"
        component={DetailTrips}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
