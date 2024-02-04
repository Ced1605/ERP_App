import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ProductStyles from "../Styles/ProductStyel";
import ProductComponent from "../components/Products/productComponent";
import products from "../Data/ProductData";
import DeleteProductPopUp from "../components/Products/deleteProductComponenet";
import EditProductPopUp from "../components/Products/editeProductComponent";
import AddProductPopUp from "../components/Products/addProductComponet";
import Icon from "react-native-vector-icons/MaterialIcons";
import ComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/color";

const ProductsScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  //filter
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  useEffect(() => {
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toString().includes(searchTerm) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

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
    setSelectedOrder(product);
    setEditModalVisible(true);
  };

  const handleDelete = (product) => {
    setSelectedOrder(product);
    setDeleteModalVisible(true);
  };

  const handleEditSave = () => {
    setEditModalVisible(false);
  };

  const handleAddSave = (newProduct) => {
    console.log("Speichern des neuen Produkts", newProduct);
    setAddModalVisible(false);
  };

  const handleDeleteConfirm = () => {
    console.log("Löschen bestätigt");
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
      {isSearchVisible && (
        <TextInput
          style={ProductStyles.searchInput}
          placeholder="Suchen..."
          placeholderTextColor={colors.text}
          onChangeText={(text) => setSearchTerm(text)}
        />
      )}
      <ProductComponent
        products={filteredProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddProductPopUp
        isVisible={isAddModalVisible}
        onClose={() => setAddModalVisible(false)}
        onSave={handleAddSave}
      />
      <EditProductPopUp
        isVisible={isEditModalVisible}
        onClose={() => setEditModalVisible(false)}
        onSave={handleEditSave}
        productToEdit={selectedOrder}
      />
      <DeleteProductPopUp
        isVisible={isDeleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onDeleteConfirm={handleDeleteConfirm}
        productToDelete={selectedOrder}
      />
    </View>
  );
};

export default ProductsScreen;
