import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/screens/restaurants.screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { LoginPage } from "./components/login/login.page";
import { SignUpPage } from "./components/signup/signup.page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RouteIcon = (route) => {
  switch (route) {
    case "LoginPage":
      return <AntDesign name="login" size={24} color="black" />;
    case "SignUpPage":
      return (
        <MaterialCommunityIcons
          name="account-multiple-plus"
          size={24}
          color="black"
        />
      );
    case "Exercice":
      return <MaterialIcons name="fitness-center" size={24} color="black" />;
    default:
      return <SimpleLineIcons name="menu" size={24} color="black" />;
  }
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="LoginPage"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "LoginPage") {
                iconName = focused ? "login" : "login";
              } else if (route.name === "SignUpPage") {
                iconName = focused ? "adduser" : "adduser";
              } else if (route.name === "Exercice") {
                iconName = focused ? "barschart" : "barschart";
              }
              return <AntDesign name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="LoginPage" options={{ title: "Login" }}>
            {(props) => <LoginPage {...props} extraData={"some Data"} />}
          </Tab.Screen>
          <Tab.Screen
            name="SignUpPage"
            component={SignUpPage}
            options={{ title: "Sign up" }}
          />
          <Tab.Screen
            name="Exercice"
            component={RestaurantScreen}
            options={{ title: "Choose an excercice" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
