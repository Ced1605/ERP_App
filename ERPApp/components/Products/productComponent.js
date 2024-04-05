import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome";
import { getAllProducts } from "../../Data/ProductRequest";
import { useNavigation } from "@react-navigation/native";

const ProductComponent = ({
  isProductsUpdated,
  isSearchVisible,
  setIsProductsUpdated,
}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [LodingError, setLodingError] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, [isProductsUpdated]);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      setProducts(products);
      setFilteredProducts(products);
      setIsProductsUpdated(true); // Setze isProductsUpdated auf true nach dem Laden der Produkte
      console.log("Products updated");
      setLodingError(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInfo = (product) => {
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

  if (products.length === 0) {
    setTimeout(() => {
      setLodingError(false);
    }, 4000);
    return (
      <View style={styles.noProductsContainer}>
        {LodingError ? (
          <ActivityIndicator size="80" color={colors.black} />
        ) : (
          <Text>Fehler Beim Laden der Produkte</Text>
        )}
      </View>
    );
  }

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
  noProductsImage: {
    width: 80,
    height: 80,
    backgroundColor: "#00000000",
  },
  noProductsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default ProductComponent;
