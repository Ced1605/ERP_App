import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import colors from "../../assets/color";
import { deleteProduct } from "../../Data/ProductRequest";
import { useNavigation } from "@react-navigation/native";

const DeleteProductPopUp = ({ isVisible, onClose, productToDelete }) => {
  const id = productToDelete;
  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={require("../../assets/Icons/warnungIcon.gif")} />
          <Text style={styles.modalTitle}>Product Löschen</Text>
          <Text style={{ margin: 10 }}>
            Möchten sie Produkt {id} Wirklich Löschen Das Produkt wird für lange
            zeit Verlohren Gehen
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Abbrechen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                deleteProduct(parseInt(id));
                console.log("Confirm Delete Product", id);
                navigation.navigate("ProductsScreen");
                onClose();
              }}
            >
              <Text style={styles.buttonText}>Löschen</Text>
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
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: colors.color2,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DeleteProductPopUp;
