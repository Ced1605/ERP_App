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
import { useNavigation } from "@react-navigation/native";
import DeleteProductPopUp from "./deleteProductComponenet";
import { updateProduct, getProduct } from "../../Data/ProductRequest";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  shelf: string;
  row: string;
  quantity: number;
  info: string;
}

const ProductInfoPopUp = ({ route }) => {
  const navigation = useNavigation();
  const { product: initialProduct } = route.params;
  const [isEditMode, setEditMode] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  const fetchProduct = async () => {
    try {
      const fetchedProduct = await getProduct(initialProduct.id);
      setProduct(fetchedProduct);
      console.info("Product updated:");
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (initialProduct) {
      fetchProduct();
    }
  }, [initialProduct]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleEditSave = async () => {
    try {
      await updateProduct(product!.id, product!);
      setEditMode(false);
      console.log("Product saved:", product!.id);
    } catch (error) {
      console.error("Error updating product:", error);
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

  if (!product) {
    return null; // Optionally, you can render a loading indicator here
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.iconContainer}>
          <Icon name="chevron-left" size={25} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>{product.name}</Text>
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
          <View style={styles.item}>
            <Text style={styles.infoText}>Vorhandene Menge:</Text>
            <TextInput
              editable={isEditMode}
              style={styles.input}
              value={product.quantity.toString()}
              onChangeText={(text) =>
                setProduct({ ...product, quantity: parseInt(text, 10) })
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.separator} />
          <Text style={styles.infoText}>Artikel Nr: {product.id}</Text>
          <View style={styles.separator} />
          <View style={styles.item}>
            <Text style={styles.infoText}>Kategorie:</Text>
            <TextInput
              editable={isEditMode}
              style={styles.input}
              value={product.category}
              onChangeText={(text) =>
                setProduct({ ...product, category: text })
              }
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.item}>
            <Text style={styles.infoText}>Preis:</Text>
            <TextInput
              editable={isEditMode}
              style={styles.input}
              value={product.price.toString()}
              onChangeText={(text) =>
                setProduct({ ...product, price: parseFloat(text) })
              }
              keyboardType="decimal-pad"
            />
            <Text style={styles.infoText}> €</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.item}>
            <Text style={styles.infoText}>Regal: </Text>
            <TextInput
              editable={isEditMode}
              style={styles.input}
              value={product.shelf}
              onChangeText={(text) => setProduct({ ...product, shelf: text })}
            />
            <Text style={styles.infoText}>, Fach: </Text>
            <TextInput
              editable={isEditMode}
              style={styles.input}
              value={product.row}
              onChangeText={(text) => setProduct({ ...product, row: text })}
            />
          </View>
          <View style={styles.separator} />
          <Text style={styles.infoText}>Produktbeschreibung:</Text>
          <TextInput
            editable={isEditMode}
            style={styles.input}
            value={product.info}
            onChangeText={(text) => setProduct({ ...product, info: text })}
            multiline={true}
          />
        </View>
      </View>
      <DeleteProductPopUp
        isVisible={isDeleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
          //fetchProducts();
        }}
        productToDelete={product.id}
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
});

export default ProductInfoPopUp;
