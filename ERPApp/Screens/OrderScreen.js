import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import OrderStyles from "../Styles/OrderStyle";
import CurrentOrdersComponent from "../components/OrderComponent";
import orders from "../Data/Order";

const CustomButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[OrderStyles.customButton, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={OrderStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const OrderScreen = () => {
  const handleDelete = () => {
    // Logik für das Löschen
  };

  const handleAdd = () => {
    // Logik für das Hinzufügen
    // pop up fenster
  };

  const handleEdit = () => {
    // Logik für das Bearbeiten
    // pop up fenster
  };

  return (
    <View style={OrderStyles.Order}>
      <View style={OrderStyles.toolbox}>
        <CustomButton title="Löschen" onPress={handleDelete} />
        <CustomButton title="Hinzufügen" onPress={handleAdd} />
        <CustomButton title="Bearbeiten" onPress={handleEdit} />
      </View>
      <CurrentOrdersComponent orders={orders} />
    </View>
  );
};

export default OrderScreen;
