import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../../assets/color";

const AddProductPopUp = ({ isVisible, onClose, onSave }) => {
  const [id, setId] = useState("");
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSave = () => {
    const newOrder = {
      id: id,
      customer: customer,
      product: product,
      quantity: quantity,
    };
    onSave(newOrder);
    setId("");
    setCustomer("");
    setProduct("");
    setQuantity("");
  };

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
          <TextInput
            style={styles.input}
            placeholder="id"
            placeholderTextColor={colors.text}
            value={id}
            onChangeText={(text) => setId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Customer"
            placeholderTextColor={colors.text}
            value={customer}
            onChangeText={(text) => setCustomer(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Product"
            placeholderTextColor={colors.text}
            value={product}
            onChangeText={(text) => setProduct(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mänge"
            placeholderTextColor={colors.text}
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
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
    backgroundColor: colors.background3,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.text,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
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
});

export default AddProductPopUp;
