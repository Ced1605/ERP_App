import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { colors } from "../assets/color";
const CurrentOrdersComponent = ({ orders }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aktuelle Aufträge</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <>
                <Text style={styles.orderText}>Auftragsnummer: {item.id}</Text>
                <Text style={styles.orderText}>Kunde: {item.customer}</Text>
                <Text style={styles.orderText}>Produkt: {item.product}</Text>
                <Text style={styles.orderText}>Menge: {item.quantity}</Text>
              </>
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
  },
  listContainer: {
    flex: 1,
  },
  orderItem: {
    backgroundColor: colors.background1,
    padding: 16,
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
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
  },
});

export default CurrentOrdersComponent;
