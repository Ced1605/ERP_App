import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Picker from "@react-native-picker/picker";

const FilterDropdown = ({ selectedValue, onValueChange, filteritems }) => {
  try {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Filter by Type:</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={onValueChange}
        >
          {filteritems.map((fitem) => (
            <Picker.Item
              key={fitem.value}
              label={fitem.label}
              value={fitem.value}
            />
          ))}
        </Picker>
      </View>
    );
  } catch (error) {
    console.error("Error in FilterDropdown:", error);
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default FilterDropdown;
