import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import colors from "../../assets/color";

const NotificationSettingsScreen = () => {
  const [isNotifications, setNotifications] = useState(false);
  const toggleSwitch = () => {
    setNotifications(!isNotifications);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background1 }}>
      <View style={styles.item}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name={isNotifications ? "bell-slash" : "bell"}
            color={colors.black}
            size={20}
          />
          <Text style={styles.text}>Benachrichtigungen</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: colors.color1 }}
          thumbColor={isNotifications ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={!isNotifications}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  text: {
    color: colors.text,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default NotificationSettingsScreen;
