import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OrderStyles from "../Styles/OrderStyle";
import CurrentOrdersComponent from "../components/Order/OrderComponent";
import AddOrderPopUp from "../components/Order/addOrderComponent";
import EditOrderPopUp from "../components/Order/editOrderComponent";
import orders from "../Data/OrderData";
import DeleteOrderPopUp from "../components/Order/deletOrderComponenet";

const OrderScreen = () => {
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

  const handleAddSave = (newOrder) => {
    // Hier können Sie die Logik für das Speichern des neuen Auftrags implementieren
    console.log("Speichern des neuen Auftrags", newOrder);
    setAddModalVisible(false);
  };

  const handleDeliteConfirm = () => {
    console.log("delet");
  };

  return (
    <View style={OrderStyles.Order}>
      <View style={OrderStyles.toolbox}>
        <TouchableOpacity style={OrderStyles.customButton} onPress={handleAdd}>
          <Text style={OrderStyles.buttonText}>Hinzufügen</Text>
        </TouchableOpacity>
      </View>
      <CurrentOrdersComponent
        orders={orders}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddOrderPopUp
        isVisible={isAddModalVisible}
        onClose={() => setAddModalVisible(false)}
        onSave={handleAddSave}
      />
      <EditOrderPopUp
        isVisible={isEditModalVisible}
        onClose={() => setEditModalVisible(false)}
        onSave={handleEditSave}
        orderToEdit={selectedOrder}
      />
      <DeleteOrderPopUp
        isVisible={isDeleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        orderToDelete={selectedOrder}
      />
    </View>
  );
};

export default OrderScreen;
