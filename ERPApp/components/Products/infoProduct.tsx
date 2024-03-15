import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ProductInfoPopUp = ({
  isVisible,
  onClose,
  info,
  onEdit,
  onDelete,
  route,
}) => {
  const navigation = useNavigation();
  const { product } = route.params;

  const handleEdit = () => {
    onEdit(product.id);
  };

  const handleDelete = () => {
    onDelete(product.id);
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
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleEdit} style={styles.iconButton}>
            <Icon name="edit" size={20} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
            <Icon name="trash" size={20} color={colors.black} />
          </TouchableOpacity>
        </View>
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
    padding: 5,
    borderRadius: 5,
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
