import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import CurrenUserData from "../../Data/LoginUserData";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../assets/color";

const UserSettingsScreen = () => {
  const user = CurrenUserData[0];
  var picture = user.profilePicture;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background1 }}>
      <View style={styles.headerContainer}>
        <Image source={picture} style={styles.image} />
        <TouchableOpacity onPress={null}>
          <Icon
            name="camera-outline"
            size={30}
            color="black"
            style={styles.pencilIcon}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.name}>
          {user.name} {user.lastName}
        </Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{user.name}</Text>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeButtonText}>ändern</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Nachname</Text>
          <Text style={styles.value}>{user.lastName}</Text>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeButtonText}>ändern</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Adresse</Text>
          <Text style={styles.value}>{user.address}</Text>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeButtonText}>ändern</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Token: {user.UserToken}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "lightgray",
    marginLeft: 30,
  },
  pencilIcon: {
    top: 170,
    left: -30,
  },
  name: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
  },
  role: {
    marginBottom: 20,
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "400",
    color: colors.text,
  },
  infoContainer: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
    paddingBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  value: {
    fontSize: 16,
    color: colors.text,
  },
  changeButton: {},
  changeButtonText: {
    fontSize: 14,
    color: colors.graytest,
    fontWeight: "400",
  },
});

export default UserSettingsScreen;
