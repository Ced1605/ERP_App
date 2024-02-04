import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import AllUserData from "../Data/AllUserData";
import colors from "../assets/color";

interface User {
  id: number;
  name: string;
  lastName: string;
  address: string;
  role: string;
}

const AllUserSettingsScreen: React.FC = () => {
  const [selectedRoles, setSelectedRoles] = useState<{ [key: number]: string }>(
    {}
  );

  const handleRoleChange = (userId: number, role: string) => {
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [userId]: role,
    }));
    // You can add logic here to save the changed role to your data source
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Users</Text>
      <FlatList
        data={AllUserData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <View>
              <Text style={styles.userName}>
                {item.name} {item.lastName}
              </Text>
              <Text style={styles.userName}>{item.address}</Text>
            </View>
            <SelectDropdown
              data={["user", "admin"]}
              defaultValue={item.role}
              onSelect={(selectedItem: string) =>
                handleRoleChange(item.id, selectedItem)
              }
              buttonTextAfterSelection={(selectedItem: string) => selectedItem}
              rowTextForSelection={(item: string) => item}
              defaultButtonText={item.role}
              dropdownStyle={{
                backgroundColor: colors.background1,
                borderColor: colors.bordercolor,
              }}
              buttonStyle={{ height: 40, width: 120, marginTop: 8 }}
              buttonTextStyle={{
                fontSize: 14,
                textAlign: "left",
                color: colors.text,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 16,
  },
  userContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.bordercolor,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    color: colors.text,
  },
});

export default AllUserSettingsScreen;
