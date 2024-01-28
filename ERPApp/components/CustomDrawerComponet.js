import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { colors } from "../assets/color";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomDrawerContent = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
      setShowLoginModal(false);
    } else {
      setError("* Falscher Benutzername oder falsches Passwort");
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setPassword("");
    setUsername("");
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View>
        <View style={styles.drawerHeader}>
          {loggedIn ? (
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/Iphone Hintergrundbild Tumblr Ästhetisch.jpeg")}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.infotext}>admin</Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setShowLoginModal(true)}>
              <Text style={styles.loginButton}>Anmelden</Text>
            </TouchableOpacity>
          )}
        </View>
        <DrawerItemList {...props} />
        <Modal
          visible={showLoginModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Benutzername:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Passwort:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  secureTextEntry={true}
                />
              </View>
              {error ? <Text style={styles.error}>{error}</Text> : null}
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Anmelden</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setShowLoginModal(false)}
                >
                  <Text style={styles.buttonText}>Abbrechen</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Icon
            name="logout"
            size={20}
            color="black"
            style={{ marginRight: 8 }}
          />
          <Text style={{ fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#000000b9",
    justifyContent: "center",
    padding: 10,
  },
  modalContent: {
    borderRadius: 15,
    backgroundColor: colors.background1,
    padding: 20,
  },
  input: {
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 3,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 8,
  },
  button: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.color2,
  },
  buttonText: {},
  drawerHeader: {
    padding: 20,
    backgroundColor: colors.color3T,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    color: "black",
  },
  infotext: {
    fontSize: 13,
    color: "black",
  },
  drawerContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 20,
  },
});
export default CustomDrawerContent;
