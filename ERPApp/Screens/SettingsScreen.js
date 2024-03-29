import React, { createContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../assets/color";

const SettingsScreen = ({ navigation }) => {
  const userSettings = () => {
    navigation.navigate("Benutzer");
  };

  const interfaceSettings = () => {
    navigation.navigate("Oberfläche");
  };

  const notificationSettings = () => {
    navigation.navigate("Benachrichtigungen");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background1 }}>
      <View style={settingsStyels.container}>
        <TouchableOpacity
          style={settingsStyels.containeritems}
          onPress={userSettings}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="user" size={25} color={colors.black} />
            <Text style={settingsStyels.itemtext}>Benutzer</Text>
          </View>
          <View>
            <Icon name="right" size={25} color={colors.black} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={settingsStyels.containeritems}
          onPress={interfaceSettings}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="tool" size={25} color={colors.black} />
            <Text style={settingsStyels.itemtext}>Oberfläche</Text>
          </View>

          <View>
            <Icon name="right" size={25} color={colors.black} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={settingsStyels.containeritems}
          onPress={notificationSettings}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="bells" size={25} color={colors.black} />
            <Text style={settingsStyels.itemtext}>Benachrichtigungen</Text>
          </View>
          <View>
            <Icon name="right" size={25} color={colors.black} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const settingsStyels = StyleSheet.create({
  container: {
    margin: 10,
  },
  containeritems: {
    flexDirection: "row",
    marginVertical: 7,
    paddingBottom: 14,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
  },
  itemtext: {
    fontSize: 18,
    marginLeft: 10,
    color: colors.text,
  },
});

export default SettingsScreen;
