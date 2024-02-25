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
import Icon from "react-native-vector-icons/Ionicons";

const ProducktInfoPopUp = ({ isVisible, onClose, info }) => {
  try {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{info.name}</Text>
            <View>
              <View>
                <Text style={styles.itemText}>
                  <Text style={{ fontWeight: "bold" }}>
                    Forhandende Mänge:{" "}
                  </Text>
                  <Text>{info.quantity}</Text>
                </Text>
                <Text style={styles.itemText}>
                  <Text style={{ fontWeight: "bold" }}>Artikel Nr: </Text>
                  <Text>{info.id}</Text>
                </Text>
                <Text style={styles.itemText}>
                  <Text style={{ fontWeight: "bold" }}>kategorie: </Text>
                  <Text>{info.category}</Text>
                </Text>
                <Text style={styles.itemText}>
                  <Text style={{ fontWeight: "bold" }}>Preis: </Text>
                  <Text>{info.price} €</Text>
                </Text>
                <Text style={styles.itemText}>
                  <Text style={{ fontWeight: "bold" }}>Regal: </Text>
                  <Text>{info.shelf}, </Text>
                  <Text style={{ fontWeight: "bold" }}>Fach: </Text>
                  <Text>{info.row}</Text>
                </Text>
                <View style={styles.info}>
                  <Text style={{ fontWeight: "bold" }}>
                    Produckt Beschreibung:
                  </Text>
                  <Text>{info.info}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onClose();
              }}
            >
              <Icon name="close" size={25} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  } catch (error) {
    console.error("Error rendering ProducktInfoPopUp:", error);
    return null;
  }
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
  itemText: {
    color: colors.text,
    borderBottomWidth: 2,
    borderColor: colors.bordercolor,
    fontSize: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
    maxWidth: Dimensions.get("window").width - 100,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    alignSelf: "flex-end",
    marginLeft: 5,
    marginBottom: -10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  info: {
    color: colors.text,
    fontSize: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
    maxWidth: Dimensions.get("window").width - 100,
  },
});

export default ProducktInfoPopUp;
