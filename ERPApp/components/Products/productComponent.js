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
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAllProducts, getProduct } from "../../Data/ProductRequest";

const ProductComponent = ({
  onEdit,
  onDelete,
  onInfo,
  isProductsUpdated,
  isSearchVisible,
}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [isProductsUpdated]);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      setProducts(products);
      setFilteredProducts(products); // Initially set filtered products to all products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEdit = async (id) => {
    onEdit(id);
  };

  const handleDelete = async (id) => {
    onDelete(id);
  };
  const handleInfo = async (id) => {
    onInfo(id);
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.id.toString().includes(text) ||
        item.category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.container}>
      {isSearchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={colors.text}
          onChangeText={handleSearch}
        />
      )}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <View style={styles.Items}>
              <Text style={styles.productText}>Product Number: {item.id}</Text>
              <Text style={styles.productText}>Name: {item.name}</Text>
              <Text style={styles.productText}>Quantity: {item.quantity}</Text>
              <Text style={styles.productText}>Price: {item.price} €</Text>
              <Text style={styles.productText}>Type: {item.category}</Text>
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
              <TouchableOpacity onPress={() => handleInfo(item)}>
                <Ionicons
                  style={[styles.icon, { marginRight: 4, marginTop: 60 }]}
                  name="information-circle-outline"
                  size={25}
                  color={colors.black}
                />
              </TouchableOpacity>
            </View>
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
  },
  searchInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 5,
    color: colors.text,
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
