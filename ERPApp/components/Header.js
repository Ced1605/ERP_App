// Header.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const Header = ({ title }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      navigation.dispatch(DrawerActions.openDrawer());
    } else {
      navigation.dispatch(DrawerActions.closeDrawer());
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={toggleMenu}>
        <Text style={styles.menuButton}>
          {isMenuOpen ? "Schließen" : "Menü"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fccd86ff",
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: "#fff",
  },
  menuButton: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Header;
