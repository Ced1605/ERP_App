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
import { getAllProducts } from "../../Data/ProductRequest";
import { useNavigation } from "@react-navigation/native";

const ProductComponent = ({ onInfo, isProductsUpdated, isSearchVisible }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();
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

  const handleInfo = (product) => {
    //onInfo(id);
    navigation.navigate("ProductInfo", { product });
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
          <TouchableOpacity
            style={styles.productItem}
            onPress={() => handleInfo(item)}
          >
            <View style={styles.Items}>
              <Text style={styles.productText}>Product Number: {item.id}</Text>
              <Text style={styles.productText}>Name: {item.name}</Text>
            </View>
            <Icon name="angle-right" size={25} color={colors.black} />
          </TouchableOpacity>
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
});

export default ProductComponent;
