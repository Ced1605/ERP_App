import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/color";
import CurrenUserData from "../Data/LoginUserData";

const CustomDrawerContent = ({ navigation, handleLogout, ...props }) => {
  const user = CurrenUserData[0];
  var picture = user.profilePicture;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: colors.color2 }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={picture} style={styles.profileImage} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.username}>
              {user.name} {user.lastName}
            </Text>
            <Text style={styles.infotext}>{user.role}</Text>
          </View>
        </View>
      </View>
      <View style={styles.DrawerItem}>
        <DrawerItemList {...props} />
        <View style={styles.logoutContainer}>
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
            <Text style={{ fontSize: 16, color: colors.text }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = {
  drawerHeader: {
    paddingTop: 40,
    paddingLeft: 16,
    paddingBottom: 20,
    backgroundColor: colors.color2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.background1,
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
  DrawerItem: {
    backgroundColor: colors.background1,
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingTop: 10,
    marginHorizontal: 16,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
};

export default CustomDrawerContent;
