import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomDrawerContent from "./components/CustomDrawerComponet";
//Screens
import HomeScreen from "./Screens/HomeScreen";
import OrderScreen from "./Screens/OrderScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import SettingsScreen from "./Screens/SettingsScreen";
//Settig Screens
import UserSettingsScreen from "./Screens/SettingScreens/UserSettingsScreen";
import InterfaceSettingsScreen from "./Screens/SettingScreens/InterfaceSettingsScreen";
import NotificationSettingsScreen from "./Screens/SettingScreens/NotificationSettingsScreen";
//data
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

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Benutzer"
        component={UserSettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background2,
          },
        }}
      />
      <Stack.Screen
        name="Oberfläche"
        component={InterfaceSettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background2,
          },
        }}
      />
      <Stack.Screen
        name="Benachrichtigungen"
        component={NotificationSettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background2,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: colors.text,
          drawerInactiveTintColor: colors.text,
          drawerActiveBackgroundColor: colors.color3T,
          drawerInactiveBackgroundColor: "white",
          marginTop: 0,
          borderTopWidth: 0,
        }}
        drawerStyle={{
          marginTop: 0,
          borderTopWidth: 0,
        }}
      >
        <Drawer.Screen
          name="Start"
          component={HomeStack}
          options={{
            drawerIcon: (config) => (
              <Icon size={25} color={"black"} name={"home-outline"} />
            ),
          }}
        />
        <Drawer.Screen
          name="Aufträge"
          component={OrderStack}
          options={{
            drawerIcon: (config) => (
              <MaterialIcon
                size={25}
                color={"black"}
                name={"clipboard-text-outline"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Produkte"
          component={ProductsStack}
          options={{
            drawerIcon: (config) => (
              <Icon size={25} color={"black"} name={"cube-outline"} />
            ),
          }}
        />
        <Drawer.Screen
          name="Einstellungen"
          component={SettingsStack}
          options={{
            drawerIcon: (config) => (
              <Icon size={25} color={"black"} name={"settings-outline"} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
