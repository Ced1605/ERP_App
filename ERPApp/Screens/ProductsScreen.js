import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ProductStyles from "../Styles/ProductStyel";
import ProductComponent from "../components/Products/productComponent";

import AddProductPopUp from "../components/Products/addProductComponet";
//import ProducktInfoPopUp from "../components/Products/infoProduct";
import Icon from "react-native-vector-icons/MaterialIcons";
import ComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/color";
import { getAllProducts } from "../Data/ProductRequest"; // Importiere die getAllProducts-Funktion aus der API-Datei
import { useNavigation } from "@react-navigation/native";

const ProductsScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isProductsUpdated, setIsProductsUpdated] = useState(false);
  //const navigation = useNavigation();
  //const [searchTerm, setSearchTerm] = useState("");
  //const [isInfoModalVisible, setInfoModalVisible] = useState(false); // Zustand für die Anzeige des Info-Popups
  //const [selectedProduct, setSelectedProduct] = useState(null);
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    fetchProducts();
    setIsProductsUpdated(true);
  }, [isAddModalVisible]);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      setProducts(products);
      console.log("load products Produckt page");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const toggleFilter = () => {
    console.log("Toggel Filter");
  };

  const toggleSort = () => {
    console.log("Toggel Sort ");
  };

  const handleAdd = () => {
    setAddModalVisible(true);
  };
  return (
    <View style={ProductStyles.Order}>
      <View style={ProductStyles.toolbox}>
        <View>
          <TouchableOpacity
            style={ProductStyles.customButton}
            onPress={handleAdd}
          >
            <Icon name="add" color={"white"} size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={ProductStyles.customButton}
            onPress={toggleSearch}
          >
            <Icon name="search" color={"white"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={ProductStyles.customButton}
            onPress={toggleSort}
          >
            <ComIcon name="sort-ascending" color={"white"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={ProductStyles.customButton}
            onPress={toggleFilter}
          >
            <Icon name="filter-alt" color={"white"} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <ProductComponent
        products={filteredProducts}
        isProductsUpdated={isProductsUpdated}
        setIsProductsUpdated={setIsProductsUpdated}
        isSearchVisible={isSearchVisible}
      />
      <AddProductPopUp
        isVisible={isAddModalVisible}
        onClose={() => {
          setAddModalVisible(false);
          fetchProducts();
          console.log("ProductScreen: save Product");
        }}
      />
    </View>
  );
};

export default ProductsScreen;
