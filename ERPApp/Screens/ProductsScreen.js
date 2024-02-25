import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ProductStyles from "../Styles/ProductStyel";
import ProductComponent from "../components/Products/productComponent";
import DeleteProductPopUp from "../components/Products/deleteProductComponenet";
import EditProductPopUp from "../components/Products/editeProductComponent";
import AddProductPopUp from "../components/Products/addProductComponet";
import ProducktInfoPopUp from "../components/Products/infoProduct";
import Icon from "react-native-vector-icons/MaterialIcons";
import ComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/color";
import { getAllProducts } from "../Data/ProductData"; // Importiere die getAllProducts-Funktion aus der API-Datei

const ProductsScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isInfoModalVisible, setInfoModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isProductsUpdated, setIsProductsUpdated] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    fetchProducts();
    setIsProductsUpdated(true);
  }, [isAddModalVisible, isEditModalVisible, isDeleteModalVisible]);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      setProducts(products);
      console.log("load products");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const toggleFilter = () => {
    console.log("Toggel Filter");
  };
  // sort
  const toggleSort = () => {
    console.log("Toggel Sort ");
  };
  // handel Tools
  const handleAdd = () => {
    setAddModalVisible(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditModalVisible(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setDeleteModalVisible(true);
  };

  const handleInfo = (product) => {
    setSelectedProduct(product);
    setInfoModalVisible(true);
  };

  const handleEditSave = () => {
    setEditModalVisible(false);
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
        onEdit={handleEdit}
        onDelete={handleDelete}
        onInfo={handleInfo}
        isProductsUpdated={isProductsUpdated}
        setIsProductsUpdated={setIsProductsUpdated}
        isSearchVisible={isSearchVisible}
      />

      <AddProductPopUp
        isVisible={isAddModalVisible}
        onClose={() => {
          setAddModalVisible(false);
          fetchProducts();
          console.log("save");
        }}
      />
      <EditProductPopUp
        isVisible={isEditModalVisible}
        onClose={() => {
          setEditModalVisible(false);
          fetchProducts();
          setIsProductsUpdated(true);
        }}
        onSave={handleEditSave}
        productToEdit={selectedProduct}
      />
      <DeleteProductPopUp
        isVisible={isDeleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
          fetchProducts();
        }}
        productToDelete={selectedProduct}
      />
      <ProducktInfoPopUp
        isVisible={isInfoModalVisible}
        onClose={() => {
          setInfoModalVisible(false);
        }}
        info={selectedProduct}
      />
    </View>
  );
};

export default ProductsScreen;
