import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/color";
import CurrenUserData from "../Data/LoginUserData";

const CustomDrawerContent = ({ navigation, handleLogout, ...rest }) => {
  const user = CurrenUserData[0];
  var picture = require("../assets/Profilepicture.jpeg"); // Beispielbild

  return (
    <DrawerContentScrollView
      navigation={navigation}
      {...rest}
      contentContainerStyle={{ backgroundColor: colors.color2 }}
    >
      <View style={styles.drawerHeader}>
        <View style={styles.profileContainer}>
          <Image source={picture} style={styles.profileImage} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>
              {user.name} {user.lastName}
            </Text>
            <Text style={styles.infotext}>{user.role}</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawerItem}>
        <DrawerItemList navigation={navigation} {...rest} />
        <TouchableOpacity
          onPress={() => {
            handleLogout();
            navigation.closeDrawer();
          }}
          style={styles.logoutButton}
        >
          <Icon
            name="logout"
            size={20}
            color={colors.black}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    paddingTop: 40,
    paddingLeft: 16,
    paddingBottom: 20,
    backgroundColor: colors.color2,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.background1,
  },
  userInfo: {
    marginLeft: 15,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  infotext: {
    fontSize: 16,
    color: colors.text,
  },
  drawerItem: {
    backgroundColor: colors.background1,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingVertical: 15,
    marginHorizontal: 16,
  },
  logoutText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 8,
  },
});

export default CustomDrawerContent;
