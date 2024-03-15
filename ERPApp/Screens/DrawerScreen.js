import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import CustomDrawerContent from "../components/CustomDrawerComponet";
import colors from "../assets/color";
//Screens
import HomeScreen from "./HomeScreen";
import OrderScreen from "./OrderScreen";
import ProductsScreen from "./ProductsScreen";
import SettingsScreen from "./SettingsScreen";
import AllUserSettingsScreen from "./AllUserScreen";
import ProducktInfoPopUp from "../components/Products/infoProduct";
//Settings Screens
import UserSettingsScreen from "./SettingScreens/UserSettingsScreen";
import InterfaceSettingsScreen from "./SettingScreens/InterfaceSettingsScreen";
import NotificationSettingsScreen from "./SettingScreens/NotificationSettingsScreen";
//data
import CurrenUserData from "../Data/LoginUserData";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const OrderStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OrderScreen"
      component={OrderScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const ProductsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductsScreen"
      component={ProductsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductInfo"
      component={ProducktInfoPopUp}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Benutzer"
      component={UserSettingsScreen}
      options={{
        headerShown: true,
        title: "Benutzer",
        headerStyle: { backgroundColor: colors.background1 },
        headerTintColor: colors.text,
      }}
    />
    <Stack.Screen
      name="Oberfläche"
      component={InterfaceSettingsScreen}
      options={{
        headerShown: true,
        title: "Oberfläche",
        headerStyle: { backgroundColor: colors.background1 },
        headerTintColor: colors.text,
      }}
    />
    <Stack.Screen
      name="Benachrichtigungen"
      component={NotificationSettingsScreen}
      options={{
        headerShown: true,
        title: "Benachrichtigungen",
        headerStyle: { backgroundColor: colors.background1 },
        headerTintColor: colors.text,
      }}
    />
  </Stack.Navigator>
);

const DrawerScreen = ({ route }) => {
  const handleLogout = route.params?.handleLogout;
  const user = CurrenUserData[0];
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} handleLogout={handleLogout} />
      )}
      drawerStyle={{ backgroundColor: colors.background1 }}
      screenOptions={{
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.text,
        drawerActiveBackgroundColor: colors.color3T,
        headerTintColor: colors.text,
      }}
    >
      <Drawer.Screen
        name="Start"
        component={HomeStack}
        options={{
          drawerIcon: () => (
            <Icon name="home-outline" size={25} color={colors.black} />
          ),
        }}
      />
      <Drawer.Screen
        name="Produkte"
        component={ProductsStack}
        options={{
          drawerIcon: () => (
            <Icon name="cube-outline" size={25} color={colors.black} />
          ),
        }}
      />
      <Drawer.Screen
        name="Aufträge"
        component={OrderStack}
        options={{
          drawerIcon: () => (
            <MaterialIcon
              name="clipboard-text-outline"
              size={25}
              color={colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Einstellungen"
        component={SettingsStack}
        options={{
          drawerIcon: () => (
            <Icon name="settings-outline" size={25} color={colors.black} />
          ),
        }}
      />
      {user.role === "admin" && (
        <Drawer.Screen
          name="Employees"
          component={AllUserSettingsScreen}
          options={{
            drawerIcon: () => (
              <FeatherIcon name="users" size={25} color={colors.black} />
            ),
          }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
