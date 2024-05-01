import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import colors from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import DeleteOrderPopUp from "./deletOrderComponenet";
import { updateOrder, getOrder } from "../../Data/OrderRequest";
import { getUser } from "../../Data/UserRequest";
import { FlatList } from "react-native-gesture-handler";

interface Order {
  id: number;
  name: string;
  userId: number;
  products: string;
  date: Date;
  employeeId: number;
  workHours: number;
  cost: number;
  status: string;
  info: string;
}

interface Customer {
  id: number;
  name: string;
  lastName: string;
  address: string;
  email: string;
  phonenumber: string;
  info: string;
}

const OrderInfoPopUp = ({ route }) => {
  const navigation = useNavigation();
  const { order: initialOrder } = route.params;
  const [isEditMode, setEditMode] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [products, setProducts] = useState([""]);
  const [AddProduct, setAddProduct] = useState(false);
  let a = 0;

  useEffect(() => {
    setOrder(initialOrder);
  }, [initialOrder]);

  const fetchOrder = async () => {
    try {
      const fetchedOrder = await getOrder(initialOrder.id);
      setOrder(fetchedOrder);
      console.info("Order updated:");
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  const fetchCustomer = async () => {
    try {
      const fetchedCustomer = await getUser(initialOrder.userId);
      setCustomer(fetchedCustomer);
      console.info("Customer updated", fetchedCustomer);
    } catch (error) {
      console.error("Error fetching customer", error);
    }
  };

  useEffect(() => {
    if (initialOrder) {
      fetchOrder();
      fetchCustomer();
    }
  }, [initialOrder]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleEditSave = async () => {
    try {
      await updateOrder(order!.id, order!);
      setEditMode(false);
      console.log("Order saved:", order!.id);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleEditCancel = () => {
    setEditMode(false);
  };

  const handleDelete = () => {
    setDeleteModalVisible(true);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleAddProduct = () => {
    setAddProduct(true);
  };

  useEffect(() => {
    if (order) {
      try {
        const ProductString = order.products;
        const products = JSON.parse(ProductString);
        setProducts(products);
      } catch (error) {
        console.error("error set Products", error);
      }
    }
  }, [order]);

  if (!order) {
    return null;
  }

  const ProductItem = ({ item }) => {
    a++;
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.counter}>{a}. </Text>
          <Text style={styles.productText}>Name: {item.Name}, </Text>
          <Text style={styles.productText}>Menge: {item.Mänge}</Text>
        </View>
        <View style={styles.separator2} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.iconContainer}>
          <Icon name="chevron-left" size={25} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>{order.name}</Text>
        {!isEditMode ? (
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleEdit} style={styles.iconButton}>
              <Icon name="edit" size={25} color={colors.black} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
              <Icon name="trash" size={25} color={colors.black} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={handleEditSave}
              style={styles.iconButton}
            >
              <Icon name="save" size={25} color={colors.black} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleEditCancel}
              style={styles.iconButton}
            >
              <Icon name="close" size={25} color={colors.black} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoText}>
            Auftrags-Nr. {order.id.toString()}
          </Text>
          <View style={styles.separator} />
          <View style={styles.customer}>
            <Text style={styles.infoText}>
              Kunde:{"\n"}
              {customer
                ? `${customer.lastName} ${customer.name}`
                : "Lade Kunde..."}
              {"\n"}
              {customer ? customer.address : "Lade Adresse..."}
            </Text>
            <TouchableOpacity style={styles.ellipsis} onPress={null}>
              <Ionicons
                name="ellipsis-horizontal"
                size={20}
                color={colors.black}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <Text style={styles.infoText}>Auftragsinfo:</Text>
          <TextInput
            editable={isEditMode}
            style={styles.input}
            value={order.info}
            onChangeText={(text) => setOrder({ ...order, info: text })}
            multiline={true}
          />
          <View style={styles.h2Container}>
            <Text style={styles.h2}>Produckte</Text>
            <TouchableOpacity onPress={handleAddProduct}>
              <Icon name="plus" size={16} color={colors.black} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={products}
              renderItem={ProductItem}
              keyExtractor={(item, index) => index.toString()}
            />
            {AddProduct && (
              <View>
                <View style={styles.AddProduct}>
                  <Text>Add</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      name="save"
                      size={20}
                      color={colors.black}
                      style={{ marginRight: 10 }}
                    />
                    <Icon name="close" size={20} color={colors.black} />
                  </View>
                </View>
                <View style={styles.separator2} />
              </View>
            )}
          </View>
          <View style={styles.h2Container}>
            <Text style={styles.h2}>Arbeitszeiten</Text>
            <TouchableOpacity>
              <Icon name="plus" size={16} color={colors.black} />
            </TouchableOpacity>
          </View>
          <View>
            <Text>1 {order.workHours.toFixed(2)} Stunden </Text>
          </View>
        </View>
      </View>
      <View style={styles.BottomIcons}>
        <TouchableOpacity onPress={null} style={{ marginLeft: 10 }}>
          <Icon name="check" size={25} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={null} style={{ marginLeft: 10 }}>
          <Foundation name="clipboard-pencil" size={25} color={colors.black} />
        </TouchableOpacity>
      </View>
      <DeleteOrderPopUp
        isVisible={isDeleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
          //fetchOrders();
        }}
        orderToDelete={order.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    width: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.bordercolor,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  input: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 10,
    height: 22,
    paddingHorizontal: 2,
  },
  item: {
    flexDirection: "row",
  },
  BottomIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  customer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ellipsis: {
    marginRight: 10,
  },
  h2Container: {
    backgroundColor: colors.background2,
    marginVertical: 5,
    padding: 4,
    borderRadius: 5,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  h2: {
    fontSize: 16,
  },
  AddProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counter: {
    fontSize: 15,
    fontWeight: "bold",
  },
  productText: {
    fontSize: 15,
  },
  separator2: {
    borderBottomWidth: 1,
    borderBottomColor: colors.bordercolor,
    marginTop: 0,
  },
});

export default OrderInfoPopUp;
