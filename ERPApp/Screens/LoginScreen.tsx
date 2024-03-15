import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/color";
import { login } from "../Data/LoginRequest";
import updateUserData from "../components/function/UpdateUserData";
import GetLoginUserData from "../components/function/GetUserDateAfterLogin";

const LoginScreen = ({ route, navigation }) => {
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegistrationButtonPress = () => {
    navigation.navigate("Register");
  };

  const handleLogin = async () => {
    try {
      const userToken = await login(name, password);
      updateUserData({ UserToken: userToken });
      GetLoginUserData(userToken);
      route.params?.handleLogin();
      console.log("Erfolgreich angemeldet:", userToken);
    } catch (error) {
      console.error("Fehler beim Anmelden:", error, "  Login Scrreen");
      setError(true);
    }
  };

  return (
    <View style={styles.boddy}>
      <Text style={styles.headline}>Login</Text>
      <View style={styles.LoginContainer}>
        <View>
          <Text style={styles.LoginText}>Benutzer Name</Text>
          <TextInput
            value={name}
            onChangeText={setUserName}
            style={styles.LoginInput}
            autoComplete={"username"}
            textContentType={"username"}
            autoCorrect={false}
          />
        </View>
        <Text style={styles.LoginText}>Password</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={[styles.LoginInput, { flex: 1 }]}
            autoComplete={"current-password"}
            textContentType={"password"}
            secureTextEntry={!showPassword}
            autoCorrect={false}
            autoCapitalize={"none"}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
        {error && (
          <Text style={styles.errorText}>
            Benutzer oder Passord Nicht korrekt
          </Text>
        )}
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegistrationButtonPress}>
        <Text style={styles.Register}>Registrieren</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boddy: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: colors.background1,
    alignItems: "center",
  },
  headline: {
    marginLeft: Dimensions.get("window").width >= 600 ? -300 : 40,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: Dimensions.get("window").width >= 600 ? "center" : "flex-start",
  },
  LoginContainer: {
    //flex: 1,
    width:
      Dimensions.get("window").width >= 600
        ? 400
        : Dimensions.get("window").width - 70,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.background2,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  LoginText: {
    fontSize: 15,
    marginBottom: -15,
  },
  LoginInput: {
    fontSize: 18,
    paddingTop: 10,
    borderBottomWidth: 2,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: colors.bordercolor,
    maxWidth: Dimensions.get("window").width - 100,
  },
  buttonContainer: {
    backgroundColor: colors.color1,
    paddingVertical: 12,
    marginHorizontal: 40,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width:
      Dimensions.get("window").width >= 600
        ? 400
        : Dimensions.get("window").width - 70,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  Register: {
    color: colors.text,
  },
  errorText: {
    alignSelf: "center",
    margin: 5,
    color: "red",
  },
});

export default LoginScreen;
