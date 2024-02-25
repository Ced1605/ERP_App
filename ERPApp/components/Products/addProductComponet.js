import React, { useState } from "react";
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
import { addProduct } from "../../Data/ProductData";

const AddProductPopUp = ({ isVisible, onClose, onProductsUpdate }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shelf, setShelf] = useState("");
  const [row, setRow] = useState("");
  const [info, setInfo] = useState("");

  const handleSave = async () => {
    try {
      const newProduct = {
        id: 0,
        name: name,
        price: parseFloat(price),
        category: category,
        quantity: parseInt(quantity),
        shelf: shelf,
        row: row,
        info: info,
      };

      await addProduct(newProduct);

      setName("");
      setPrice("");
      setCategory("");
      setQuantity("");
      setShelf("");
      setRow("");
      setInfo("");

      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
            placeholder="Name"
            placeholderTextColor={colors.text}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Preis"
            placeholderTextColor={colors.text}
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Kategorie"
            placeholderTextColor={colors.text}
            value={category}
            onChangeText={(text) => setCategory(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mänge"
            placeholderTextColor={colors.text}
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Regal"
            placeholderTextColor={colors.text}
            value={shelf}
            onChangeText={(text) => setShelf(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Fach"
            placeholderTextColor={colors.text}
            value={row}
            onChangeText={(text) => setRow(text)}
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
    backgroundColor: "rgba(0, 0, 0, 0.76)",
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
    width: Dimensions.get("window").width - 100,
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
