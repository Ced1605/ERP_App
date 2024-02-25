import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import DrawerScreen from "./Screens/DrawerScreen";
import colors from "./assets/color";
import { login } from "./Data/UserDbData";
import { saveUserData } from "./Data/LoginUserData";
const MyTheme = {
  colors: {
    primary: colors.color1,
    card: colors.header,
    text: colors.text,
    border: colors.bordercolor,
    notification: "rgb(255, 69, 58)",
    color: colors.text,
  },
};
const Stack = createStackNavigator();

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {isLogged ? (
          <>
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerScreen}
              options={{ headerShown: false }}
              initialParams={{ handleLogout: handleLogout }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
              initialParams={{ handleLogin: handleLogin }}
            />
            <Stack.Screen
              name="Register"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
