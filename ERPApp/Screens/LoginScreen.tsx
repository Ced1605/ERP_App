import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // oder eine andere Icon-Bibliothek
import colors from "../assets/color";

const LoginScreen = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.boddy}>
      <Text style={styles.headline}>Login</Text>
      <View style={styles.LoginContainer}>
        <View>
          <Text style={styles.LoginText}>Benutzer Name</Text>
          <TextInput
            style={styles.LoginInput}
            autoComplete={"username"}
            textContentType={"username"}
            autoCorrect={false}
          />
        </View>
        <Text style={styles.LoginText}>Password</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
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
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.Register}>Regestriern</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boddy: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: colors.background1,
  },
  headline: {
    marginLeft: 40,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
  LoginContainer: {
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.background2,
  },
  LoginText: {
    fontSize: 15,
  },
  LoginInput: {
    fontSize: 15,
    padding: 2,
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
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  Register: {
    alignSelf: "center",
  },
});

export default LoginScreen;
