import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProductStyles from "../Styles/ProductStyel";
import ProductComponent from "../components/Products/productComponent";
import products from "../Data/ProductData";
import DeleteProductPopUp from "../components/Products/deleteProductComponenet";
import EditProductPopUp from "../components/Products/editeProductComponent";
import AddProductPopUp from "../components/Products/addProductComponet";

const ProductsScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleAdd = () => {
    setAddModalVisible(true);
  };

  const handleEdit = (order) => {
    console.log("Selected Order:", order);
    setSelectedOrder(order);
    setEditModalVisible(true);
  };
  const handleDelete = (order) => {
    console.log("Delete Order:", order);
    setSelectedOrder(order);
    setDeleteModalVisible(true);
  };

  const handleEditSave = () => {
    setEditModalVisible(false);
  };

  const handleAddSave = (newProduct) => {
    // Hier können Sie die Logik für das Speichern des neuen Auftrags implementieren
    console.log("Speichern des neuen products", newProduct);
    setAddModalVisible(false);
  };

  const handleDeliteConfirm = () => {
    console.log("delet");
  };

  return (
    <View style={ProductStyles.Order}>
      <View style={ProductStyles.toolbox}>
        <TouchableOpacity
          style={ProductStyles.customButton}
          onPress={handleAdd}
        >
          <Text style={ProductStyles.buttonText}>Hinzufügen</Text>
        </TouchableOpacity>
      </View>
      <ProductComponent
        products={products}
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
        productToDelete={selectedOrder}
      />
    </View>
  );
};

export default ProductsScreen;
