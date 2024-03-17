import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import DeleteProductPopUp from "./deleteProductComponenet";
import { updateProduct } from "../../Data/ProductRequest";
//import EditProductPopUp from "./editeProductComponent";

const ProductInfoPopUp = ({ onEdit, onDelete, route }) => {
  const navigation = useNavigation();
  const { product } = route.params;
  const [isEditMode, setEditMode] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  let name, price, category, quantity, shelf, row, info;
  const updatedProduct = {
    name: name,
    price: price,
    category: category,
    quantity: quantity,
    shelf: shelf,
    row: row,
    info: info,
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleEditSave = async () => {
    try {
      await updateProduct(product.id, product);
      setEditMode(false);
      console.log("Speichern der Prodcuktes ", product.id);
    } catch (error) {
      console.error("Error updating product:", error);
      // Behandlung von Fehlern hier
    }
  };
  const handleEditCancel = () => {
    setEditMode(false);
  };

  const handleDelete = () => {
    setDeleteModalVisible(true);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.iconContainer}>
          <Icon name="chevron-left" size={25} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>{product.name}</Text>
        {!isEditMode && (
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleEdit} style={styles.iconButton}>
              <Icon name="edit" size={25} color={colors.black} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
              <Icon name="trash" size={25} color={colors.black} />
            </TouchableOpacity>
          </View>
        )}
        {isEditMode && (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={handleEditSave}
              style={styles.iconButton}
            >
              <Icon name="save" size={25} color={colors.black} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleEditCancel}
              style={styles.iconButton}
            >
              <Icon name="close" size={25} color={colors.black} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Vorhandene Menge: {product.quantity}
        </Text>
        <View style={styles.separator} />
        <Text style={styles.infoText}>Artikel Nr: {product.id}</Text>
        <View style={styles.separator} />
        <Text style={styles.infoText}>Kategorie: {product.category}</Text>
        <View style={styles.separator} />
        <Text style={styles.infoText}>Preis: {product.price} €</Text>
        <View style={styles.separator} />
        <Text style={styles.infoText}>
          Regal: {product.shelf}, Fach: {product.row}
        </Text>
        <View style={styles.separator} />
        <Text style={styles.infoText}>Produktbeschreibung:</Text>
        <Text style={styles.description}>{product.info}</Text>
      </View>

      <DeleteProductPopUp
        isVisible={isDeleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
          //fetchProducts();
        }}
        productToDelete={product.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    width: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.bordercolor,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default ProductInfoPopUp;
