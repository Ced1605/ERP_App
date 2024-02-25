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
//Settig Screens
import UserSettingsScreen from "./SettingScreens/UserSettingsScreen";
import InterfaceSettingsScreen from "./SettingScreens/InterfaceSettingsScreen";
import NotificationSettingsScreen from "./SettingScreens/NotificationSettingsScreen";
//data
import CurrenUserData from "../Data/LoginUserData";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const user = CurrenUserData[0];
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
const MitarbeiterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllUserSettingsScreen"
        component={AllUserSettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerTintColor: colors.color1 }}
    >
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
            backgroundColor: colors.background1,
          },
        }}
      />
      <Stack.Screen
        name="Oberfläche"
        component={InterfaceSettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background1,
          },
        }}
      />
      <Stack.Screen
        name="Benachrichtigungen"
        component={NotificationSettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background1,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerScreen = ({ route, navigation }) => {
  const handleLogout = route.params?.handleLogout;
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} handleLogout={handleLogout} />
      )}
      screenOptions={{
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.text,
        drawerActiveBackgroundColor: colors.color3T,
        headerTintColor: colors.text,
        marginTop: 0,
        borderTopWidth: 0,
      }}
      drawerStyle={{
        marginTop: 0,
        borderTopWidth: 0,
        backgroundColor: colors.background1,
      }}
    >
      <Drawer.Screen
        name="Start"
        component={HomeStack}
        options={{
          drawerIcon: (config) => (
            <Icon size={25} color={colors.black} name={"home-outline"} />
          ),
        }}
      />
      <Drawer.Screen
        name="Produkte"
        component={ProductsStack}
        options={{
          drawerIcon: (config) => (
            <Icon size={25} color={colors.black} name={"cube-outline"} />
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
              color={colors.black}
              name={"clipboard-text-outline"}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Einstellungen"
        component={SettingsStack}
        options={{
          drawerIcon: (config) => (
            <Icon size={25} color={colors.black} name={"settings-outline"} />
          ),
        }}
      />

      {user.role === "admin" && (
        <Drawer.Screen
          name="Mitarbeiter"
          component={MitarbeiterStack}
          options={{
            drawerIcon: (config) => (
              <FeatherIcon size={25} color={colors.black} name={"users"} />
            ),
          }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
