import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import colors from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getAllOrders } from "../../Data/OrderRequest";
import { useNavigation } from "@react-navigation/native";
import DateComponent from "../function/DateComponent";
const ordersComponent = ({
  isOrderUpdated,
  isSearchVisible,
  setIsOrdersUpdated,
}) => {
  const [order, setOrder] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [LodingError, setLodingError] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchOrder();
  }, [isOrderUpdated]);

  const fetchOrder = async () => {
    try {
      const orders = await getAllOrders();
      setOrder(orders);
      setFilteredOrders(orders);
      setIsOrdersUpdated(true);
      console.log("OrderComponnet updated Order ");
      console.log(orders);
      setLodingError(false);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  const handleInfo = (order) => {
    navigation.navigate("OrderInfo", { order });
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = order.filter(
      (item) =>
        item.id.toString().includes(text) ||
        (
          item.userName.toLowerCase() +
          " " +
          item.userLastName.toLowerCase()
        ).includes(text.toLowerCase())
    );
    setFilteredOrders(filtered);
  };

  if (order.length === 0) {
    setTimeout(() => {
      setLodingError(false);
    }, 10000);
    return (
      <View style={styles.noOrdersContainer}>
        {LodingError ? (
          <ActivityIndicator size="80" color={colors.black} />
        ) : (
          <View style={{ alignItems: "center" }}>
            <Text>Fehler Beim Laden der Aufträge</Text>
            <TouchableOpacity
              onPress={() => {
                setLodingError(true);
                fetchOrder();
              }}
            >
              <MaterialCommunityIcons
                name="reload"
                size={30}
                color={colors.black}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isSearchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={colors.text}
          onChangeText={handleSearch}
        />
      )}
      <Text style={styles.header}>Aktuelle Aufträge</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.orderItem}
              onPress={() => handleInfo(item)}
            >
              <View style={styles.Item}>
                <View
                  style={{
                    width: 5,
                    height: "auto",
                    marginRight: 10,
                    backgroundColor:
                      item.status == "complete" ? "green" : "red",
                  }}
                ></View>
                <View>
                  <Text style={styles.orderText}>
                    Auftragsnummer: {item.id}
                  </Text>
                  <Text style={styles.orderText}>
                    Kunde: {item.userName} {item.userLastName}
                  </Text>
                  <DateComponent date={item.date} style={styles.orderText} />
                </View>
              </View>
              <Icon name="angle-right" size={25} color={colors.black} />
            </TouchableOpacity>
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
  searchInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 5,
    color: colors.text,
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
  Item: {
    flexDirection: "row",
  },
  noOrdersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default ordersComponent;
