import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/color";
import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/FontAwesome";
import { text } from "@fortawesome/fontawesome-svg-core";

const CurrentOrdersComponent = ({ orders, onEdit, onDelete }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array(orders.length).fill(false)
  );
  const handleCheckBoxClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  //sort and filter date
  const [filteredOrders, setFilteredOrders] = useState(orders);
  useEffect(() => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const sortedOrders = orders.sort(
      (a, b) =>
        new Date(
          `20${b.date.slice(6, 8)}-${b.date.slice(3, 5)}-${b.date.slice(0, 2)}`
        ) -
        new Date(
          `20${a.date.slice(6, 8)}-${a.date.slice(3, 5)}-${a.date.slice(0, 2)}`
        )
    );
    setFilteredOrders(sortedOrders);
  }, [orders]);

  //Tools
  const handleEdit = (index) => {
    onEdit(orders[index].id);
  };

  const handleDelet = (index) => {
    onDelete(orders[index].id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aktuelle Aufträge</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.orderItem}>
              <View style={styles.Item}>
                <Text style={styles.orderText}>Auftragsnummer: {item.id}</Text>
                <Text style={styles.orderText}>Kunde: {item.customer}</Text>
                <Text style={styles.orderText}>Produkt: {item.product}</Text>
                <Text style={styles.orderText}>Menge: {item.quantity}</Text>
                <Text style={styles.orderText}>Datum: {item.date}</Text>
              </View>
              <View style={styles.iconsContainer}>
                <CheckBox
                  style={[styles.checkbox, { height: 30, width: 30 }]}
                  onClick={() => handleCheckBoxClick(index)}
                  isChecked={checkedItems[index]}
                />
                <TouchableOpacity onPress={() => handleEdit(index)}>
                  <Icon
                    style={styles.icon}
                    name="edit"
                    size={25}
                    color={colors.text}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelet(index)}>
                  <Icon
                    style={[styles.icon, { marginRight: 4 }]}
                    name="trash"
                    size={25}
                    color={colors.text}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.text,
  },
  listContainer: {
    flex: 1,
  },
  orderItem: {
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
  orderText: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.text,
  },
  checkbox: {
    marginTop: 20,
    uncheckedColor: colors.text,
    checkedColor: colors.text,
  },
  Item: {
    flexDirection: "column",
  },
  icon: {
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default CurrentOrdersComponent;
