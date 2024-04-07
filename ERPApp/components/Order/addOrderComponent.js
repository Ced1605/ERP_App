import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import colors from "../../assets/color";
import { addOrder } from "../../Data/OrderRequest";
import { Dropdown } from "react-native-element-dropdown";
import { getAllUsers } from "../../Data/UserRequest";

const AddOrderPopUp = ({ isVisible, onClose }) => {
  const [userId, setUserId] = useState("");
  const [info, setInfo] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSave = async () => {
    try {
      const timestamp = new Date().toISOString();
      const newOrder = {
        userId: parseInt(userId),
        date: timestamp,
        info: info,
        status: "inProgress",
      };
      await addOrder(newOrder);
      setInfo("");
      setUserId("");
      onClose();
    } catch (error) {
      console.error("Error adding Order", error);
    }
  };

  const data = users.map((user) => ({
    label: `${user.name} ${user.lastName}`,
    value: user.id,
  }));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Auftrag Hinzufügen</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Kunde"
            searchPlaceholder="Search..."
            value={userId}
            onChange={(item) => {
              setUserId(item.value);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Info"
            placeholderTextColor={colors.text}
            value={info}
            onChangeText={(text) => setInfo(text)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Abbrechen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Speichern</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.76)", //scren darknes pop up
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width - 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: colors.text,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.color2,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  dropdown: {
    height: 40,
    width: Dimensions.get("window").width - 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: colors.text,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default AddOrderPopUp;
