import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawerContent from "./components/CustomDrawerComponet";
import LoginScreen from "./Screens/LoginScreen";
import Screens from "./Screens/Screns";
import colors from "./assets/color";
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

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogout = () => {
    // Hier kann deine Auslogik implementiert werden, z.B. Auth-Token entfernen, etc.
    setIsLogged(false);
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {isLogged ? (
        <Screens handleLogout={handleLogout} />
      ) : (
        <LoginScreen handleLogin={() => setIsLogged(true)} />
      )}
    </NavigationContainer>
  );
};

export default App;
