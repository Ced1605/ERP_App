import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import OrderStyles from "../Styles/OrderStyle";
import CurrentOrdersComponent from "../components/Order/OrderComponent";
import AddOrderPopUp from "../components/Order/addOrderComponent";
import EditOrderPopUp from "../components/Order/editOrderComponent";
import orders from "../Data/OrderData";
import DeleteOrderPopUp from "../components/Order/deletOrderComponenet";
import Icon from "react-native-vector-icons/MaterialIcons";
import ComIcon from "react-native-vector-icons/MaterialCommunityIcons";

const OrderScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrder, setFilteredOrder] = useState(orders);

  //filter
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  useEffect(() => {
    const filtered = orders.filter(
      (item) =>
        item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toString().includes(searchTerm)
    );
    setFilteredOrder(filtered);
  }, [searchTerm, orders]);

  const toggleFilter = () => {
    console.log("Toggel Filter");
  };
  // sort
  const toggleSort = () => {
    console.log("Toggel Sort ");
  };

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
        <View>
          <TouchableOpacity
            style={OrderStyles.customButton}
            onPress={handleAdd}
          >
            <Icon name="add" color={"white"} size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={OrderStyles.customButton}
            onPress={toggleSearch}
          >
            <Icon name="search" color={"white"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={OrderStyles.customButton}
            onPress={toggleSort}
          >
            <ComIcon name="sort-ascending" color={"white"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={OrderStyles.customButton}
            onPress={toggleFilter}
          >
            <Icon name="filter-alt" color={"white"} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {isSearchVisible && (
        <TextInput
          style={OrderStyles.searchInput}
          placeholder="Suchen..."
          onChangeText={(text) => setSearchTerm(text)}
        />
      )}
      <CurrentOrdersComponent
        orders={filteredOrder}
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
