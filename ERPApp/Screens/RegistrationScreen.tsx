import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/color";

const RegistrationScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = () => {
    navigation.navigate("Login");
  };

  const handelQuit = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.boddy}>
      <Text style={styles.headline}>Regestrieren</Text>
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
        <View>
          <Text style={styles.LoginText}>Email</Text>
          <TextInput
            style={styles.LoginInput}
            autoComplete={"email"}
            inputMode={"email"}
            textContentType={"emailAddress"}
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
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleRegistration}
      >
        <Text style={styles.Register}>Regestriern</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handelQuit}>
        <Text style={{ color: colors.text }}>Abbrechen</Text>
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
    flex: 1,
    width:
      Dimensions.get("window").width >= 600
        ? 400
        : Dimensions.get("window").width - 70,
    maxHeight: 250,
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
    width:
      Dimensions.get("window").width >= 600
        ? 400
        : Dimensions.get("window").width - 70,
  },
  Register: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
