import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
import OrderScreen from "./Screens/OrderScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import { colors } from "./assets/color";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AufträgeScreen"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProdukteScreen"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: colors.text,
          drawerInactiveTintColor: colors.text,
          drawerActiveBackgroundColor: colors.color3T,
          drawerInactiveBackgroundColor: "white",
        }}
      >
        <Drawer.Screen name="Start" component={HomeStack} />
        <Drawer.Screen name="Aufträge" component={OrderStack} />
        <Drawer.Screen name="Produkte" component={ProductsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
