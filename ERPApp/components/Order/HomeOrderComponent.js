import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import colors from "../../assets/color";
import CheckBox from "react-native-check-box";

const HomeOrdersComponent = ({ orders }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array(orders.length).fill(false)
  );

  const handleCheckBoxClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aktuelle Aufträge</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.orderItem}>
              <View style={styles.Item}>
                <Text style={styles.orderText}>Auftragsnummer: {item.id}</Text>
                <Text style={styles.orderText}>Kunde: {item.customer}</Text>
                <Text style={styles.orderText}>Produkt: {item.product}</Text>
                <Text style={styles.orderText}>Menge: {item.quantity}</Text>
              </View>
              <View>
                <CheckBox
                  style={styles.checkbox}
                  onClick={() => handleCheckBoxClick(index)}
                  isChecked={checkedItems[index]}
                />
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
    alignSelf: "center",
    marginTop: 20,
  },
  Item: {
    flexDirection: "column",
  },
});

export default HomeOrdersComponent;
