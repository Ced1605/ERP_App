import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import OrderStyles from "../Styles/OrderStyle";
import OrdersComponent from "../components/Order/OrderComponent";
import AddOrderPopUp from "../components/Order/addOrderComponent";
import Icon from "react-native-vector-icons/MaterialIcons";
import ComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/color";
import { getAllOrders } from "../Data/OrderRequest";

const OrderScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isOrdersUpdated, setIsOrdersUpdated] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    fetchOrder();
    setIsOrdersUpdated(true);
  }, []);

  const fetchOrder = async () => {
    try {
      const orders = await getAllOrders();
      setOrder(orders);
      console.log("Orders updated");
    } catch (error) {
      console.error("Error fetching order:", error);
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
      <OrdersComponent
        orders={filteredOrders}
        setIsOrdersUpdated={setIsOrdersUpdated}
        isOrdersUpdated={isOrdersUpdated}
        isSearchVisible={isSearchVisible}
      />
      <AddOrderPopUp
        isVisible={isAddModalVisible}
        onClose={() => {
          setAddModalVisible(false);
          fetchOrder();
          console.log(" OrderScreen: save Order");
        }}
      />
    </View>
  );
};

export default OrderScreen;
