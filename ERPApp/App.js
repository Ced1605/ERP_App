import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
import OrderScreen from "./Screens/OrderScreen";
import Header from "./components/Header";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ scene }) => <Header title={scene.route.name} />,
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          header: ({ scene }) => <Header title={scene.route.name} />,
        }}
      />
      {/* Weitere Screens hier mit dem gleichen Header */}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainStack} />
        {/* Weitere Drawer-Screens hier, falls erforderlich */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
