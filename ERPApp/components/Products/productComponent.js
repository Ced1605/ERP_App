import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductComponent = ({ products, onEdit, onDelete }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleEdit = (id) => {
    onEdit(id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <View style={styles.Items}>
                <Text style={styles.productText}>Produktnummer: {item.id}</Text>
                <Text style={styles.productText}>Name: {item.name}</Text>
                <Text style={styles.productText}>Menge: {item.quantity}</Text>
                <Text style={styles.productText}>Type: {item.type}</Text>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => handleEdit(item.id)}>
                  <Icon
                    style={styles.icon}
                    name="edit"
                    size={25}
                    color={colors.black}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Icon
                    style={[styles.icon, { marginRight: 4 }]}
                    name="trash"
                    size={25}
                    color={colors.black}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    backgroundColor: colors.background1,
  },
  listContainer: {
    flex: 1,
  },
  productItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.background3,
    padding: 16,
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productText: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.text,
  },
  checkbox: {
    marginTop: 20,
  },
  Items: {
    flexDirection: "column",
  },
  icon: {
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ProductComponent;
