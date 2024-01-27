import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/color";
import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductComponent = ({ products, onEdit, onDelete }) => {
  const handleEdit = (index) => {
    onEdit(products[index].id);
  };

  const handleDelet = (index) => {
    onDelete(products[index].id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aktuelle Aufträge</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.productItem}>
              <View style={styles.Item}>
                <Text style={styles.productText}>Produktnummer: {item.id}</Text>
                <Text style={styles.productText}>Name: {item.name}</Text>
                <Text style={styles.productText}>Menge: {item.quantity}</Text>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => handleEdit(index)}>
                  <Icon
                    style={styles.icon}
                    name="edit"
                    size={25}
                    color="black "
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelet(index)}>
                  <Icon
                    style={[styles.icon, { marginRight: 4 }]}
                    name="trash"
                    size={25}
                    color="black"
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
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
  },
  productItem: {
    justifyContent: "space-between",
    flexDirection: "row",
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
  productText: {
    fontSize: 16,
    marginBottom: 8,
  },
  checkbox: {
    marginTop: 20,
  },
  Item: {
    flexDirection: "column",
  },
  icon: {
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: "colum",
    alignItems: "center",
  },
});

export default ProductComponent;
