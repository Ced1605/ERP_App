import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ProductStyles from "../Styles/ProductStyel";
import ProductComponent from "../components/Products/productComponent";
import FilterDropdown from "../components/Products/filterproductComponent";
import products from "../Data/ProductData";
import DeleteProductPopUp from "../components/Products/deleteProductComponenet";
import EditProductPopUp from "../components/Products/editeProductComponent";
import AddProductPopUp from "../components/Products/addProductComponet";
import Icon from "react-native-vector-icons/MaterialIcons";
import ComIcon from "react-native-vector-icons/MaterialCommunityIcons";

const typeOptions = [
  { label: "Food", value: "Food" },
  { label: "Wood", value: "Wood" },
  { label: "Paper", value: "Paper" },
];

const ProductsScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleDropdownChange = (value) => {
    setSelectedType(value);
    filterProducts(searchTerm, value);
  };

  const filterProducts = (name, type) => {
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(name.toLowerCase()) &&
        (type === "" || item.type.toLowerCase().includes(type.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts(searchTerm, selectedType);
  }, [searchTerm, selectedType]);

  const handleAdd = () => {
    setAddModalVisible(true);
  };

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setEditModalVisible(true);
  };

  const handleDelete = (order) => {
    setSelectedOrder(order);
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
          <TouchableOpacity style={ProductStyles.customButton} onPress={null}>
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
          onChangeText={(text) => setSearchTerm(text)}
        />
      )}
      {isFilterVisible && (
        <FilterDropdown
          selectedValue={selectedType}
          onValueChange={handleDropdownChange}
          filteritems={typeOptions}
        />
      )}
      <ProductComponent
        products={filteredProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isSearchVisible={isSearchVisible}
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
